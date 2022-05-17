import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppComponent} from './app.component'

import {IndexRouteModule} from './routes/index.module'
import {SharedModule} from './shared/shared.module'

import {LayoutComponent} from './layout/layout.component'
import {TopNavComponent} from './layout/top-nav/top-nav.component'
import {SideNavComponent} from './layout/side-nav/side-nav.component'

@NgModule({
  declarations: [AppComponent, LayoutComponent, TopNavComponent, SideNavComponent],
  imports: [BrowserModule, BrowserAnimationsModule, IndexRouteModule, SharedModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
