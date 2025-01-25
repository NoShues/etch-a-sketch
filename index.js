// Select the container element and button
const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

// Function to create a grid
function createGrid(squaresPerSide) {
  // Clear the container to remove the existing grid
  container.innerHTML = '';

  // Calculate the size of each cell to fit within the fixed container size
  const cellSize = 960 / squaresPerSide;

  // Create the grid
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    // Set the size of the cell dynamically
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.opacity = '0'; // Start fully transparent
    cell.style.backgroundColor = 'black'; // Ensure it darkens to black

    // Add a hover effect
    cell.addEventListener('mouseover', () => {
      // Incrementally darken the square by increasing its opacity
      const currentOpacity = parseFloat(cell.style.opacity);
      if (currentOpacity < 1) {
        cell.style.opacity = `${Math.min(currentOpacity + 0.2, 1)}`;
      }
    });

    // Append the cell to the container
    container.appendChild(cell);
  }
}

// Function to prompt the user for a new grid size
function resizeGrid() {
  let squaresPerSide = parseInt(
    prompt('Enter the number of squares per side for the new grid (1-100):', 16)
  );

  // Validate user input
  if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  // Create the new grid
  createGrid(squaresPerSide);
}

// Add an event listener to the button
resizeButton.addEventListener('click', resizeGrid);

// Create the initial 16x16 grid
createGrid(16);
