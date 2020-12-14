import { EventEmitter, Input, Output, Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  @Input('cat') cat!: Cat;
  @Output() clickCat = new EventEmitter<Cat>();

  constructor() { }

  ngOnInit(): void {
  }

}
