import './style.css'
import { App } from './model/swapi';
import SWCView from './view/swcView';
import { SWC } from './model/swInterface';
import names from './model/names.json';


const app: App = App.getInstance();
// const test = await app.getPeople('Chewbacca');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div class="pure-form">
		<input list="names" id="swapi" type="text" required placeholder="chewbacca"/>
		<datalist id="names"></datalist>

		<button id="searchBtn" class="pure-button pure-button-primary">Search</button>
	</div>
	<div class="loading"></div>

`
const appView = SWCView.instance;


const searchButton = document.querySelector('#searchBtn') as HTMLButtonElement;
const searchInput = document.querySelector('#swapi') as HTMLInputElement;
const df = document.createDocumentFragment();
const dataList = document.getElementById('names') as HTMLDataListElement;
const opt = document.createElement('option');
const loader = document.querySelector('.loading') as HTMLDivElement;
loader.style.display = 'none';

names.forEach(n => {
	opt.value = n;
	dataList.appendChild(opt.cloneNode(true));
});
df.appendChild(dataList);
searchInput.appendChild(df);


searchButton.addEventListener('click', async () => {
	if (searchInput.value != '') {
		searchInput.classList.remove('warn');

		searchInput.placeholder = '';
		searchButton.style.visibility = 'hidden';

		loader.style.display = 'inline-flex';

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
		loader.style.display = 'none';
		searchInput.value = '';
		searchButton.style.visibility = 'visible';
	} else {
		searchInput.placeholder = 'Type a Character Name';
	}
});
