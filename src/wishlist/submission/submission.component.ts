import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Book } from 'src/models/book';
import { SubmissionHandlerService } from 'src/services/submission-handler.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  submission: Book = null;
  constructor(
    private submissionHandler: SubmissionHandlerService
  ) { }

  ngOnInit(): void {
    this.submissionHandler.getSubmission().pipe(first()).subscribe((book: Book) => {
      if(book) {
        this.submission = book;
      }
    });
  }

}
