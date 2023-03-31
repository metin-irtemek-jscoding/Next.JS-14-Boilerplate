const dividedPrice = (price: number) => {
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1' + ',');
};

export default dividedPrice;
