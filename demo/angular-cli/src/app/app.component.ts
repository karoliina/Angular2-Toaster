import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToasterService, Toast, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  config1 = new ToasterConfig({
    toastContainerId: 1,
    positionClass: 'toast-top-left',
    titleClass: 'title-test-1'
  });

  config2 = new ToasterConfig({
    toastContainerId: 2,
    positionClass: 'toast-top-right',
    titleClass: 'title-test-2'
  });

  constructor(private toasterService: ToasterService) { }

  ngAfterViewInit() {
    let toast1: Toast = {
      type: 'info',
      title: 'Container 1, this title should be blue',
      toastContainerId: 1
    };
    this.toasterService.pop(toast1);

    let toast2: Toast = {
      type: 'info',
      title: 'Container 2, this title should be red',
      toastContainerId: 2
    };
    this.toasterService.pop(toast2);
  }
}
