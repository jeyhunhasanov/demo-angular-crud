import {Injectable} from '@angular/core'
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar'
import {SnackbarComponent} from '../components/snackbar/snackbar.component'

interface ISnackbar {
  message: string
  action?: string
  horizontalPosition?: 'right' | 'left'
  verticalPosition?: 'top' | 'bottom'
  duration?: number
  panelClass?: string
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private config: MatSnackBarConfig | undefined

  constructor(private notifier: MatSnackBar) {}

  show({
    message,
    action = 'X',
    duration = 3000, // milliseconds for notifier, 3 secs
    horizontalPosition = 'right',
    verticalPosition = 'top',
    panelClass = 'success'
  }: ISnackbar) {
    this.config = new MatSnackBarConfig()
    this.config.horizontalPosition = horizontalPosition
    this.config.verticalPosition = verticalPosition
    this.config.duration = duration
    this.config.panelClass = 'snackbar-' + panelClass
    this.notifier.openFromComponent(SnackbarComponent, {
      ...this.config,
      data: {
        message
      }
    })
  }
}
