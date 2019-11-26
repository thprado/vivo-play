import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('MoviesListComponent', () => {
	let component: MoviesListComponent;
	let fixture: ComponentFixture<MoviesListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MoviesListComponent,
				MovieItemComponent
			],
			imports: [RouterTestingModule]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MoviesListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
