import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',                   
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'portfolio';

  sections: any[] | undefined;
  current: number = 0;

  @ViewChild('portfolio', { static: false })
  private portfolio: ElementRef<HTMLDivElement> | undefined;

  portfolioView = false;

  constructor(){
    this.sections = [
      {bold: 'kara', light: 'kachmar', subtitle: 'DESIGN & DEVELOPMENT'},
      {bold: 'ui/ux', light: ' design', subtitle: 'SELECTED WORK'},
      {bold: 'software', light: ' dev', subtitle: 'SELECTED WORK'},

    ]
  }

  ngOnInit() {
 }

  @HostListener('window:scroll', ['$event'])
  canSeePortfolio() {
    if (this.portfolio) {
      const bounds = this.portfolio.nativeElement.getBoundingClientRect();
      console.log(bounds);
      console.log(window);
      const topPassed = bounds.top <= window.innerHeight;
      const bottomPassed = bounds.bottom <= window.innerHeight;

      if(bottomPassed){
        this.current = 2;
        this.portfolioView = true;
      } else if (topPassed) {
        this.current = 1;
        this.portfolioView = true;
      } else {
        this.current = 0
        this.portfolioView = false;
      }
    }
  }


  scroll(element: HTMLElement){
    element.scrollIntoView()
  }


}


