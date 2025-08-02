import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from "@angular/router";

//importar los componentes
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { RegisterComponent } from './componentes/register/register.component';
import { PreciosComponent } from "./componentes/precios/precios.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { ContactoComponent } from "./componentes/contacto/contacto.component";
import { HomeComponent } from "./componentes/home/home.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { OportunidadesComponent } from "./componentes/oportunidades/oportunidades.component";
import { BeneficiosComponent } from "./componentes/beneficios/beneficios.component";




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    PreciosComponent,
    FooterComponent,
    ContactoComponent,
    OportunidadesComponent,
    BeneficiosComponent,
    HomeComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    AppRoutingModule, // 👈 aquí
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
          timeOut: 1000,
          positionClass: 'toast-top-right', // O cualquier otra posición que prefieras
          preventDuplicates: true,
          progressBar: true, // Activa la barra de progreso si la otra aplicación la tiene
          progressAnimation: 'increasing', // Puedes cambiar a 'decreasing' según tu preferencia
          closeButton: true, // Si tu otra app tiene un botón de cierre
        }),
        
    RouterModule.forRoot([]),
],
  providers:[

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
