import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
// import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages = [
      {
        small: 'https://images.pexels.com/photos/1749057/pexels-photo-1749057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        medium: 'https://images.pexels.com/photos/3560451/pexels-photo-3560451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        big: 'https://images.pexels.com/photos/3041347/pexels-photo-3041347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      }
    ];
  }

  // getImages() {
  //   const imageUrls = [];
  //   for (const photo of this.user.photos) {
  //     imageUrls.push({
  //       small: photo.url,
  //       medium: photo.url,
  //       big: photo.url,
  //       description: photo.description
  //     });
  //   }
  //   return imageUrls;
  // }
}
