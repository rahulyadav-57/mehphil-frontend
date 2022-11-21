export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
