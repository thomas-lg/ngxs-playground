import { Configuration, Projet } from '../models/projet.model';

export class AddProjet {
	static readonly type = '[Projet] Add Projet';
	constructor(public payload: Projet) {}
}

export class DeleteProjet {
	static readonly type = '[Projet] Delete Projet';
	constructor(public payload: string) {}
}

export class UpdateProjet {
	static readonly type = '[Projet] Update Projet';
	constructor(public payload: Partial<Projet>) {}
}

export class ActiveProjet {
	static readonly type = '[Projet] Active Projet';
	constructor(public payload: string) {}
}

export class ActiveConfiguration {
	static readonly type = '[Configuration] Active Configuration';
	constructor(public payload: string) {}
}

export class AddConfiguration {
	static readonly type = '[Configuration] Add Configuration';
	constructor(public payload: Configuration) {}
}

export class UpdateConfiguration {
	static readonly type = '[Configuration] Update Configuration';
	constructor(public payload: Partial<Configuration>) {}
}

export class DeleteConfiguration {
	static readonly type = '[Configuration] Delete Configuration';
	constructor(public payload: string) {}
}
