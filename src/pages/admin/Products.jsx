import { getListProductAdmin } from '@/api/requests';
import AdminProductItem from '@/components/admin/AdminProductItem';
import Button from '@/components/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Products.module.scss';
import Pagination from '@/components/Pagination';
import { BiSearch } from 'react-icons/bi';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;

  useEffect(() => {
    async function getData() {
      const data = await getListProductAdmin();
      setProducts(data);
      setSearch(data);
    }
    getData();
  }, []);

  const handleSearch = () => {
    const search = document.querySelector('.product-search').value;
    let copy = [...products];
    copy = copy.filter((item) => item.title.includes(search));
    setSearch(copy);
  };

  const handleKeyup = (event) => {
    if (event.key === 'Enter') handleSearch();
  };

  return (
    <div>
      <ul className={style.productList}>
        <li>
          <input type='checkbox' name='' id='' />
          <div>
            <span>NO</span>
            <span>카테고리</span>
            <span>상품명</span>
            <span>가격</span>
            <span>품절여부</span>
          </div>
        </li>
        {Array.isArray(search) ? (
          search.slice(offset, offset + limit).map((item, idx) => {
            return <AdminProductItem key={item.id} item={item} idx={idx + 1 * offset} />;
          })
        ) : (
          <li>등록된 상품이 없습니다.</li>
        )}
      </ul>
      <div className={style.buttons}>
        <Button name={'삭제'} />
        {Array.isArray(search) ? <Pagination total={search.length} limit={limit} page={page} setPage={setPage} /> : null}
        <Link to='/admin/products/add'>
          <Button name={'등록'} isPurple={true} />
        </Link>
      </div>
      <div className={style.search}>
        <div className={style.inputWrap}>
          <input className='product-search' type='text' placeholder='상품명을 입력해 주세요.' onKeyUp={handleKeyup} />
          <button onClick={handleSearch}>
            <BiSearch size='24' color='rgb(95, 0, 128)' title='검색' />
          </button>
        </div>
      </div>
    </div>
  );
}
