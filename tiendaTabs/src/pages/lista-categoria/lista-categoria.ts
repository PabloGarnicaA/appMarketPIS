import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaCategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lista-categoria',
  templateUrl: 'lista-categoria.html',
})
export class ListaCategoriaPage {
public catSel;
public seleccionados;  
catProd:[any];
productos:[any];
value:number=0;


 //categorias=[{name: "Lacteos",image: "assets/img/lacteos.jpg"},
 //             {name: "Carnes",image: "assets/img/carnes.jpg"},
 //             {name: "Frutas",image: "assets/img/frutasyverduras.jpg"}];
categorias=[{name: "Lacteos",productos:[{prodName:"leche",precio:"6.50",imagen:"assets/img/leche.jpg"},{prodName:"yogurt",precio:"10.00",imagen:""},{prodName:"queso",precio:"8.50",imagen:""}]},
              {name: "Carnes",productos:[{prodName:"Pollo",precio:"12.50",imagen:"assets/img/carnes.jpg"},{prodName:"Res",precio:"18.00",imagen:""},{prodName:"Chorizo",precio:"25.00",imagen:""}]},
              {name: "Frutas",productos:[{prodName:"Piña",precio:"6.00",imagen:"assets/img/frutasyverduras.jpg"},{prodName:"Naranja",precio:"0.50",imagen:""},{prodName:"Manzana",precio:"2.50",imagen:""}]}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.catSel=navParams.get("catSeleccionada");
    console.log("categoria seleccionada:"+this.catSel);
    this.buscar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCategoriaPage');
  }
   buscar() {
        switch (this.catSel) 
    { 
    case'Lacteos': 
      this.productos=[{prodName:"leche",precio:"6.50",imagen:"assets/img/leche.jpg"},{prodName:"yogurt",precio:"10.00",imagen:"assets/img/yogurt.jpg"},{prodName:"queso",precio:"8.50",imagen:"assets/img/queso.jpg"}];
      break; 
    case'Carnes':  
      this.productos=[{prodName:"Pollo",precio:"12.50",imagen:"assets/img/pollo.jpg"},{prodName:"Res",precio:"18.00",imagen:"assets/img/res.jpg"},{prodName:"Salchicha",precio:"25.00",imagen:"assets/img/salchicha.jpg"}];
      break;
    case'Frutas':  
      this.productos=[{prodName:"Piña",precio:"6.00",imagen:"assets/img/pina.jpg"},{prodName:"Naranja",precio:"0.50",imagen:"assets/img/naranja.jpg"},{prodName:"Manzana",precio:"2.50",imagen:"assets/img/manzana.jpg"}];
      break; 
    default: 
      alert("Error categoria"); 
    } 
        
  }
  anadirCarrito(nombre,precio)
  {
      alert("Producto "+nombre+"; Precio "+precio+"; Cantidad "+this.value);
  }

}
