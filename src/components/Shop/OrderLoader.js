import { getShoppingCart } from "../../utilities/fakedb";

const OrderLoader = async () =>
{
    const fetchData = await fetch( 'products.json' )
    const products = await fetchData.json()
    const SavedCart = getShoppingCart()

    const StoredCart = []
    for ( const id in SavedCart )
    {
        const addedProduct = products.find( product => product.id === id )
        if ( addedProduct )
        {
            const quantity = SavedCart[ id ]
            addedProduct.quantity = quantity
            StoredCart.push(addedProduct)
        }
    }

    // console.log(StoredCart)
    return StoredCart;
}

export default OrderLoader;