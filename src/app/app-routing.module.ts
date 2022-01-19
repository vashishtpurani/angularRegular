import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainContainerComponent} from "./components/main-container/main-container.component";
import {RoomChatComponent} from "./components/main-container/chat-area/room-chat/room-chat.component";
import {DefaultPageComponent} from "./components/main-container/chat-area/default-page/default-page.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path:'',
    component:MainContainerComponent,
    children:[
      {
        path:'room/:id',
        component: RoomChatComponent
      },
      {
        path:'',
        component: DefaultPageComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
