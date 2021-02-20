function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      if (response.ok) return response.json();
      else return [];
    })
    .catch(error => console.log(error));
}

export default fetchCountries;