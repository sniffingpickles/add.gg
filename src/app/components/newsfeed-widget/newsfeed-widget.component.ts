import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import jQuery from 'jquery';

declare var $: any;
@Component({
  selector: 'app-newsfeed-widget',
  templateUrl: './newsfeed-widget.component.html',
  styleUrls: ['./newsfeed-widget.component.css']
})
export class NewsfeedWidgetComponent implements OnInit {
  @Input() content: string;
  @Input() postDate: string;
  @Input() avatarImage: string;
  @Input() isFav: any;
  @Input() action: string;
  @Input() youtubeVideoURL?: string;
  @Input() twitchTVVideoURL?: string;
  @Input() images?:string[];

  youtubeURL;
  imagesCount: number;
  showImages: string[]; 
  constructor(private domSanitizer: DomSanitizer) {
  }
  ngOnInit(): void {

    this.youtubeURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.youtubeVideoURL);
    if(this.images.length > 5) {
      var moreText = +this.images.length-4
      this.showImages = [this.images[0], this.images[1], this.images[2], this.images[3], moreText.toString()]
    } else {
      this.showImages = this.images
    }
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
          isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        "assets/js/utils/app.js",
        "assets/js/utils/page-loader.js",
        "assets/js/vendor/simplebar.min.js",
        "assets/js/utils/liquidify.js",
        "assets/js/vendor/xm_plugins.min.js",
        "assets/js/vendor/xm_dropdown.min.js",
        "assets/js/vendor/tiny-slider.min.js",
        "assets/js/vendor/Chart.bundle.min.js",
        "assets/js/global/global.hexagons.js",
        "assets/js/global/global.tooltips.js",
        "assets/js/global/global.popups.js",
        "assets/js/header/header.js",
        "assets/js/content/content.js",
        "assets/js/sidebar/sidebar.js",
        "assets/js/form/form.utils.js",
        "assets/js/utils/svg-loader.js"
      ];

      for (var i = 0; i < dynamicScripts.length; i++) {
          let node = document.createElement('script');
          node.src = dynamicScripts [i];
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
      
   
    setTimeout(function() {
      (function ($){
        $(document).ready(
          function () {
            $('.page-loader').addClass('hidden')
          }) 
      }) (jQuery)
    }, 3000)

    console.log("content", this.content)
    console.log("postDate", this.postDate)
    console.log("avatarImage", this.avatarImage)
    console.log("action", this.action)
    console.log("youtubeVideoURL", this.youtubeVideoURL)
    console.log("twitchTVVideoURL", this.twitchTVVideoURL)
    console.log("images", this.images)

  }

}
