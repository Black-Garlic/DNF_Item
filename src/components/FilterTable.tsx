import React, { useEffect } from "react";
import "@assets/css/styles.css";

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
  console.log(filters);

  return (
    <table className={"dataTable-table"} style={{ fontSize: 14 }}>
      <thead>
        <tr>
          <th colSpan={10}>속성</th>
          <th colSpan={12} rowSpan={2}>
            상태이상
          </th>
          <th colSpan={2} rowSpan={2}>
            스탯
          </th>
        </tr>
        <tr>
          <th colSpan={2}>모속</th>
          <th colSpan={2}>화속</th>
          <th colSpan={2}>명속</th>
          <th colSpan={2}>수속</th>
          <th colSpan={2}>암속</th>
        </tr>
        <tr>
          {filterItems.map((item: string) => {
            if (filters.includes(item)) {
              console.log(true);
              return (
                <th
                  style={{ backgroundColor: "#000", color: "#fff" }}
                  onClick={(e) => removeFilter(item)}
                  key={item}
                >
                  {item}
                </th>
              );
            } else {
              return (
                <th key={item}>
                  <div onClick={(e) => addFilter(item)}>{item}</div>
                </th>
              );
            }
          })}
        </tr>
      </thead>
    </table>
  );
}
