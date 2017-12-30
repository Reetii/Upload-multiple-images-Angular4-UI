import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UploadService } from '../../services/upload/upload.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  showRatingError:boolean = false;

  feedbackData = {
    name : "",
    email : "",
    subject : "",
    type: "",
    rating : "",
    desc : ""
  }

  feedbackForm = new FormGroup({
    name : new FormControl(this.feedbackData.name, [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl(this.feedbackData.email, [
      Validators.required,
      Validators.email
    ]),
    subject: new FormControl(this.feedbackData.subject, [
      Validators.required
    ]),
    type: new FormControl(this.feedbackData.type, [
      Validators.required
    ]),
    desc: new FormControl(this.feedbackData.desc, [
      Validators.required
    ])
  })

  constructor(
    private _uploadService : UploadService
  ) { }

  ngOnInit() {
  }

  feedbackSubmit(){
    if(this.feedbackData.type == 'Feedback' && this.feedbackData.rating == ""){
      this.showRatingError = true;
    }else{
      this.showRatingError = false;
      console.log(this.feedbackData);
      this._uploadService.sendFeedback(this.feedbackData)
      .then( res => {
        console.log(res);
      })
      .catch( err => {
        console.log(err);
      })
    }
    
  }

  setRating(element, rating){
    this.feedbackData.rating = rating;
    // element.target.style.backgroundColor = "#ffffff";
    console.log(element.target.style.backgroundColor);
  }

}
