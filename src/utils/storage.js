const storage = window.localStorage;

const getItem = (key) => {
  try {
    const item = JSON.parse(storage.getItem(key));
    return item;
  } catch (e) {
    storage.removeItem(key);
  }
};

const setItem = (key, item) => {
  storage.setItem(key, JSON.stringify(item));
};

const removeItem = (key) => {
  storage.removeItem(key);
};

export { getItem, setItem, removeItem };
