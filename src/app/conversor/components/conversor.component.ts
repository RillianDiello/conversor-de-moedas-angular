import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  //Referencia do formulário
  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a conversão
   *
   * @returns void
   */
  init(): void {
  	this.conversao = new Conversao('EUR', 'BRL', null);
  	this.possuiErro = false;
  }

  converter(): void{
    if(this.conversaoForm.form.valid){
      alert('Convertendo: ' + JSON.stringify(this.conversao));
    }
  }

}
