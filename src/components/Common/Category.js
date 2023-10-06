import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Category({ setOpenCategory }) {
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(null);

    const navigate = useNavigate();

    // const findSubCategory = id => {
    //     const subCategory = categories.find(
    //         category => +category.mainCategoriesId === +id,
    //     );

    //     if (!subCategory) return [];
    //     else return subCategory.subCategories;
    // };

    return (
        <Div
            className='categoryContainer'
            onMouseLeave={() => setOpenCategory(false)}
        >
            {/* <div className='mainCategoryFrame'>
                {categories.map(category => {
                    return (
                        <li
                            key={category.mainCategoriesId}
                            id={category.mainCategoriesId}
                            className='mainCategoriesName'
                            onMouseEnter={() => {
                                setCategoryId(category.mainCategoriesId);
                            }}
                            onClick={() => {
                                navigate(`/list/${category.mainCategoriesId}`);
                            }}
                        >
                            {category.mainCategoriesName}
                        </li>
                    );
                })}
            </div>
            <div
                className='subcategoryFrame'
                onMouseLeave={() => setCategoryId(0)}
            >
                {findSubCategory(categoryId)?.map(category => {
                    return (
                        <li
                            key={category.subCategoriesId}
                            id={category.subCategoriesId}
                            className='subCategoriesName'
                            onClick={() => {
                                navigate(
                                    `/list/sub/${category.subCategoriesId}`,
                                );
                            }}
                        >
                            {category?.subCategoriesName}
                        </li>
                    );
                })}
            </div> */}
        </Div>
    );
}

export default Category;

const Div = styled.div`
    .categoryContainer {
        position: absolute;
        top: 50px;
        display: flex;
    }
    .mainCategoryFrame {
        background-color: $white-color;
        height: 100%;
        &:hover {
            border-right: none;
        }
        .mainCategoriesName {
            padding: 20px;
            background-color: $white-color;
            border-left: 1px solid #f7f7f7;
            border-right: 1px solid #f7f7f7;
            width: 200px;
            height: 30px;
            font-size: 16px;

            &:hover {
                background-color: #f7f7f7;
                font-weight: bold;
                color: $primary-color;
            }
        }
    }
    .subcategoryFrame {
        .subCategoriesName {
            width: 200px;
            @include flex(null, null, column);
            padding: 20px;
            background-color: #f7f7f7;
            width: 200px;
            height: 30px;
            font-size: 16px;
            &:hover {
                color: $primary-color;
                font-weight: bold;
                text-decoration: underline;
            }
        }
    }
`;
