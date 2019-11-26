import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { Movie } from '../models/movie.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpResponse } from '../models/http-response.model';

describe('MovieService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [HttpClientTestingModule],
		providers: [MovieService]
	  }));

	it('should be created', () => {
		const service: MovieService = TestBed.get(MovieService);
		expect(service).toBeTruthy();
	});

	it('001 - JsonDataToMovie', () => {
		const service: MovieService = TestBed.get(MovieService);
		let tempJsonData = {Title: '', Year: '', imdbID: '', Type: '', Poster: ''};
		let serviceReturn: Movie = service.jsonDataToMovie(tempJsonData);
		expect(serviceReturn instanceof Object).toBeTruthy();
	});

	it('002 - JsonDataToMovies', () => {
		const service: MovieService = TestBed.get(MovieService);
		let tempJsonData = [
			{
				Title: 'Title',
				Year: 'Year',
				imdbID: 'imdbID',
				Type: 'Type',
				Poster: 'Poster'
			},
			{
				Title: 'Title2',
				Year: 'Year2',
				imdbID: 'imdbID2',
				Type: 'Type2',
				Poster: 'Poster2'
			}
		];
		let httpResponse = new HttpResponse('', tempJsonData, '', '');
		let serviceReturn: Movie[] = service.jsonDataToMovies(httpResponse);
		expect(serviceReturn.length).toBe(tempJsonData.length);
	});
});
