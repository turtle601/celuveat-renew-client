import { restaurantsMock } from '../restaurants/restaurants.mock';

import type { Celebrity } from './celebrities.type';

export const getCelebritiesMock = () => {
  return restaurantsMock
    .flatMap((restaurant) => {
      return restaurant.visitedCelebrities;
    })
    .reduce<Celebrity[]>((acc, celeb) => {
      if (acc.filter((v) => celeb.name === v.name).length === 0) {
        acc.push(celeb);
      }

      return acc;
    }, []);
};

export const celebPlaceholderData = {
  content: [
    {
      id: 19,
      name: '홍석천',
      profileImageUrl:
        'https://i.namu.wiki/i/-3Kvk5ekg3cnR9CmXGX5Zc6UF9kfSNL9qDFqFvIgMfTtoF9MV81gc11j6wIVCum0gnNednahtZD7dPKjVmsYRQ.webp',
    },
    {
      id: 11,
      name: '이원일',
      profileImageUrl:
        'https://yt3.googleusercontent.com/ALEqZi9aeCfyxCfmNEJGf0CXpbkabeMFNACcyD53j7GwFmC5qPgbRS5xStq67KDmfPVclMsK=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 3,
      name: '맛객리우',
      profileImageUrl:
        'https://yt3.googleusercontent.com/CDluFKwVxooXKsEa9WhPkBk2FGOnI8_qKFsMhr6GkAQj3JSrc-OhnwxcTM6hUGoBzcGgqB2Tow=s160-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 13,
      name: '풍자',
      profileImageUrl:
        'https://yt3.googleusercontent.com/ytc/APkrFKanwG55M-jYZzbjKPMHLjRMpgiPZRL9wtR0T7MDQQ=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 7,
      name: '성시경',
      profileImageUrl:
        'https://yt3.googleusercontent.com/vQrdlCaT4Tx1axJtSUa1oxp2zlnRxH-oMreTwWqB-2tdNFStIOrWWw-0jwPvVCUEjm_MywltBFY=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 4,
      name: '마리아주',
      profileImageUrl:
        'https://yt3.googleusercontent.com/TJcuv5nlJKaZQBi3mbuuqOvBVzAlE-UdBR_bNgChy4_q-G43o5UUPXquvGCYx8Q6bze-8I253w=s160-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 12,
      name: '현주엽',
      profileImageUrl:
        'https://yt3.googleusercontent.com/9MdHU3Mfpz_R3aUrxzDI570ca9TimJPoC0ZU-PB1y-ti--apQOdQGW9huode8yod9KvjMPNw=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 1,
      name: '먹적',
      profileImageUrl:
        'https://yt3.googleusercontent.com/ytc/AOPolaQ0vUJt9JWhig6GY1lWLPt_qIRiH-cKgO5Nnl5uicQ=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 6,
      name: '야식이',
      profileImageUrl:
        'https://yt3.googleusercontent.com/ytc/AOPolaQRjK6t7fPPaQrOdApWYUmbltGkWiN6ZowfUQFCMg=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 15,
      name: '최자',
      profileImageUrl:
        'https://yt3.googleusercontent.com/h2LcPbyx1Y8LowtWTKNKbc7a_4FV8i2baCP3YjCHp5S5UoBVF1wr4XX03DMn8EjfvtS5yUztuw=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 10,
      name: '빅페이스',
      profileImageUrl:
        'https://yt3.googleusercontent.com/ytc/AOPolaTCwJ_nAk7CRvRT5S6fL7pfYse6O7IZeANzxGamDQ=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 5,
      name: '김사원세끼',
      profileImageUrl:
        'https://yt3.googleusercontent.com/ytc/AOPolaQnS9nKQFCtkBihMKt1Jhm-nzkUFY3Z6RQpwnbf=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 2,
      name: '회사랑',
      profileImageUrl:
        'https://yt3.googleusercontent.com/ytc/AOPolaSzgHdMFMDyvhiU2qtaYULlZx6pdw4Fz_vsW6J5Qw=s176-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 8,
      name: '백종원',
      profileImageUrl:
        'https://yt3.googleusercontent.com/J3OI66Bc7T3nheyKJKAkXR6tb-_bpCsoRMTFoslOBCXI3DpVY8eFY4LZWzww3BEgkRjMOEoI=s176-c-k-c0x00ffffff-no-rj',
    },
  ],
};
