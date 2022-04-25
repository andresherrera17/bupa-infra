import { TestBed } from '@angular/core/testing';
import { messageEvent } from '../constants/contanst';

import { ObservableEventsService } from './observable-events.service';

describe('ObservableEventsService', () => {
  let service: ObservableEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created evente', () => {
    const name = 'event'
    service.createEvent(name);
    expect(service.$observablesEvent[0].name).toBe(name);
  });

  it('validate that repeated events are not created', () => {
    const name = 'event'
    service.createEvent(name);
    service.createEvent(name);
    expect(service.$observablesEvent.length).toBe(1);
  });

  it('should be publish event', () => {
    const name = 'event';
    const data = { name: 'test' };
    service.createEvent(name);
    let response = service.publishEvent(name, data);
    expect(response.success).toEqual(messageEvent.MESSAGE_EVENT_PUBLISH);
  });

  it('clear all events', () => {
    const name = 'event'
    service.createEvent(name);
    service.clearAllSubscribeEvent(name);
    expect(service.$observablesEvent.length).toBe(0);
  });
})
