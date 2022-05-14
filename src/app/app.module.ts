import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {CommonModule} from '@angular/common'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatSelectModule} from '@angular/material/select'

import {IndexRouteModule} from './routes/index.module'
import {AppComponent} from './app.component'
import {LayoutComponent} from './layout/layout.component'
import {TopNavComponent} from './layout/top-nav/top-nav.component'
import {SideNavComponent} from './layout/side-nav/side-nav.component'

@NgModule({
  declarations: [AppComponent, LayoutComponent, TopNavComponent, SideNavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IndexRouteModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
