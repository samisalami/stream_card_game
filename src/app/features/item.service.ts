import { Injectable } from '@angular/core';
export interface Item {
  name: string;
  cooldownInMs: number;
  description: string;
  onActivate: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  public getitems(): Item[] {
    return [
      {
        name: 'alwaysSleepy',
        cooldownInMs: 2000,
        onActivate: () => {
          const id = window.setTimeout(() => {
            console.log('I am awake');
            window.clearTimeout(id);
          }, 1000)
        },
        description: 'very sleepy'
      },
      {
        name: 'doinnis',
        cooldownInMs: 500,
        onActivate: () => {
          console.log('Pet dog');
        },
        description: 'has very cute dogs'
      },
      {
        name: 'prince',
        cooldownInMs: 5000,
        onActivate: () => {
          console.log('I am still here');
        },
        description: 'Has wasted the most points by far'
      }
    ];
  }
}
