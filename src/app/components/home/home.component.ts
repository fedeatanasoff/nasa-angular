import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apod: any = {};
  loading: boolean;
  error: boolean;

  constructor(private servicio: ApodService) {
    this.loading = true;
    this.error = false;

    this.servicio.getApod().subscribe(
      (data: any) => {
        this.loading = false;
        this.apod = data;
        console.log(this.apod);
      },
      errorApod => {
        console.log(errorApod);
        this.loading = false;
        this.error = true;
      }
    );
  }

  ngOnInit() {}
}
