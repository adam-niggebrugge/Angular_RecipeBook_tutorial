import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleRequest = new EventEmitter<boolean>();

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  togglePage(d: string){
    const condition = d === 'recipes';
    this.toggleRequest.emit(
      condition
    );
  }

}
