/**
 * Helper utility to format array items to uppercase
 * @param {Array<string>} items 
 * @returns {Array<string>}
 */
function formatData(items) {
  if (!Array.isArray(items)) return [];
  return items.map(item => item.toUpperCase());
}

module.exports = {
  formatData
};