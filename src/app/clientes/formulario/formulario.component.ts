import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formClient : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente:Cliente){
      this.formClient = this.formBuilder.group({
        nome: [cliente.nome],
        tipo: [cliente.tipo],
        genero: [cliente.genero],
        dataNascimmento: [cliente.dataNascimento],
        observacao: [cliente.observacao],
        inativo: [cliente.inativo],
      })
  }

  onSubimit(){
    console.log(this.formClient.value);
    this.formClient.reset(new Cliente());
  }



}
