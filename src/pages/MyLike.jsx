import React, { useState } from 'react';
import { deleteLike } from '@/store/likeSlice';
import { insertItem } from '@/store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '@/utils/formats.js';
import Pagination from '@/components/Pagination';
import Button from '@/components/Button';
import MypageHeader from '../components/MypageHeader';
import style from './MyLike.module.scss';
import CartModal from '@/components/Product/CartModal/CartModal';
import { VscHeart } from 'react-icons/vsc';
import { BsCart2 } from 'react-icons/bs';

export default function MyLike() {
  let dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [count] = useState(1);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  let list = useSelector((state) => state.like);

  return (
    <div className={style.myLike}>
      <MypageHeader name={'찜한 상품'} /><span className={style.likeNum}>({list.length})</span>
      {
        modal === true ? <CartModal modal={modal} setModal={setModal} /> : null
      }
      <ul>
        {(list.length === 0) ? (
          <div className={style.content}>
            <VscHeart size='60' title='찜' color='lightgray' />
            <p>찜한 상품이 없습니다.</p>
          </div>
        ) : (
          list.slice(offset, offset + limit).map((item, idx) => (
            <li item={item} key={idx}>
              <Link to={"/products/" + item.id}>
                <div className={style.img}>
                  {
                    item.isSoldOut ? <span className={style.soldOut}>Sold Out</span> : null
                  }
                  <img src={item.thumbnail} alt={item.title} />
                </div>
              </Link>
              <Link to={"/products/" + item.id}>
                <div className={style.product}>
                  <p>{item.title}</p>
                  <span>{formatPrice(item.price)} 원</span>
                </div>
              </Link>
              <div className={style.button}>
                <Button 
                  name={'삭제'} 
                  onClick={() => {
                    if (window.confirm("정말 삭제합니까?")) {
                      dispatch(deleteLike(item.id));
                    }
                  }}
                />
                {(item.isSoldOut) ? (
                  <Button name={'품절'}></Button>
                ) : (
                  <Button
                  name={'담기'}
                  onClick={() => {
                    dispatch(insertItem({
                      id: item.id,
                      isSoldOut: false,
                      price: item.price,
                      thumbnail: item.thumbnail,
                      title: item.title,
                      count: count,
                      checked: true,
                    }));
                    setModal(true);
                  }}
                ></Button>
                )}
                <BsCart2 className={style.cart} size='13' title='장바구니' color='rgb(95, 0, 128)'/>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className={style.page}>
        {Array.isArray(list) ? (
          <Pagination total={list.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
      </div>
    </div>
  );
}
