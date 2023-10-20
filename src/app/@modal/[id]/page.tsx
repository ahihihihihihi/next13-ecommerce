'use client'

import ProductImage from "@/app/components/ProductImage"
import { Dialog } from "@headlessui/react"
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"



function Modal() {
    let [isOpen, setIsOpen] = useState(true)
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-sm rounded bg-white">
                    <Dialog.Title>Complete your order</Dialog.Title>

                    {/* ... */}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default Modal