// variant number
const N = 10;

// 6x6 table generation
function generateTable() {
    container = document.getElementById("container");
    let table = document.createElement('table');

    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            cell = document.createElement('td');
            let value = i * 6 + j + 1;
            cell.innerHTML = value;
            cell.id = value;
            row.appendChild(cell);
        };
        table.appendChild(row);
    };
    container.appendChild(table);
};

// returns random color
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};

// paints cell in random color
function cellRandomColor(cell) {
    cell.style.backgroundColor = getRandomColor();
};

// paints cell in current color on a paint tool
function cellCurrentColor(cell) {
    const color_tool = document.getElementById('color_tool');
    cell.style.backgroundColor = color_tool.value;
};

// changes color of a cells.
function cellsChangeColor(cell) {
    let current_row = Math.floor((N - 1) / 6) + 1;
    for (let i = N; i <= current_row * 6; i += 2) {
        document.getElementById(i).style.backgroundColor = color_tool.value;
    };
};

generateTable();

my_cell = document.getElementById(N);

// adding event listeners
my_cell.addEventListener('mouseover', () => cellRandomColor(my_cell));
my_cell.addEventListener('click', () => cellCurrentColor(my_cell));
my_cell.addEventListener('dblclick', () => cellsChangeColor(my_cell));