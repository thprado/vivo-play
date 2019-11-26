import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsComponent } from './user-settings.component';

describe('UserSettingsComponent', () => {
	let component: UserSettingsComponent;
	let fixture: ComponentFixture<UserSettingsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ UserSettingsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserSettingsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('001 - Toggle Settings - False', () => {
		component.settingsOpened = false;
		component.toggleSettings();
		expect(component.settingsOpened).toBeTruthy();
	});

	it('002 - Toggle Settings - True', () => {
		component.settingsOpened = true;
		component.toggleSettings();
		expect(component.settingsOpened).toBeFalsy();
	});
});
