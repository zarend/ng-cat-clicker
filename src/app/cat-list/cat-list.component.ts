import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-cat-list',
  template: `
    <mat-list>
      <app-cat
        mat-list-item
        *ngFor="let cat of cats"
        [cat]="cat"
        (clickCat)="onClickCat($event)"
      ></app-cat>
    </mat-list>
  `,
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats: Cat[] = [
    { name: 'fluffy', numClicks: 0, imageUrl: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png' },
    { name: 'grumpy', numClicks: 0, imageUrl: 'https://media.wired.com/photos/5cdefb92b86e041493d389df/1:1/w_988,h_988,c_limit/Culture-Grumpy-Cat-487386121.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickCat(cat: Cat) {
    cat.numClicks++;
  }
}
