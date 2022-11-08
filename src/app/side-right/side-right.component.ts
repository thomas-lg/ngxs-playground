import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet.model';
import { ConfigurateurState } from '../store/projet/projet.state';

@Component({
	selector: 'app-side-right',
	templateUrl: './side-right.component.html',
	styleUrls: ['./side-right.component.scss'],
})
export class SideRightComponent {
	currentProjet$ = this.store.select(ConfigurateurState.currentProjet);

	constructor(private store: Store) {}
}
