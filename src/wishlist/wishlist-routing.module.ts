import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmissionComponent } from './submission/submission.component';

import { WishlistComponent } from './wishlist.component';

const routes: Routes = [
  { path: '', component: WishlistComponent },
  { path: 'submitted', component: SubmissionComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
