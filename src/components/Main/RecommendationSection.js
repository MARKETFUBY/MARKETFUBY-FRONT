import { React, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { getMainList } from '../../api/main';
import RecommendationBox from './RecommendationBox';

function RecommendationSection() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getMain();
    }, []);

    const getMain = async () => {
        try {
            const getData = await getMainList();
            setData(getData);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
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
