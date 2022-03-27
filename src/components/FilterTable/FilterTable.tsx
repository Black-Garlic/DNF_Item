import React, { useEffect, useState } from "react";
import "@assets/css/styles.css";
import FilterItem from "@components/FilterTable/FilterItem";
import { useAppDispatch, useAppSelector } from "@store/store";
import { itemProps } from "@typings/types";
import {
  partItem,
  propertyItem,
  statusItem,
  dungeonItem,
} from "@domains/filterInfo";
import { addFilters, removeFilters } from "@services/DataSlice";

export default function FilterTable() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const dispatch = useAppDispatch();

  window.onresize = () => {
    setWindowSize(window.innerWidth);
  };

  const selectFilter = (selectedFilter: string, add: boolean) => {
    if (add) {
      dispatch(addFilters(selectedFilter));
    } else {
      dispatch(removeFilters(selectedFilter));
    }
  };

  if (windowSize < 1000) {
    return (
      <table className={"dataTable-table"} style={{ fontSize: 14 }}>
        <thead>
          <tr style={{ display: "none" }}>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td colSpan={6}>부위</td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            {partItem[0].map((value, index) => (
              <FilterItem
                key={"part1" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
            <td></td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            {partItem[1].map((value, index) => (
              <FilterItem
                key={"part2" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>

          <tr style={{ textAlign: "center" }}>
            <td colSpan={6}>속성 / 스탯</td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            {propertyItem[0].map((value, index) => (
              <FilterItem
                key={"property1" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>
          <tr style={{ textAlign: "center" }}>
            {propertyItem[1].map((value, index) => (
              <FilterItem
                key={"property2" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>

          <tr style={{ textAlign: "center" }}>
            <td colSpan={6}>상태이상</td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            {statusItem[0].map((value, index) => (
              <FilterItem
                key={"status1" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>
          <tr style={{ textAlign: "center" }}>
            {statusItem[1].map((value, index) => (
              <FilterItem
                key={"status2" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>

          <tr style={{ textAlign: "center" }}>
            <td colSpan={6}>던전</td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            {dungeonItem[0].map((value, index) => (
              <FilterItem
                key={"dungeon1" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
            <td></td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            {dungeonItem[1].map((value, index) => (
              <FilterItem
                key={"dungeon2" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <table className={"dataTable-table"} style={{ fontSize: 14 }}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
            <th style={{ width: "15%" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td rowSpan={2}>부위</td>
            {partItem[0].map((value, index) => (
              <FilterItem
                key={"part1" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
            <td></td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            {partItem[1].map((value, index) => (
              <FilterItem
                key={"part2" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td rowSpan={2}>속성 / 스탯</td>
            {propertyItem[0].map((value, index) => (
              <FilterItem
                key={"property1" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>
          <tr style={{ textAlign: "center" }}>
            {propertyItem[1].map((value, index) => (
              <FilterItem
                key={"property2" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td rowSpan={2}>상태이상</td>
            {statusItem[0].map((value, index) => (
              <FilterItem
                key={"status1" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>
          <tr style={{ textAlign: "center" }}>
            {statusItem[1].map((value, index) => (
              <FilterItem
                key={"status2" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td rowSpan={2} colSpan={2}>
              던전
            </td>
            {dungeonItem[0].map((value, index) => (
              <FilterItem
                key={"dungeon1" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>
          <tr style={{ textAlign: "center" }}>
            {dungeonItem[1].map((value, index) => (
              <FilterItem
                key={"dungeon2" + index}
                color={value.color}
                background={value.background}
                item={value.item}
                handleClick={selectFilter}
              />
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}
