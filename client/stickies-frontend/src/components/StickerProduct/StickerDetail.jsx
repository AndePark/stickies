import { useParams } from "react-router-dom";
import {getProductById} from '../../api/products'
import {useState, useEffect} from 'react'
export function StickerDetail()
{ 
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(()=>
        {
            getProductById(id).then(data=>{
                setProduct(data)
            }).catch(err => console.error(err))
    },[])
    useEffect(()=>console.log(product), [product])


    return(
    <>
        <div className="flex flex-row gap-6">
            <img src={product.imgsrc} alt ={product.desc}/>
            <div className="description self-end">
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        </div>
    </>
    )
}