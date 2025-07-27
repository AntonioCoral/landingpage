// Puedes definir una interfaz para claridad (opcional)
interface Negocio {
  title: string;
  icon: string;
  description: string;
  flipped: boolean; // <- ✅ Aquí está la propiedad que usas
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrl: './oportunidades.component.css'
})
export class OportunidadesComponent {

  
  negocios: Negocio[] = [
    {
      title: 'Restaurantes',
      icon: 'assets/logoresta.svg',
      description: 'Tus platillos en un menú digital. Tus clientes ordenan y tú recibes el pedido por WhatsApp.',
      flipped: false
    },
    {
      title: 'Pizzerías',
      icon: 'assets/logopizza.svg',
      description: 'Facilita tus pedidos a domicilio. Tus clientes arman su pedido y tú lo recibes listo.',
      flipped: false
    },
    {
      title: 'Farmacias',
      icon: 'assets/farmacialogo.svg',
      description: 'Permite que tus clientes busquen productos, agreguen al carrito y te lo manden por WhatsApp.',
      flipped: false
    },
    {
      title: 'Tiendas de Abarrotes',
      icon: 'assets/logotienda.svg',
      description: 'Organiza tus productos por secciones, recibe pedidos y mejora tu atención.',
      flipped: false
    },
    {
      title: 'Boutiques',
      icon: 'assets/logoboutique.svg',
      description: 'Muestra tu catálogo de ropa, tallas y precios. Tus clientas te hacen pedidos desde el menú.',
      flipped: false
    },
    {
      title: 'Más Negocios',
      icon: '',
      description: 'Cualquier negocio que necesite mostrar sus productos o servicios, puede usar MenúExpress.',
      flipped: false
    }
  ];

  toggleFlip(negocio: Negocio): void {
    negocio.flipped = !negocio.flipped;
  }
}