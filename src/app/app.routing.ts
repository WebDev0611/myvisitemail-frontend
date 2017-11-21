import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ManageCustomersComponent } from './customers/manage-customers/manage-customers.component';
import { LoginGuard } from './core/guards/login-guard.service';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { LockGuard } from './core/guards/lock-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'error', component: ErrorComponent },
    { path: 'lock', component: LockScreenComponent, canActivate: [LockGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'add-customer', component: AddCustomerComponent, canActivate: [AuthGuard] },
    { path: 'manage-customers', component: ManageCustomersComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

