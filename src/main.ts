import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CharacterGridComponent } from './app/components/character-grid/character-grid.component';
import { CharacterDetailComponent } from './app/components/character-detail/character-detail.component';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: CharacterGridComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes),
  ]
}).catch(err => console.error(err));
