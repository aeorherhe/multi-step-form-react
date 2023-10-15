export function prices(newOrders, monthlyBilling) {
  return newOrders.reduce((acc, curr) => {
    const monthlyPrices = curr.pricing.monthly;
    const yearlyPrices = curr.pricing.yearly;
    if (monthlyBilling) {
      const prices = acc + Number(monthlyPrices);
      return prices;
    }
    if (!monthlyBilling) {
      const prices = acc + Number(yearlyPrices);
      return prices;
    }
  }, 0);
}
