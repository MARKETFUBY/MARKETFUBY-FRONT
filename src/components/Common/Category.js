import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { category } from './CategoryList';

function Category({ setOpenCategory }) {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const [active, setActive] = useState(false);

    const toggleCategory = () => {
        setActive(!active);
    };

    return (
        <Div>
            <div
                className='categoryContainer'
                onMouseLeave={() => setOpenCategory(false)}
            >
                {category && (
                    <div className='mainCategoryFrame'>
                        {category.map((section, index) => (
                            <div key={index}>{section.title}</div>
                        ))}
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
    top: 50px;
    /* left:15%; */
    padding-top: 10px;

    .categoryContainer {
        position: relative;
        width: 249px;
        border: 1px solid rgb(221, 221, 221);
        background-color: rgb(255, 255, 255);
    }
    .mainCategoryFrame {
        background-color: white;
        height: 100%;
        &:hover {
            border-right: none;
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
// function Category({ setOpenCategory }) {
//     const [categories, setCategories] = useState([]);
//     const [categoryId, setCategoryId] = useState(null);

//     const navigate = useNavigate();

//     // const findSubCategory = id => {
//     //     const subCategory = categories.find(
//     //         category => +category.mainCategoriesId === +id,
//     //     );

//     //     if (!subCategory) return [];
//     //     else return subCategory.subCategories;
//     // };

//     return (
//         <Div
//             className='categoryContainer'
//             onMouseLeave={() => setOpenCategory(false)}
//         >
//             {/* <div className='mainCategoryFrame'>
//                 {categories.map(category => {
//                     return (
//                         <li
//                             key={category.mainCategoriesId}
//                             id={category.mainCategoriesId}
//                             className='mainCategoriesName'
//                             onMouseEnter={() => {
//                                 setCategoryId(category.mainCategoriesId);
//                             }}
//                             onClick={() => {
//                                 navigate(`/list/${category.mainCategoriesId}`);
//                             }}
//                         >
//                             {category.mainCategoriesName}
//                         </li>
//                     );
//                 })}
//             </div>
//             <div
//                 className='subcategoryFrame'
//                 onMouseLeave={() => setCategoryId(0)}
//             >
//                 {findSubCategory(categoryId)?.map(category => {
//                     return (
//                         <li
//                             key={category.subCategoriesId}
//                             id={category.subCategoriesId}
//                             className='subCategoriesName'
//                             onClick={() => {
//                                 navigate(
//                                     `/list/sub/${category.subCategoriesId}`,
//                                 );
//                             }}
//                         >
//                             {category?.subCategoriesName}
//                         </li>
//                     );
//                 })}
//             </div> */}
//         </Div>
//     );
// }

// export default Category;

// const Div = styled.div`
//     .categoryContainer {
//         position: absolute;
//         top: 50px;
//         display: flex;
//     }
//     .mainCategoryFrame {
//         background-color: $white-color;
//         height: 100%;
//         &:hover {
//             border-right: none;
//         }
//         .mainCategoriesName {
//             padding: 20px;
//             background-color: $white-color;
//             border-left: 1px solid #f7f7f7;
//             border-right: 1px solid #f7f7f7;
//             width: 200px;
//             height: 30px;
//             font-size: 16px;

//             &:hover {
//                 background-color: #f7f7f7;
//                 font-weight: bold;
//                 color: $primary-color;
//             }
//         }
//     }
//     .subcategoryFrame {
//         .subCategoriesName {
//             width: 200px;
//             @include flex(null, null, column);
//             padding: 20px;
//             background-color: #f7f7f7;
//             width: 200px;
//             height: 30px;
//             font-size: 16px;
//             &:hover {
//                 color: $primary-color;
//                 font-weight: bold;
//                 text-decoration: underline;
//             }
//         }
//     }
// `;
