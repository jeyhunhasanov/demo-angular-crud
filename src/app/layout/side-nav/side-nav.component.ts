import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  routes = [
    {
      path: '/',
      icon: 'home',
      text: 'Home'
    },
    {
      path: '/users',
      icon: 'group',
      text: 'Users'
    }
  ]

  constructor() {}

  ngOnInit() {}
}
