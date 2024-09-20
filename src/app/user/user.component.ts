import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <h1>User Details</h1>
    <p>User ID: {{ userId }}</p>
    <a routerLink="/">Back to Home</a>
  `,
  styles: []
})
export class UserComponent implements OnInit {
  userId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id')!;
    });
  }
}

