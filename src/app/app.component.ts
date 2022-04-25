import { Component, OnInit } from '@angular/core';
import { decoratedProperty, ObservableEventsService } from 'projects/dataprotection/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @decoratedProperty()
  title = 'U2FsdGVkX1//WC1yzvBaQADPFTZpqEGVqtpMfjDJwaU=';

  constructor(private service: ObservableEventsService) {

  }

  ngOnInit(): void {
    alert(this.title);
    this.service.subscribeEvent('evento1', { nam: 'aaa' }).subscribe(data => console.log(data));
  }

  crearEvento() {
    this.service.createEvent('evento1');
  }

  publicarEvento() {
    this.service.publishEvent('evento1', { nombre: 'Konoha', num: Math.random() });
  }

  suscribirEvento() {

  }

}
