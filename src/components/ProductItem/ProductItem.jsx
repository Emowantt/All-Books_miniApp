import React from 'react';
import Button from '../Button/Button';
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product' + className}>
            <div className='img'/>
            <h2 className='title'>{product.title}</h2>
            <p className='author'>{product.author}</p>
            <p className='category'>{product.category}</p>
            <div className='price'>
                <b>{product.price}</b>
            </div>
            <Button className = {'addBtn'} onClick = {onAddHandler}>
                +
            </Button>
        </div>
    );
};

export default ProductItem;