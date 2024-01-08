import { Component } from '@angular/core';
import { JoyRideService } from 'src/app/services/joy-ride.service';
import Step from 'shepherd.js/src/types/step';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(public joyRide: JoyRideService) {}
  ngAfterViewInit(): void {
    this.contactSteps();
  }
  contactSteps() {
    if (!this.joyRide.isTourCompleted) {
      this.joyRide.hideSteps();
      this.joyRide.showById('contact');
    }
  }
}
