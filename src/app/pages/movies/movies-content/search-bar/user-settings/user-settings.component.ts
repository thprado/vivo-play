import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-settings',
	templateUrl: './user-settings.component.html',
	styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

	settingsOpened: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	toggleSettings(): void {
		this.settingsOpened = !this.settingsOpened;
	}
}
