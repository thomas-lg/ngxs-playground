import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConfigurateurState } from 'src/app/store/state';

@Component({
	selector: 'app-side-right',
	templateUrl: './side-right.component.html',
	styleUrls: ['./side-right.component.scss'],
})
export class SideRightComponent {
	currentProjet$ = this.store.select(ConfigurateurState.currentProjet);

	constructor(private store: Store) {}
}
