import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerroService, RespuestaPerros } from '../perro.service';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perros.html'
})
export class Perros implements OnInit {
  perros: string[] = [];
  cargando = false;
  error = '';

  constructor(private servicio: PerroService) {}

  ngOnInit(): void {
    this.cargarPerros();
  }

  cargarPerros(): void {
    this.cargando = true;
    this.error = '';

    this.servicio.obtenerPerros().subscribe({
      next: (respuesta: RespuestaPerros) => {
        this.perros = respuesta.message;
        this.cargando = false;

        console.log('Perros recibidos:', respuesta);
      },
      error: (err) => {
        console.error('Error al consultar la API:', err);

        if (err instanceof TimeoutError) {
          this.error =
            'La API está tardando demasiado. Intenta nuevamente.';
        } else if (err.status === 0) {
          this.error =
            'No se pudo conectar con la API. Revisa tu conexión a Internet.';
        } else {
          this.error =
            'No se pudieron cargar las imágenes. Intenta nuevamente.';
        }

        this.cargando = false;
      }
    });
  }
}

