import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesContentComponent } from './movies-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NotificationsComponent } from './search-bar/notifications/notifications.component';
import { UserSettingsComponent } from './search-bar/user-settings/user-settings.component';
import { MovieItemComponent } from './movies-list/movie-item/movie-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MoviesContentComponent', () => {
	let component: MoviesContentComponent;
	let fixture: ComponentFixture<MoviesContentComponent>;
	const moviesMock: Movie[] = [
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
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MoviesContentComponent,
				SearchBarComponent,
				MoviesListComponent,
				NotificationsComponent,
				UserSettingsComponent,
				MovieItemComponent
			],
			imports: [
				ReactiveFormsModule,
				RouterTestingModule,
				HttpClientModule
			],
			providers: [
				{
					provide: ActivatedRoute,
					useValue: { snapshot: { url: [{ path: 'batman' }]}}
				},
				MovieService
			]
		})
		.compileComponents();
	}));

	function setup() {
		const movieService = fixture.debugElement.injector.get(MovieService);

		return { movieService };
	}

	beforeEach(() => {
		fixture = TestBed.createComponent(MoviesContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('001 - ngOnInit', () => {
		spyOn(component, 'buildSearchForm');
		spyOn(component, 'prepareSearch');
		component.ngOnInit();
		expect(component.buildSearchForm).toHaveBeenCalled();
		expect(component.prepareSearch).toHaveBeenCalled();
	});

	it('002 - prepareSearch', () => {
		component.prepareSearch();
		expect(component.searchForm.controls['searchInput'].value).toBe('batman');
	});
});
