import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { MovieService } from 'src/app/shared/services/movie.service';
import { Movie } from 'src/app/shared/models/movie.model';

import { appConst } from 'src/app/shared/commons/constants';

@Component({
	selector: 'app-movies-detail',
	templateUrl: './movies-detail.component.html',
	styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {

	brokenImg = appConst.brokenImg;
	movie: Movie;

	constructor(
		private route: ActivatedRoute,
		private movieService: MovieService,
		private router: Router) { }

	ngOnInit() {
		this.loadMovie();
	}

	loadMovie() {
		this.route.paramMap.pipe(
			switchMap(params => this.movieService.getMovie(params.get('imdb')))
		).subscribe(
			(movie) => {
				this.movie = movie;
			},
			(error) => alert(error)
		);
	}

	backToMain(): void {
		let lastSearchTerm = this.movieService.lastSearchTerm || '';
		this.router.navigate(['movies', lastSearchTerm]);
	}
}
