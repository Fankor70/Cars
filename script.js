const dom = {
  selectbox: document.querySelector('.selectbox'),
  rooms: document.getElementById('rooms'),
  selectedText: document.querySelector('.selectbox-selected span'),
  list: document.querySelector('.selectbox__list')
};

const roomElements = dom.rooms.querySelectorAll('.room');

// Create a Set to store unique room names
const uniqueRoomNames = new Set();

// Function to create a list item element for each unique room
function createListItem(roomName) {
  const listItem = document.createElement('div');
  listItem.classList.add('selectbox__item');
  listItem.textContent = roomName;

  // Add event listener to handle item selection
  listItem.addEventListener('click', () => {
    dom.selectedText.textContent = roomName;
    dom.selectbox.classList.remove('open');
  });

  return listItem;
}

// Populate the list with items based on unique room names
roomElements.forEach(roomElement => {
  const roomName = roomElement.querySelector('span').textContent;
  if (!uniqueRoomNames.has(roomName)) { 
    uniqueRoomNames.add(roomName);
    const listItem = createListItem(roomName);
    dom.list.appendChild(listItem);
  }
});

dom.selectbox.addEventListener('click', () => {
  dom.selectbox.classList.toggle('open');
  dom.ic_arrow.classList.toggle('transform'); // Assuming you have an element with this class
});