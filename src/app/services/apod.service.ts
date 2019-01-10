import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = `eVR20t0hT1UFQjUwRKR5wFyTtsX4YTBvEGsQ8KvT`;
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  constructor(private http: HttpClient) {}

  getApod() {
    return this.http.get(APOD_URL);
  }
}
