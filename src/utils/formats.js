const formatDate = (target) => {
  const date = new Date(target);
  const year = String(date.getFullYear()).padStart(2, 0);
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const today = String(date.getDate()).padStart(2, 0);
  const hour = String(date.getHours()).padStart(2, 0);
  const min = String(date.getMinutes()).padStart(2, 0);
  return `${year}.${month}.${today} | ${hour}:${min}`;
};

const formatPrice = (target) => {
  if(target){
    let result = target.toLocaleString('ko-KR');
    return result;
  };
}

export { formatDate, formatPrice };