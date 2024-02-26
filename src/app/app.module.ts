import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';

import { LibroService } from './libro.service';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [AppComponent, LibroListaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LibroService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
