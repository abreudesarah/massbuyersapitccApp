import { Component, OnInit } from '@angular/core';
import { FilterPage } from './filter/filter.page';
import { IonRouterOutlet, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  content_loaded: boolean = false;
  itens: any;

  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController,
  ) { }


  filtroSelecionado(evento) {
    const filtro = evento.detail.value;
    console.log('Filtro selecionado:', filtro);
    
   }

   pesquisa(evento) {
    const termo = evento.detail.value;
    console.log('Termo pesquisado:', termo);
   
    if (termo) {
      const resultados = this.itens.filter(item => item.nome.toLowerCase().includes(termo.toLowerCase()));
      console.log('Resultados:', resultados);
    } else {
      console.log('Lista completa:', this.itens);
    }
   }

  ngOnInit() {
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }


  async filter() {

    const modal = await this.modalController.create({
      component: FilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    await modal.present();

    let { data } = await modal.onWillDismiss();

    if (data) {

      this.content_loaded = false;

      setTimeout(() => {
        this.content_loaded = true;
      }, 2000);
    }
  }

}
