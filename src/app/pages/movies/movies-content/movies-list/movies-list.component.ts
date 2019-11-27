import { Component, Input, Renderer, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ListKeyManager } from '@angular/cdk/a11y';
import { UP_ARROW, DOWN_ARROW, ENTER } from '@angular/cdk/keycodes';
@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {

	@Input() moviesList: Movie[] = [];
	@ViewChildren(MovieItemComponent) movies: QueryList<any>;
	keyEvent: ListKeyManager<any>;
	constructor(private renderer: Renderer) { }

	ngOnInit() {
	}

	refreshElem() {
		this.keyEvent = new ListKeyManager(this.movies);
	}

	handleKey(event: KeyboardEvent) {
		event.stopImmediatePropagation();
		if (this.keyEvent) {
			if (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
				this.keyEvent.onKeydown(event);
				this.disableAll();
				this.keyEvent.activeItem.setActive(true);
			} else if (event.keyCode === ENTER) {
				this.keyEvent.activeItem.selectItem();
			}
		}
	}

	disableAll(): void {
		this.movies.forEach(index => {
			index.isActive = false;
		});
	}
}
