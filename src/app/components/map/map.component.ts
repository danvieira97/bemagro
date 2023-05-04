import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { Environment } from 'src/app/env/enviroment';
import { GeocodingType } from 'src/app/models/geocodingType';
import { ApiGithubService } from 'src/app/services/api-github.service';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
	@Input() location: string = '';
	private map: any;
	lat: string | null = '';
	lng: string | null = '';

	private initMap(): void {
		this.map = L.map('map', {
			center: [Number(this.lat), Number(this.lng)],
			zoom: 13,
		});

		const tiles = L.tileLayer(Environment.MAP_TILE_LAYER, {
			maxZoom: 18,
			minZoom: 3,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		});
		var marker = L.marker([Number(this.lat), Number(this.lng)]).addTo(this.map);

		tiles.addTo(this.map);
	}

	constructor(private readonly route: ActivatedRoute) {}
	ngOnInit(): void {
		this.route.queryParamMap.subscribe((res) => {
			this.lat = res.get('lat');
			this.lng = res.get('lng');
		});
	}

	ngAfterViewInit(): void {
		this.initMap();
	}
}
