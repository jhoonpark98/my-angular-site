import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
// import { url } from 'node:inspector';

@Component({
  selector: 'app-home',
  template: `
<section class="hero is-info is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Forum 🗣
            </a>
            <a class="navbar-item is-active">
              Video 🎥
            </a>
            <a class="navbar-item is-active">
              Jobs 👔
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body is full-height">
    <div class="container has-text-centered has-background-info-light">
      <p class="title has-text-info">
        Welcome to Ludisco!
      </p>
      <p class="subtitle has-text-info">
        A SNS Portfolio for Student🎓
      </p>
    </div>
  </div>
  </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/home.jpg') !important; 
      background-size: cover;
      background-position: center center;
      }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
