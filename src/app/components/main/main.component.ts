import { Component, OnInit, ElementRef } from '@angular/core';
import { UploadService } from '../../services/upload/upload.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  textData:string = "";

  constructor(
    private _uploadService : UploadService,
    private _el : ElementRef
  ) { }

  ngOnInit() {
  }

  onClicked(text){
    let inputEl: HTMLInputElement = this._el.nativeElement.querySelector('#images');
    console.log(inputEl.files.item(0));

    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      // formData.append('images', inputEl.files.item(0));
      for(var i=0; i< fileCount; i++){
        formData.append('images', inputEl.files.item(i));  
      }
      formData.append('text', text.value);
      console.log(formData.toString());
      console.log("Uploading");

      this._uploadService.uploadFiles(formData)
        .then(res => {
          console.log(res);
        })
        .catch( err => {
          console.log(err);
        })
    }
  }


}
