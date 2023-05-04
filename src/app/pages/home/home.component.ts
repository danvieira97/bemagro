import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserCardData } from 'src/app/models/userCardData';
import { ApiGithubService } from 'src/app/services/api-github.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	userData: UserCardData;
	constructor(
		private readonly http: HttpClient,
		private readonly githubService: ApiGithubService
	) {
		this.userData = {
			avatar_url: '',
			name: '',
			login: '',
			location: '',
			bio: '',
			created_at: '',
			followers: 0,
			following: 0,
		};
	}

	user = new FormControl('');

	searchUser() {
		if (!this.user.value) {
			alert('Preencha o nome do usuário');
			return;
		}

		this.githubService.getUser(this.user.value).subscribe({
			next: (res) => {
				this.userData = {
					avatar_url: res.avatar_url,
					name: res.name,
					login: res.login,
					location: res.location,
					bio: res.bio,
					created_at: res.created_at,
					followers: res.followers,
					following: res.following,
				};
			},
			error: (error) => {
				if (error.status === 404) {
					alert('Usuário não encontrado');
				}
			},
		});
	}
}
