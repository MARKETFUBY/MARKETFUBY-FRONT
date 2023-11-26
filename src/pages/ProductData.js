import product1 from '../assets/product/product1.png';
import product2 from '../assets/product/product2.png';
import product3 from '../assets/product/product3.png';
import product4 from '../assets/product/product4.png';
import product5 from '../assets/product/product5.png';
import product6 from '../assets/product/product6.png';

export const PRODUCT_DATA = [
    {
        image: product1,
        name: '[사미헌] 갈비탕',
        description: '진짜 갈비로 우려낸 전통 갈비탕',
        price: '12,000',
        commentCnt: '9,999+',
        isKurlyOnly: false,
        isDiscounted: false,
    },
    {
        image: product2,
        name: '[KF365] 새콤달콤 제주 하우스 감귤 1.5kg',
        description: '언제 먹어도 반가운 과일',
        price: '12,900',
        commentCnt: '9,999+',
        isKurlyOnly: true,
        isDiscounted: true,
        discountRate: '15%',
        discountedPrice: '10,900',
    },
    {
        image: product3,
        name: '[광화문 미진] 들기름 메밀국수 (2인분)',
        description: '슴슴한 감칠맛이 매력',
        price: '9,900',
        commentCnt: '9,999+',
        isKurlyOnly: true,
        isDiscounted: true,
        discountRate: '10%',
        discountedPrice: '8,910',
    },
    {
        image: product4,
        name: '[고래사어묵] 김치 우동 전골',
        description: '뜨끈한 국물이 필요할 때',
        price: '10,500',
        commentCnt: '9,999+',
        isKurlyOnly: true,
        isDiscounted: true,
        discountRate: '14%',
        discountedPrice: '8,950',
    },
    {
        image: product5,
        name: '[그래놀라 하우스] 그래놀라 5종 (택1)',
        description: '도톰하게 뭉쳐 만든 수제 그래놀라',
        price: '13,500',
        commentCnt: '9,999+',
        isKurlyOnly: false,
        isDiscounted: true,
        discountRate: '10%',
        discountedPrice: '12,150',
    },
    {
        image: product6,
        name: '[리치] 오트밀 미니바이트 1kg',
        description: '고소한 한입 간식을 넉넉하게',
        price: '11,800',
        commentCnt: '9,999+',
        isKurlyOnly: false,
        isDiscounted: true,
        discountRate: '15%',
        discountedPrice: '10,620',
    },
];
