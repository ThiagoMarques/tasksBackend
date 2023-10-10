import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { Card } from 'src/app/types/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards: Card[] = [
    {
      gameCover: "assets/img/bt-1.jpg",
      gameLabel: "DIGITAL",
      gameType: "DIGITAL | PS4",
      gamePrice: "R$ 129,99"
    },
    {
      gameCover: "assets/img/bt-4.jpg",
      gameLabel: "EXCLUSIVE",
      gameType: "DISC | PS5",
      gamePrice: "R$ 269,99"
    },
    {
      gameCover: "assets/img/ac-cover.jpg",
      gameLabel: "BEST OF YEAR",
      gameType: "DIGITAL | PS5",
      gamePrice: "R$ 369,99"
    },
    {
      gameCover: "assets/img/bt-hardline.jpg",
      gameLabel: "NEW",
      gameType: "DIGITAL | PS3 PS4 PS5",
      gamePrice: "R$ 369,99"
    }
  ];
}
