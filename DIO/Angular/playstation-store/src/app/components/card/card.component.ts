import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() gameCover:string = ""
	@Input() gameLabel:string=""
	@Input() gameType:string ="XPTO | PS4"
	@Input() gamePrice:string = "R$ 399,90"
}
