import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SidebarComponent } from './components/main-container/sidebar/sidebar.component';
import { SidebarContentComponent } from './components/main-container/sidebar/sidebar-content/sidebar-content.component';
import { ChatAreaComponent } from './components/main-container/chat-area/chat-area.component';
import { DefaultPageComponent } from './components/main-container/chat-area/default-page/default-page.component';
import { RoomChatComponent } from './components/main-container/chat-area/room-chat/room-chat.component';
import {MaterialModule} from "./shared/material.module";
import { LoginComponent } from './components/login/login.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SidebarComponent,
    SidebarContentComponent,
    ChatAreaComponent,
    DefaultPageComponent,
    RoomChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
