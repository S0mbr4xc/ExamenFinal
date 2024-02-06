import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './pages/vista/vista.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';

const routes: Routes = [
  {path: "paginas/ingreso", component: IngresoComponent},
  {path: "paginas/vista", component: VistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
