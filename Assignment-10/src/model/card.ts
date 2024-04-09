export interface DrawnCards {
	success: boolean,
	deck_id: string,
	cards: Card[],
	remaining: number
}

export interface Card {
	code: string,
	image: string,
	images: string[],
	value: string,
	suit: string
}

export class FetchCards implements DrawnCards {

	private static instance: FetchCards;
	private constructor() { }
	static getInstance(): FetchCards {
		if (!FetchCards.instance) {
			FetchCards.instance = new FetchCards();
		}
		return FetchCards.instance;
	}
	success: boolean = false;
	deck_id!: string;
	cards: Card[] = [];
	remaining: number = 0;

	private async fetchDeckId(): Promise<string> {
		const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
		const data = await response.json();
		return data.deck_id;
	}

	public async drawCard(): Promise<DrawnCards> {
		this.deck_id = await this.fetchDeckId();
		const response = await fetch(`https://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=2`);
		const data: DrawnCards = await response.json();
		return data;
	}

}
