// Creating div element for the container
const container = document.createElement('div');
container.className = 'container';
container.id = 'background';
document.body.appendChild(container);

// Creating div element for the row of cards
const cardRow = document.createElement('div');
cardRow.className = 'row g-5 ';
cardRow.id = 'row';
container.appendChild(cardRow);

// Function to fetch data from the API and create cards
async function fetchopenbrewerydbData() {
  try {
    // Fetch data from the API
    const response = await fetch('https://api.openbrewerydb.org/v1/breweries');

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error fetching data. Status: ${response.status}`);
    }

    // Parse the response to JSON format
    const data = await response.json();

    // Get the cardRow container element
    const cardRow = document.getElementById('row');

    // Loop through the data and create cards for each brewery
    data.forEach(brewery => {
      const cardcol = document.createElement('div');
      cardcol.className = 'col-lg-3 col-sm-12'; 

      const card = document.createElement('div');
      card.className = 'card ';
      card.id = 'cardsty';

      const cardbody = document.createElement('div');
      cardbody.className = 'card-body';
      cardbody.id = 'c-body';

      const cardheader = document.createElement('div');
      const h5 = document.createElement('p');
      h5.id = 'beername';
      cardheader.className = 'card-title';
      cardheader.id = 'c-title';
      h5.innerHTML = `${brewery.name}`;

      const text1 = document.createElement('p');
      text1.className = 'text1';
      text1.id = 't1';
      text1.innerHTML = `TYPE - ${brewery.brewery_type}`;

      const text2 = document.createElement('p');
      text2.className = 'text1';
      text2.id = 't2';
      text2.innerHTML = `ADDRESS - ${brewery.address_1}`;

      const text3 = document.createElement('p');
      text3.className = 'text1';
      text3.id = 't3';
      text3.innerHTML = `CITY - ${brewery.city}`;

      const text4 = document.createElement('p');
      text4.className = 'text1';
      text4.id = 't4';
      text4.innerHTML = `COUNTRY - ${brewery.country}`;

      const text5 = document.createElement('p');
      text5.className = 'text1';
      text5.id = 't5';
      text5.innerHTML = `Calories - ${brewery.phone}`;

      // Append the elements to create the card structure
      cardRow.appendChild(cardcol);
      cardcol.appendChild(card);
      card.appendChild(cardbody);
      cardheader.appendChild(h5);
      cardbody.appendChild(cardheader);
      cardbody.appendChild(text1);
      cardbody.appendChild(text2);
      cardbody.appendChild(text3);
      cardbody.appendChild(text4);
      cardbody.appendChild(text5);
    });

    console.log('Cards created successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchPunkApiData function to populate the cards
fetchopenbrewerydbData();
