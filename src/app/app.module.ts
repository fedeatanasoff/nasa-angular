import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

// Rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES, { useHash: true })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
