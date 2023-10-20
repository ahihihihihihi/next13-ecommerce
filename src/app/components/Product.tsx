'use client'

import Link from "next/link"
import ProductImage from "@/app/components/ProductImage"

type IProps = {
    product: Product
}

function Product(props: IProps) {
    const { product } = props
    return (
        <Link
            prefetch={false}
            href={`/product/${product.id}`}
            className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
        >
            <div style={{ margin: "0 auto" }} className="max-h-64">
                <ProductImage
                    product={product}
                    fill={false}
                />
            </div>
            <div key={`product-${product.id}`} className="font-semibold flex items-center justify-between mt-4 mb-1">
                <p className="w-44 truncate">{product.title}</p>
                <p>$ {product.price}</p>
            </div>
            <p className="italic text-xs w-64 line-clamp-2 text-gray-600">{product.description}</p>
        </Link>
    )
}

export default Product