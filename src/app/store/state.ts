import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
	append,
	compose,
	patch,
	removeItem,
	updateItem,
} from '@ngxs/store/operators';
import { Configuration, Projet } from 'src/app/models/projet.model';

import {
	ActiveConfiguration,
	ActiveProjet,
	AddConfiguration,
	AddProjet,
	DeleteConfiguration,
	DeleteProjet,
	UpdateConfiguration,
	UpdateProjet,
} from './action';

export interface ConfigurateurStateModel {
	projets: Projet[];
}

@State<ConfigurateurStateModel>({
	name: 'configurateur',
	defaults: {
		projets: [],
	},
})
@Injectable()
export class ConfigurateurState {
	@Selector()
	static currentProjet(state: ConfigurateurStateModel): Projet | undefined {
		return state.projets.find((p) => p.active);
	}

	@Selector([ConfigurateurState.currentProjet])
	static currentConfiguration(state: Projet): Configuration | undefined {
		return state.configurations.find((c) => c.active);
	}

	@Selector()
	static projets(state: ConfigurateurStateModel): Projet[] {
		return state.projets;
	}

	@Action(AddProjet)
	addProjet(
		ctx: StateContext<ConfigurateurStateModel>,
		action: AddProjet
	): void {
		ctx.setState(
			patch<ConfigurateurStateModel>({
				projets: append<Projet>([action.payload]),
			})
		);
	}

	@Action(DeleteProjet)
	deleteProjet(
		ctx: StateContext<ConfigurateurStateModel>,
		action: DeleteProjet
	): void {
		ctx.setState(
			patch<ConfigurateurStateModel>({
				projets: removeItem<Projet>((projet) => projet?.id === action.payload),
			})
		);
	}

	@Action(UpdateProjet)
	updateProjet(
		ctx: StateContext<ConfigurateurStateModel>,
		action: UpdateProjet
	): void {
		ctx.setState(
			patch<ConfigurateurStateModel>({
				projets: updateItem<Projet>(
					(projet) => !!projet?.active,
					patch<Projet>({ ...action.payload })
				),
			})
		);
	}

	@Action(ActiveProjet)
	activeProjet(
		ctx: StateContext<ConfigurateurStateModel>,
		action: ActiveProjet
	): void {
		ctx.setState(
			patch<ConfigurateurStateModel>({
				projets: compose<Projet[]>(
					updateItem<Projet>(
						(projet) => !!projet?.active,
						patch<Projet>({
							active: false,
							configurations: updateItem<Configuration>(
								(configuration) => !!configuration?.active,
								patch<Configuration>({ active: false })
							),
						})
					),
					updateItem<Projet>(
						(projet) => projet?.id === action.payload,
						patch<Projet>({ active: true })
					)
				),
			})
		);
	}
	@Action(ActiveConfiguration)
	activeConfiguration(
		ctx: StateContext<ConfigurateurStateModel>,
		action: ActiveConfiguration
	): void {
		ctx.setState(
			patch<ConfigurateurStateModel>({
				projets: updateItem<Projet>(
					(projet) => !!projet?.active,
					patch<Projet>({
						configurations: compose<Configuration[]>(
							updateItem<Configuration>(
								(configuration) => !!configuration?.active,
								patch<Projet>({ active: false })
							),
							updateItem<Configuration>(
								(configuration) => configuration?.id === action.payload,
								patch<Configuration>({ active: true })
							)
						),
					})
				),
			})
		);
	}

	@Action(AddConfiguration)
	addConfiguration(
		ctx: StateContext<ConfigurateurStateModel>,
		action: AddConfiguration
	): void {
		ctx.setState(
			patch<ConfigurateurStateModel>({
				projets: updateItem<Projet>(
					(projet) => !!projet?.active,
					patch<Projet>({
						configurations: append<Configuration>([action.payload]),
					})
				),
			})
		);
	}

	@Action(UpdateConfiguration)
	updateConfiguration(
		ctx: StateContext<ConfigurateurStateModel>,
		action: UpdateConfiguration
	): void {
		ctx.setState(
			patch<ConfigurateurStateModel>({
				projets: updateItem<Projet>(
					(projet) => !!projet?.active,
					patch<Projet>({
						configurations: updateItem<Configuration>(
							(configuration) => !!configuration?.active,
							patch<Configuration>({ ...action.payload })
						),
					})
				),
			})
		);
	}

	@Action(DeleteConfiguration)
	deleteConfiguration(
		ctx: StateContext<ConfigurateurStateModel>,
		action: DeleteConfiguration
	): void {
		ctx.setState(
			patch<ConfigurateurStateModel>({
				projets: updateItem<Projet>(
					(projet) => !!projet?.active,
					patch<Projet>({
						configurations: removeItem<Configuration>(
							(configuration) => configuration?.id === action.payload
						),
					})
				),
			})
		);
	}
}
