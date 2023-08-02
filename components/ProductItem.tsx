import { Product } from '@/typings/typings';
import Link from 'next/link';
import { ProductImage } from './ProductImage';

interface ProductItemProps {
	id: number;
	product: Product;
}

export const ProductItem = ({ id, product }: ProductItemProps) => {
	return (
		<Link
			prefetch={false}
			href={`/product/${id}`}
			className="h-96 flex flex-col border group-hover:scale-105 transition-transform ease-out duration-200 p-4"
		>
			<div className="relative max-h-72 flex-1">
				<ProductImage product={product} fill />
			</div>
			<div className="font-semibold flex flex-col items-center justify-between mt-4 mb-1">
				<p className="text-center">{product.title}</p>
				<p className="text-green-700">${product.price}</p>
				<p className="italic text-xs w-64 line-clamp-2 text-gray-600">
					{product.description}
				</p>
			</div>
		</Link>
	);
};
