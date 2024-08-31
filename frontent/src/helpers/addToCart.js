import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import SummaryApi from "../common"

const addToCart = async (e, id) => {
    e?.stopPropagation()
    e?.preventDefault()

    const response = await fetch(SummaryApi.addToCartProduct.url, {
        method: SummaryApi.addToCartProduct.method,
        credentials: 'include',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(
            { productId: id }
        )
    })

    const responseData = await response.json()

    if (responseData.success) {
        toast.success(<div>{responseData.message}
            <p className='space-x-2 w-2'></p>
            <Link to={"/cart"}>
                Go to Cart
            </Link>
        </div>)
    }

    if (responseData.error) {
        toast.error(responseData.message)
    }


    return responseData

}


export default addToCart