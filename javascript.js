const defaultSize = 16;
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const grid = document.getElementById('grid')

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

function updateSizeValue(value) {
	sizeValue.innerHTML = `${value} x ${value}`;
}

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);

window.onload = () => {
	setupGrid(defaultSize);
}