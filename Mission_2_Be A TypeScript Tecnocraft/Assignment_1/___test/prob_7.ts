{
  const getUniqueValues = (param_1: number[], param_2: number[]): number[] => {
    let result: number[] = [];
    const isExist = (val: number) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i] === val) return true;
      }
      return false;
    };

    for (let i = 0; i < param_1.length; i++) {
      if (!isExist(param_1[i])) {
        result.push(param_1[i]);
      }
    }
    for (let i = 0; i < param_2.length; i++) {
      if (!isExist(param_2[i])) {
        result.push(param_2[i]);
      }
    }

    return result;
  };
  // Test Case 1: Simple arrays
  console.log("Test 1:", getUniqueValues([1, 2, 3], [3, 4, 5]));
  // Expected: [1, 2, 3, 4, 5]

  // Test Case 2: No duplicates
  console.log("Test 2:", getUniqueValues([10, 20], [30, 40]));
  // Expected: [10, 20, 30, 40]

  // Test Case 3: All values duplicated
  console.log("Test 3:", getUniqueValues([1, 1, 1], [1, 1, 1]));
  // Expected: [1]

  // Test Case 4: Empty first array
  console.log("Test 4:", getUniqueValues([], [5, 6, 7]));
  // Expected: [5, 6, 7]

  // Test Case 5: Empty second array
  console.log("Test 5:", getUniqueValues([8, 9, 10], []));
  // Expected: [8, 9, 10]

  // Test Case 6: Both empty
  console.log("Test 6:", getUniqueValues([], []));
  // Expected: []

  // Test Case 7: Negative numbers
  console.log("Test 7:", getUniqueValues([-1, -2, -3], [-3, -4, -5]));
  // Expected: [-1, -2, -3, -4, -5]

  // Test Case 8: Mixed values
  console.log("Test 8:", getUniqueValues([0, 2, 2, 4], [4, 6, 0]));
  // Expected: [0, 2, 4, 6]

  // Test Case 9: Large numbers
  console.log("Test 9:", getUniqueValues([1000, 2000], [2000, 3000]));
  // Expected: [1000, 2000, 3000]

  // Test Case 10: Repeated random pattern
  console.log("Test 10:", getUniqueValues([1, 2, 1, 2], [2, 3, 4, 1]));
  // Expected: [1, 2, 3, 4]
}
