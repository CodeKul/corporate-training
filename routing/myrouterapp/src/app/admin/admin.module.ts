import { JokeService } from './../joke.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent],
  providers : [JokeService]
})
export class AdminModule { }
