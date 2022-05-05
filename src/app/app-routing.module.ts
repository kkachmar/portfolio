import { AboutComponent } from './home/about/about.component';
import { TypeBookletComponent } from './home/type-booklet/type-booklet.component';
import { BudgetBuddyComponent } from './home/budget-buddy/budget-buddy.component';
import { MacRedesignComponent } from './home/mac-redesign/mac-redesign.component';
import { PlatformerGameComponent } from './home/platformer-game/platformer-game.component';
import { TktsComponent } from './home/tkts/tkts.component';
import { MicrositeComponent } from './home/microsite/microsite.component';
import { LongformArticleComponent } from './longform-article/longform-article.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudyComponent } from './home/case-study/case-study.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'case-study', component: CaseStudyComponent},
  {path: 'longform', component: LongformArticleComponent},
  {path: 'microsite', component: MicrositeComponent},
  {path: 'tkts', component: TktsComponent},
  {path: 'platformer-game', component: PlatformerGameComponent},
  {path: 'mac-redesign', component: MacRedesignComponent},
  {path: 'budget-buddy', component: BudgetBuddyComponent},
  {path: 'type-booklet', component: TypeBookletComponent},
  {path: 'about', component: AboutComponent},


  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
