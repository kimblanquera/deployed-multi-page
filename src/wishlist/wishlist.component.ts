import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/models/book';
import { SubmissionHandlerService } from 'src/services/submission-handler.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  bookForm: FormGroup;
  fb: FormBuilder =  new FormBuilder();
  genres: string[] = [
    'Action & Adventure',
    'Classics',
    'Comics',
    'Crime',
    'Fantasy',
    'Horror',
    'Non-fiction',
    'Other',
    'Romance',
    'Science Fiction'
  ];

  constructor(
    private submissionHandler: SubmissionHandlerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', [Validators.required, Validators.pattern("^[a-zA-Z ,.'-]+$")]],
      genre: ['', Validators.required],
      dateAdded: []
    })
  }

  submitForm() {
    const submittedBook: Book = {
      ...this.bookForm.value,
      dateAdded: new Date()
    }

    this.submissionHandler.doSubmission(submittedBook);
    this.router.navigate(['wishlist/submitted']);
  }

}
