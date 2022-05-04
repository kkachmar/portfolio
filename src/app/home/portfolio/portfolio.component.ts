import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItem } from 'src/app/models/PortfolioItem';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @Input() section!: string;
  portfolioItems: PortfolioItem[] | undefined;
  viewMode = 'individual';

  constructor(private router: Router) { 
  
  }

  ngOnInit(): void {

    if(this.section == "ux"){
      this.portfolioItems = [
        {
          name:'tkts', 
          displayName: 'Tkts Mobile App Redesign', 
          shortDescription: "A redesign of the Tkts App, an app for same-day, discounted theater tickets, with a reimagined UI and new features to improve the user experience.",
          headerImage: 'assets/tkts/tkts-thumbnail.png',
          tags: ['UX DESIGN', 'ADOBE XD', 'REDESIGN'],
        },

        {
          name:'microsite', 
          displayName: 'Archipelago Music Festival Website', 
          shortDescription: 'A responsive website advertising the imagined music festival, Archipelago. Designed for display on both web and mobile screens.',
          headerImage: 'assets/mockups/archipelago-thumbnail.png',
          tags: ['UX DESIGN', 'ADOBE XD', 'WEB DESIGN'] 
        },
  
        {
          name:'mac-redesign', 
          displayName: 'MAC Cosmetics Website Redesign', 
          shortDescription: 'A redesign concept for the retail website for the popular makeup brand MAC Cosmetics.',
          headerImage: 'assets/mac-redesign/mac-thumbnail.png',
          tags: ['UX DESIGN', 'ADOBE XD', 'WEB DESIGN'] 
        },

        {
          name:'longform', 
          displayName: 'Longform Article', 
          shortDescription: 'A digital presentation of a the longform article, "When Awareness is Not Enough." Designed for display on both web and mobile screens.',
          headerImage: 'assets/mockups/longform-article-mockup.png',
          tags: ['UX DESIGN', 'ADOBE XD', 'WEB DESIGN'] 
        },


        {
          name:'type-booklet', 
          displayName: 'Bodoni Type Booklet', 
          shortDescription: "A booklet designed to showcase Bodoni, one of the first modern typefaces.",
          headerImage: 'assets/type-booklet/bodoni-book.png',
          tags: ['TYPOGRAPHY', 'INDESIGN', 'ILLUSTRATOR'],
        },

        
      ]
    } else if (this.section == "cs") {
      this.portfolioItems = [
        
        {
          name:'budget-buddy', 
          displayName: 'Budget Buddy', 
          shortDescription: 'A functional web application that gamifies the budgeting experience. Build a budget, stay on track, and earn rewards! Budget Buddy helps you manage your money',
          headerImage: 'assets/budget-buddy/budget-buddy-thumbnail.png',
          tags: ['FRONTEND DEVELOPMENT', 'ANGULAR', 'UI DESIGN'] 
        },

        {
          name:'platformer-game', 
          displayName: '2D Platformer Game', 
          shortDescription: 'A simple platformer game inherited and improved upon by my software development team. Under the guidance of a project manager, we worked together to improve the exsiting product.',
          headerImage: ' assets/platformer-game/game-animation.gif',
          tags: ['AGILE', 'JAVA', 'GAME DEVELOPMENT'] 
        },
        
        
        {
          name:'freelance', 
          displayName: 'Freelance Mobile App', 
          shortDescription: "A mobile app designed and developed to enable freelance designers, developers, and creatives to share work, collaborate, and build a professional network.",
          headerImage: 'assets/mockups/freelance-mockup.png',
          tags: ['UX DESIGN', 'ADOBE XD', 'IOS PROGRAMMING'],
          video: 'assets/mockups/freelance-demo.mov',
        },

        
      ]
    }
  }


  redirect(pageName:string){
    console.log(pageName)
    this.router.navigate([`${pageName}`]);
  }

  

}


