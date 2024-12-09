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
            <div className='title'>{product.title}</div>
            <div className='author'>{product.author}</div>
            <div className='category'>{product.category}</div>
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