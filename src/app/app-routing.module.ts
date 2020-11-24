import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTES
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ReservarAtencionComponent } from './components/reservar-atencion/reservar-atencion.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { LoginComponent } from './components/login/login.component';
import { FacturaComponent } from './components/factura/factura.component';
import { CajaComponent } from './components/caja/caja.component';

const routes: Routes = [
  { path: 'caja', component: CajaComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'reservar-atencion', component: ReservarAtencionComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'reservar-atencion' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
