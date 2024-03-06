import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.model';
import { LibroService } from '../libro.service';
import { LoggerService } from '../logger.service';
import { LibroObservableService } from '../libro-observable.service';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css'],
})
export class LibroListaComponent implements OnInit {
  libros: Libro[] = [];
  observableSubs: any;

  constructor(
    private libroService: LibroService,
    private loggerService: LoggerService,
    private libroObservableService: LibroObservableService
  ) {}

  ngOnInit(): void {
    this.observableSubs = this.libroObservableService.getLibros().subscribe(
      (libros) => (this.libros = libros),
      (error) => console.log(error),
      () => {
        console.log('this.libroObservableService.getLibros() FINALIZADO');
      }
    );

    // this.libroService
    //   .getLibros()
    //   .then((libros) => {
    //     this.loggerService.log('Ejecucion del primer then');
    //     return libros;
    //   })

    //   .then((libros) => {
    //     this.loggerService.log('Ejecucion del segundo then');
    //     return new Promise<Libro[]>((resolve, reject) => {
    //       this.loggerService.log('Inicio ejecutor (Promise del segundo then)');

    //       setTimeout(() => {
    //         this.loggerService.log('Fin ejecutor (Promise del segundo then)');

    //         resolve(libros);
    //       }, 5000);
    //     });
    //   })

    //   .then((libros) => {
    //     this.loggerService.log('Ejecucion del tercer then');
    //     this.libros = libros;
    //   });
  }

  ngOnDestroy() {
    if (this.observableSubs) this.observableSubs.unsubscribe();
  }
}
