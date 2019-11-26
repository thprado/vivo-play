import { Movie } from 'src/app/shared/models/movie.model';
import { HttpResponse } from 'src/app/shared/models/http-response.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class MovieService {

	private applicationUrl: string = `${environment.apiUrl}?apikey=${environment.apiToken}`;
	lastSearchTerm: string = '';

	constructor(private http: HttpClient) {}

	getByParam(param: string): Observable<Movie[]> {
		this.lastSearchTerm = param;
		return this.http.get(this.applicationUrl + `&s=${param}`).pipe(
			catchError(this.handleError),
			map(this.jsonDataToMovies)
		);
	}

	getMovie(imdb: string): Observable<Movie> {
		return this.http.get(this.applicationUrl + `&i=${imdb}`).pipe(
			catchError(this.handleError),
			map(this.jsonDataToMovie)
		);
	}

	jsonDataToMovies(jsonData: HttpResponse): Movie[] {
		const movies: Movie[] = [];
		if (jsonData && jsonData.Search) {
			jsonData.Search.forEach(element => movies.push(element as Movie));
		}
		return movies;
	}

	jsonDataToMovie(jsonData: any): Movie {
		return jsonData as Movie;
	}

	handleError(error: any): Observable<any> {
		return throwError(error);
	}
}
