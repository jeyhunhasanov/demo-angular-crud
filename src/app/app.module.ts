import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HTTP_INTERCEPTORS} from '@angular/common/http'

import {AppComponent} from './app.component'

import {IndexRouteModule} from './routes/index.module'
import {SharedModule} from './shared/shared.module'
import {InterceptorService} from './services/interceptor.service'

import {LayoutComponent} from './layout/layout.component'
import {TopNavComponent} from './layout/top-nav/top-nav.component'
import {SideNavComponent} from './layout/side-nav/side-nav.component'
import {RootStoreModule} from './store/store.module'
import {OverlayLoaderComponent} from './layout/overlay-loader/overlay-loader.component'

@NgModule({
  declarations: [AppComponent, LayoutComponent, TopNavComponent, SideNavComponent, OverlayLoaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule, IndexRouteModule, SharedModule, RootStoreModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
