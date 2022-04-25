import { Injectable } from '@angular/core';
import { Observable } from 'windowed-observable';
import { messageEvent } from '../constants/contanst';
import { IObservableEvent } from '../interfaces/observable-event.interface';
import { IResponseEvent } from '../interfaces/response-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ObservableEventsService {

  $observablesEvent: IObservableEvent[] = [];

  constructor() { }

  /**
  * @description This method looks for an observable in the event list.
  * @author Andres Herrera
  * @param name Name of the event 
  * @returns Observable
  */
  private findEvent(name: string): Observable {
    let find = this.$observablesEvent.find(x => x.name === name);
    return find ? find.$observable : undefined;
  }

  /**
  * @description This method creates a new event in the list.
  * @author Andres Herrera
  * @param name Name of the event 
  * @returns IResponseEvent
  */
  createEvent(name: string): IResponseEvent {
    debugger;
    let response: IResponseEvent = {};
    try {
      const $observableFind = this.findEvent(name);
      if (!$observableFind) {
        const $observable = new Observable(name);
        this.$observablesEvent.push({
          name,
          $observable
        });
        response = { success: messageEvent.MESSAGE_EVENT_CREATE }
      } else {
        response = { error: messageEvent.MESSAGE_EVENT_EXIST }
      }

    } catch (error) {
      response = { error: error.message }
    }

    return response;
  }

  /**
  * @description This method publishes an event from the list.
  * @author Andres Herrera
  * @param name Name of the event 
  * @param data Information to publish 
  * @returns IResponseEvent
  */
  publishEvent(nombre: string, data: any): IResponseEvent {
    debugger;
    let response: IResponseEvent = {};
    try {
      const $observable = this.findEvent(nombre);
      if ($observable) {
        $observable.publish(data);
        response = { success: messageEvent.MESSAGE_EVENT_PUBLISH }
      } else {
        response = { error: messageEvent.MESSAGE_EVENT_NOT_CREATE }
      }
    } catch (error) {
      response = { error: error.message }
    }
    return response;
  }

  /**
  * @description This method subscribes to an event on the list.
  * @author Andres Herrera
  * @param name Name of the event 
  * @param data Information to publish 
  * @returns Observable
  */
  subscribeEvent(name: string, data: any = null): Observable {
    let response: IResponseEvent = {};
    let $observable = this.findEvent(name);

    if (!$observable) {
      this.createEvent(name);
      $observable = this.findEvent(name);
    }
    response.$observable = $observable;

    return $observable;
  }

  /**
  * @description This method unsubscribes to an event on the list.
  * @author Andres Herrera
  * @param name Name of the event 
  * @returns IResponseEvent
  */
  unSubscribeEvent(nombre: string): IResponseEvent {
    let response: IResponseEvent = {};
    try {
      const $observable = this.findEvent(nombre);
      if ($observable) {
        $observable.unsubscribe((data: any) => data)
        response = { success: messageEvent.MESSAGE_EVENT_UNSUBSCRIBE }
      } else {
        response = { error: messageEvent.MESSAGE_EVENT_NOT_CREATE }
      }
    } catch (error) {
      response = { error: error.message };
    }

    return response;
  }

  /**
  * @description This method clears all events in the list.
  * @author Andres Herrera
  * @param name Name of the event 
  * @returns IResponseEvent
  */
  clearAllSubscribeEvent(name: string): IResponseEvent {
    let response: IResponseEvent = {};
    try {
      const $observable = this.findEvent(name);
      if ($observable) {
        $observable.clear();
        this.$observablesEvent = [];
        response = { success: messageEvent.MESSAGE_EVENT_UNSUBSCRIBE }
      } else {
        response = { error: messageEvent.MESSAGE_EVENT_EMPTY }
      }
    } catch (error) {
      response = { error: error.message };
    }
    return response;
  }

}
