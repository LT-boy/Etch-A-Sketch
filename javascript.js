const defaultSize = 16;
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

let currentSize = defaultSize;

function setupGrid(size) {
	grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	for (let i = 0; i < size * size; i++) {
		const gridElement = document.createElement('div');
		gridElement.classList.add('grid-element');
		gridElement.addEventListener('mouseover', colourSquare);
    	grid.appendChild(gridElement);
	}
}

function colourSquare(e) {
	e.target.style.backgroundColor = "black";
}

function updateSizeValue(value) {
	sizeValue.innerHTML = `${value} x ${value}`;
}

function changeSize(value) {
	setCurrentSize(value);
	updateSizeValue(value);
	reloadGrid();
}

function setCurrentSize(newSize) {
	currentSize = newSize;
}

function reloadGrid() {
	clearGrid();
	setupGrid(currentSize);
}

function clearGrid() {
	grid.innerHTML = '';
}

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

window.onload = () => {
	setupGrid(defaultSize);
}