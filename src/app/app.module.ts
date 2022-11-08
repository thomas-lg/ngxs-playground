import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AppComponent } from './app.component';
import { SideLeftComponent } from './components/side-left/side-left.component';
import { SideRightComponent } from './components/side-right/side-right.component';
import { ConfigurateurState } from './store/state';

@NgModule({
	declarations: [AppComponent, SideRightComponent, SideLeftComponent],
	imports: [
		BrowserModule,
		NgxsModule.forRoot([ConfigurateurState], {
			developmentMode: !environment.production,
		}),
		NgxsLoggerPluginModule.forRoot(),
		NgxsStoragePluginModule.forRoot(),
		NgxsRouterPluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		BrowserAnimationsModule,
		MatCardModule,
		MatButtonModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
