import {AfterViewInit, Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-overlay-loader',
  templateUrl: './overlay-loader.component.html',
  styleUrls: ['./overlay-loader.component.scss']
})
export class OverlayLoaderComponent implements OnInit, AfterViewInit {
  constructor() {}

  // region Data

  public isActive: boolean = true

  // endregion

  // region Methods

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isActive = false
    })
  }

  // endregion

  // region Hooks

  ngOnInit(): void {}

  // endregion
}
