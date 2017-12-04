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
import { SharedModule } from './shared/shared.module';
import { LockScreenModule } from './lock-screen/lock-screen.module';
import { ResortSettingsModule } from './resort-settings/resort-settings.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        LockScreenModule,
        HomeModule,
        MenuModule,
        ErrorModule,
        ProfileModule,
        CustomersModule,
        ResortSettingsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
