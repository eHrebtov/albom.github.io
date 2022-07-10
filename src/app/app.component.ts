import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PageFlip, SizeType } from 'page-flip';
import images from 'src/utils/images'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  private pageFlip: PageFlip | null = null
  public images = images
  
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const book = document.getElementById('book')
    if (book) {
      this.pageFlip = new PageFlip(book, {
        width: 400,
        height: 600,
        autoSize: true,
      });

      this.pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    }
  
  }

}
