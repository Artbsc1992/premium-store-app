const fetchArticles = async (categoryName) => {
  const result = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
  return result.json();
  // console.log(json);
  // const articles = json.map((article) => ({
  //   id: article.id,
  //   title: article.title,
  //   price: article.price,
  //   description: article.description,
  //   category: article.category,
  //   img: article.image,
  //   rate: article.rating.rate,
  //   count: article.rating.count,
  // }));
  // return articles;
};

const fetchCategories = async () => {
  const categoriesRes = await fetch('https://fakestoreapi.com/products/categories');
  const productsRes = await fetch('https://fakestoreapi.com/products');
  let categories = await categoriesRes.json();
  const products = await productsRes.json();

  categories = categories.map((category) => {
    const count = products.filter((product) => product.category === category).length;
    return {
      name: category,
      productsCount: count,
    };
  });
  return categories;
};

export { fetchArticles, fetchCategories };
