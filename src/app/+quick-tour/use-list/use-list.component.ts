import { Component } from '@angular/core';

import { Airport, AirportsListRequest, AirportsService } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'rt-demo-use-list',
    templateUrl: 'use-list.component.html'
})
export class UseListComponent {
    airports: Airport[];
    constructor(public airportsService: AirportsService) {
    }
    getAirports = (request: AirportsListRequest): Observable<Airport[]> => {
        return this.airportsService.getAirportsList(request)
            .do(airports => this.airports = airports.slice(0, 5));
    }
}
