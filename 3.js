const deleteEven = arr => {
  return arr.filter(n => n % 2 !== 0);
};
console.log(deleteEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
