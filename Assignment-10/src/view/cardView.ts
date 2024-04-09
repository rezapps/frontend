import {  Card, DrawnCards } from '../model/card';

interface DOMDiv {
	div: HTMLDivElement,
	render(data: DrawnCards): void,
	reset(): void
}


export default class CardView implements DOMDiv {
	div: HTMLDivElement;

	static instance: CardView = new CardView();
	private constructor() {
		this.div = document.querySelector('.cardDiv') as HTMLDivElement;

	}

	reset(): void {
		this.div.innerHTML = '';
	}


	async render(data: DrawnCards): Promise<void> {
		const df = document.createDocumentFragment();
		data.cards.forEach(card => {
			const cardElement = this.createCardElement(card);
			df.appendChild(cardElement);
		});
		this.div.appendChild(df);
	}

	private createCardElement(card: Card): HTMLElement {
		const element = document.createElement('div');
		element.classList.add('card');
		element.innerHTML = `
			<img class="card-img-top" src="${card.image}" alt="${card.value} of ${card.suit}">
			<div class="card-body">
				<h5 class="card-title">${card.value} of ${card.suit}</h5>
			</div>
		`;
		return element;
	}
}
