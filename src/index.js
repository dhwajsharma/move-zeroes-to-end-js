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

console.log(moveZeroes([1, 2, 0, 3, 4, 0, 7]));
