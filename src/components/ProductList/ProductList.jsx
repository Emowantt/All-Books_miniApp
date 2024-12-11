import React, { useCallback, useEffect, useState } from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../hooks/useTelegram';

const products = [
    {
        id: 1,
        title: 'Зов Ктулху',
        img: '1.jpg',
        autor: 'Говард Филлипс Лавкрафт',
        category: 'Ужасы',
        desc: 'Lorem ipsum',
        price: '29.00',
      },
      {
        id: 2,
        title: 'Превращение',
        img: '2.jpg',
        autor: 'Франц Кафка',
        category: 'Повесть',
        desc: 'Lorem ipsum',
        price: '29.00',
      },
      {
        id: 3,
        title: 'Портрет Дориана Грея',
        img: '3.jpg',
        autor: 'Оскар Уайлд',
        category: 'Роман',
        desc: 'Lorem ipsum',
        price: '29.00',
      },
      {
        id: 4,
        title: 'Фауст',
        img: '4.jpg',
        autor: 'Иоганн Вольфганг фон Гёте',
        category: 'Драма',
        desc: 'Lorem ipsum',
        price: '29.00',
      },
      {
        id: 5,
        title: 'Мастер и маргарита',
        img: '5.jpg',
        autor: 'Булгаков',
        category: 'Роман',
        desc: 'Lorem ipsum',
        price: '29.00',
      },
      {
        id: 6,
        title: 'Ведьмак, Полный сборник',
        img: '6.jpg',
        autor: 'Анджей Сапковский',
        category: 'Фентези',
        desc: 'Lorem ipsum',
        price: '239.00',
      },
      {
        id: 7,
        title: 'Пикник на обочине',
        img: '7.jpg',
        autor: 'Братья Стругацкие',
        category: 'Фантастика',
        desc: 'Lorem ipsum',
        price: '30.00',
      },
      {
        id: 8,
        title: 'Берсерк',
        img: '8.jpg',
        autor: 'Кентато Миура',
        category: 'Комикс',
        desc: 'Lorem ipsum',
        price: '30.00',
      },
]

const getTotalPrice = (items = [],) => {
    return items.reduce((acc, item) => {
        return acc += parseFloat(item.price)
    }, 0)
}

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg, queryId } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    }
    fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

  }, [addedItems, queryId])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
    
  })

  const onAdd = (product) => {
      const alreadyAdded = addedItems.find(item => item.id === product.id);
      console.log('Trying to add:', product);

      if (alreadyAdded) {
          console.log('Product already added:', product);
          return; 
      }

      
      const newItems = [...addedItems, product];
      setAddedItems(newItems);
      console.log('Added items:', newItems);

      tg.MainButton.show();
      tg.MainButton.setParams({ text: `К оформлению: ${getTotalPrice(newItems)}₽` });
  };

  const onDelete = (product) => {
      const newItems = addedItems.filter(item => item.id !== product.id);
      console.log('Trying to delete:', product);
      setAddedItems(newItems);
      console.log('Remaining items:', newItems);

      if (newItems.length === 0) {
          tg.MainButton.hide();
      } else {
          tg.MainButton.setParams({ text: `К оформлению: ${getTotalPrice(newItems)}₽` });
      }
  };

  return (
      <div className='list'>
          {products.map(item => (
              <ProductItem 
                  key={item.id}
                  product={item}
                  onAdd={onAdd}
                  onDelete={onDelete}
              />
          ))}
      </div>
  );
};



export default ProductList;