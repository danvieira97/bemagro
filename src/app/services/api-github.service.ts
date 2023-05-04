import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCardData } from '../models/userCardData';
import { Observable } from 'rxjs';
import { GeocodingType } from '../models/geocodingType';
import { UserRepositoryData } from '../models/userRepositoryData';

@Injectable({
	providedIn: 'root',
})
export class ApiGithubService {
	user: string = '';
	private baseUserURL: string = 'https://api.github.com/users/';
	private baseGeoURL: string =
		'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDP_b0AnBsS4KOWAtSxd09OF19DKxCQWKg&sensor=false&address=';
	userCard: UserCardData | any;
	userRepo: UserRepositoryData | any;
	geocoding: GeocodingType | any;

	constructor(private readonly http: HttpClient) {}

	getUser(user: string | null): Observable<UserCardData> {
		this.userCard = this.http.get<UserCardData>(this.baseUserURL + user);

		return this.userCard;
	}

	getUserRepository(user: string | null): Observable<UserRepositoryData[]> {
		this.userRepo = this.http.get<UserRepositoryData>(
			this.baseUserURL + user + '/repos'
		);

		return this.userRepo;
	}

	getGeoconding(location: string): Observable<GeocodingType> {
		this.geocoding = this.http.get<GeocodingType>(this.baseGeoURL + location);

		return this.geocoding;
	}
}
