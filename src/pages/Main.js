import React from 'react';
import Header from '../components/Common/Header';
import styled from 'styled-components';
import Slide from '../components/Common/Slide';
import RecommendationSection from '../components/Main/RecommendationSection';

function Main() {
    return (
        <Div>
            <Header />
            <Slide />
            <RecommendationSection />
        </Div>
    );
}

export default Main;

const Div = styled.div`
    margin: 0px auto;
    padding-bottom: 80px;
`;
