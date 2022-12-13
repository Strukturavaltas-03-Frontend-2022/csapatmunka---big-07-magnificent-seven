import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ConfigService{
  apiUrl:string = 'https://nettuts.hu/jms/seventeam';
  updateDelayTimeMs = 100;
  constructor( ){ }
}