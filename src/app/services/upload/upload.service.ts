import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadService {

  useURL = "http://localhost:3000/insertData";
  headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
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
    // let data = {
    //   name : formData.name,
    //   email : formData.email,
    //   subject : formData.subject,
    //   type: formData.type,
    //   rating : formData.rating,
    //   description : formData.desc,
    // }
    let urlsearchparams = new URLSearchParams();
    urlsearchparams.append("name", formData.name);
    urlsearchparams.append("email", formData.email);
    urlsearchparams.append("subject", formData.subject);
    urlsearchparams.append("type", formData.type);
    urlsearchparams.append("rating", formData.rating);
    urlsearchparams.append("description", formData.desc);
    
    let body = urlsearchparams.toString();

    console.log(body);

    return this._http.post("http://localhost:3000/feedback", body, {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch((err) => {
        console.log(err);
      })
  }

}
