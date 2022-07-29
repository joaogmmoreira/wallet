const CURRENCIES_ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(`${CURRENCIES_ENDPOINT}`);
  const json = await response.json();
  const currencyCode = Object.keys(json).filter((element) => element !== 'USDT');

  return currencyCode;
};

export default getCurrencies;
