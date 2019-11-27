import { Component, Input, Renderer, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ListKeyManager } from '@angular/cdk/a11y';
import { UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, ENTER } from '@angular/cdk/keycodes';
import { SCREEN_SIZE } from 'src/app/shared/enum/screen-size.enum';
import { ResizeService } from 'src/app/shared/services/resize.service';
import { delay } from 'rxjs/operators';
@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {

  

	@Input() moviesList: Movie[] = [];
	@ViewChildren(MovieItemComponent) movies: QueryList<any>;
  keyEvent: ListKeyManager<any>;

  idx: number = 0;
  size: SCREEN_SIZE;

  constructor(
    private renderer: Renderer,
    private resizeSvc: ResizeService) {
    this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        this.size = x;
      });
   }

	ngOnInit() {
	}

	refreshElem() {
    this.keyEvent = new ListKeyManager(this.movies);
    this.idx = 0;
	}

	handleKey(event: KeyboardEvent) {
		event.stopImmediatePropagation();
		if (this.keyEvent) {
      if (event.keyCode === RIGHT_ARROW || event.keyCode === DOWN_ARROW || event.keyCode === LEFT_ARROW || event.keyCode === UP_ARROW) {
        let numRow = this.resizeSvc.getCountsMovieByRow(this.size);
        if (event.keyCode === RIGHT_ARROW) {
          this.idx = this.idx + 1;
        } else if (event.keyCode === DOWN_ARROW) {
          this.idx = this.idx + numRow;
        } else if (event.keyCode === LEFT_ARROW) {
          this.idx = this.idx - 1;
        } else if (event.keyCode === UP_ARROW) {
          this.idx = this.idx - numRow;
        }
        if (this.movies.length >= 0 && this.idx >= 0 && this.idx < this.movies.length) {
          this.activateIndex(this.idx);
        }
      }  else if (event.keyCode === ENTER) {
        this.keyEvent.activeItem.selectItem();
      }
		}
  }

  activateIndex(idx: number): void {
    this.disableAll();
    this.keyEvent.setActiveItem(idx);
    this.keyEvent.activeItem.setActive(true);
  }

  selectMovie(index: number): void {
    this.disableAll();
    this.activateIndex(index);
  }

	disableAll(): void {
		this.movies.forEach(index => {
			index.isActive = false;
		});
	}
}
