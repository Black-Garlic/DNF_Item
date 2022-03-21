import React, { useEffect, useState } from "react";
import "@assets/css/styles.css";
import FilterItem from "@components/FilterItem";

interface FilterProps {
  addFilter: any;
  removeFilter: any;
  filters: string[];
}

export default function FilterTable({
  addFilter,
  removeFilter,
  filters,
}: FilterProps) {
  const filterItems: string[] = [
    "모속강",
    "모속저",
    "화속강",
    "화속저",
    "명속강",
    "명속저",
    "수속강",
    "수속저",
    "암속강",
    "암속저",
    "전체상변",
    "기절",
    "화상",
    "중독",
    "감전",
    "출혈",
    "암흑",
    "수면",
    "저주",
    "석화",
    "혼란",
    "빙결",
    "HP",
    "MP",
  ];

  const partItem = [
    [
      { color: "#FFF", background: "#000", item: "상의" },
      { color: "#FFF", background: "#000", item: "머리어깨" },
      { color: "#FFF", background: "#000", item: "하의" },
      { color: "#FFF", background: "#000", item: "벨트" },
      { color: "#FFF", background: "#000", item: "신발" },
    ],
    [
      { color: "#FFF", background: "#000", item: "팔찌" },
      { color: "#FFF", background: "#000", item: "목걸이" },
      { color: "#FFF", background: "#000", item: "반지" },
      { color: "#FFF", background: "#000", item: "보조장비" },
      { color: "#FFF", background: "#000", item: "마법석" },
      { color: "#FFF", background: "#000", item: "귀걸이" },
    ],
  ];

  const propertyItem = [
    [
      { color: "#FFF", background: "#000", item: "모속강" },
      { color: "#FFF", background: "#E00", item: "화속강" },
      { color: "#FFF", background: "#DD0", item: "명속강" },
      { color: "#FFF", background: "#2881DD", item: "수속강" },
      { color: "#FFF", background: "#404", item: "암속강" },
      { color: "#FFF", background: "#E00", item: "HP" },
    ],
    [
      { color: "#FFF", background: "#000", item: "모속저" },
      { color: "#FFF", background: "#E00", item: "화속저" },
      { color: "#FFF", background: "#DD0", item: "명속저" },
      { color: "#FFF", background: "#2881DD", item: "수속저" },
      { color: "#FFF", background: "#404", item: "암속저" },
      { color: "#FFF", background: "#00C", item: "MP" },
    ],
  ];

  const statusItem = [
    [
      { color: "#FFF", background: "#FF6FBD", item: "전체상변" },
      { color: "#FFF", background: "#FFC200", item: "기절" },
      { color: "#FFF", background: "#C10303", item: "화상" },
      { color: "#FFF", background: "#73356F", item: "중독" },
      { color: "#FFF", background: "#1E90FF", item: "감전" },
      { color: "#FFF", background: "#720000", item: "출혈" },
    ],
    [
      { color: "#FFF", background: "#262323", item: "암흑" },
      { color: "#FFF", background: "#99DBE9", item: "수면" },
      { color: "#FFF", background: "#4F1D6C", item: "저주" },
      { color: "#FFF", background: "#494949", item: "석화" },
      { color: "#FFF", background: "#FFCC66", item: "혼란" },
      { color: "#FFF", background: "#067EDB", item: "빙결" },
    ],
  ];
  const dungeonItem = [
    [
      { color: "#FFF", background: "#000", item: "백색의 땅" },
      { color: "#FFF", background: "#000", item: "헤블론 예언소" },
      { color: "#FFF", background: "#000", item: "나사우 삼림" },
      { color: "#FFF", background: "#000", item: "캐니언 힐" },
      { color: "#FFF", background: "#000", item: "파괴된 죽음의 성" },
    ],
    [
      { color: "#FFF", background: "#000", item: "베리콜리스" },
      { color: "#FFF", background: "#000", item: "왕의 요람" },
      { color: "#FFF", background: "#000", item: "퀸 팔트" },
      { color: "#FFF", background: "#000", item: "이터널 플레임 연구소" },
      { color: "#FFF", background: "#000", item: "노블레스 코드" },
    ],
  ];

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.onresize = () => {
    setWindowSize(window.innerWidth);
  };

  if (windowSize < 1000) {
    return (
      <table className={"dataTable-table"} style={{ fontSize: 14 }}>
        <thead>
          <tr>
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
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
                addFilter={addFilter}
                removeFilter={removeFilter}
                filters={filters}
              />
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}
