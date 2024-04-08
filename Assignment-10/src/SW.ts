export interface People {
	name: string;
	birth_year: string;
	gender: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	home_world: string;
	films: string[];
	species: string[];
	starships: string[];
	vehicles: string[];
	url: string;
	created: string;
	edited: string;
}

export default class SW implements People {
	constructor(
		private _name: string = '',
		private _birth_year: string = '',
		private _gender: string = '',
		private _height: string = '',
		private _mass: string = '',
		private _hair_color: string = '',
		private _skin_color: string = '',
		private _eye_color: string = '',
		private _home_world: string = '',
		private _films: string[] = [],
		private _species: string[] = [],
		private _starships: string[] = [],
		private _vehicles: string[] = [],
		private _url: string = '',
		private _created: string = '',
		private _edited: string = ''
	) { }

	get name(): string {
		return this._name;
	}
	get birth_year(): string {
		return this._birth_year;
	}
	get gender(): string {
		return this._gender;
	}
	get height(): string {
		return this._height;
	}
	get mass(): string {
		return this._mass;
	}
	get hair_color(): string {
		return this._hair_color;
	}
	get skin_color(): string {
		return this._skin_color;
	}
	get eye_color(): string {
		return this._eye_color;
	}
	get home_world(): string {
		return this._home_world;
	}
	get films(): string[] {
		return this._films;
	}
	get species(): string[] {
		return this._species;
	}
	get starships(): string[] {
		return this._starships;
	}
	get vehicles(): string[] {
		return this._vehicles;
	}
	get url(): string {
		return this._url;
	}
	get created(): string {
		return this._created;
	}
	get edited(): string {
		return this._edited;
	}

	// set name(name: string) {
	// 	this._name = name;
	// }
	// set birth_year(birth_year: string) {
	// 	this._birth_year = birth_year;
	// }
	// set gender(gender: string) {
	// 	this._gender = gender;
	// }
	// set height(height: string) {
	// 	this._height = height;
	// }
	// set mass(mass: string) {
	// 	this._mass = mass;
	// }
	// set hair_color(hair_color: string) {
	// 	this._hair_color = hair_color;
	// }
	// set skin_color(skin_color: string) {
	// 	this._skin_color = skin_color;
	// }
	// set eye_color(eye_color: string) {
	// 	this._eye_color = eye_color;
	// }
	// set home_world(home_world: string) {
	// 	this._home_world = home_world;
	// }
	// set films(films: string[]) {
	// 	this._films = films;
	// }
	// set species(species: string[]) {
	// 	this._species = species;
	// }
	// set starships(starships: string[]) {
	// 	this._starships = starships;
	// }
	// set vehicles(vehicles: string[]) {
	// 	this._vehicles = vehicles;
	// }
	// set url(url: string) {
	// 	this._url = url;
	// }
	// set created(created: string) {
	// 	this._created = created;
	// }
	// set edited(edited: string) {
	// 	this._edited = edited;
	// }
}
