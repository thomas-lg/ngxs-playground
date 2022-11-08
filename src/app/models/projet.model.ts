export interface Projet {
	id: string;
	name: string;
	active: boolean;
	configurations: Configuration[];
}
export interface Configuration {
	id: string;
	name: string;
	color: string;
	active: boolean;
}
