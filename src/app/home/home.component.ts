import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <nav>
      <a [routerLink]="['/user', 1]">Tony Stark</a><br>
      <a [routerLink]="['/user', 2]">Steve Rogers</a><br>
      <a [routerLink]="['/user', 3]">Bruce Banner</a><br>
    </nav>
  `,
  styles: []
})
export class HomeComponent { }

