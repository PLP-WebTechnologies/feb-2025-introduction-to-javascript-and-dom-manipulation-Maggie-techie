// Change the text of the intro paragraph
document.getElementById('change-text-btn').addEventListener('click', () => {
    const introText = document.getElementById('intro-text');
    introText.textContent = 'The text has been changed with JavaScript!';
  });
  
  // Toggle the visibility and background color of the color box
  document.getElementById('toggle-box-btn').addEventListener('click', () => {
    const box = document.getElementById('color-box');
    if (box.style.display === 'none') {
      box.style.display = 'block';
      box.style.backgroundColor = 'tomato';
    } else {
      box.style.display = 'none';
    }
  });
  
  // Add a new item to the list
  document.getElementById('add-item-btn').addEventListener('click', () => {
    const list = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
  });
  