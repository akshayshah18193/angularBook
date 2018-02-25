import { ListBooksComponent } from './list-books/list-books.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { Routes } from '@angular/router';
import { FindBookComponent } from './find-book/find-book.component';

export const myroutes: Routes = [
    {path: 'addbook', component: AddBookComponent},
    {path: 'deletebook', component: DeleteBookComponent},
    {path: 'findbook', component: FindBookComponent},
    {path: 'listbooks', component: ListBooksComponent},
    {path: 'updatebook', component: DeleteBookComponent}
];
