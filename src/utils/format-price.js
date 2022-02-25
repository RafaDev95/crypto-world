export function formatPrice(price) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export const formatBigNumbers = price =>
  new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 1,
    notation: 'compact'
  }).format(price)
