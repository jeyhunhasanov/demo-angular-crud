import {HomeComponent} from '../home.component'
import {Routes} from '@angular/router'
import {HomeModule} from '../modules/index.module'

export const HomeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {animationState: 'Home'},
    loadChildren: () => HomeModule
  }
]
