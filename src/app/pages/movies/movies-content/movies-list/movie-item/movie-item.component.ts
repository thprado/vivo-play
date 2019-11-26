import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
	selector: 'app-movie-item',
	templateUrl: './movie-item.component.html',
	styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

	@Input() movie: Movie;

	brokenImg: string = 'assets/404.jpg';

	constructor() { }
}
