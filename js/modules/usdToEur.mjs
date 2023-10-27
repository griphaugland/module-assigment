export default function usdToEur(usdAmount) {
    return usdAmount * process.env.USD_TO_EUR_EXCHANGE_RATE;
  }