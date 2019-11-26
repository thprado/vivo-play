import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsComponent } from './notifications.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('NotificationsComponent', () => {
	let component: NotificationsComponent;
	let fixture: ComponentFixture<NotificationsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NotificationsComponent],
			imports: [RouterTestingModule]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('001 - Toggle Notification - False', () => {
		component.toggleNotifications = false;
		component.toggleNotification();
		expect(component.toggleNotifications).toBeTruthy();
	});

	it('002 - Toggle Notification - True', () => {
		component.toggleNotifications = true;
		component.toggleNotification();
		expect(component.toggleNotifications).toBeFalsy();
	});
});
