import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDemoComponent } from './component/student-demo/student-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './component/alert/alert.component';
import { AlertService } from './service/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentDemoComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
