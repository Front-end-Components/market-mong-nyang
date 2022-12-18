import { deleteProduct, getListProductAdmin } from '@/api/requests';
import AdminProductItem from '@/components/admin/AdminProductItem';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch } from 'react-redux';
import Button from '@/components/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Products.module.scss';
import Pagination from '@/components/Pagination';
import { BiSearch } from 'react-icons/bi';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [checkId, setCheckId] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getListProductAdmin();
        setProducts(data);
        setSearch(data);
      } catch {
        alert('상품 목록을 조회하지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
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

  const handleCheck = (checked, id) => {
    if (checked) {
      setCheckId((prev) => [...prev, id]);
    } else {
      setCheckId(checkId.filter((checkedId) => checkedId !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      search.slice(offset, offset + limit).forEach((item) => idArray.push(item.id));
      setCheckId(idArray);
    } else {
      setCheckId([]);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('선택한 상품을 삭제하시겠습니까?')) {
      try {
        for (let id of checkId) {
          await deleteProduct(id);
        }
        async function getData() {
          const data = await getListProductAdmin();
          setProducts(data);
          setSearch(data);
        }
        getData();
        alert('삭제가 완료되었습니다.');
      } catch {
        alert('삭제가 완료되지 못했습니다.');
      }
    }
  };

  return (
    <div>
      <div className={style.searchWrap}>
        <h1>상품 관리</h1>
        <div className={style.search}>
          <div className={style.inputWrap}>
            <input
              className="product-search"
              type="text"
              placeholder="상품명을 입력해 주세요."
              onKeyUp={handleKeyup}
            />
            <button onClick={handleSearch}>
              <BiSearch size="24" color="rgb(95, 0, 128)" title="검색" />
            </button>
          </div>
        </div>
      </div>
      <ul className={style.productList}>
        <li key="header">
          <input
            type="checkbox"
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkId.length === search.slice(offset, offset + limit).length ? true : false}
          />
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
            return (
              <AdminProductItem
                key={item.id}
                item={item}
                idx={idx + 1 * offset}
                handleCheck={handleCheck}
                checkId={checkId}
              />
            );
          })
        ) : (
          <li key="empty">등록된 상품이 없습니다.</li>
        )}
      </ul>
      <div className={style.buttons}>
        <Button name={'삭제'} onClick={handleDelete} />
        {Array.isArray(search) ? (
          <Pagination total={search.length} limit={limit} page={page} setPage={setPage} />
        ) : null}
        <Link to="/admin/products/add">
          <Button name={'등록'} isPurple={true} />
        </Link>
      </div>
    </div>
  );
}
