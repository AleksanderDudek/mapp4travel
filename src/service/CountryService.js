import axios from 'axios';

const getCountries = () => axios.get('https://restcountries.eu/rest/v2/all');

export default { getCountries };
