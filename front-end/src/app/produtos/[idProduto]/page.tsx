import Produto from "@/components/produto/produto";
import "./page.css"

interface ProductPageProps {
  params: { produtoID: number };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { produtoID } = params;
  return (
    <div className="product-page">
      <Produto id={produtoID} />
    </div>
  );
};

export default ProductPage;
