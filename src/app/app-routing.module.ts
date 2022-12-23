import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimePageComponent } from './anime-page/anime-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"animes", component: AnimePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
