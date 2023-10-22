import styled from 'styled-components';
import Header from '../components/Common/Header';
import image1 from '../assets/benefit/benefit1.jpg';
import image2 from '../assets/benefit/benefit2.jpg';
import image3 from '../assets/benefit/benefit3.jpg';
import image4 from '../assets/benefit/benefit4.jpg';
import image5 from '../assets/benefit/benefit5.jpg';
import image6 from '../assets/benefit/benefit6.jpg';
import image7 from '../assets/benefit/benefit7.jpg';
import image8 from '../assets/benefit/benefit8.jpg';

const Benefit = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
    ];

    return (
        <>
            <Header />
            <ImageList>
                {images.map(image => (
                    <img src={image} />
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
