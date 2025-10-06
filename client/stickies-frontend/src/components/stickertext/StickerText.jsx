import './stickertextstyle.css'

export function StickerText({children, h1 = false}){
    return(
        <>
        <div className="relative font-sticker flex">
            <div className="absolute text-3xl text-nowrap">
                {h1 ? (
                    <>
                        <h1 className="text-whitebg ">{children}</h1>
                        <p className="text-outline ">{children}</p>
                        <p className="text-fill">{children}</p> 
                        <p className="text-body">{children}</p>
                    </>
                ):(
                <> 
                    <p className="text-whitebg ">{children}</p>
                    <p className="text-outline ">{children}</p>
                    <p className="text-fill">{children}</p> 
                    <p className="text-body">{children}</p>
                </>
                )
                }

            </div>
        </div>
        </>
    )
}

export default StickerText