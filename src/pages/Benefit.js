import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Header from '../components/Common/Header';
import { getBenefitList } from '../api/benefit';

const Benefit = () => {
    const [events, setEvents] = useState();

    useEffect(() => {
        getBenefitList()
            .then(res => setEvents(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Header />
            <ImageList>
                {events?.map(event => (
                    <img src={event.image} />
                ))}
            </ImageList>
        </>
    );
};

export default Benefit;

const ImageList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
        cursor: pointer;
    }
`;
