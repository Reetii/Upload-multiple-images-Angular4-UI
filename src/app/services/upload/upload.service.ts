import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadService {

  useURL = "http://localhost:3000/insertData";
  headers = new Headers({
    'Content-Type': 'application/json'
  })

  constructor(
    private _http : Http
  ) { }

  uploadFiles(formData){
    // let urlsearchparams = new URLSearchParams();
    return this._http.post(this.useURL, formData)
    .toPromise()
    .then( res => res.json())
    .catch( (err) => {
      console.log(err);
    })
  }

  sendFeedback(formData) {
    console.log(formData);
    let data = {
      name : formData.name,
      email : formData.email,
      subject : formData.subject,
      type: formData.type,
      rating : formData.rating,
      description : formData.desc,
    }
    // let urlsearchparams = new URLSearchParams();
    return this._http.post("http://localhost:3000/feedback", data, {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch((err) => {
        console.log(err);
      })
  }

}
