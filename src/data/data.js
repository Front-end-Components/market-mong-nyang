const orders = [{
    detailId: '9jAoagzrZBkSWI5NctEB',
    product: {
      productId: 'nbqtQvEivYwEXTDet7YM',
      title: 'MacBook Pro 16',
      price: 3360000,
      description: '역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성',
      tags: ['가전', '노트북', '컴퓨터'],
      thumbnail: 'https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png',
    },
    reservation: null,
    timePaid: '2021-11-07T20:17:32.112Z',
    isCanceled: true,
    done: false,
  },
  {
    detailId: 'dMhfxyrAupQP18OYmywy',
    product: {
      productId: 'cFmeC7aY5KjZbBAdJE9y',
      title: '삼성전자 스마트모니터 M7 S43AM700',
      price: 639000,
      description: '107.9cm(43인치) / 와이드(16:9) / 평면 / VA / 3840 x 2160(4K UHD) / 픽셀피치: 0.2451mm / 8ms(GTG) / 300cd / 5,00',
      tags: ['가전', '모니터', '컴퓨터'],
      thumbnail: 'https://storage.googleapis.com/heropy-api/vBAK4MQdH5v195712.png',
    },
    reservation: {
      start: '2021-11-12T06:00:00.000Z',
      end: '2021-11-12T07:00:00.000Z',
      isCanceled: false,
      isExpired: true,
    },
    timePaid: '2021-11-07T20:01:49.100Z',
    isCanceled: false,
    done: true,
  },
];

const bestProducts = [{
    description: "로우즈 오쥬바이로우즈 독 치킨가슴살&오리 69g",
    id: "07a6BiN9vmJA3UIphF7e",
    isSoldOut: true,
    price: 42000,
    tags: "주식",
    thumbnail: "https://storage.googleapis.com/heropy-api/v9XMMAJ8iDv094121.jpg",
    title: "로우즈 오쥬바이로우즈 독 치킨가슴살&오리 69g",
  },

];

const xmasProducts = [{
    description: "트리 잭슨 프렌즈 토이",
    id: "yZC7r2wzAuFxtDtWSmI3",
    isSoldOut: false,
    price: 10000,
    tags: "리빙",
    thumbnail: "https://storage.googleapis.com/heropy-api/vBtlR9KeUIv151542.jpg",
    title: "PLAY 트리 잭슨 프렌즈 토이",
  },
  {
    description: "리토가토 윈터메리 케이프 l 그린",
    id: "9vTncKT8yKKsTlc9kkNN",
    isSoldOut: false,
    price: 29000,
    tags: "의류",
    thumbnail: "https://storage.googleapis.com/heropy-api/vsG_hiZw5pv093305.jpg",
    title: "리토가토 윈터메리 케이프 l 그린",
  },
  {
    description: "크리스마스룩을 완성시켜줄 펫페어 대란 아이템!",
    id: "lDcbWbs5fxUjJ4V5yy7j",
    isSoldOut: false,
    price: 19000,
    tags: "의류",
    thumbnail: "https://storage.googleapis.com/heropy-api/vkzvJ_3iO1v073816.png",
    title: "리틀콜린 크리스마스 폼폼 머플러 l 레드그린",
  },
  {
    description: "로우즈 오쥬바이로우즈 독 참치,소고기&소고기간 69g",
    id: "AEV5usa1BzJrcKdmooLO",
    isSoldOut: false,
    price: 4200,
    tags: "주식",
    thumbnail: "https://storage.googleapis.com/heropy-api/v6nc4f6fU4v093925.jpg",
    title: "로우즈 오쥬바이로우즈 독 참치,소고기&소고기간 69g",
  }
];

const bank = [{
    "name": "KB국민은행",
    "code": "004",
    "digits": [3, 2, 4, 3],
    "disabled": false
  },
  {
    "name": "신한은행",
    "code": "088",
    "digits": [3, 3, 6],
    "disabled": true
  },
  {
    "name": "우리은행",
    "code": "020",
    "digits": [4, 3, 6],
    "disabled": true
  },
  {
    "name": "하나은행",
    "code": "081",
    "digits": [3, 6, 5],
    "disabled": false
  },
  {
    "name": "케이뱅크",
    "code": "089",
    "digits": [3, 3, 6],
    "disabled": false
  },
  {
    "name": "카카오뱅크",
    "code": "090",
    "digits": [4, 2, 7],
    "disabled": false
  },
  {
    "name": "NH농협은행",
    "code": "011",
    "digits": [3, 4, 4, 2],
    "disabled": false
  }
];

const account = {
  "totalBalance": 5999900,
  "accounts": [{
      "id": "jQMfKla8vOIFELA3mAXv",
      "bankName": "NH농협은행",
      "bankCode": "011",
      "accountNumber": "356-XXXX-XXXX-XX",
      "balance": 2999900
    },
    {
      "id": "wiPgsXvMAmcLw8AuRHIi",
      "bankName": "KB국민은행",
      "bankCode": "004",
      "accountNumber": "123-XX-XXXX-XXX",
      "balance": 3000000
    }
  ]
}

export {
  orders,
  products,
  bank,
  account,
  xmasProducts
};
