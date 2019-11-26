import { Component, OnInit, Input } from '@angular/core';
import { Notification } from 'src/app/shared/models/notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

	@Input() notificationsList: Notification[] = [];

	toggleNotifications: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	toggleNotification(): void {
		this.toggleNotifications = !this.toggleNotifications;
	}
}
