import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth-guard.service';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { GlobalErrorHandler } from './handlers/global-error-handler';
import { UserService } from './services/user-service';
import { ApiRequestsInterceptor } from './interceptors/api-requests-interceptor.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ApiRequestsInterceptor, multi: true},
        {provide: ErrorHandler, useClass: GlobalErrorHandler},
        UserService
    ]
})
export class CoreModule { }
