import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { Router } from '@angular/router';
import { appConst } from 'src/app/shared/commons/constants';

@Component({
	selector: 'app-movie-item',
	templateUrl: './movie-item.component.html',
	styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

	isActive: boolean;

	@Input() movie: Movie;

	brokenImg: string = appConst.brokenImg;

	constructor(private router: Router) { }

	setActive(val) {
		this.isActive = val;
	}

	selectItem() {
		this.router.navigate(['/movies/movie', this.movie['imdbID']]);
	}
}
