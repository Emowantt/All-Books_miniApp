/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from '../Button/Button';
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {
    
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product' + className}>
            <img src={"../../public/img/"+ this.props.item.img}></img>
            <div className='title'>{product.title}</div>
            <div className='author'>{product.author}</div>
            <div className='category'>{product.category}</div>
            <div className='price'>
                <b>{product.price}</b>
            </div>
            <Button className = {'addBtn'} onClick = {onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;