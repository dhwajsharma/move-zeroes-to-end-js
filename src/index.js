import "./styles.css";

const moveZeroes = (arr) => {
  const temp = [];

  let count = 0;

  for (let item of arr) {
    if (item === 0) count++;
  }

  for (let item of arr) {
    if (item !== 0) {
      temp.push(item);
    }
  }

  for (let i = 0; i < count; i++) {
    temp.push(0);
  }

  console.log(temp);
};

// optimized version

const moveZeroes = (arr) => {
  let c = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[c]] = [arr[c], arr[i]];
      c++;
    }
  }
  return arr;
};

console.log(moveZeroes([1, 2, 0, 3, 4, 0, 7]));
