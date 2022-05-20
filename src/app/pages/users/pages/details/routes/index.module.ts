import {Routes} from '@angular/router'
import {DetailsComponent} from '../details.component'
import {DetailsModule} from '../modules/index.module'

export const DetailsRoute: Routes = [
  {
    path: 'details',
    component: DetailsComponent,
    loadChildren: () => DetailsModule,
    data: {animationState: 'UserDetails'}
    // children: [
    //   {
    //     path: '',
    //     component: DetailsComponent,
    //     loadChildren: () => DetailsModule
    //   }
    // ]
  }
]
