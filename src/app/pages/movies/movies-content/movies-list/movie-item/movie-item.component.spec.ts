import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemComponent } from './movie-item.component';
import { Movie } from 'src/app/shared/models/movie.model';
import { RouterTestingModule } from '@angular/router/testing';
describe('MovieItemComponent', () => {
	let component: MovieItemComponent;
	let fixture: ComponentFixture<MovieItemComponent>;
	const movieStub: Movie = new Movie('The Avengers', '2019', 'a1b2', 'movie', 'movie.jpg');

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MovieItemComponent],
			imports: [RouterTestingModule]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		component.movie = movieStub;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
