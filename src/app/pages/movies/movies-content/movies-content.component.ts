import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable, Subject, Subscription, of } from 'rxjs';
import { switchMap, debounceTime, tap, map, distinctUntilChanged } from 'rxjs/operators';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
@Component({
	selector: 'app-movies-content',
	templateUrl: './movies-content.component.html',
	styleUrls: ['./movies-content.component.scss']
})
export class MoviesContentComponent implements OnInit {

	searchForm: FormGroup;
	subject: Subject<any> = new Subject();
	movies: Movie[] = [];
	hasSearched: boolean = false;
	userSubscription: Subscription;

	constructor(private formBuilder: FormBuilder,
		private movieService: MovieService,
		private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.buildSearchForm();
		this.prepareSearch();
	}

	buildSearchForm(): void {
		this.searchForm = this.formBuilder.group({
			searchInput: ['', [Validators.required]]
		});

		this.searchForm.controls['searchInput'].valueChanges.pipe(
			debounceTime(1000),
			distinctUntilChanged(),
			switchMap((value: string) => {
				return this.movieService.getByParam(value);
			})
		).subscribe(movies => {
			this.hasSearched = true;
			this.movies = movies;
		});
	}

	prepareSearch(): void {
		// this.route.params.subscribe(
		// 	params => {
		// 		const lastSearch = +params['lastsearch'];
		// 		debugger;
		// 		if (lastSearch) {

		// 		}


		// 	}
		// );
		if (this.route.paramMap) {
			this.route.paramMap.pipe(
				switchMap((params: ParamMap) =>
					of(params.get('lastsearch'))
				)
			).subscribe((d) => {
				const lastSearch = d; debugger;
				if (lastSearch) {
					this.searchForm.controls['searchInput'].setValue(lastSearch);
				}
			});
		}

	}
}
