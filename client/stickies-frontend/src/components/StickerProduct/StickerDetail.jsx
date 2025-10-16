import { useParams } from "react-router-dom";
import {getProductById} from '../../api/products'
import {useState, useEffect} from 'react'
import {addToCart, cart} from '../../data/cart'

export function StickerDetail()
{ 
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    useEffect(()=>
        {
            getProductById(id).then(data=>{
                setProduct(data)
            }).catch(err => console.error(err))
    },[])

    const buttonAddToCart = () =>{
        const formQuantity = Number(document.querySelector(`.quantity-selector-${id}`).value)
        setQuantity(formQuantity);
        addToCart(id, quantity);
        console.log(cart);
    }


    return(
    <>
        <div className="grid lg:grid-cols-12">
            <div className="flex flex-row gap-6 mx-14 mt-8 col-span-9">
                <img src={product.imgsrc} alt ={product.desc}/>
                <div className="description self-end">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>

                <div className="add-cart-form self-end ml-auto mr-10 flex gap-5 flex flex-row items-center">
                    <label htmlFor="quantity">Quantity: </label>
                    <input className= {`quantity-selector-${id}`} type="number" id="quantity" name="quantity" min="1" max="100" placeholder="1" defaultValue="1" />
                    <button className="add-cart-button" onClick={buttonAddToCart}>
                        Add To Cart
                    </button>
                </div>

            </div>
        </div>
    </>
    )
}