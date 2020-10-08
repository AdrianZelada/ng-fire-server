import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface ModelConnection {
  model: string;
}

export const MODEL_REQUEST = new InjectionToken<ModelConnection>('MODEL REQUEST');

export interface RepositoryData {
  getData(): Observable<any>;
  filter(query: any): Observable<any>;
  add(data: any): Observable<any>;
  update(data: any): Observable<any>;
  remove(data: any): Observable<any>;
}

// export interface RepositoryData {
//   getData(query: any): Observable<any>;
//   filter<T>(query: any): Observable<Array<T>>;
//   add<T>(data: any): Observable<T>;
//   remove<T>(data: any): Observable<T>;
//   update<T>(data: any): Observable<T>;
// }

