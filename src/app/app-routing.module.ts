import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'firebase-s', loadChildren: './firebase-s/firebase-s.module#FirebaseSPageModule' },
  { path: 'firebase-s/:id', loadChildren: './firebase-s/firebase-s.module#FirebaseSPageModule' },
  { path: 'user-detail', loadChildren: './user-detail/user-detail.module#UserDetailPageModule' },
  { path: 'hotel-detail', loadChildren: './hotel-detail/hotel-detail.module#HotelDetailPageModule' },
  { path: 'hotel-detail/:id', loadChildren: './hotel-detail/hotel-detail.module#HotelDetailPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
