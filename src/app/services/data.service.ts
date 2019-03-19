import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }


  /**
   * This method fetches data from json file
   *
   * @memberof DataService
   */
  public FetchEmpdata(): Observable<any> {
    return this._httpClient.get(CONSTS.DATA_FILE);
  }
}
