import Produto from "@/components/produto/produto";
import "./page.css"

interface ProductPageProps {
  params: { idProduto: number };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { idProduto } = params;

  return (
    <div className="product-page">
      <Produto id={idProduto} />
    </div>
  );
};

export default ProductPage;
