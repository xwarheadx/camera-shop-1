import { ProductType } from '../../types/product';
import ProductCard from '../product-card/product-card';

type CardsProps = {
  products: ProductType[];
}

export default function Cards({products}: CardsProps): JSX.Element {
  const temporaryProducts = products.slice(0, 9);
  return (
    <div className="cards catalog__cards">
      {temporaryProducts.map((product) => (
        <ProductCard
          key = {product.id}
          product = {product}
        />
      )
      )}
    </div>
  );
}
