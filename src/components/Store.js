import { useState } from "react";
import Product from "./Product";

function Store(){
    // add a product list and add function using state
    const [productList, setProductList] = useState([
        {name: "Gucci", price: 450.00, id: 1},
        {name: " Hermes", price: 6000.00, id: 2},
        {name: "Plus Size Section", price: 220.00, id: 3},
        {name: "Vintage/Old School", price: 2500.00, id: 4},
        {name: "Donations Children Hospital (not required!)", price: 5.00, id: 5},
        {name: "Group Experience 3HRS ( Min. 10 shoppers )", price: 20000.00, id: 6},
        {name: "Kid Drop Off While Shopping (Per Hour)", price: 20.00, id: 7},
    ]);

    // const addProduct = (newProduct) => {
    //  setProductList ([...productList, newProduct]);
    // }
    const [newProduct, setNewProduct] = useState ({
        name:"",
        price: ""
    });

    {/* handleChange */}

    const handleInputChange =(event) => {
        setNewProduct({
            ...newProduct, [ event.target.name]: event.target.value 
        });
        };
        //handleAddProduct

        const handleAddProduct = () => {
            if (newProduct.name && newProduct.price) {
                setProductList ([ ...productList, {...newProduct}
                ]);
                setNewProduct({name:"", price:""})
        };
    };

    return (
        <div>
            <h1>DA Sto</h1>
            {/* <button onClick={() =>
               addProduct({ name: "New Product", price: 0})
            }>
                Deals
            </button> */}
            {/* add products list by using handleInputChange handleAddProduct button  */}

            <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}/>

            <input 
            type="text"
            name="price"
            placeholder="price"
            value={newProduct.price}
            onChange= {handleInputChange}
            />
            
            <button onClick={handleAddProduct}> Add New Product
            </button>

            {productList.map((product)=> (
                <Product
                name={product.name}
                price={product.price}
                // id={products.id}
                />
            ))}
        </div>
    );
};

export default Store;


