import CartItems from "../components/CartItems";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


const Cart = () => {

    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount(cart.reduce((acc, curr) =>acc + curr.price,0));
    },[])

    return (
        <div>
            {
                cart.length > 0 ? 
                (
                    <div className="flex mx-auto w-10/12">
                        <div className="space-y-10">
                            {
                                cart.map( (item,index) => {
                                    return <CartItems key = {item.id} item = {item} itemIndex={index}/>
                                })
                            }
                        </div>

                        <div className="flex flex-col justify-between max-h-[90vh] w-[40vw] mt-10">
                            <div>
                                <div className="text-green-800 font-semibold">Your Cart</div>
                                <div className="text-green-800 font-bold text-lg uppercase">Summary</div>
                                <p>
                                    <span>Total Items: {cart.length}</span>
                                </p>
                            </div>
                            <div>
                                <div className="flex font-semibold">Total Amount: <p className="font-bold"> $ {totalAmount}</p></div>
                                <div className="w-full h-15 bg-green-800 rounded-sm flex justify-center text-white font-semibold">
                                    <button >Checkout Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ):
                (
                    <div>
                        <h1>Cart Empty</h1>
                        <Link to = {"/"}>
                            <button>
                                Shop Now
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
};

export default Cart;