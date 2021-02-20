import severalCountries from '../templates/severalCountries.hbs';
import singleCountry from '../templates/singleCountry.hbs';
import refs from './referals';
import { error, notice, success } from '../js/notification';

function inputData(countries) {
  if (!countries.length) {
    error({
      title: 'There is no such country!',
      hide: true,
      delay: 2000,
    });
  } else if (countries.length === 1) {
    const markup = singleCountry(countries);
    refs.container.insertAdjacentHTML('beforeend', markup);
    success({
      title: 'Success!',
    });
  } else if (countries.length > 1 && countries.length < 11) {
    const markup = severalCountries(countries);
    refs.container.insertAdjacentHTML('beforeend', markup);
    success({
      title: 'Success!',
      text: 'Found more than one country!',
    });
  }
  else {
    notice({
      title: 'Too many countries, enter a specify the request!',
      hide: true,
      delay: 2000,
    });
  }
}

export default inputData;