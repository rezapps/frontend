import { SWC, SWV, SWF, SWSS } from "./swInterface";


class ApiService {

	private static instance: ApiService;
	private constructor() { }
	static getInstance(): ApiService {
		if (!ApiService.instance) {
			ApiService.instance = new ApiService();
		}
		return ApiService.instance;
	}

	async getSWCPicture(url: string): Promise<string> {
		const res = await fetch(url);
		return res.url;
	}

	async getPeople(name: string): Promise<SWC> {
		const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
		const data = await res.json();
		return data.results[0];
	}

	async getPerson(id: string): Promise<SWC> {
		const res = await fetch(`https://swapi.dev/api/people/${id}`);
		return res.json();
	}

	async getPlanet(url: string): Promise<SWC> {
		const res = await fetch(url);
		return res.json();
	}

	async getVehicles(url: string): Promise<SWV> {
		const res = await fetch(url);
		return res.json();
	}

	async getFilms(url: string): Promise<SWF> {
		const res = await fetch(url);
		return res.json();
	}

	async getStarShips(url: string): Promise<SWSS> {
		const res = await fetch(url);
		return res.json();
	}
}


export class App {

	private static instance: App;
	private constructor() { }
	static getInstance(): App {
		if (!App.instance) {
			App.instance = new App();
		}
		return App.instance;
	}

	async findPeople(name: string): Promise<SWC> {
		return ApiService.getInstance().getPeople(name);
	}

	async findPerson(id: string): Promise<SWC> {
		return ApiService.getInstance().getPerson(id);
	}

	async findPlanet(id: string): Promise<SWC> {
		return ApiService.getInstance().getPlanet(id);
	}

	async findVehicles(urls: string[]): Promise<SWV[]> {
		const api = ApiService.getInstance();
		const vehicles = await Promise.all(urls.map(url => api.getVehicles(url)));
		return vehicles;
	}

	async findFilms(urls: string[]): Promise<SWF[]> {
		const api = ApiService.getInstance();
		const films = await Promise.all(urls.map(url => api.getFilms(url)));
		return films;
	}

	async findStarShips(urls: string[]): Promise<SWSS[]> {
		const api = ApiService.getInstance();
		const starShips = await Promise.all(urls.map(url => api.getStarShips(url)));
		return starShips;
	}
}

