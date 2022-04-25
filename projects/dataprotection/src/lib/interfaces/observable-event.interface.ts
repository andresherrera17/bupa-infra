import { Observable } from "windowed-observable";

export interface IObservableEvent {
  name: string,
  $observable: Observable
}