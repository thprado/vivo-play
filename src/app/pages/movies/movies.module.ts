import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SearchBarComponent } from './movies-content/search-bar/search-bar.component';
import { MoviesContentComponent } from './movies-content/movies-content.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationsComponent } from './movies-content/search-bar/notifications/notifications.component';
import { UserSettingsComponent } from './movies-content/search-bar/user-settings/user-settings.component';
import { MoviesListComponent } from './movies-content/movies-list/movies-list.component';
import { MovieItemComponent } from './movies-content/movies-list/movie-item/movie-item.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';

@NgModule({
	declarations: [
		SearchBarComponent,
		MoviesContentComponent,
		NotificationsComponent,
		UserSettingsComponent,
		MoviesListComponent,
		MovieItemComponent,
		MoviesDetailComponent
	],
	imports: [
		SharedModule,
		CommonModule,
		MoviesRoutingModule
	]
})
export class MoviesModule { }
