const field = id => document.getElementById(id);
let current;
function refresh() {
  try {
    current = compare(field('a').value, field('b').value);
    const {percentA,percentB,deltaPoints,higher} = current;
    field('result').textContent = 'A: ' + percentA.toFixed(4) + '%. B: ' + percentB.toFixed(4) + '%. B minus A: ' + deltaPoints.toFixed(4) + ' percentage points. Higher chance: ' + higher + '.';
  } catch (error) {
    current = null;
    field('result').textContent = error.message;
  }
  field('save').disabled = !current;
}
document.addEventListener('input', refresh);
field('save').addEventListener('click', () => {
  const csv = [Object.keys(current), Object.values(current)].map(row => row.join(',')).join('\r\n') + '\r\n';
  const url = URL.createObjectURL(new Blob([csv], {type:'text/csv;charset=utf-8'}));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'matrix-roll-budget.csv';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
refresh();
