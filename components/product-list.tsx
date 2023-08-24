import { Product } from "@/types";

interface ProductListProp {
	title: string;
	items: Product[];
}

const ProductList: React.FC<ProductListProp> = ({ title, items }) => {
	return (
		<div className="space-y-4">
			<h3 className="font-bold text-3xl">{title}</h3>
		</div>
	);
};

export default ProductList;
