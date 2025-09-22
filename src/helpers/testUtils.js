export function assertEquals(actual, expected, description) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${passed ? "✅" : "❌"} ${description}`);
}
