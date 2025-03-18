import type { Celeb } from '../../celeb/model/mainCeleb';

export type RestaurantImage = {
  id: number;
  name: string;
  author: string;
  sns: 'INSTAGRAM';
};

export type Restaurant = {
  id: number;
  name: string;
  category: string;
  roadAddress: string;
  phoneNumber: string;
  naverMapUrl: string;
  viewCount: number;
  likeCount: number;
  rating: number;
  celebs: Celeb[];
  lat: number;
  lng: number;
  image: RestaurantImage;
};

export const recommendationRestaurants: Restaurant[] = [
  {
    id: 311,
    name: '소문난성수감자탕',
    category: '감자탕',
    roadAddress: '서울 성동구 연무장길 45',
    phoneNumber: '02-465-6580',
    naverMapUrl: 'https://map.naver.com/v5/entry/place/11721256?c=15,0,0,0,dh',
    viewCount: 179,
    likeCount: 24,
    rating: 5.0,
    celebs: [
      {
        id: 311,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 311,
      name: 'X25ld19qaW1f7IaM66y464Kc7ISx7IiY6rCQ7J6Q7YOVXzE',
      author: '@_new_jim',
      sns: 'INSTAGRAM',
    },
    lat: 37.5428851,
    lng: 127.0544297,
  },
  {
    id: 469,
    name: '발산한우진곱창',
    category: '곱창,막창,양',
    roadAddress: '서울 강서구 강서로 395 1층 109~110호',
    phoneNumber: '02-2668-7776',
    naverMapUrl: 'https://naver.me/FFvSGnJg',
    viewCount: 57,
    likeCount: 4,
    rating: 3.5,
    celebs: [
      {
        id: 469,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 469,
      name: 'bXVrenppX29uZS0x',
      author: '@mukzzi_one',
      sns: 'INSTAGRAM',
    },
    lat: 37.5610369,
    lng: 126.8385843,
  },
  {
    id: 470,
    name: '진미평양냉면',
    category: '냉면',
    roadAddress: '서울 강남구 학동로 305-3',
    phoneNumber: '02-515-3469',
    naverMapUrl: 'https://naver.me/xw69Cb5o',
    viewCount: 79,
    likeCount: 5,
    rating: 4.2,
    celebs: [
      {
        id: 470,
        name: '성시경',
        youtubeChannelName: '@sungsikyung',
        profileImageUrl:
          'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 470,
      name: 'anVkb3Jhbl8tMQ',
      author: '@judoran_',
      sns: 'INSTAGRAM',
    },
    lat: 37.5161614,
    lng: 127.036033,
  },
  {
    id: 506,
    name: '무근본',
    category: '바(BAR)',
    roadAddress: '서울 성동구 성수일로8길 40-1 1층 105호',
    phoneNumber: '',
    naverMapUrl: 'https://naver.me/G7KOrpYK',
    viewCount: 27,
    likeCount: 0,
    rating: 0.0,
    celebs: [
      {
        id: 506,
        name: '빅페이스',
        youtubeChannelName: '@bigfacetv',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ytc/AOPolaTCwJ_nAk7CRvRT5S6fL7pfYse6O7IZeANzxGamDQ=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 506,
      name: 'bW9vZ2V1bmJvbi0y',
      author: '@moogeunbon',
      sns: 'INSTAGRAM',
    },
    lat: 37.5454325,
    lng: 127.0547234,
  },
  {
    id: 513,
    name: '대막',
    category: '일식당',
    roadAddress: '서울 강남구 압구정로46길 75 , 1층',
    phoneNumber: '0507-1403-5056',
    naverMapUrl: 'https://naver.me/FFviHZGz',
    viewCount: 15,
    likeCount: 0,
    rating: 0.0,
    celebs: [
      {
        id: 513,
        name: '빅페이스',
        youtubeChannelName: '@bigfacetv',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ytc/AOPolaTCwJ_nAk7CRvRT5S6fL7pfYse6O7IZeANzxGamDQ=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 513,
      name: 'Zm9vZGllamFuaWVlZS0x',
      author: '@foodiejanieee',
      sns: 'INSTAGRAM',
    },

    lat: 37.5238303,
    lng: 127.0367102,
  },
  {
    id: 525,
    name: '올디스타코',
    category: '멕시코,남미음식',
    roadAddress: '서울 중구 충무로4길 3',
    phoneNumber: '',
    naverMapUrl: 'https://naver.me/GvXgnZvR',
    viewCount: 67,
    likeCount: 7,
    rating: 0.0,
    celebs: [
      {
        id: 525,
        name: '홍석천이원일',
        youtubeChannelName: '@gaypig1111',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ALEqZi9aeCfyxCfmNEJGf0CXpbkabeMFNACcyD53j7GwFmC5qPgbRS5xStq67KDmfPVclMsK=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 525,
      name: 'b2xkaWVzdGFjby0x',
      author: '@oldiestaco',
      sns: 'INSTAGRAM',
    },
    lat: 37.5651105,
    lng: 126.9929827,
  },
  {
    id: 535,
    name: '농민백암순대',
    category: '순대,순댓국',
    roadAddress: '서울 강남구 선릉로86길 40-4',
    phoneNumber: '02-555-9603',
    naverMapUrl: 'https://naver.me/xGOiXFfS',
    viewCount: 35,
    likeCount: 5,
    rating: 5.0,
    celebs: [
      {
        id: 535,
        name: '홍석천이원일',
        youtubeChannelName: '@gaypig1111',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ALEqZi9aeCfyxCfmNEJGf0CXpbkabeMFNACcyD53j7GwFmC5qPgbRS5xStq67KDmfPVclMsK=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 535,
      name: 'Y2VsdXZlYXQtMQ',
      author: '@celuveat',
      sns: 'INSTAGRAM',
    },
    lat: 37.5037129,
    lng: 127.0530043,
  },
  {
    id: 680,
    name: '블루메베이글',
    category: '베이커리',
    roadAddress: '제주 제주시 가령로4길 3 1층',
    phoneNumber: '0507-1445-3444',
    naverMapUrl: 'https://naver.me/Gyeylsf3',
    viewCount: 58,
    likeCount: 4,
    rating: 3.5,
    celebs: [
      {
        id: 680,
        name: '핫둘제주',
        youtubeChannelName: '@hot2_jeju',
        profileImageUrl:
          'https://yt3.googleusercontent.com/1dfMVQ10pcdZrxVexr_xkfT2mWhpq-7Cy-u48auoE1Vc0cuGvq4jKjqPLB3eFIEO1WtoUvDaxQ=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 680,
      name: 'Ymx1bWVfYmFnZWwtMQ',
      author: '@blume_bagel',
      sns: 'INSTAGRAM',
    },
    lat: 33.4967164,
    lng: 126.5331297,
  },
  {
    id: 698,
    name: '그동네떡볶이',
    category: '종합분식',
    roadAddress: '서울 마포구 와우산로27길 14 그동네떡볶이',
    phoneNumber: '0507-1362-5414',
    naverMapUrl: 'https://naver.me/5tjeOb7E',
    viewCount: 15,
    likeCount: 4,
    rating: 0.0,
    celebs: [
      {
        id: 698,
        name: '홍석천이원일',
        youtubeChannelName: '@gaypig1111',
        profileImageUrl:
          'https://yt3.googleusercontent.com/ALEqZi9aeCfyxCfmNEJGf0CXpbkabeMFNACcyD53j7GwFmC5qPgbRS5xStq67KDmfPVclMsK=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 698,
      name: 'aGtmb29kaWVfeXVtXzFfQ3dScTFmOUJsSmU',
      author: '@hkfoodie_yum',
      sns: 'INSTAGRAM',
    },
    lat: 37.5540663,
    lng: 126.9275134,
  },
  {
    id: 712,
    name: '무탄',
    category: '중식당',
    roadAddress: '서울 강남구 논현로176길 22 1층',
    phoneNumber: '02-549-9339',
    naverMapUrl: 'https://naver.me/FgivzDWH',
    viewCount: 12,
    likeCount: 0,
    rating: 0.0,
    celebs: [
      {
        id: 712,
        name: '먹보스쮸엽이',
        youtubeChannelName: '@mukboss_jjooyup',
        profileImageUrl:
          'https://yt3.googleusercontent.com/9MdHU3Mfpz_R3aUrxzDI570ca9TimJPoC0ZU-PB1y-ti--apQOdQGW9huode8yod9KvjMPNw=s176-c-k-c0x00ffffff-no-rj',
      },
    ],
    image: {
      id: 712,
      name: 'YmlubmFfcmlfNF9Dd2UtRy0ydXNZQw',
      author: '@binna_ri',
      sns: 'INSTAGRAM',
    },
    lat: 37.5272745,
    lng: 127.0303366,
  },
];
