import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Book } from 'src/models/book';

@Injectable({
  providedIn: 'root'
})
export class SubmissionHandlerService {

  private bookSubmission = new BehaviorSubject<Book>(null);

  doSubmission(book: Book) {
    if(book) {
      this.bookSubmission.next(book);
    }
    
  }

  getSubmission() {
    return this.bookSubmission.asObservable();
  }

  constructor() { }
}
