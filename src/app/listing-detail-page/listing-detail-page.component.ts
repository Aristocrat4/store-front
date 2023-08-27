import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.scss'],
})
export class ListingDetailPageComponent {
  isLoading: boolean = true;
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.listingsService.getListingById(id).subscribe((listing) => {
        this.listing = listing;
        this.isLoading = false;
      });
    if (id)
      this.listingsService
        .addViewToListing(id)
        .subscribe(() => console.log('view is updated!'));
  }
}
