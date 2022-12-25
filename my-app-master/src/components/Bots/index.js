import './bots.css';

const bots = ({products}) =>{
    console.log('props:', products);
    return(
        <div className="cardscontainer">
            {
                products.map((product,index)=>{
                    console.log('product:', product)
                    return(
                <div className="card" key={index}>
                    <img src ={product.imgURL} alt="Iphone Pictures" />
                    <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p>Price:{product.Price}</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                    </div>
                </div>
                )})
            }
        </div>
    )
}
export default bots;