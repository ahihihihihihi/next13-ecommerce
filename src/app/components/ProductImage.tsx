'use client'

import { useState } from "react"
import Image from "next/image"

type IProps = {
    product: Product
    fill?: boolean
}

function ProductImage(props: IProps) {

    const [loading, setLoading] = useState<boolean>(true)
    const { fill, product } = props

    return (
        <>
            {
                fill ? (
                    <Image
                        src={product.image}
                        fill
                        alt={product.title}
                        className={`
                        object-contain duration-700 ease-in-out group-hover:opacity-75
                        ${loading ? "scale-100 blur-2xl grayscale" :
                                "scale-100 blur-0 grayscale-0"
                            }
                    `}
                        onLoadingComplete={() => setLoading(false)}
                    />
                ) : (
                    <Image
                        src={product.image}
                        alt={product.title}
                        style={{ height: "250px" }}
                        height={200}
                        width={200}
                        className={`
                        object-contain duration-700 ease-in-out group-hover:opacity-75
                        ${loading ? "scale-100 blur-2xl grayscale" :
                                "scale-100 blur-0 grayscale-0"
                            }
                    `}
                        onLoadingComplete={() => setLoading(false)}
                    />
                )
            }
        </>
    )
}

export default ProductImage