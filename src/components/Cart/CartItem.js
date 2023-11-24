import { useState, React, useEffect } from 'react';
import styled from 'styled-components';
import { deleteCartList, putCartList } from '../../api/cart';

function CartItem({ itemKey, data, checked, onCheckChange, updateItemCount }) {
    const [itemCount, setItemCount] = useState(data.count);

    const handleDecrement = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1);
            updateItemCount(itemKey, itemCount - 1);
        }
    };

    const handleIncrement = () => {
        setItemCount(itemCount + 1);
        updateItemCount(itemKey, itemCount + 1);
    };

    const deleteCartItem = async () => {
        const item = [itemKey];
        try {
            const data = await deleteCartList(item);
            alert('삭제되었습니다.');
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Div>
            <Check>
                <input
                    id={itemKey}
                    type='checkbox'
                    checked={checked}
                    onChange={onCheckChange}
                />
                <label className={checked ? 'checked' : ''} htmlFor={itemKey}>
                    ✔
                </label>
            </Check>
            <div className='ImgBox'>
                <img src={data.imageUrl} alt={data.productName} />
            </div>
            <div className='name'>{data.productName}</div>
            <div className='count'>
                <MinusBtn onClick={handleDecrement}>-</MinusBtn>
                <div className='itemCount'>{itemCount}</div>
                <PlusBtn onClick={handleIncrement}>+</PlusBtn>
            </div>
            <div className='price'>
                <span className='itemPrice'>{data.price}원</span>
            </div>
            <Btn onClick={() => deleteCartItem({ itemKey })}>
                <span></span>
            </Btn>
        </Div>
    );
}

export default CartItem;

const Div = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px 0px;
    margin: 0;

    .ImgBox {
        display: inline-block;
        margin-right: 20px;

        img {
            width: 60px;
            height: 78px;
            background-color: rgb(245, 245, 245);
        }
    }

    .itemImg {
        display: block;
        height: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .name {
        display: flex;
        flex-direction: column;
        width: 345px;
        margin-right: 20px;
        overflow: hidden;
        white-space: nowrap;
        word-break: break-all;
    }
    .count {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid rgb(221, 223, 225);
        width: 88px;
        border-radius: 3px;
    }
    .itemCount {
        font-weight: 400;
        display: inline-flex;
        overflow: hidden;
        white-space: nowrap;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        color: rgb(51, 51, 51);
        text-align: center;
        width: 31px;
        height: 28px;
        line-height: 28px;
    }
    .price {
        display: flex;
        flex-direction: column;
        width: 127px;
        text-align: right;
    }
    .itemPrice {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: rgb(51, 51, 51);
    }
`;

const MinusBtn = styled.button`
    display: inline-flex;
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
    vertical-align: top;
`;
const PlusBtn = styled.button`
    display: inline-flex;
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
    vertical-align: top;
`;

const Btn = styled.button`
    width: 30px;
    height: 30px;
    margin-left: 9px;
    background: none;
    border: none;

    span {
        width: 30px;
        height: 30px;
        display: inline-block;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
        background-size: cover;
        background-position: center center;
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
