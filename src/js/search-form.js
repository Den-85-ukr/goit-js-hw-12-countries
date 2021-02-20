import fetchCountries from './fetchCountries';
import refs from './referals';
import inputData from './markup';
import debounce from 'lodash.debounce';

refs.input.addEventListener('input', debounce(countryInput, 500));

function countryInput() {
  const countryName = refs.input.value.trim();

  if (!countryName) {
    return;
  }

  refs.container.innerHTML = '';
  fetchCountries(countryName).then(inputData);
}
