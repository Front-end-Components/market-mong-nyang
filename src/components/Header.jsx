export default function Header() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-end w-3/5'>
        <ul className='flex gap-3'>
          <li>
            <a href=''>회원가입</a>
          </li>
          <li>
            <a href=''>로그인</a>
          </li>
          <li>
            <a href=''>고객센터</a>
          </li>
        </ul>
      </div>
      <div className='flex justify-between items-center w-3/5'>
        <div className='flex items-center'>
          <img className='w-14' src='/images/logo.png' alt='logo' />
          <h1 className='text-purple-800 ml-3'>Market Mong Nyang</h1>
        </div>
        <div>검색</div>
        <div>장바구니</div>
      </div>
      <div className='flex justify-between w-3/5'>
        <ul>
          <li>
            <a href=''>카테고리</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>신상품</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>베스트</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>알뜰쇼핑</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href=''>특가/혜택</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
