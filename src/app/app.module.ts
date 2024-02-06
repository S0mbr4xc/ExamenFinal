import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { VistaComponent } from './pages/vista/vista.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IngresoComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
