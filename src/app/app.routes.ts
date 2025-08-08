import {Routes} from '@angular/router';
import {Exercise1} from './app/exercise1/exercise1';
import {Home} from './app/home/home';
import {Exercise2} from './app/exercise2/exercise2';
import {Exercise3} from './app/exercise3/exercise3';
import {Exercise5} from './app/exercise5/exercise5';
import {Exercise4} from './app/exercise4/exercise4';
import {Exercise6} from './app/exercise6/exercise6';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'exercise1',
    component: Exercise1,
  },
  {
    path: 'exercise2',
    component: Exercise2,
  },
  {
    path: 'exercise3',
    component: Exercise3,
  },
  {
    path: 'exercise4',
    component: Exercise4,
  },
  {
    path: 'exercise5',
    component: Exercise5,
  },
  {
    path: 'exercise6',
    component: Exercise6,
  },
];
