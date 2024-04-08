import { SWC } from '../model/swInterface';


interface DOMList {
	ul: HTMLElement,
	render(data: SWC): void
}


export default class SWCView implements DOMList {
	ul: HTMLUListElement;

	static instance: SWCView = new SWCView();
	private constructor() {
		this.ul = document.querySelector('.swcInfo') as HTMLUListElement;
	}


	render(data: SWC): void {

		const df = document.createDocumentFragment();

		Object.entries(data).forEach(([key, value]) => {
			const li = document.createElement('li') as HTMLLIElement;

			if (key === 'created' || key === 'edited') {
				li.innerHTML = `<p><span>${key.replace('_', ' ')}:</span> ${new Date(value).toDateString()}</p>`;
			} else if (key === 'vehicles' || key === 'films' || key === 'starships') {
				li.innerHTML = `<p><span>${key}:</span> ${value.join(',  ')}</p>`;
			}
			else {

				li.innerHTML = `<p><span>${key.replace('_', ' ')}:</span> ${value}</p>`;
			}
			df.appendChild(li);
		});

		this.ul.appendChild(df);

	}

}

