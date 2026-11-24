// Both interfaces share the same fixed-rate model.
function compare(a, b) {
  const parse = value => {
    if (!/^\d+$/.test(value) || Number(value) > 10000000) {
      throw new Error('Enter a whole roll count from 0 to 10000000 for each plan.');
    }
    return Number(value);
  };
  const rollsA = parse(a), rollsB = parse(b);
  const logMiss = Math.log1p(-0.0001);
  const chance = n => -100 * Math.expm1(n * logMiss);
  const smaller = Math.min(rollsA, rollsB);
  // Taking the difference on the miss side avoids subtracting two rounded 100s.
  const delta = Math.sign(rollsB - rollsA) * Math.exp(smaller * logMiss) * chance(Math.abs(rollsB - rollsA));
  return {rollsA, rollsB, percentA:chance(rollsA), percentB:chance(rollsB), deltaPoints:delta,
    higher: rollsA === rollsB ? 'Tie' : rollsA > rollsB ? 'A' : 'B'};
}
if (typeof module !== 'undefined') module.exports = {compare};
