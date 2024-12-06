function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct type
console.log(result);

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0;//Handle the error appropriately
  }
  return numA + numB;
}

let result2 = addSafe(1, '2'); // Using addSafe for safer operation
console.log(result2); 