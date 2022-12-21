import { deleteProduct, getListProductAdmin } from '@/api/requests';
import AdminProductItem from '@/components/admin/AdminProductItem/AdminProductItem';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/common/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Products.module.scss';
import Pagination from '@/components/common/Pagination';
import { BiSearch } from 'react-icons/bi';
import { isProductsUpdate, setProductsStore } from '@/store/adminProductsSlice';
import { setOrdersStore } from '@/store/adminOrdersSlice';

export default function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [checkId, setCheckId] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const limit = 10;
  const offset = (page - 1) * limit;

  let storedProducts = useSelector((state) => {
    return state.products.data;
  });
  let storedPage = useSelector((state) => {
    return state.products.page;
  });
  let isUpdate = useSelector((state) => {
    return state.products.isUpdate;
  });

  useEffect(() => {
    dispatch(setOrdersStore({ page: 0 }));
    if (storedPage > 0) {
      setPage(storedPage);
    }
    if (storedProducts.length === 0 || isUpdate) {
      async function getData() {
        try {
          dispatch(showLoading());
          const data = await getListProductAdmin();
          setProducts(data);
          setSearch(data);
          dispatch(setProductsStore({ data }));
          dispatch(isProductsUpdate(false));
        } catch {
          alert('상품 목록을 조회하지 못했습니다.');
        } finally {
          dispatch(hideLoading());
        }
      }
      getData();
    } else {
      dispatch(showLoading());
      setProducts(storedProducts);
      setSearch(storedProducts);
      dispatch(hideLoading());
    }
  }, []);

  useEffect(() => {
    dispatch(setProductsStore({ page }));
  }, [page]);

  const handleSearch = () => {
    let copy = [...products];
    copy = copy.filter((item) => item.title.includes(keyword));
    dispatch(setProductsStore({ keyword }));
    setSearch(copy);
    setPage(1);
  };

  const handleKeyup = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    } else {
      setKeyword(event.target.value);
    }
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
    if (checkId.length === 0) {
      alert('선택된 상품이 없습니다.');
      return;
    }
    if (window.confirm('선택한 상품을 삭제하시겠습니까?')) {
      try {
        dispatch(showLoading());
        for (let id of checkId) {
          await deleteProduct(id);
        }
        async function getData() {
          const data = await getListProductAdmin();
          setProducts(data);
          setSearch(data);
          dispatch(isProductsUpdate(true));
        }
        getData();
        alert('삭제가 완료되었습니다.');
      } catch {
        alert('삭제가 완료되지 못했습니다.');
      } finally {
        dispatch(hideLoading());
      }
    }
  };

  const handleChange = (event) => {
    if (!event.target.value) {
      setSearch(products);
      return;
    }
    let copy = [...products];
    if (event.target.name === 'tags') {
      copy = copy.filter((item) => item.tags === event.target.value);
    } else if (event.target.name === 'soldout') {
      copy = copy.filter((item) => String(item.isSoldOut) === event.target.value);
    }
    setSearch(copy);
    setPage(1);
  };

  return (
    <div>
      <div className={style.searchWrap}>
        <h1>상품 관리</h1>
        <div className={style.search}>
          <select className={style.selectBox} name="tags" onChange={handleChange}>
            <option value="">카테고리</option>
            <option value="주식">주식</option>
            <option value="간식">간식</option>
            <option value="건강">건강</option>
            <option value="케어">케어</option>
            <option value="의류">의류</option>
            <option value="리빙">리빙</option>
            <option value="외출">외출</option>
            <option value="위생">위생</option>
          </select>
          <select className={style.selectBox} name="soldout" onChange={handleChange}>
            <option value="">품절여부</option>
            <option value={true}>Y</option>
            <option value={false}>N</option>
          </select>
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
