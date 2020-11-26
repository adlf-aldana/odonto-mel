import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservar-atencion',
  templateUrl: './reservar-atencion.component.html',
  styleUrls: ['./reservar-atencion.component.css'],
})
export class ReservarAtencionComponent implements OnInit {
  formulario: FormGroup;
  nombreError: string;
  alerta = false;
  maxDate = new Date();
  minDate = new Date('1940/01/01');

  //
  // CONSTRUCTORES
  //
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.crearForm();
  }

  //
  // CREAR FORMULARIO
  //
  crearForm(): void {
    this.formulario = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      nacimiento: [
        this.minDate.toISOString().slice(0, 10),
        [Validators.required],
      ],
      celular: [
        '',
        [
          Validators.required,
          Validators.min(60000000),
          Validators.max(70000000),
        ],
      ],
    });
  }

  //
  // SUBMIT
  //
  onSubmit(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
    } else {
      setTimeout(() => {
        this.alerta = false;
      }, 3000);
      this.alerta = true;
      this.limpiarCampos();
    }
  }

  //
  // LIMPIAR CAMPOS
  //
  limpiarCampos(): void {
    this.formulario.reset();
  }

  //
  // VALIDACIONES
  //
  get nombreNoValido(): boolean {
    return (
      this.formulario.get('nombre').invalid &&
      this.formulario.get('nombre').touched
    );
  }

  get apellidoNoValido(): boolean {
    return (
      this.formulario.get('apellido').invalid &&
      this.formulario.get('apellido').touched
    );
  }

  get nacimientoNoValido(): boolean {
    return (
      this.formulario.get('nacimiento').invalid &&
      this.formulario.get('nacimiento').touched
    );
  }

  get celularNoValido(): boolean {
    return (
      this.formulario.get('celular').invalid &&
      this.formulario.get('celular').touched
    );
  }
}
