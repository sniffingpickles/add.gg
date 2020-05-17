import { Component, OnInit, NgModule } from '@angular/core';
import jQuery from 'jquery';
import {AddGGService} from '../../services/addgg.service';


@Component({
  selector: 'app-quick-post',
  templateUrl: './quick-post.component.html',
  styleUrls: ['./quick-post.component.css']
})
export class QuickPostComponent implements OnInit {
  changeCount: number = 0;
  data:string=''
  postDataString: string;
  constructor(private addGGService: AddGGService) {  }
  ngOnInit(): void {
    
  }
  
  postComment(){
    console.log("Textarea value", this.postDataString)
    this.addGGService.getCookie('test', 'test', '5eb9e6ac3a488').subscribe((data) => {
      console.log(data["cookie"])
      this.addGGService.getQuickPost('5eb9e6ac3a488', data["cookie"], this.postDataString).subscribe((data) => {
        console.log(data)
      })
    })
  }

  textChange(event){
    console.log(typeof(event));
    this.postDataString = event;
    (function($) {
      $(document).ready(
        function (){
          var text_area_text = 1000 - event.length
          $('.form-textarea-limit-text').html(`${text_area_text} / 1000`)
        }
      )
    }) (jQuery);
  }

}
