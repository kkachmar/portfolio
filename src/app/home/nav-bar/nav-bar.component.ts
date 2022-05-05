import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  mobileMenu: boolean = false;
  menuIcon: string = 'assets/home/icon-menu.png'
  menuVisible = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(window.innerWidth < 850) {
      this.mobileMenu = true;
      this.menuVisible = false;
      console.log(this.mobileMenu)
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(){
    console.log(window.innerWidth)
    if(window.innerWidth < 850) {
      this.mobileMenu = true;
      this.menuVisible = false;
      console.log(this.mobileMenu)
    } else {
      this.mobileMenu = false;
      this.menuVisible = true;
    }
  }

  redirect(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  toggleMenu(){
    if(window.innerWidth < 850) {
    this.menuVisible = !this.menuVisible;
    console.log(this.menuVisible )
    }
  }

  moveDown(){
    window.scrollBy(0, window.innerHeight);
  }

  toTop() {
    window.scrollTo(0, 0)
  }

}
