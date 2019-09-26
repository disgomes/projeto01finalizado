import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importados',
  templateUrl: './importados.page.html',
  styleUrls: ['./importados.page.scss'],
})
export class ImportadosPage implements OnInit {

  constructor() { }
  items;
  ngOnInit() {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      {nome: "Lamborgini", imagem: 'lambor.jpg' },
      {nome: "Ferrari", imagem: 'ferrari.jpg' },
      {nome: "Bugatti", imagem: 'bugatti.jpg' },
      {nome: "Mercedes", imagem: 'mercedes.jpg' }      
    ];
  }
  /*aqui é a busca com a lupa*/
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
