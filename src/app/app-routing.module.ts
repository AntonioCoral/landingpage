import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componentes/register/register.component'; // ajusta si es necesario
import { HomeComponent } from './componentes/home/home.component';
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path : 'panel', component: PanelAdminComponent}
  // puedes agregar más rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
