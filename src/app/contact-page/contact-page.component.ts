import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  email: string = '';
  message: string = '';
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.listingsService.getListingById(id).subscribe((listing) => {
        this.listing = listing;
        if (this.listing?.name)
          this.message = `Hi, Im interested in your ${this.listing?.name.toLocaleLowerCase()}`;
      });
  }

  sendMessage(): void {
    alert('Youre message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
