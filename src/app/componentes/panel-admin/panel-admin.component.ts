import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.css'
})
export class PanelAdminComponent {
    ngOnInit(): void {
      AOS.init();
    }
}
