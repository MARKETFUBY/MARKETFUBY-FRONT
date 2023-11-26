import { React, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { getMainList } from '../../api/main';
import Loading from '../Common/Loading';
import RecommendationBox from './RecommendationBox';

function RecommendationSection({ handleModalContent }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMain();
    }, []);

    const getMain = async () => {
        try {
            const getData = await getMainList();
            setData(
                Object.entries(getData).map(([key, value]) => ({ key, value })),
            );
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {data.map((section, key) => (
                        <RecommendationBox
                            key={key}
                            data={section.value}
                            handleModalContent={handleModalContent}
                        />
                    ))}
                </>
            )}
        </div>
    );
}

export default RecommendationSection;
