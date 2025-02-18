import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  favorite(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Call of Duty',
    },
    {
      id: 2,
      name: 'Forza Horizon',
    },
    {
      id: 3,
      name: 'FIFA',
    },
  ];
}
