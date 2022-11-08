import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet.model';
import {
	ActiveConfiguration,
	ActiveProjet,
	AddConfiguration,
	AddProjet,
	DeleteConfiguration,
	DeleteProjet,
	UpdateConfiguration,
	UpdateProjet,
} from '../store/projet/projet.action';
import { ConfigurateurState } from '../store/projet/projet.state';

@Component({
	selector: 'app-side-left',
	templateUrl: './side-left.component.html',
	styleUrls: ['./side-left.component.scss'],
})
export class SideLeftComponent {
	projets$ = this.store.select(ConfigurateurState.projets);

	constructor(private store: Store) {}

	createProjet() {
		this.store.dispatch(
			new AddProjet({
				id: faker.datatype.uuid(),
				name: faker.name.jobTitle(),
				active: false,
				configurations: [],
			})
		);
	}

	updateProjet(id: string) {
		this.store.dispatch(new UpdateProjet({ name: faker.name.jobTitle() }));
	}

	makeActive(id: string) {
		this.store.dispatch(new ActiveProjet(id));
	}

	makeActiveConf(id: string) {
		this.store.dispatch(new ActiveConfiguration(id));
	}

	deleteProjet(id: string) {
		this.store.dispatch(new DeleteProjet(id));
	}

	createConfiguration() {
		this.store.dispatch(
			new AddConfiguration({
				id: faker.datatype.uuid(),
				name: faker.name.firstName(),
				color: faker.color.rgb(),
				active: false,
			})
		);
	}

	updateConfiguration() {
		this.store.dispatch(
			new UpdateConfiguration({
				color: faker.color.rgb(),
			})
		);
	}

	deleteConfiguration(id: string) {
		this.store.dispatch(new DeleteConfiguration(id));
	}
}
