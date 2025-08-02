import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.css'
})
export class PanelAdminComponent {
  constructor(
private router: Router

  ){

  }
    ngOnInit(): void {
      
      AOS.init();
    }
}
