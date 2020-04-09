import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubNavBarComponent } from './sub-nav-bar/sub-nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditorComponent } from './editor/editor.component';
import { CallbackComponent } from './callback.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ExploreComponent } from './explore/explore.component';

const appRoutes: Routes = [
  // { path: 'signin', component: SignInComponent },
  // { path: 'create-account', component: CreateAccountComponent },
  { path: 'explore', component: ExploreComponent },
  { 
    path: 'editor',
    component: EditorComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '',
    redirectTo: '/explore',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SubNavBarComponent,
    SideNavComponent,
    SignInComponent,
    CreateAccountComponent,
    EditorComponent,
    CallbackComponent,
    ExploreComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
