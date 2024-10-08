const searchBox = document.getElementById('searchBox');

const results = document.getElementById('result');

function displayResults(matches) {
  results.innerHTML = '';

  if (matches.lenght > 0) {
    matches.forEach((todoList) => {
      const li = document.createElement('li');
      li.textContent = todoList;
      results.appendChild( li );
    })
  } else {
    results.innerHTML = '<li>No Matches Found</li>';
  }
}

function searchArray(query) {
  const lowerCaseQuery = query.toLowerCase();

  const matches = todoList.filter((item) => {
    item.toLowerCase().includes(lowerCaseQuery)
  });

  displayResults( matches );

}

searchBox.addEventListener('input', () => {
  const query = searchBox.value;

  searchArray(query);
});