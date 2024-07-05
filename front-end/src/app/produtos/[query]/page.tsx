import Produto from "@/components/produto/produto";
import "./page.css"

interface ProductPageProps {
  params: { query: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { query } = params;
  return (
    <div className="product-page">
      <Produto query={query} />
    </div>
  );
};

export default ProductPage;
