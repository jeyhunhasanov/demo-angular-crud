import {Component, EventEmitter, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  constructor() {}

  // region Props

  @Output() sideNavToggled = new EventEmitter<void>()

  // endregion

  // region Methods

  toggleSidebar() {
    this.sideNavToggled.emit()
  }

  // endregion

  ngOnInit() {}
}
