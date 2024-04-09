import './style.css';
import { FetchCards, DrawnCards } from './model/card';
import CardView from './view/cardView';



const cardApp: FetchCards = FetchCards.getInstance();


const cardAppView = CardView.instance;
document.querySelector<HTMLDivElement>('#cardApp')!.innerHTML = `
	<button id="cardBtn" class="pure-button pure-button-primary">Draw Card</button>
	<div class="loading"></div>
`


const cardButton = document.querySelector('#cardBtn') as HTMLButtonElement;
const loader = document.querySelector('.loading') as HTMLDivElement;
loader.style.display = 'none';

cardButton.addEventListener('click', async () => {

	cardAppView.reset();

	const data: DrawnCards = await cardApp.drawCard();
	loader.style.display = 'inline-flex';
	await cardAppView.render(data);
	loader.style.display = 'none';
	// cardButton.style.visibility = 'visible';
})
