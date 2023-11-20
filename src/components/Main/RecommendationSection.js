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
            setData(
                Object.entries(getData).map(([key, value]) => ({ key, value })),
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {data.map((section, key) => (
                <RecommendationBox key={key} data={section.value} />
            ))}
        </div>
    );
}

export default RecommendationSection;
