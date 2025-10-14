
export function StickerGalleryItem({product}){

    return(
        <>
            <div className="flex flex-col w-[600px] ">
                <img src={product.imgsrc} alt={product.desc} className="objec-cover"/>
                <div className="flex flex-row justify-between">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        </>
    )
}

export default StickerGalleryItem