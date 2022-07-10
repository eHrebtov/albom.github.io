import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() photo: string = ''

  get photoSrc() {
    return `assets/photos/${this.photo}`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
