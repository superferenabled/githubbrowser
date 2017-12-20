import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class ReposService {

    constructor(private http: HttpClient) { }

    search(terms: Observable<string>) {
        return terms.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(term => this.getMatches(term))
        );
    }

    getMatches(search: string) {
        let params = new HttpParams();
        params = params.append('sort', 'stars');
        params = params.append('order', 'desc');
        params = params.append('q', search);
        return this.http.get('https://api.github.com/search/repositories', {params: params});
    }

    getComments(repoName: string) {
        let params = new HttpParams();
        params = params.append('sort', 'created');
        params = params.append('direction', 'desc');
        return this.http.get(`https://api.github.com/repos/${repoName}/issues/comments`, {params: params});
    }

    getMood(msg: string) {
        let params = new HttpParams();
        params = params.append('text', msg);
        const payload = params.toString();
        let headers = new HttpHeaders();
        headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('Access-Control-Allow-Headers', '*');
        headers = headers.append('Content-Type', 'text/plain');
        headers = headers.append('Access-Control-Allow-Method', 'GET, POST, PUT, OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        headers = headers.append('Origin', 'evil.com');
        headers = headers.append('Content-Length', payload.length.toString());
        console.log(params.toString());
        return this.http.post(`http://text-processing.com/api/sentiment/`,
            payload
        );
    }

}
