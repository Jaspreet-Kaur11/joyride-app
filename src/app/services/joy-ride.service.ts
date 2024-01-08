import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ShepherdService } from 'angular-shepherd';
import Step from 'shepherd.js/src/types/step';

const BUTTONS = {
  back: {
    classes: 'custom-back-button',
    text: 'Back',
    type: 'back',
  },
};
@Injectable({
  providedIn: 'root',
})
export class JoyRideService {
  constructor(
    private shepherdService: ShepherdService,
    private router: Router
  ) {}
  anytourActive = false;
  isTourCompleted = false;
  exitButton = {
    text: 'Finish Tour',
    classes: 'custom-cancel-button',
    secondary: true,
    action: () => {
      this.destroyTour();
    },
  };

  startTour(steps: Step.StepOptions[]) {
    const defaultOptions = {
      classes: 'custom-default-class',
      scrollTo: true,
      cancelIcon: {
        enabled: false,
      },
    };
    this.shepherdService.defaultStepOptions = defaultOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;

    this.shepherdService.addSteps(steps);
    this.shepherdService.start();
  }
  addToCurrentTour(steps: Step.StepOptions[]) {
    this.shepherdService.addSteps(steps);
    this.shepherdService.next();
  }
  showById(id: string | number | undefined) {
    this.shepherdService.tourObject.show(id);
  }
  hideSteps() {
    this.shepherdService.hide();
  }
  completeTour() {
    this.isTourCompleted = true;
    this.anytourActive = false;
    this.shepherdService.complete();
  }
  destroyTour() {
    this.isTourCompleted = true;
    this.anytourActive = false;
    this.shepherdService.complete();
  }
  getSteps() {
    return [
      {
        buttons: [
          this.exitButton,
          {
            text: 'Next',
            classes: 'custom-next-button',
            action: () => {
              this.shepherdService.next();
            },
          },
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        id: 'welcome',
        title: 'Welcome to the Site.',
        text: ' Welcome to the Site! This is welcome step',
      },
      {
        attachTo: {
          element: '.contact',
          on: 'right',
        },
        buttons: [
          this.exitButton,
          {
            text: 'Back',
            classes: 'custom-back-button',
            action: () => {
              this.hideSteps();
              this.router.navigate(['/']);
            },
          },

          {
            text: 'Next',
            classes: 'custom-next-button',
            action: () => {
              this.router.navigate(['/contact']);
            },
          },
        ],
        id: 'choose contact',
        title: 'Choose Contact',
        text: 'Click on Contact Page to go to contact',
      },
      {
        buttons: [
          this.exitButton,
          BUTTONS.back,
          {
            text: 'Next',
            classes: 'custom-next-button',
            action: () => {
              this.shepherdService.next();
            },
          },
        ],
        id: 'contact',
        title: 'Contact Page',
        text: 'This is Contact Page',
      },
      {
        attachTo: {
          element: '.about',
          on: 'right',
        },
        buttons: [
          this.exitButton,
          {
            text: 'Back',
            classes: 'custom-back-button',
            action: () => {
              this.hideSteps();
              this.router.navigate(['/contact']);
            },
          },

          {
            text: 'Next',
            classes: 'custom-next-button',
            action: () => {
              this.router.navigate(['/about']);
            },
          },
        ],
        id: 'choose about',
        title: 'Choose About',
        text: 'Click on About Page to go to about',
      },
      {
        buttons: [this.exitButton, BUTTONS.back],
        id: 'about',
        title: 'About Page',
        text: 'This is About Page',
      },
    ];
  }
}
