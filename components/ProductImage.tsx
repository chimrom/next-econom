'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/typings/typings';

interface ProductItemProps {
	fill?: boolean;
	product: Product;
}

export const ProductImage = ({ product, fill }: ProductItemProps) => {
	const [loading, setLoading] = useState(true);
	return (
		<>
			{fill ? (
				<Image
					src={product.image}
					alt={product.title}
					fill
					className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
						loading
							? 'scale-110 blur-2xl grayscale'
							: 'scale-100 blur-0 grayscale-0'
					}`}
					onLoadingComplete={() => setLoading(false)}
				/>
			) : (
				<Image
					src={product.image}
					alt={product.title}
					width={400}
					height={1000}
					className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
						loading
							? 'scale-110 blur-2xl grayscale'
							: 'scale-100 blur-0 grayscale-0'
					}`}
					onLoadingComplete={() => setLoading(false)}
				/>
			)}
		</>
	);
};
