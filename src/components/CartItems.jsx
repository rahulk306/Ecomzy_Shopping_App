import {FcDeleteDatabase} from "react-icons/fc"
import {useDispatch} from "react-redux";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {remove} from "../redux/Slices/CartSlices"

const CartItems = ({item, itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart = () =>{
        dispatch(remove(item.id))
        toast.success("Item Removed")
    }

    return(
        <div>
            <div className="flex mx-auto gap-10 w-8/12 space-y-10 border-b-4 border-gray-500 mb-5">
                <div className="h-[180px]">
                    <img src = {item.image} className="h-full w-full"/>
                </div>

                <div className="flex flex-col gap-y-5">
                    
                    <div>
                        <p  className="text-gray-700 text-lg font-semibold text-left truncate w-40 mt-1">{item.title}</p>
                    </div>

                    <div>
                        <p>{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
                    </div>

                    <div className="flex justify-between">
                        
                        <p className="text-green-600 font-semibold">${item.price}</p>

                        <div onClick={removeFromCart} className="bg-red-500 text-xs w-10 h-10 flex justify-center items-center animate-bounce rounded-full">
                        <FcDeleteDatabase className="text-xl"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default CartItems;