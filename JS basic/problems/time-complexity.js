const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of arr) {
  const a = num + 1; // -> ignore O(1) <<< O(1000000000)
}

// O(n)
