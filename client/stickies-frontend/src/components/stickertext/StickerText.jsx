import './stickertextstyle.css'

export function StickerText({children}){
    return(
        <>
        <div className="relative font-sticker w-full flex justify-center items-center">
            <div className="absolute text-3xl text-nowrap">
                <p className="text-whitebg ">{children}</p>
                <p className="text-outline ">{children}</p>
                <p className="text-fill">{children}</p> 
                <p className="text-body">{children}</p>
            </div>
        </div>
        </>
    )
}

export default StickerText