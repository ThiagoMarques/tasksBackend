import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss']
})
export class CardPricingComponent {
	@Input() gameType: string = ''
	@Input() gamePrice: string = ''
}
