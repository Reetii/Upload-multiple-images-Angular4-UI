import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  items = [
        { "title":"teaching methodology", "imageURL":"http://rgacademy.co.in/images/Teaching%20Methodology-min.JPG", "description":"The experienced Faculty Team of RG Academy is quite well versed with latest contents in the academic world. Teaching methodology is incorporated in such a manner that student is taught how to approach a given situation, rather than just reaching to the answer. Main focus is to enhance analytical logical and problem solving skills so that student performs better in every exam."},
        { "title":"teaching methodology", "imageURL":"http://rgacademy.co.in/images/Teaching%20Methodology-min.JPG", "description":"The experienced Faculty Team of RG Academy is quite well versed with latest contents in the academic world. Teaching methodology is incorporated in such a manner that student is taught how to approach a given situation, rather than just reaching to the answer. Main focus is to enhance analytical logical and problem solving skills so that student performs better in every exam."},
        { "title":"teaching methodology", "imageURL":"http://rgacademy.co.in/images/Teaching%20Methodology-min.JPG", "description":"The experienced Faculty Team of RG Academy is quite well versed with latest contents in the academic world. Teaching methodology is incorporated in such a manner that student is taught how to approach a given situation, rather than just reaching to the answer. Main focus is to enhance analytical logical and problem solving skills so that student performs better in every exam."}

    ];

  constructor() { }

  ngOnInit() {
  }

}
