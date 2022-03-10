const fetchUrl = async (url) => {
  const request = await fetch(url);
  const data = await request.json();
  return data;
};

const CATEGORY_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
const SEARCH_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/search';
const ITEM_ENDPOINT = 'https://api.mercadolibre.com/items/';

/**
 * Lista de categorias disponíveis
 *
 * [Exemplo de retorno](https://api.mercadolibre.com/sites/MLB/categories)
 */
export async function getCategories() {
  const data = fetchUrl(CATEGORY_ENDPOINT);
  return data;
}

/**
 * Pesquisa itens de uma categoria por termo
 *
 * [Exemplo de retorno](https://api.mercadolibre.com/sites/MLB/search?q=pneu&category=MLB5672)
 */
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const params = new URLSearchParams();
  if (categoryId) params.set('category', categoryId);
  if (query) params.set('q', query);

  const data = await fetchUrl(`${SEARCH_ENDPOINT}?${params.toString()}`);
  return data;
}

/**
 * Pesquisa itens por nome
 *
 * [Exemplo de retorno](https://api.mercadolibre.com/sites/MLB/search?q=pneu)
 */
export async function getProductsByName(name) {
  const params = new URLSearchParams();
  if (name) params.set('q', name);

  const data = await fetchUrl(`${SEARCH_ENDPOINT}?${params.toString()}`);
  return data;
}

/**
 * Pesquisa itens de uma categoria
 *
 * [Exemplo de retorno](https://api.mercadolibre.com/sites/MLB/search?category=MLB5672)
 */
export async function getProductsByCategory(categoryId) {
  const params = new URLSearchParams();
  if (categoryId) params.set('category', categoryId);

  const data = await fetchUrl(`${SEARCH_ENDPOINT}?${params.toString()}`);
  return data;
}

/**
 * Detalhes de um produto específico
 *
 * [Exemplo de retorno](https://api.mercadolibre.com/items/MLB1164900876)
 */
export async function getProduct(productId) {
  const data = await fetchUrl(ITEM_ENDPOINT + productId);
  return data;
}
