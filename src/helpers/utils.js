export const groupCategory = (category, transactions) => {
  let list = transactions.filter((el) => el.category === category);

  return list;
};
