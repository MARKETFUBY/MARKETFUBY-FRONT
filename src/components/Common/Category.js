import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { category } from './CategoryList';

function Category({ setOpenCategory }) {
    const navigate = useNavigate();
    // const [categories, setCategories] = useState([]);
    // const [categoryId, setCategoryId] = useState(null);
    const [active, setActive] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const toggleCategory = () => {
        setActive(!active);
    };

    const handleCategoryClick = section => {
        setSelectedCategory(prevRegion =>
            prevRegion === section ? null : section,
        );
    };

    return (
        <Div>
            <div
                className='categoryContainer'
                onMouseLeave={() => setOpenCategory(false)}
            >
                {category && (
                    <div className='mainCategoryFrame'>
                        <ul>
                            {category.map((section, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() =>
                                        handleCategoryClick(section.title)
                                    }
                                >
                                    <img src={section.img}></img>
                                    <span>{section.title}</span>
                                </li>
                            ))}
                            {selectedCategory && (
                                <div
                                    className='subcategoryFrame'
                                    // onMouseLeave={() => setCategoryId(0)}
                                >
                                    {category
                                        .find(
                                            category =>
                                                category.title ===
                                                selectedCategory,
                                        )
                                        .subtitle.map(data => (
                                            <div key={data.key}>
                                                <li
                                                    onClick={() =>
                                                        setSelectedSubCategory(
                                                            data.key,
                                                        )
                                                    }
                                                >
                                                    <span>{data.label}</span>
                                                </li>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </Div>
    );
}

export default Category;

const Div = styled.div`
    z-index: 1000;
    max-height: calc(95vh - 55px);
    min-height: 200px;
    position: absolute;
    display: flex;
    top: 40px;
    padding-top: 10px;
    animation: 0.2s linear 0s 1 normal none running animation-tb0mmg;

    .categoryContainer {
        position: relative;
        border: 1px solid rgb(221, 221, 221);
        background-color: rgb(255, 255, 255);
        position: relative;
        z-index: 21;
        /* width: 517px; */
    }
    .mainCategoryFrame {
        img {
            width: 24px;
            height: 24px;
        }
        background-color: white;
        height: 100%;
        &:hover {
            border-right: none;
        }
        ul {
            overflow-y: auto;
            width: 247px;
            height: 100%;
            /* background-color: rgb(255, 255, 255); */
            cursor: pointer;
            margin: 0;
            padding: 0;
            padding-top: 10px;
        }
        li {
            display: flex;
            list-style: none;
            padding: 7px 0px 9px 14px;
            &:hover {
                background-color: #f7f7f7;
                font-weight: bold;
            }
        }
        span {
            flex: 1 1 0%;
            padding: 1px 20px 0px 10px;
            color: rgb(51, 51, 51);
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
            &:hover {
                color: rgb(95, 0, 128);
            }
        }
        .mainCategoriesName {
            padding: 20px;
            background-color: white;
            border-left: 1px solid #f7f7f7;
            border-right: 1px solid #f7f7f7;
            width: 200px;
            height: 30px;
            font-size: 16px;
            &:hover {
                background-color: #f7f7f7;
                font-weight: bold;
            }
        }
    }
    .subcategoryFrame {
        width: 268px;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 247px;
        background-color: rgb(247, 247, 247);
        z-index: -1;
        animation: 0.2s linear 0s 1;
        padding-top: 5px;
        li {
            padding: 7px 0px 9px 14px;
        }
        span {
            font-size: 16px;
            &:hover {
                font-weight: bold;
                text-decoration: underline;
            }
        }
        .subCategoriesName {
            width: 200px;
            padding: 20px;
            background-color: #f7f7f7;
            width: 200px;
            height: 30px;
            font-size: 16px;
            &:hover {
                font-weight: bold;
                text-decoration: underline;
            }
        }
    }
`;
