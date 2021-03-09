import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark">
      <!--logo-->
      <div class="navbar-brand">
        <a class="navbar-item">
        LUDSICO
        </a>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
