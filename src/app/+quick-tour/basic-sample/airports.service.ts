import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { Airport } from './airport';

@Injectable()
export class AirportsService {
    private airportsUrl: string = './assets/airports.json';
    constructor(private http: Http) {

    }
    public getAirports(delay: number): Observable<Array<Airport>> {
        // we use optional "delay" parameter to simulate backend latency
        return this.http.get(this.airportsUrl)
            .map(response => (response.json().airports as Array<Airport>))
            .delay(delay).publish();
    }
}
