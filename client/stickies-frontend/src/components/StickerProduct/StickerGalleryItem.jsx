import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import './StickerProductStyle.css'
import { Link } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)

export function StickerGalleryItem({product}){
    return(
        <>
        <Link to={`product/${product.id}`}>
            <div className="flex flex-col w-[600px] gallery-item">
                <img src={product.imgsrc} alt={product.desc} className="objec-cover"/>
                <div className="flex flex-row justify-between">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>
            </div>
        </Link>
        </>
    )
}

export default StickerGalleryItem