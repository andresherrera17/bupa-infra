import { Observable } from "windowed-observable";

export interface IResponseEvent {
  success?: string,
  $observable?: Observable,
  error?: string,
  data?: any
}