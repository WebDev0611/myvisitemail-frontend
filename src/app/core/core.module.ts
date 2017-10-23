import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth-guard.service';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { GlobalErrorHandler } from './handlers/global-error-handler';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        AuthGuard,
        AuthService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: ErrorHandler, useClass: GlobalErrorHandler}
    ]
})
export class CoreModule { }
