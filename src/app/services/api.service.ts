import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiServices {
  private baseURL = environment.baseURL

  constructor(private http: HttpClient) {}

  get(url: string, options?: any): Observable<any> {
    return this.http.get<any>(`${this.baseURL}${url}`, options).pipe(
      map((result: any) => {
        return result
      })
    )
  }

  post(url: string, data: any, options?: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}${url}`, data, options).pipe(
      map((result: any) => {
        return result
      })
    )
  }

  put(url: string, data: any, options?: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}${url}`, data, options).pipe(
      map((result: any) => {
        return result
      })
    )
  }

  delete(url: string, options: any): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}${url}`, options).pipe(
      map((result: any) => {
        return result
      })
    )
  }
}
