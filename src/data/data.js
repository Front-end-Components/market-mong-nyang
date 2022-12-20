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
    description: "핥아도 안전! 고양이에게 무해한 원료만으로 순하게 만든 순수 샴푸바입니다.",
    id: "3bdodWXahcx3EBvDHj6I",
    isSoldOut: false,
    price: 12000,
    tags: "케어",
    thumbnail: "https://storage.googleapis.com/heropy-api/vZo3EQ2QLXv083138.png",
    title: "그린태비 햄프씨드 고양이 전용 샴푸바",
  },
  {
    description: "부드러운 극세사로 피부자극을 줄이고 빠른 흡수력으로 드라잉시간은 최소화 하세요!",
    id: "i5SSLhPPhIQMWU61MrXj",
    isSoldOut: false,
    price: 9900,
    tags: "케어",
    thumbnail: "https://storage.googleapis.com/heropy-api/vhRfvgNeKuv094359.jpg",
    title: "프랭킷 펫타올 코지타올",
  },
  {
    description: "가벼운 무게와 높은 보온성을 자랑하는 리틀콜린 슬리핑 베스트입니다.",
    id: "LztGYwnO0CPem8Lo5ZqG",
    isSoldOut: false,
    price: 45000,
    tags: "의류",
    thumbnail: "https://storage.googleapis.com/heropy-api/vYkVhzV_Rgv074915.png",
    title: "리틀콜린 슬리핑 코지 베스트 l 베이지",
  },
  {
    description: "어디에 앉던 푹신한 쿠션을 좋아하는 우리 아이에게 선물하세요.",
    id: "DqpnneZyrZmhAa3wHsvx",
    isSoldOut: false,
    price: 89000,
    tags: "리빙",
    thumbnail: "https://storage.googleapis.com/heropy-api/voscjGuPMfv123059.jpg",
    title: "리토가토 콤피 프릴 러그 (커버분리형) l 블루",
  },
  {
    description: "프라이멀 케나인 동결건조 치킨 포뮬라 156g",
    id: "3cO9tjuAdcjWA1lKfb94",
    isSoldOut: false,
    photo: "https://storage.googleapis.com/heropy-api/vlxRqQiHvPv093752.jpg",
    price: 29000,
    reservations: [],
    tags: "주식",
    thumbnail: "https://storage.googleapis.com/heropy-api/vHAaFD1pRHv093751.jpg",
    title: "프라이멀 케나인 동결건조 치킨 포뮬라 156g",
  }
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
    description: "먹을수록 건강해지는 강아지 간식 슈퍼트릿!",
    id: "CGIS3kXBwOjPm3YIiu8K",
    isSoldOut: false,
    price: 7000,
    tags: "간식",
    thumbnail: "https://storage.googleapis.com/heropy-api/vDr7Kr0_ACv083809.jpg",
    title: "슈퍼트릿 시금치&두부 90g",
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

const careProducts = [
  {
      description: "브러쉬에 끼어있는 반려동물 털 및 먼지를 제거할 때 사용하는 브러쉬 클리어",
      id: "G1U9wIU8hFLrhaTjyuCk",
      isSoldOut: false,
      photo: "https://storage.googleapis.com/heropy-api/vvFHmOIK-Uv094911.jpg",
      price: 8000,
      reservations: [],
      tags: "케어",
      thumbnail: "https://storage.googleapis.com/heropy-api/vtV6rh9MFKv094910.jpg",
      title: "켈러 브러쉬 클리어",
    },
    {
      description: "닥터찰리 포 조인트 강아지 관절영양제 1세트",
      id: "VCoSYptUtTYaEHXZqbn6",
      isSoldOut: false,
      photo: "https://storage.googleapis.com/heropy-api/vtCLmdDdl9v073447.jpg",
      price: 42000,
      reservations: [],
      tags: "건강",
      thumbnail: "https://storage.googleapis.com/heropy-api/v9hQubwQXav073446.jpg",
      title: "닥터찰리 포 조인트 강아지 관절영양제 1세트",
    },
    {
      description: "",
      id: "2AOh71qJO5U3uoSvNBKd",
      isSoldOut: false,
      photo: "https://storage.googleapis.com/heropy-api/vI7NKDGs10v071643.jpg",
      price: 29000,
      reservations: [],
      tags: "건강",
      thumbnail: "https://storage.googleapis.com/heropy-api/vSo_MWh_TLv071641.jpg",
      title: "식스스텝 하트케어 서포트 츄 60ea",
    },
    {
      description: "네코이찌 발톱깎이",
      id: "wLokDqKhWDQd3GOSHHCj",
      isSoldOut: false,
      photo: "https://storage.googleapis.com/heropy-api/v3xLCYSxGVv074418.jpg",
      price: 19500,
      reservations: [],
      tags: "케어",
      thumbnail: "https://storage.googleapis.com/heropy-api/vnNl2_4qVmv074417.jpg",
      title: "네코이찌 발톱깎이",
    },
    {
      description: "허레이 멜팅페이퍼 130매 l 리필",
      id: "7WztblR2fVqemKBDLFa7",
      isSoldOut: false,
      price: 18000,
      tags: "케어",
      thumbnail: "https://storage.googleapis.com/heropy-api/vMwAq013tTv074054.jpg",
      title: "허레이 멜팅페이퍼 130매 l 리필",
    }
    ]

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
      bestProducts,
      xmasProducts,
      careProducts,
      bank,
      account
    };