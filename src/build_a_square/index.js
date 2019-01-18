function generateShape(int) {
  return Array.from({ length: int }, _ => "+".repeat(int)).join("\n");
}

module.exports = generateShape;
