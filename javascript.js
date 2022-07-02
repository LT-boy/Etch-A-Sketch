const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;

function setupGrid(size) {
	grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < size * size; i++) {
		const gridElement = document.createElement('div');
		gridElement.classList.add('grid-element');
		gridElement.addEventListener('mouseover', mouseOver);
    	grid.appendChild(gridElement);
	}
}

function mouseOver(e) {
	e.target.style.backgroundColor = "black";
}


window.onload = () => {
	setupGrid(DEFAULT_SIZE);
}