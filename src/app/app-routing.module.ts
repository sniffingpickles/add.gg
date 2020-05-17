import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { NewsfeedComponent } from "./pages/newsfeed/newsfeed.component";

const routes: Routes = [
  { 
    path: '', 
    redirectTo: "main/newsfeed",
    pathMatch:'full' 
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { 
        path: 'newsfeed', 
        component: NewsfeedComponent 
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
