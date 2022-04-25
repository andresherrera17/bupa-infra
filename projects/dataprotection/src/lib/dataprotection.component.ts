import { Component, OnInit } from '@angular/core';
import { ObservableEventsService } from '../public-api';

@Component({
  selector: 'lib-dataprotection',
  template: `
    <p>
      dataprotection works!
    </p>
  `,
  styles: [
  ]
})
export class DataprotectionComponent implements OnInit {

  constructor(private service: ObservableEventsService) { }

  ngOnInit(): void {
    this.susbcribe();
  }


  async susbcribe() {
    debugger;
    let data = await this.service.subscribeEvent('evento1', { nombre: 'Naruto' })
  }

}
