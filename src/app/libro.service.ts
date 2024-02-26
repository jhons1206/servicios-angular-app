import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { LIBROS } from './mocks';
import { Libro } from './libro.model';
import * as Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  constructor(private loggerService: LoggerService) {}

  getLibros(): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      Notiflix.Loading.standard('Cargando...');

      this.loggerService.log(
        'Inicio ejecutor (Promise de LibroService.getLibros())'
      );

      setTimeout(() => {
        this.loggerService.log(
          'Fin ejecutor (Promise de LibroService.getLibros())'
        );

        resolve(LIBROS);

        Notiflix.Loading.remove();
      }, 5000);
    });
  }
}
