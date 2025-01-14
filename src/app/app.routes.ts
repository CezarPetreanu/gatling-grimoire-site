import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TheGrimoirePageComponent } from './the-grimoire-page/the-grimoire-page.component';
import { HowToPlayPageComponent } from './how-to-play-page/how-to-play-page.component';
import { DownloadPageComponent } from './download-page/download-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'grimoire', component: TheGrimoirePageComponent },
  { path: 'howtoplay', component: HowToPlayPageComponent },
  { path: 'download', component: DownloadPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
