
// Select the container element
const container = document.getElementById('container');

// Function to create a grid of divs
function createGrid(rows, cols) {
  // Calculate the size of the container dynamically
  const cellSize = 16; // Size of each cell in pixels
  const containerWidth = cols * cellSize;
  const containerHeight = rows * cellSize;

  // Set the container's width and height dynamically
  container.style.width = `${containerWidth}px`;
  container.style.height = `${containerHeight}px`;

  // Clear the container to avoid adding duplicates when re-creating the grid
  container.innerHTML = '';

  // Create the grid
  for (let i = 0; i < rows * cols; i++) {
    // Create a new div element
    const cell = document.createElement('div');
    // Add the "cell" class for styling
    cell.classList.add('cell');
    // Append the cell to the container
    container.appendChild(cell);
  }
}

// Call the function to create a 16x16 grid
createGrid(50, 50);

