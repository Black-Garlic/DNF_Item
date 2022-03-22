import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { itemProps } from "@typings/types";
import { itemsInfo } from "@domains/itemsInfo";
import { filterItem, setDungeonCount } from "@libs/Filter";
import { dungeonItem } from "@domains/filterInfo";

interface DataSliceProps {
  filters: string[];
  dungeonCount: number[];
  itemList: itemProps[];
}

const initialState: DataSliceProps = {
  filters: [],
  dungeonCount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  itemList: itemsInfo,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addFilters: (state, action: PayloadAction<string>) => {
      if (!state.filters.includes(action.payload)) {
        let newFilter: string[] = [...state.filters];
        newFilter.push(action.payload);
        state.filters = newFilter;
        state.itemList = filterItem(newFilter);
        state.dungeonCount = setDungeonCount(state.itemList);
        console.log(state.dungeonCount);
      }
    },
    removeFilters: (state, action: PayloadAction<string>) => {
      let newFilter: string[] = [];
      state.filters.map((value) => {
        if (value !== action.payload) {
          newFilter.push(value);
        }
      });
      state.filters = newFilter;
      if (newFilter.length === 0) {
        state.dungeonCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        state.itemList = itemsInfo;
      } else {
        state.itemList = filterItem(newFilter);
        state.dungeonCount = setDungeonCount(state.itemList);
        console.log(state.dungeonCount);
      }
    },
  },
});

export const { addFilters, removeFilters } = dataSlice.actions;

export default dataSlice.reducer;
