import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../features/item.service';

@Component({
  selector: 'app-play',
  imports: [],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent implements OnInit {

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.fight();
  }

  private fight(): void {
    const playerItems = this.itemService.getitems();
    let time = 0;
    window.setInterval(() => {
      time += 500;

      for (const item of playerItems) {
        if (time % item.cooldownInMs === 0) {
          console.log(time);
          console.log(item.name);
          item.onActivate();
        }
      }

    }, 500)
  }
}
