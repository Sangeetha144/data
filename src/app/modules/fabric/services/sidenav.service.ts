import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private baseUrl = 'http://localhost:3000/alternateDataPartners';
 
  constructor(private http: HttpClient) { }
 
  getDropdownData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
