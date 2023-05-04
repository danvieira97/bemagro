import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	constructor(private readonly router: Router) {}

	email = new FormControl('');
	password = new FormControl('');

	login() {
		this.router.navigate(['/home']);
	}

	register() {
		this.router.navigate(['/register']);
	}
}
