import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { itemProps } from "@typings/types";
import { itemsInfo } from "@domains/itemsInfo";
import { filterItem, setDungeonCount } from "@libs/Filter";
import { dungeonItem } from "@domains/filterInfo";

interface DataSliceProps {
  filters: string[];
  dungeonCount: number[];
  itemList: itemProps[];
  equip: {
    top?: itemProps;
    shoulder?: itemProps;
    pants?: itemProps;
    belt?: itemProps;
    shoe?: itemProps;
    bracelet?: itemProps;
    neckless?: itemProps;
    ring?: itemProps;
    support?: itemProps;
    stone?: itemProps;
    earRing?: itemProps;
  };
}

const initialState: DataSliceProps = {
  filters: [],
  dungeonCount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  itemList: itemsInfo,
  equip: {
    top: undefined,
    shoulder: undefined,
    pants: undefined,
    belt: undefined,
    shoe: undefined,
    bracelet: undefined,
    neckless: undefined,
    ring: undefined,
    support: undefined,
    stone: undefined,
    earRing: undefined,
  },
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
    setEquip: (state, action: PayloadAction<itemProps>) => {
      switch (action.payload.part) {
        case "상의":
          state.equip.top = action.payload;
          break;
        case "머리어깨":
          state.equip.shoulder = action.payload;
          break;
        case "하의":
          state.equip.pants = action.payload;
          break;
        case "벨트":
          state.equip.belt = action.payload;
          break;
        case "신발":
          state.equip.shoe = action.payload;
          break;
        case "팔찌":
          state.equip.bracelet = action.payload;
          break;
        case "목걸이":
          state.equip.neckless = action.payload;
          break;
        case "반지":
          state.equip.ring = action.payload;
          break;
        case "보조장비":
          state.equip.support = action.payload;
          break;
        case "마법석":
          state.equip.stone = action.payload;
          break;
        case "귀걸이":
          state.equip.earRing = action.payload;
          break;
      }
      console.log(state.equip);
    },
    removeEquip: (state, action: PayloadAction<itemProps>) => {
      switch (action.payload.part) {
        case "상의":
          state.equip.top = undefined;
          break;
        case "머리어깨":
          state.equip.shoulder = undefined;
          break;
        case "하의":
          state.equip.pants = undefined;
          break;
        case "벨트":
          state.equip.belt = undefined;
          break;
        case "신발":
          state.equip.shoe = undefined;
          break;
        case "팔찌":
          state.equip.bracelet = undefined;
          break;
        case "목걸이":
          state.equip.neckless = undefined;
          break;
        case "반지":
          state.equip.ring = undefined;
          break;
        case "보조장비":
          state.equip.support = undefined;
          break;
        case "마법석":
          state.equip.stone = undefined;
          break;
        case "귀걸이":
          state.equip.earRing = undefined;
          break;
      }
      console.log(state.equip);
    },
  },
});

export const { addFilters, removeFilters, setEquip, removeEquip } =
  dataSlice.actions;

export default dataSlice.reducer;
