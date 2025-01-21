import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Location} from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [
    MatButton
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(private location: Location) {
  }


  public onBackButtonClick(): void {
    this.location.back();
  }
}
