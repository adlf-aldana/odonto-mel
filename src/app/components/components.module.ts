import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ReservarAtencionComponent } from './reservar-atencion/reservar-atencion.component';
import { CajaComponent } from './caja/caja.component';
import { PersonalComponent } from './personal/personal.component';
import { ReservasComponent } from './reservas/reservas.component';
import { PacienteComponent } from './paciente/paciente.component';
import { FacturaComponent } from './factura/factura.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    ReservarAtencionComponent,
    CajaComponent,
    PersonalComponent,
    ReservasComponent,
    PacienteComponent,
    FacturaComponent,
    IngresosComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  exports: [NavbarComponent],
})
export class ComponentsModule {}
