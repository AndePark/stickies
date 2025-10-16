import './stickertextstyle.css'

export function StickerText({children, h1 = false}){
    return(
        <>
        <div className="relative font-sticker flex h-[35px] w-[125px]">
            <div className="absolute text-3xl text-nowrap">
                {h1 ? (
                    <>
                        <h1 className="text-whitebg ">{children}</h1>
                        <p className="text-outline text-pink">{children}</p>
                        <p className="text-fill  text-pink">{children}</p> 
                        <p className="text-body text-lightblue">{children}</p>
                    </>
                ):(
                <> 
                    <p className="text-whitebg ">{children}</p>
                    <p className="text-outline  text-pink">{children}</p>
                    <p className="text-fill  text-pink">{children}</p> 
                    <p className="text-body text-lightblue">{children}</p>
                </>
                )
                }

            </div>
        </div>
        </>
    )
}

export default StickerText