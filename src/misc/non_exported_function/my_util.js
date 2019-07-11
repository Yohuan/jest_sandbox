function nonExportedAdd(a, b) {
  return a + b;
}

function exportedAdd(a, b) {
  return nonExportedAdd(a, b);
}

const nonExportedMinus = (a, b) => (a - b);
const exportedMinus = (a, b) => (nonExportedMinus(a, b));

export {
  exportedAdd,
  exportedMinus,
};
