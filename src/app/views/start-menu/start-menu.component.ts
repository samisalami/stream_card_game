import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {Route} from '../../app.routes';

@Component({
  selector: 'app-start-menu',
  imports: [
    MatButton
  ],
  templateUrl: './start-menu.component.html',
  styleUrl: './start-menu.component.scss'
})
export class StartMenuComponent {
  constructor(private router: Router) {
  }

  public onSettingsButtonClick(): void {
    this.router.navigate([Route.SETTINGS]);
  }

  public onPlayButtonClick(): void {
    this.router.navigate([Route.PLAY]);
  }
}
