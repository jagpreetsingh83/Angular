import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DummyService {

        constructor(private http : HttpClient) {}

        agent() : Observable < Object > {
                return this.http.post < Object > ('/v1/session/agent', {"acctNbr": "771025335"}).pipe(tap((result) => console.log('result-->', result)), catchError(this.handleError('error', [])));;
        }

        customer() : Observable < Object > {
                return this.http.post < Object > ('/v1/accounts/overview', {
                        "applicationId": "Rogers.com",
                        "refresh": false,
                        "acctNbr": 771025335
                }).pipe(tap((result) => console.log('result-->', result)), catchError(this.handleError('error', [])));;
        }

        /*
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */
        private handleError < T > (operation = 'operation', result?: T) {
                return(error : any): Observable < T > => {

                        // TODO: send the error to remote logging infrastructure
                        console.error(error); // log to console instead

                        // TODO: better job of transforming error for user consumption
                        console.log(`${operation} failed: ${error.message}`);

                        // Let the app keep running by returning an empty result.
                        return of(result as T);
                };
        }
}
