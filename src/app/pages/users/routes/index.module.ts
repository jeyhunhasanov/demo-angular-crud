import {Routes} from '@angular/router'

import {UsersComponent} from '../users.component'
import {UsersModule} from '../modules/index.module'
import {DetailsRoute} from '../pages/details/routes/index.module'

export const UsersRoute: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersComponent,
        loadChildren: () => UsersModule
      },
      ...DetailsRoute
    ]
  }
]
