import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login/pages/login/login.component';
import { SignupComponent } from './signup/pages/signup/signup.component';
import { UserRoutingModule } from './user/user-routing.module';

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule),
    canActivate:[AuthGuard]
  },
  {
    path: "book",
    loadChildren : () => import("./book/book.module").then(m => m.BookModule),
    canActivate:[AuthGuard]
  },
  {
    path: "profile",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule),
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
