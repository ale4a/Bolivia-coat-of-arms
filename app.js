let square;
let grid;
const cards = 195

grid = document.getElementById( 'grid' );

for(let i = 0; i < cards; i++){
    square = document.createElement( 'div' );
    square.classList.add('square')
    grid.appendChild( square );
}
