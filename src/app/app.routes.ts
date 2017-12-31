import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'aboutus',
    component: AboutComponent
  },
  {
  path: 'feedback',
  component: FeedbackComponent
  }
];
export const routing = RouterModule.forRoot(routes);
