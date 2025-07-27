// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import * as QRCode from 'qrcode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  companyForm: FormGroup;
  userForm: FormGroup;
  step = 1;
  companyId!: number;
  generalError: string | null = null;
  companyFormError: string | null = null;
  qrCodeDataUrl: string = '';



  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      address: [''],
      contactEmail: ['', [Validators.required, Validators.email]],
      subdomain: [{ value: '', disabled: true }]  // 🔒 Campo desactivado
    });

    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void {
  this.companyForm.get('name')?.valueChanges.subscribe(name => {
    const subdomain = this.normalizeSubdomain(name);
    this.companyForm.get('subdomain')?.setValue(subdomain, { emitEvent: false });
  });
}

normalizeSubdomain(value: string): string {
  return value
    .normalize('NFD')                     // Elimina acentos
    .replace(/[\u0300-\u036f]/g, '')      // Quita marcas diacríticas
    .replace(/\s+/g, '')                  // Quita espacios
    .replace(/[^a-zA-Z0-9]/g, '')         // Quita caracteres especiales
    .toLowerCase();                       // Convierte todo a minúsculas
}

  goToStep2(): void {
    if (this.companyForm.invalid) return;
    this.step = 2;
  }

  
    
  submitForm() {
  if (this.userForm.invalid || this.companyForm.invalid) return;

  const payload = {
    company: this.companyForm.getRawValue(),
    user: this.userForm.value
  };

  
  this.companyFormError = null;
  this.generalError = null;


  this.http.post<any>('https://codeconnectivity.com/api/api/auth/register', payload).subscribe({
    next: () => this.step = 3,
    error: (err) => {
      const message = err?.error?.message || '';
      const field = err?.error?.field || '';

      if (field === 'username') {
        this.userForm.get('username')?.setErrors({ exists: true });
        this.userForm.get('username')?.markAsTouched();
        this.generalError = message;
      }

      if (field === 'contactEmail') {
        this.companyForm.get('contactEmail')?.setErrors({ exists: true });
        this.companyForm.get('contactEmail')?.markAsTouched();
        this.companyFormError = message;
        this.step = 1;
      }

      if (field === 'subdomain') {
        this.companyForm.get('subdomain')?.setErrors({ exists: true });
        this.companyForm.get('subdomain')?.markAsTouched();
        this.companyFormError = message;
        this.step = 1;
      }

      if (field === 'name') {
        this.companyForm.get('name')?.setErrors({ exists: true });
        this.companyForm.get('name')?.markAsTouched();
        this.companyFormError = message;
        this.step = 1;
      }

      if (!message) {
        this.generalError = 'Ocurrió un error inesperado. Intenta nuevamente.';
        this.step = 1;
      }
    }
  });
}

    copySubdomainLink(): void {
      const subdomain = this.companyForm.get('subdomain')?.value;
      if (!subdomain) return;

      const fullLink = `https://app.bussines.cloud/?subdomain=${subdomain}`;
      navigator.clipboard.writeText(fullLink)
        .then(() => {
          this.toastr.success('Enlace copiado al portapapeles');
        })
        .catch(() => {
          this.toastr.error('No se pudo copiar el enlace');
        });
    }

    generateQRCode(): void {
    const url = `https://app.bussines.cloud/?subdomain=${this.companyForm.get('subdomain')?.value}`;
    QRCode.toDataURL(url, { errorCorrectionLevel: 'H' }, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      this.qrCodeDataUrl = url;
    });
  }
    downloadQRCode(): void {
      // Extraer solo la parte base64
      const base64 = this.qrCodeDataUrl.split(',')[1];
      const binary = atob(base64);
      const array = [];

      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }

      const blob = new Blob([new Uint8Array(array)], { type: 'image/png' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'menu-digital-qr.png';
      link.click();

      // Limpieza
      URL.revokeObjectURL(url);
    }


      
}
