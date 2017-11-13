import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { ErrorModule } from './error/error.module';
import { CustomersModule } from './customers/customers.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        HomeModule,
        MenuModule,
        ErrorModule,
        CustomersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
