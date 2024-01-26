export default function ProductDetails({params}: {
    params: {productId :string}
} )
{
    return <h1>This is from the [directory]{params.productId}</h1> 
} 