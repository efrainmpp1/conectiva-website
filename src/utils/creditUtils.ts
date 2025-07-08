export function calculateCreditUsage(currentCredits: number, maxCredits = 10): number {
  const usedCredits = maxCredits - currentCredits;
  return (usedCredits / maxCredits) * 100;
}
