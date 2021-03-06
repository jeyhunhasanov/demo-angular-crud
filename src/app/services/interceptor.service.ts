import {Injectable} from '@angular/core'
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError, map} from 'rxjs/operators'
import {Store} from '@ngrx/store'

import {ACTION_PAGINATION_OPTIONS} from '../store/pagination/actions'
import {IPaginationOptions} from '../models/General'
import {SnackbarService} from './snackbar.service'

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private store: Store<{}>, private snackbar: SnackbarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.headers.has('Accept')) {
      request = request.clone({setHeaders: {Accept: 'application/json'}})
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({setHeaders: {'Content-Type': 'application/json'}})
    }

    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNTA5YjJlNDAyMTIzMTMxMDdhMDkiLCJpYXQiOjE2NTMyOTc1MjF9.LUrDK6gmwErCbvHu00bqq8C8pDBYKnc37r-PgcWqWZA'
    request = request.clone({setHeaders: {'auth-token': accessToken}})

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const pageIndex = Number(event.headers.get('X-Pagination-Page'))
          const pageSize = Number(event.headers.get('X-Pagination-Limit'))
          const length = Number(event.headers.get('X-Pagination-Count'))
          if (pageIndex && pageSize && length) {
            const paginationOptions: IPaginationOptions = {
              pageSize,
              pageIndex,
              length
            }
            this.store.dispatch(ACTION_PAGINATION_OPTIONS({paginationOptions}))
          }
        }
        return event
      }),
      catchError((error) => {
        this.snackbar.show({
          message: `${error.error[0].field} ${error.error[0].message}`,
          panelClass: 'error'
        })
        return throwError(error)
      })
    )
  }
}
