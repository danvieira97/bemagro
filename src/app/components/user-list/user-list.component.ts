import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeocodingType } from 'src/app/models/geocodingType';
import { ApiGithubService } from 'src/app/services/api-github.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
	geocoding: GeocodingType;
	constructor(private githubService: ApiGithubService, private route: Router) {
		this.geocoding = {
			results: {
				0: {
					geometry: {
						location: {
							lat: 0,
							lng: 0,
						},
					},
				},
			},
		};
	}

	ngOnInit(): void {
		this.githubService.getGeoconding(this.location).subscribe({
			next: (res) => {
				this.geocoding.results[0].geometry.location.lat =
					res.results[0].geometry.location.lat;
				this.geocoding.results[0].geometry.location.lng =
					res.results[0].geometry.location.lng;
			},
		});
	}

	@Input() avatar_url: string = '';
	@Input() name: string = '';
	@Input() login: string = '';
	@Input() location: string = '';
	@Input() bio: string = '';

	userDetails(user: string) {
		this.route.navigate(['/user/' + user], {
			queryParams: {
				lat: this.geocoding.results[0].geometry.location.lat,
				lng: this.geocoding.results[0].geometry.location.lng,
			},
		});
	}
}
