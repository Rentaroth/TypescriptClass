(() => {
  const total = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item => {
      total += item;
    }));
    return total;
  };

  const printTotal = (prices: number[]) => {
    const result = total(prices);
    console.log(`El total es: ${result}`);
  };

  printTotal([1, 5, 6, 3]);
})()