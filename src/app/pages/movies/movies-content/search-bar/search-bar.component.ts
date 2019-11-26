import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Notification } from 'src/app/shared/models/notification.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
	@Input() searchControl: FormControl;

	notifications: Notification[] = [];

	mockNotifications = [
		{
			id: 0,
			text: 'Novo Batman',
			link: '/movies/batman'
		}
	];

	constructor() { }

	ngOnInit() {
		this.notifications = this.getNotifications();
	}

	getNotifications(): Notification[] {
		const notifications = [];
		this.mockNotifications.forEach(element => notifications.push(element as Notification));
		return notifications;
	}
}
