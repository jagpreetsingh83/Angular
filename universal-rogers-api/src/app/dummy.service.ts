import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Injector} from '@angular/core';
import {REQUEST} from '@nguniversal/express-engine/tokens';
import * as xhr2 from 'xhr2';

// HACK - enables setting cookie header xhr2.prototype._restrictedHeaders.cookie
// = false;

@Injectable()
export class DummyService {

        constructor(private http : HttpClient, private injector : Injector) {}

        fetchData(endpoint, payload) : Observable < Object > {
                const req = this
                        .injector
                        .get(REQUEST);
                console.log('=======  COMPLETE HEADER ========');
                console.log(req.headers.cookie);
                let headers = new HttpHeaders({'Content-Type': 'application/json'});
                // if (req.headers.cookie) {         const cookies = req .headers  .cookie
                // .split(';'); cookies.forEach(kv => { const kvArray = kv.split('='); headers =
                // headers.append(kvArray[0].trim(), kvArray[1]);         }); }
                headers = headers.append('PLAY_SESSION', req.headers.cookie.substring(req.headers.cookie.indexOf('PLAY_SESSION')).substring(13).trim());
                console.log('------------------------');
                console.log(headers.get('PLAY_SESSION'));
                console.log('------------------------');
                debugger;
                return this.http.post < Object > (endpoint, payload, {headers, withCredentials: true}).pipe(tap((result) => console.log('result-->', result)), catchError(this.handleError('error', [])));;
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
                        console.error(JSON.stringify(error)); // log to console instead

                        // TODO: better job of transforming error for user consumption
                        console.log(`${operation} failed: ${error.message}`);

                        // Let the app keep running by returning an empty result.
                        return of(result as T);
                };
        }
}
