import { createSlice } from '@reduxjs/toolkit';
import { FILTER_LIST } from '../components/Common/FilterData';

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: FILTER_LIST,
    reducers: {
        click(state, action) {
            let filter = state.filter(item => item.id === action.payload);

            // 필터링 설정을 했는데 이미 다른 카테고리가 클릭되어 있는 경우, 다른 필터링은 설정 해제
            if (!filter[0].clicked) {
                state
                    .filter(item => item.clicked)
                    .map(item => {
                        item.clicked = false;
                    });
            }
            filter[0].clicked = !filter[0].clicked;
        },
        initialize(state) {
            state.map(item => {
                item.clicked = false;
            });
        },
    },
});

export default filterSlice;
export const { click, initialize } = filterSlice.actions;
