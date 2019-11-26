import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetailComponent } from './movies-detail.component';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { of } from 'rxjs';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('MoviesDetailComponent', () => {
	let component: MoviesDetailComponent;
	let fixture: ComponentFixture<MoviesDetailComponent>;
	const movieStub: Movie = new Movie('The Avengers', '2019', 'a1b2', 'movie', 'movie.jpg');
	const router = {
		navigate: jasmine.createSpy('navigate')
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MoviesDetailComponent],
			imports: [
				RouterModule.forRoot([]),
				HttpClientModule
			],
			providers: [
				MovieService,
				{
					provide: ActivatedRoute,
					useValue: { paramMap: of(convertToParamMap({imdb: 'a1'})) }
				},
				{
					provide: Router,
					useValue: router
				}
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MoviesDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	function setup() {
		const movieService = fixture.debugElement.injector.get(MovieService);

		return { movieService };
	}

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('001 - ngOnInit', () => {
		spyOn(component, 'loadMovie');
		component.ngOnInit();
		expect(component.loadMovie).toHaveBeenCalled();
	});

	it('002 - loadMovie', () => {
		const { movieService } = setup();
		spyOn(movieService, 'getMovie').and.returnValue(of(movieStub));
		component.loadMovie();
		expect(movieService.getMovie).toHaveBeenCalled();
		expect(component.movie).toBe(movieStub);
	});

	it('003 - backToMain', () => {
		component.backToMain();
		expect(router.navigate).toHaveBeenCalledWith(['movies','']);
	});
});
