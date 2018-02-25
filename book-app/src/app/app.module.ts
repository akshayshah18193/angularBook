import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { FindBookComponent } from './find-book/find-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { RouterModule } from '@angular/router';
import { myroutes } from './myroutes';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    DeleteBookComponent,
    UpdateBookComponent,
    FindBookComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
