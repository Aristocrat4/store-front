import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.scss'],
})
export class ListingDataFormComponent {
  @Input() buttonText: string | undefined;
  @Input() currentName: string | undefined = '';
  @Input() currentDescription: string | undefined = '';
  @Input() currentPrice: number | undefined;

  name: string | undefined = 'hey';
  description: string | undefined = '';
  price: number | undefined;

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: 'null',
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0,
    });
  }
}
