import React from 'react';
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(product);
    }
    const onDeleteHandler = () => {
        onDeleteHandler(product);
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
            <button className = {'addBtn'} onClick = {onAddHandler}>
                +
            </button>
            <button className='deleteBtn' onClick={onDeleteHandler}>
                -
            </button>
        </div>
    );
};

export default ProductItem;