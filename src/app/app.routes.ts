import { Routes } from '@angular/router';
import {StartMenuComponent} from './views/start-menu/start-menu.component';
import {SettingsComponent} from './views/settings/settings.component';
import {PlayComponent} from './views/play/play.component';

export enum Route {
  SETTINGS = 'settings',
  PLAY = 'play',
}

export const routes: Routes = [
  {path: '', component: StartMenuComponent, pathMatch: 'full'},
  {path: Route.SETTINGS, component: SettingsComponent, pathMatch: 'full'},
  {path: Route.PLAY, component: PlayComponent, pathMatch: 'full'},
];
