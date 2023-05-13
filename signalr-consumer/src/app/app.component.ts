import { Component, OnInit } from '@angular/core';
import { signalRService } from './receive-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = '';
  title = 'signalr-consumer';
  private readonly _signalRService: signalRService;

  constructor(signalRService: signalRService) {
    this._signalRService = signalRService;
  }

  ngOnInit(): void {
    this._signalRService.init();
    this._signalRService.messages.subscribe((message: string) => {
      this.message = message;
    });
  }
}
