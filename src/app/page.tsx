'use client'

import Product from "@/app/components/Product"


export default async function Home() {

  const res = await fetch('https://fakestoreapi.com/products')
  const products: Product[] = await res.json()

  console.log(products)
  return (
    <div className=''>
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className='text-5xl font-bold text-center'>DEALS OF THE DAY</h1>

        {products.map((product) => {
          return (
            <Product
              key={`product-${product.id}`}
              product={product}
            />
          )
        }
        )}

        <div className="abc">
          {/* <Product />> */}
          {/* <Product />> */}
          {/* <Product />> */}
          {/* <Product />> */}
        </div>
      </section>
    </div>
  )
}
