import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    private readonly _http: HttpClient;

    constructor(http: HttpClient) {
        this._http = http;
    }

    send(message: string): Observable<void> {
        let headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        };
        let requestUrl = `http://localhost:7029/api/message/send`;
        return this._http.post(requestUrl, message, {
            headers: headers
        }).pipe(map((result: any) => { }));
    }
}