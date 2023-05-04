import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
	constructor(private readonly router: Router) {}

	email = new FormControl('');
	password = new FormControl('');
	confirmPassword = new FormControl('');

	register() {}

	login() {
		this.router.navigate(['/']);
	}
}
