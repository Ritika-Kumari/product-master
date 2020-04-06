import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 

@Injectable()
export class CommonApiService {

  theBaseUrl: string;
  constructor(private _thehttp: HttpClient) {
    this.theBaseUrl = environment.apiEndPoint;
  }
  

  SCMLogin() { 
  }
}
