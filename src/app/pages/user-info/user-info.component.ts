import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCardData } from 'src/app/models/userCardData';
import { ApiGithubService } from 'src/app/services/api-github.service';
import { __values } from 'tslib';

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
	username: string | any = '';
	userData: UserCardData = {
		avatar_url: '',
		bio: '',
		created_at: '',
		followers: 0,
		following: 0,
		location: '',
		login: '',
		name: '',
	};

	constructor(
		private readonly route: ActivatedRoute,
		private readonly githubService: ApiGithubService
	) {
		this.route.paramMap.subscribe(
			(res) => (this.username = res.get('username'))
		);

		this.githubService.getUser(this.username).subscribe({
			next: (res) => {
				this.userData = {
					avatar_url: res.avatar_url,
					bio: res.bio,
					created_at: res.created_at,
					followers: res.followers,
					following: res.following,
					location: res.location,
					login: res.login,
					name: res.name,
				};
			},
		});
	}
}
