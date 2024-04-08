// SWF = Star Wars Film
// search by title field
export interface SWF {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: string[];
	planets: string[];
	starships: string[];
	vehicles: string[];
	species: string[];
	url: string;
	created: string;
	edited: string;
}

// SWP = Star Wars Planet
// search by name field
export interface SWP {
	name: string;
	diameter: string;
	rotation_period: string;
	orbital_period: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: string[];
	films: string[];
	created: string;
	edited: string;
	url: string;
}

// SWV = Star Wars Vehicle
// search by name field
export interface SWV {
	name: string;
	model: string;
	vehicle_class: string;
	pilots: string[];
	films: string[];
	created: string;
	edited: string;
	url: string;
}

// SWSP = Star Wars Species
// search by name field
export interface SWSP {
	name: string;
	classification: string;
	designation: string;
	average_height: string;
	skin_colors: string;
	hair_colors: string;
	eye_colors: string;
	average_lifespan: string;
	homeworld: string;
	language: string;
	films: string[];
	people: string[];
	created: string;
	edited: string;
	url: string;
}

// SWSS = Star Wars Starship
// search by name field
export interface SWSS {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	hyperdrive_rating: string;
	MGLT: string;
	films: string[];
	pilots: string[];
	created: string;
	edited: string;
	url: string;
}




// SWC = Star Wars Character
// search by name field
export interface SWC {
	name: string;
	birth_year: string;
	gender: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	homeworld: string;
	films: string[];
	species: string[];
	starships: string[];
	vehicles: string[];
	url: string;
	created: string;
	edited: string;
}
