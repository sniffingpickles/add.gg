import { Component, OnInit } from '@angular/core';
import {AddGGService} from '../../services/addgg.service';
import {Activity} from '../../models/activity.model';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  loadScript: Promise<any>;
  activities: Activity[] = [];
  constructor( private addGGService: AddGGService) {

  }
  ngOnInit(): void {
    this.addGGService.getCookie('test', 'test', '5eb9e6ac3a488').subscribe((data) => {
      this.addGGService.getActivities('5eb9e6ac3a488', data["cookie"], 3).subscribe((data) => {
        var activities = data["activities"];
        activities.forEach((activity,index) => {
          console.log("Activites", activity)
          var temp: Activity = new Activity()
          temp.content = activity["content"]
          if(activity["content"].includes("[twitch_url]")){
            temp.twitchTVURL = this.extractTwitchURL(activity["content"])
            temp.content = this.removeSubString(temp.content, "[twitch_url] " + temp.twitchTVURL + " [/twitch_url]")
          } else {
            temp.twitchTVURL = null
          }
          if (activity["content"].includes("[bpfb_images]")){
            var temp_image_str = this.extractImageString(activity["content"])
            temp.images = this.extractImageURLs(activity["content"])
            temp.content = this.removeSubString(temp.content, "[bpfb_images] " + temp_image_str + "\n[/bpfb_images]")
          }else {
            temp.images = null
          }
          if (activity["content"].includes("[youtube_url]")){
            temp.youtubeVideoURL = this.extractYoutubeURL(activity["content"]).replace("watch?v=", "embed/")

            temp.content = this.removeSubString(temp.content, "[youtube_url] " + this.extractYoutubeURL(activity["content"]) + " [/youtube_url]")
          } else {
            temp.youtubeVideoURL = null;
          }
          temp.action = activity["action"]
          temp.postDate = activity["time_since"]
          temp.isFav = activity["is_fav"]
          temp.avatarImage = "http:" + activity["user"][0]["avatar"]
          temp.num = index
          this.activities.push(temp)
        });
      })
    })
  }

  extractTwitchURL(content: string){
    return content.substring(content.lastIndexOf("[twitch_url]")+13, content.lastIndexOf("[/twitch_url]")-1)
  }

  extractYoutubeURL(content: string){
    return content.substring(content.lastIndexOf("[youtube_url]")+14, content.lastIndexOf("[/youtube_url]")-1)
  }
  extractImageString(content: string){
    var images = content.substring(content.lastIndexOf("[bpfb_images]")+12, content.lastIndexOf("[/bpfb_images]")-2)
    return images;
  }
  extractImageURLs(content: string){
    var images = content.substring(content.lastIndexOf("[bpfb_images]")+12, content.lastIndexOf("[/bpfb_images]")-2)
    var image_urls = images.split(`\n`);
    return image_urls;
  }
  removeSubString(content: string, substring:string){
    return content.replace(substring, "");
  }
}
