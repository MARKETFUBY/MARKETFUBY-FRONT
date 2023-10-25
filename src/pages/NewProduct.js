import styled from 'styled-components';
import Header from '../components/Common/Header';
import Title from '../components/Common/Title';
import Filter from '../components/Common/Filter';
import SortBar from '../components/Common/SortBar';
import Product from '../components/Common/Product';

import product1 from '../assets/product/product1.png';
import product2 from '../assets/product/product2.png';

const NewProduct = () => {
    const productsData = [
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
    ];

    return (
        <Wrapper>
            <Header />
            <Title text='신상품' />
            <Body>
                <Filter />
                <Result>
                    <SortBar count='1' />
                    <ProductList>
                        {productsData.map(product => {
                            return <Product {...product} />;
                        })}
                    </ProductList>
                </Result>
            </Body>
        </Wrapper>
    );
};

export default NewProduct;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1050px;
    margin: 0px auto;
`;

const Body = styled.div`
    position: relative;
    display: flex;
    width: 1050px;
    margin-top: 50px;
    margin-bottom: 75px;
`;

const Result = styled.div`
    width: 100%;
`;

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 249px);
    gap: 31px 18px;
    width: 100%;
`;
