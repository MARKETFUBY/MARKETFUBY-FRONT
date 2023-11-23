import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import arrow from '../../assets/icon/arrow.png';
import flippedArrow from '../../assets/icon/flippedArrow.png';
import { putCartList } from '../../api/cart';

function CartList({ roomTempList, refrigeList, frozenList }) {
    const [isCartRefrigeVisible, setCartRefrigeVisible] = useState(true);
    const [isCartRoomVisible, setCartRoomVisible] = useState(true);
    const [isCartFrozenVisible, setCartFrozenVisible] = useState(true);
    const [checked, setChecked] = useState(false);

    const count = roomTempList.length + refrigeList.length + frozenList.length;

    const [checkedRefrigeItems, setCheckedRefrigeItems] = useState(
        refrigeList?.length > 0 ? Array(refrigeList.length).fill(false) : [],
    );

    const [checkedRoomItems, setCheckedRoomItems] = useState(
        roomTempList?.length > 0 ? Array(roomTempList.length).fill(false) : [],
    );

    const [checkedFrozenItems, setCheckedFrozenItems] = useState(
        frozenList?.length > 0 ? Array(frozenList.length).fill(false) : [],
    );

    const handleCheckRefrigeChange = index => {
        const newCheckedRefrigeItems = [...checkedRefrigeItems];
        newCheckedRefrigeItems[index] = !newCheckedRefrigeItems[index];
        setCheckedRefrigeItems(newCheckedRefrigeItems);
    };

    const handleCheckRoomChange = index => {
        const newCheckedRoomItems = [...checkedRoomItems];
        newCheckedRoomItems[index] = !newCheckedRoomItems[index];
        setCheckedRoomItems(newCheckedRoomItems);
    };

    const handleCheckFrozenChange = index => {
        const newCheckedFrozenItems = [...checkedFrozenItems];
        newCheckedFrozenItems[index] = !newCheckedFrozenItems[index];
        setCheckedFrozenItems(newCheckedFrozenItems);
    };

    const toggleCartRefrigeVisibility = () => {
        setCartRefrigeVisible(!isCartRefrigeVisible);
    };

    const toggleCartRoomVisibility = () => {
        setCartRoomVisible(!isCartRoomVisible);
    };

    const toggleCartFrozenVisibility = () => {
        setCartFrozenVisible(!isCartFrozenVisible);
    };

    const handleUpdateItemCount = async (itemKey, newCount) => {
        try {
            const data = await putCartList(itemKey, newCount);
            console.log('df', itemKey, newCount);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCheckAllChange = () => {
        setChecked(!checked);

        const newCheckedRefrigeItems = checkedRefrigeItems.map(() => !checked);
        setCheckedRefrigeItems(newCheckedRefrigeItems);

        const newCheckedRoomItems = checkedRoomItems.map(() => !checked);
        setCheckedRoomItems(newCheckedRoomItems);

        const newCheckedFrozenItems = checkedFrozenItems.map(() => !checked);
        setCheckedFrozenItems(newCheckedFrozenItems);
    };

    return (
        <Div>
            <ChoiceBox>
                <div className='all'>
                    <Check>
                        <input
                            id='checkall'
                            type='checkbox'
                            checked={checked}
                            onChange={handleCheckAllChange}
                        ></input>
                        <label
                            htmlFor='checkall'
                            className={checked ? 'checked' : ''}
                        >
                            ✔
                        </label>
                    </Check>
                    <div>전체 선택(2/{count})</div>
                    <span></span>
                    <button className='deleteBtn'>선택삭제</button>
                </div>
            </ChoiceBox>
            {refrigeList && refrigeList.length > 0 && (
                <TopIconBox>
                    <h4 style={{ display: 'flex' }}>
                        <span className='top'>
                            <span>
                                <span
                                    className='iconImg'
                                    style={{
                                        backgroundImage:
                                            'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVFQzQ5RSIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQuNjI3IDI1LjI1NWE3LjYyNyA3LjYyNyAwIDAgMCA3LjYyNi03LjYyN2MwLTIuODA4LTIuNTQyLTcuMTg0LTcuNjI2LTEzLjEyOEM5LjU0MiAxMC40NDQgNyAxNC44MiA3IDE3LjYyOGE3LjYyNyA3LjYyNyAwIDAgMCA3LjYyNyA3LjYyN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE0LjYyNyAyMC42NmEzLjgxMyAzLjgxMyAwIDAgMCAzLjgxMy0zLjgxMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K)',
                                    }}
                                ></span>
                            </span>
                            냉장식품
                        </span>
                    </h4>
                    <button
                        className='cartListIconBox'
                        onClick={toggleCartRefrigeVisibility}
                    >
                        <img
                            src={isCartRefrigeVisible ? arrow : flippedArrow}
                        />
                    </button>
                </TopIconBox>
            )}
            {isCartRefrigeVisible && (
                <div className='cartItemList'>
                    {refrigeList &&
                        refrigeList.map((data, key) => (
                            <CartItem
                                key={data.cartProductId}
                                itemKey={data.cartProductId}
                                data={data}
                                checked={
                                    checkedRefrigeItems[data.cartProductId]
                                }
                                onCheckChange={() =>
                                    handleCheckRefrigeChange(data.cartProductId)
                                }
                                updateItemCount={(itemKey, newCount) =>
                                    handleUpdateItemCount(itemKey, newCount)
                                }
                            />
                        ))}
                </div>
            )}
            {frozenList && frozenList.length > 0 && (
                <TopIconBox>
                    <h4 style={{ display: 'flex' }}>
                        <span className='top'>
                            <span>
                                <span
                                    className='iconImg'
                                    style={{
                                        backgroundImage:
                                            'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNS4wNDQgNGEuNzUuNzUgMCAwIDEgLjc0NC42NDhsLjAwNi4xMDJ2Mi42ODlsMS43Mi0xLjcyYS43NS43NSAwIDAgMSAuOTc3LS4wNzJsLjA4NC4wNzNhLjc1Ljc1IDAgMCAxIC4wNzIuOTc2bC0uMDcyLjA4NC0yLjc4IDIuNzgtLjAwMSA0LjM5IDMuODAyLTIuMTk0IDEuMDE4LTMuNzk4YS43NS43NSAwIDAgMSAxLjQ3LjI3OWwtLjAyLjEwOS0uNjMgMi4zNSAyLjMyOS0xLjM0NmEuNzUuNzUgMCAwIDEgLjgzNCAxLjI0M2wtLjA4NC4wNTctMi4zMjggMS4zNDQgMi4zNDguNjNhLjc1Ljc1IDAgMCAxIC41NS44MDlsLS4wMi4xMWEuNzUuNzUgMCAwIDEtLjgxLjU1bC0uMTA4LS4wMi0zLjc5OC0xLjAxOC0zLjgwMyAyLjE5NCAzLjgwMiAyLjE5NiAzLjc5OS0xLjAxOGEuNzUuNzUgMCAwIDEgLjQ5MyAxLjQxM2wtLjEwNS4wMzYtMi4zNS42MyAyLjMzIDEuMzQ0YS43NS43NSAwIDAgMS0uNjU5IDEuMzQ0bC0uMDkxLS4wNDQtMi4zMjgtMS4zNDQuNjI4IDIuMzQ4YS43NS43NSAwIDAgMS0uNDI1Ljg4MmwtLjEwNS4wMzdhLjc1Ljc1IDAgMCAxLS44ODItLjQyNmwtLjAzNy0uMTA1LTEuMDE3LTMuNzk3LTMuODAzLTIuMTk3djQuMzkxbDIuNzggMi43OGEuNzUuNzUgMCAwIDEtLjk3NiAxLjEzNGwtLjA4NC0uMDczLTEuNzItMS43MnYyLjY5YS43NS43NSAwIDAgMS0xLjQ5My4xMDJsLS4wMDctLjEwMnYtMi42ODhsLTEuNzIgMS43MThhLjc1Ljc1IDAgMCAxLS45NzYuMDczbC0uMDg0LS4wNzNhLjc1Ljc1IDAgMCAxLS4wNzMtLjk3NmwuMDczLS4wODQgMi43OC0yLjc4di00LjM5MWwtMy44MDEgMi4xOTUtMS4wMTggMy43OThhLjc1Ljc1IDAgMCAxLTEuNDctLjI3OWwuMDItLjEwOS42My0yLjM1LTIuMzI5IDEuMzQ2YS43NS43NSAwIDAgMS0uODM1LTEuMjQzbC4wODUtLjA1NyAyLjMyOC0xLjM0NC0yLjM0OC0uNjNhLjc1Ljc1IDAgMCAxLS41NTEtLjgwOWwuMDItLjExYS43NS43NSAwIDAgMSAuODEtLjU1bC4xMS4wMiAzLjc5NyAxLjAxOCAzLjgwMi0yLjE5NS0zLjgwMS0yLjE5NS0zLjc5OSAxLjAxOGEuNzUuNzUgMCAwIDEtLjQ5My0xLjQxM2wuMTA1LS4wMzYgMi4zNS0uNjMtMi4zMy0xLjM0NGEuNzUuNzUgMCAwIDEgLjY1OS0xLjM0NGwuMDkxLjA0NCAyLjMyOCAxLjM0NC0uNjI4LTIuMzQ4YS43NS43NSAwIDAgMSAuNDI1LS44ODJsLjEwNS0uMDM3YS43NS43NSAwIDAgMSAuODgyLjQyNmwuMDM3LjEwNSAxLjAxNyAzLjc5NyAzLjgwMiAyLjE5NnYtNC4zOWwtMi43OC0yLjc4YS43NS43NSAwIDAgMSAuOTc3LTEuMTM0bC4wODQuMDczIDEuNzIgMS43MTlWNC43NWEuNzUuNzUgMCAwIDEgLjc1LS43NXoiIGZpbGw9IiM2RkFGRjMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K)',
                                    }}
                                ></span>
                            </span>
                            냉동식품
                        </span>
                    </h4>
                    <button
                        className='cartListIconBox'
                        onClick={toggleCartFrozenVisibility}
                    >
                        <img src={isCartFrozenVisible ? arrow : flippedArrow} />
                    </button>
                </TopIconBox>
            )}
            {isCartFrozenVisible && (
                <div className='cartItemList'>
                    {frozenList &&
                        frozenList.map((data, key) => (
                            <CartItem
                                key={data.cartProductId}
                                itemKey={data.cartProductId}
                                data={data}
                                checked={checkedFrozenItems[data.cartProductId]}
                                onCheckChange={() =>
                                    handleCheckFrozenChange(data.cartProductId)
                                }
                                updateItemCount={(itemKey, newCount) =>
                                    handleUpdateItemCount(itemKey, newCount)
                                }
                            />
                        ))}
                </div>
            )}
            {roomTempList && roomTempList.length > 0 && (
                <TopIconBox>
                    <h4 style={{ display: 'flex' }}>
                        <span className='top'>
                            <span>
                                <span
                                    className='iconImg'
                                    style={{
                                        backgroundImage:
                                            'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNSA0KSIgc3Ryb2tlPSIjRkY5QjVDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjExLjUiIGN5PSIxMSIgcj0iNiIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xMS41IDB2Mk0xOS4yNzggMy4yMjJsLTEuNDE0IDEuNDE0TTIyLjUgMTFoLTJNMTkuMjc4IDE4Ljc3OGwtMS40MTQtMS40MTRNMTEuNSAyMnYtMk0zLjcyMiAxOC43NzhsMS40MTQtMS40MTRNLjUgMTFoMk0zLjcyMiAzLjIyMmwxLjQxNCAxLjQxNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)',
                                    }}
                                ></span>
                            </span>
                            상온식품
                        </span>
                    </h4>
                    <button
                        className='cartListIconBox'
                        onClick={toggleCartRoomVisibility}
                    >
                        <img src={isCartRoomVisible ? arrow : flippedArrow} />
                    </button>
                </TopIconBox>
            )}
            {isCartRoomVisible && (
                <div className='cartItemList'>
                    {roomTempList &&
                        roomTempList.map((data, key) => (
                            <CartItem
                                key={data.cartProductId}
                                itemKey={data.cartProductId}
                                data={data}
                                checked={checkedRoomItems[data.cartProductId]}
                                onCheckChange={() =>
                                    handleCheckRoomChange(data.cartProductId)
                                }
                                updateItemCount={(itemKey, newCount) =>
                                    handleUpdateItemCount(itemKey, newCount)
                                }
                            />
                        ))}
                </div>
            )}
            <ChoiceBox>
                <div className='all'>
                    <Check>
                        <input
                            id='checkall'
                            type='checkbox'
                            checked={checked}
                            onChange={handleCheckAllChange}
                        ></input>
                        <label
                            htmlFor='checkall'
                            className={checked ? 'checked' : ''}
                        >
                            ✔
                        </label>
                    </Check>
                    <div>전체 선택(2/{count})</div>
                    <span></span>
                    <button className='deleteBtn'>선택삭제</button>
                </div>
            </ChoiceBox>
        </Div>
    );
}

export default CartList;

const Div = styled.div``;

const ChoiceBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 10px 16px 2px;
    border-top: 1px solid rgb(244, 244, 244);
    font-size: 14px;
    line-height: 26px;
    font-weight: 500;

    .choiceSection {
        margin: 0;
        padding: 0;
    }

    .all {
        display: flex;
        font-size: 14px;
        line-height: 26px;
        padding: 0px;
        color: rgb(51, 51, 51);
        position: relative;
        display: flex;
        align-items: center;
        font-size: 16px;

        span {
            display: inline-block;
            width: 1px;
            height: 14px;
            background: rgb(221, 221, 221);
            margin: 6px 21px 0px 22px;
            vertical-align: top;
        }
    }

    .deleteBtn {
        border-radius: 0;
        font-size: 14px;
        color: #333;
        background-color: transparent;
        border: none;
        text-align: center;
    }
`;

const TopIconBox = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    border-top: 1px solid rgb(51, 51, 51);
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;

    .top {
        display: flex;
        align-items: center;
        font-weight: 500;
    }

    span {
        margin-right: 8px;
        vertical-align: top;
    }

    .icon {
        margin-right: 8px;
        vertical-align: top;
    }

    .iconImg {
        width: 30px;
        height: 30px;
        display: inline-block;
        background-size: cover;
        background-position: center center;
        background-image: ;
    }

    .cartListIconBox {
        display: flex;
        border: 0px;
        background: none;
        outline: none;
        align-items: center;

        img {
            width: 20px;
            height: 20px;
        }
    }
`;

const Check = styled.div`
    input[type='checkbox'] {
        display: none;
        margin-right: 12px;
        border-radius: 24px;
    }
    input[type='checkbox'] + label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: 1px solid rgb(221, 221, 221);
        position: relative;
        color: rgb(221, 221, 221);
        margin-right: 12px;
        border-radius: 24px;

        &.checked {
            background-color: rgb(95, 0, 128);
            border: 1px solid rgb(95, 0, 128);
        }
    }
`;
