import { Injectable } from "@angular/core";
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { Subject } from "rxjs";
import { HttpTransportType } from "@aspnet/signalr/dist/esm/ITransport";

export class SignalRConnectionInfo {
  url!: string;
  accessKey!: string;
  userId!: string;
  idToken!: string;
}

@Injectable({
    providedIn: 'root',
  })
export class signalRService {
  private hubConnection!: HubConnection;
  messages: Subject<string> = new Subject();

  constructor() {

  }

   init() {
      this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:7029/api')
      .configureLogging(signalR.LogLevel.Information)
      .build();

  this.hubConnection.start().catch(err => console.error(err.toString()));

  this.hubConnection.on('notify', (data: any) => {
      this.messages.next(data);
      console.log('message data', data);
  });
  }

}