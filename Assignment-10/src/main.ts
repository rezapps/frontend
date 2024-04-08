import './style.css'
import { App } from './model/swapi';
import SWCView from './view/swc';
import { SWC } from './model/swInterface';


const app: App = App.getInstance();
// const test = await app.getPeople('Chewbacca');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div class="pure-form">
		<input id="swapi" type="text" placeholder="chewbacca"/>
		<button id="searchBtn" class="pure-button pure-button-primary">Search</button>
	</div>
`
const appView = SWCView.instance;


const searchButton = document.querySelector('#searchBtn') as HTMLButtonElement;
const searchInput = document.querySelector('#swapi') as HTMLInputElement;
searchButton.addEventListener('click', async () => {
	console.log(searchInput.value)
	const data: SWC = await app.findPeople(searchInput.value);
	const planet = await app.findPlanet(data.homeworld);
	const films = await app.findFilms(data.films);
	const vs = await app.findVehicles(data.vehicles);
	const ss = await app.findStarShips(data.starships);

	data.homeworld = planet.name;
	data.vehicles = vs.map(v => v.name);
	data.films = films.map(f => f.title);
	data.starships = ss.map(s => s.name);


	appView.render(data);
});

