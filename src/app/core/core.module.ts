import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth-guard.service';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { GlobalErrorHandler } from './handlers/global-error-handler';
import { UserService } from './services/user-service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: ErrorHandler, useClass: GlobalErrorHandler},
        UserService
    ]
})
export class CoreModule { }
