import { React, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function InquiryContent({ data }) {
    return (
        <List>
            <div className='li'>{data.title}</div>
            <div className='li2'>{data.date}</div>
            <div className='li2'>{data.status}</div>
        </List>
    );
}

export default InquiryContent;

const List = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;

    .li {
        color: rgb(76, 76, 76);
        width: 620px;
        padding: 20px;
        font-size: 14px;
        line-height: 22px;
        text-align: left;
        border-bottom: 1px solid rgb(244, 244, 244);
    }

    .li2 {
        padding: 20px 0px;
        color: rgb(76, 76, 76);
        width: 100px;
        text-align: center;
        font-size: 14px;
        line-height: 22px;
        border-bottom: 1px solid rgb(244, 244, 244);
    }
`;
