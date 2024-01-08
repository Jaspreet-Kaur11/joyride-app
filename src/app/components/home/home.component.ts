import { AfterViewInit, Component } from '@angular/core';
import { JoyRideService } from 'src/app/services/joy-ride.service';
import Step from 'shepherd.js/src/types/step';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  constructor(public joyRide: JoyRideService) {}
  ngAfterViewInit(): void {
    this.homeTourSteps();
  }
  homeTourSteps() {
    if (!this.joyRide.isTourCompleted) {
      const steps = this.joyRide.getSteps();
      this.joyRide.startTour(steps as Array<Step.StepOptions>);
    }
  }
}
