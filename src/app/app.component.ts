import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Projet } from './models/projet.model';
import {
	ActiveProjet,
	AddConfiguration,
	AddProjet,
	DeleteProjet,
	UpdateProjet,
} from './store/projet/projet.action';
import { faker } from '@faker-js/faker';
import { ConfigurateurState } from './store/projet/projet.state';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'ngxs-playground';
}
