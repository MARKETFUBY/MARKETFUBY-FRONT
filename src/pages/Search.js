import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Header from '../components/Common/Header';
import Filter from '../components/Common/Filter';
import SortBar from '../components/Common/SortBar';
import Product from '../components/Common/Product';

import { PRODUCT_DATA } from './ProductData';

const Search = () => {
    const location = useLocation();
    const word = new URLSearchParams(location.search).get('word');

    return (
        <>
            <Header />
            <Title>
                '<span>{word}</span>
                '에 대한 검색결과
            </Title>
            <Body>
                <Filter />
                <Result>
                    <SortBar count='6' />
                    <ProductList>
                        {PRODUCT_DATA.map(product => {
                            return <Product {...product} />;
                        })}
                    </ProductList>
                </Result>
            </Body>
        </>
    );
};

export default Search;

const Body = styled.div`
    position: relative;
    display: flex;
    width: 1050px;
    margin: 50px auto 75px;
`;

const Title = styled.div`
    margin-top: 50px;
    text-align: center;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.5px;

    span {
        font-weight: 500;
        color: rgb(95, 0, 128);
    }
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
