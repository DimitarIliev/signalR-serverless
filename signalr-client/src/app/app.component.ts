import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signalr-client';

  private readonly _http: HttpClient;
  private readonly _messageService: MessageService;
  constructor(http: HttpClient, messageService: MessageService) {
    this._http = http;
    this._messageService = messageService;
  }

  ngOnInit(): void {
    console.log('STARTED SENDING MESSAGE');
    this._messageService.send('Hello from Iliev Tech for German').subscribe(() => {

    });
  }

}
