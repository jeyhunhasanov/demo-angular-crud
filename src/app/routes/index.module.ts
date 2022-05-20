import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {BrowserModule} from '@angular/platform-browser'
import {NotFoundPageComponent} from './not-found-page/not-found-page.component'
import {LayoutComponent} from '../layout/layout.component'
import {HomeRoute} from '../pages/home/routes/index.module'
import {UsersRoute} from '../pages/users/routes/index.module'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...HomeRoute,
      ...UsersRoute,
      {
        path: '**',
        component: NotFoundPageComponent,
        data: {animationState: 'NotFoundPage'}
      }
    ]
  }
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IndexRouteModule {}
