import React from 'react';
import './ProductItem.css';

const ProductItem = ({product, className, onAdd, onDelete}) => {
    
    const onAddHandler = () => {
        onAdd(product);
    }
    const onDeleteHandler = () => {
        onDelete(product);
    }

    return (
        <div className={`product ${className}`}>
            <div className='img'/>
            <div className='title'>{product.title}</div>
            <div className='author'>{product.autor}</div>
            <div className='category'>{product.category}</div>
            <div className='price'>
                <b>{product.price}₽</b>
            </div>
            <div className='button-container'>
            <button className='addBtn' onTouchStart={onAddHandler} onClick={onAddHandler}>
                +
            </button>
            <button className='deleteBtn' onTouchStart={onDeleteHandler} onClick={onDeleteHandler}>
                -
            </button>
            </div>
            
        </div>
    );
};

export default ProductItem;