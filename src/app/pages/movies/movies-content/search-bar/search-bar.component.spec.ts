import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { NotificationsComponent } from 'src/app/pages/movies/movies-content/search-bar/notifications/notifications.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('SearchBarComponent', () => {
	let component: SearchBarComponent;
	let fixture: ComponentFixture<SearchBarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				SearchBarComponent,
				NotificationsComponent,
				UserSettingsComponent
			],
			imports: [
				ReactiveFormsModule,
				RouterTestingModule
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchBarComponent);
		component = fixture.componentInstance;
		component.searchControl = new FormControl();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
