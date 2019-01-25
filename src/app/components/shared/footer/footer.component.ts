import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fecha = new Date().getFullYear();
  footer: any = {
    instagram: 'https://www.instagram.com/fedeatanasoff/',
    github: 'https://github.com/fedeatanasoff',
    linkedin: 'https://www.linkedin.com/in/fede-atanasoff/',
    nombre: 'fd_atanasoff'
  };

  constructor() {}

  ngOnInit() {}
}
