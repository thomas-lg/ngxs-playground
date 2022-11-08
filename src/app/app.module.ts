import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppComponent } from './app.component';
import { ConfigurateurState } from './store/projet/projet.state';
import { SideRightComponent } from './side-right/side-right.component';
import { SideLeftComponent } from './side-left/side-left.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

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
