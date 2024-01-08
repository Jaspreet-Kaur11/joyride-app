import { Component } from '@angular/core';
import { JoyRideService } from 'src/app/services/joy-ride.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(public joyRide: JoyRideService) {}
  ngAfterViewInit(): void {
    this.aboutSteps();
  }
  aboutSteps() {
    if (!this.joyRide.isTourCompleted) {
      this.joyRide.hideSteps();
      this.joyRide.showById('about');
    }
  }
}
