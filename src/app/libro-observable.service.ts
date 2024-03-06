import { Injectable } from '@angular/core';
import { Libro } from './libro.model';
import { Observable } from 'rxjs';
import { LIBROS } from './mocks';

@Injectable({
  providedIn: 'root',
})
export class LibroObservableService {
  libros: Libro[] = [];

  constructor() {}

  getLibros(): Observable<Libro[]> {
    return new Observable<Libro[]>((observer) => {
      let libros: Libro[] = [];
      observer.next([]);
      LIBROS.forEach((libro, index) => {
        setTimeout(() => {
          libros.push(libro);
          observer.next(libros);
        }, (index + 1) * 1500);
      });
      setTimeout(() => {
        observer.complete();
      }, (LIBROS.length + 1) * 1500);
    });
  }
}
