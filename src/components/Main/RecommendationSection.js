import { React, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import RecommendationBox from './RecommendationBox';

function RecommendationSection() {
    return (
        <Div>
            <RecommendationBox />
            <RecommendationBox />
            <RecommendationBox />
        </Div>
    );
}

export default RecommendationSection;

const Div = styled.div`
    width: 1050px;
    margin: 0px auto;
    padding: 40px 0px;
`;
