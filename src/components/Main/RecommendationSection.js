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

    const subject = [
        {
            title: '🖤역대급 블랙 특가🖤',
            subtitle: '장바구니 파격 세일부터 골라담기까지!',
        },
        {
            title: '💜슈퍼빅세일 기획특가💜',
            subtitle: '올 가을 찾아온 최대 혜택',
        },
        {
            title: '블랙위크 실시간 랭킹🏆',
            subtitle: '지금 가장 인기있는 특가템 모음🔥',
        },
    ];

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {data.map((section, key) => (
                        <RecommendationBox
                            key={key}
                            title={subject[key].title}
                            subtitle={subject[key].subtitle}
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
