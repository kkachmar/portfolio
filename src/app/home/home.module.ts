import { LongformArticleComponent } from './../longform-article/longform-article.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SocialBarComponent } from './social-bar/social-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { MicrositeComponent } from './microsite/microsite.component';
import { TktsComponent } from './tkts/tkts.component';
import { MacRedesignComponent } from './mac-redesign/mac-redesign.component';
import { PlatformerGameComponent } from './platformer-game/platformer-game.component';
import { BudgetBuddyComponent } from './budget-buddy/budget-buddy.component';
import { TypeBookletComponent } from './type-booklet/type-booklet.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    LandingComponent,
    NavBarComponent,
    SocialBarComponent,
    PortfolioComponent,
    CaseStudyComponent,
    WelcomeComponent,
    LongformArticleComponent,
    MicrositeComponent,
    TktsComponent,
    MacRedesignComponent,
    PlatformerGameComponent,
    BudgetBuddyComponent,
    TypeBookletComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    LandingComponent,
    NavBarComponent,
    SocialBarComponent,
    PortfolioComponent,
    CaseStudyComponent,
    WelcomeComponent,
    LongformArticleComponent
  ]
})

export class HomeModule { }
