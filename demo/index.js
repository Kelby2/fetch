const results = $f('#result');
const ajaxForm = $f('#ajax-input');
const toggleForm = $f('#toggle-input');
const clearBtn = $f('.clear-btn');

function renderData(venues) {
  venueData = venues.map(venue => {
      return `<li>${venue.name}<br>
      ${venue.location.formattedAddress.join(' ')}</li>`
  }).join(' ')
  results.append(venueData);
}

function toggleClass() {
  event.preventDefault();
  const selection = $f(event.currentTarget[0].value);
  selection.toggleClass('hide')
}

function renderError(errors) {
  results.append(`<div>Please enter a valid location</div>`)
}

function fetchCoffee() {
  event.preventDefault();
  clearResults();
  $f('.output-container').children();
  const location = event.currentTarget[0].value;
  const options = {
    url: 'https://api.foursquare.com/v2/venues/search',
    data: {
      near: `${location}`,
      client_id: '5JNFRKPVF2ITX3BAPJ05HNJ0AOPGKN4WUU2XKNE1VQDGO3BO',
      client_secret: 'NU0DUSBSE2CZDUABCHKUVLECII1CMPICXBOGM1PMYDTW5FGB',
      v: _dateString(),
      query: 'coffee',
      m: 'swarm',
      limit: 5
    }
  }

  $f.ajax(options)
    .then(data => renderData(data.response.venues))
    .catch(err => renderError())
}


ajaxForm.on('submit', fetchCoffee);
toggleForm.on('submit', toggleClass);
clearBtn.on('click', clearResults);

function clearResults() {
  results.html('');
}

function _dateString() {
  const currDate = new Date();
  const currMonth = currDate.getMonth().toString().padStart(2, '0');
  const currDay = currDate.getDay().toString().padStart(2, '0');
  const currYear = currDate.getFullYear();
  return `${currYear + currMonth + currDay}`
}
