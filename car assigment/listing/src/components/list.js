import "./list.css"

export const List = ({obj}) =>{
 

    return(
        <div className="item">
        <img src = {obj.productPic}/>
        {/* <h1>{obj.productId}</h1> */}
        <h1>{obj.Brand }</h1>
        <p>{obj.productDescription}</p>
        <h3>{obj.Price}</h3>
        <h4>{obj.Rating}</h4>
        <button onClick = {()=>{alert("Product is added to your cart proceed to pay")}}>ADD TO CART</button>
        </div>
    )
  
} 