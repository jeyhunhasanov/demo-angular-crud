import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {HttpClientModule} from '@angular/common/http'
import {MatListModule} from '@angular/material/list'
import {MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSelectModule} from '@angular/material/select'
import {MatDialogModule} from '@angular/material/dialog'
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider'
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {ReactiveFormsModule} from '@angular/forms'
import {MatRadioModule} from '@angular/material/radio'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatProgressBarModule} from '@angular/material/progress-bar'
// Custom Global Components
import {DialogComponent} from '../components/dialog/dialog.component'
import {TextFieldComponent} from '../components/text-field/text-field.component'
import {RadioButtonComponent} from '../components/radio-button/radio-button.component'
import {LoadingComponent} from '../components/loading/loading.component'
// Custom Global Directives
import {InputCapitalizeDirectiveModule} from '../directives/input-capitalize.directive'
import {InputLowercaseDirectiveModule} from '../directives/input-lowercase.directive'
import {InputUppercaseDirectiveModule} from '../directives/input-uppercase.directive'

@NgModule({
  declarations: [DialogComponent, TextFieldComponent, RadioButtonComponent, LoadingComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTooltipModule,
    FlexModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTooltipModule,
    FlexModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    // Global Components
    DialogComponent,
    TextFieldComponent,
    RadioButtonComponent,
    LoadingComponent,
    // Global Directives
    InputCapitalizeDirectiveModule,
    InputLowercaseDirectiveModule,
    InputUppercaseDirectiveModule
  ]
})
export class SharedModule {}
