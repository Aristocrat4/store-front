import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings, fakeMyListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.scss'],
})
export class EditListingPageComponent {
  listing: Listing | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.listingsService
        .getListingById(id)
        .subscribe((listing) => (this.listing = listing));
    console.log(this.listing);
    console.log(id);
  }

  onSubmit({ name, description, price }: Listing): void {
    if (name && description && price)
      if (this.listing?.id)
        this.listingsService
          .editListing(this.listing?.id, name, description, price)
          .subscribe(() => {
            this.router.navigateByUrl('/my-listings');
          });
  }
}
