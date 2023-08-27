import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.scss'],
})
export class NewListingPageComponent {
  constructor(
    private router: Router,
    private listingsService: ListingsService
  ) {}

  ngOnInit() {}

  onSubmit({ name, description, price }: Listing): void {
    if (name && description && price)
      this.listingsService
        .createListing(name, description, price)
        .subscribe(() => {
          this.router.navigateByUrl('/my-listings');
        });
  }
}
