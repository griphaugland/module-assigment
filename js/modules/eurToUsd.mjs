export default function eurToUsd(eurAmount) {
    return eurAmount / process.env.USD_TO_EUR_EXCHANGE_RATE;
  }