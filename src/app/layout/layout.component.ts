import {Component, OnDestroy, OnInit} from '@angular/core'
import {Subscription} from 'rxjs'
import {MediaChange, MediaObserver} from '@angular/flex-layout'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  constructor(media: MediaObserver) {
    this.mediaWatcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        if (this.sideNavOpened) {
          this.sideNavOpened = false
        }
        this.sideNavMode = 'over'
      } else {
        this.sideNavOpened = true
        this.sideNavMode = 'side'
      }
      if (change.mqAlias === 'xs') {
        this.toolBarHeight = 56
      } else {
        this.toolBarHeight = 64
      }
    })
  }

  // region Data

  sideNavOpened: boolean = true
  sideNavMode: 'side' | 'over' = 'side'
  toolBarHeight = 64
  private readonly mediaWatcher: Subscription

  // endregion

  // region Hooks

  ngOnInit() {}

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe()
  }

  // endregion
}
