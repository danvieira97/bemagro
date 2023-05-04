import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRepositoryData } from 'src/app/models/userRepositoryData';
import { ApiGithubService } from 'src/app/services/api-github.service';

@Component({
	selector: 'app-repo-list',
	templateUrl: './repo-list.component.html',
	styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent implements OnInit {
	user: string | null = '';
	repositories: UserRepositoryData[] = [];
	name: string = '';
	html_url: string = '';

	constructor(
		private readonly githubService: ApiGithubService,
		private readonly route: ActivatedRoute
	) {
		this.route.paramMap.subscribe((user) => (this.user = user.get('username')));
		this.githubService.getUserRepository(this.user).subscribe((repos) =>
			repos.map((repo) => {
				console.log(repo);
			})
		);
	}

	ngOnInit(): void {}
}
