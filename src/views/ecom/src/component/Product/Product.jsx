import React from 'react';
import imgProduct from './img/macbook.jpg'

const Product = (props) => {

    return (  
        <div>
            {/* img */}
            <img src={imgProduct} />
            {/* title */}
            <div>
                Macbook Pro 14inch 2023
            </div>
            {/* rating */}

            {/* sold number */}

            {/* price */}  
            <div>
                $100.00
            </div>
            {/* sale */}

            
        </div>
    );
}
 
export default Product;