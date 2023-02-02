import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  onSubmit(): void {
    console.log('Formulario enviado');
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      provincia: ['', [Validators.required]],
      tareas: ['', [Validators.required, Validators.maxLength(512)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      ganancias: ['', [Validators.required]],
      modalidad: ['hibrido', [Validators.required]],
      disponibilidad: [false, [Validators.required]],
      envio: [true, [Validators.required]],
      pepperoni: [false, [Validators.required]],
      extracheese: [false, [Validators.required]],
      mushroom: [false, [Validators.required]],
    })
  }

  
}
