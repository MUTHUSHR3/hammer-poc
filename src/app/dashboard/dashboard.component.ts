import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { filter } from 'lodash-es';
import { CONSTS } from '../shared/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  public empResults: any[] = [];

  ngOnInit() {
    this._loadData();
  }

  /**
   * This method triigers cservice call to get data
   *
   * @private
   * @memberof DashboardComponent
   */
  private _loadData(): void {
    this._dataService.FetchEmpdata().subscribe(data => {
      if (data && data.body) {
        this._filterData(data.body);
      }
    });
  }

  /**
   *
   *
   * @returns {string}
   * @memberof DashboardComponent
   */
  public getCategoryValue(id: string): string {
    const categoryObj = filter(CONSTS.EMP_CATEGORIES, (obj) => {
      return obj.id === id;
    });
    if (categoryObj.length > 0) {
      return categoryObj[0].value + ',';
    } else {
      return ',';
    }
  }

  /**
   * This method filters data based on active status
   *
   * @private
   * @memberof DashboardComponent
   */
  private _filterData(results: any[]): void {
    this.empResults = filter(results, (obj) => {
      return obj.state === 'active';
    });
  }

}
