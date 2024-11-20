import SingleProductCard from '@/components/SingleProductCard';
import React from 'react';

const SingleProduct = ({params}) => {
    return (
        <div>
            <SingleProductCard params={params}/>
        </div>
    );
};

export default SingleProduct;