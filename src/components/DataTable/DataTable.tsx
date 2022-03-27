import React, { useEffect, useState } from "react";
import "@assets/css/styles.css";
import { useAppDispatch, useAppSelector } from "@store/store";
import DataTableLongItem from "@components/DataTable/DataTableLongItem";
import DataTableShortItem from "@components/DataTable/DataTableShortItem";

export default function DataTable() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const items = useAppSelector((state) => state.data.itemList);
  const equip = useAppSelector((state) => state.data.equip);
  const dispatch = useAppDispatch();

  window.onresize = () => {
    setWindowSize(window.innerWidth);
  };

  if (windowSize < 1000) {
    return (
      <>
        <table
          className={"dataTable-table"}
          style={{ fontSize: 12, textAlign: "center" }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
            </tr>
          </thead>
          {/*          {equip.top !== undefined && <DataTableShortItem item={equip.top}, 0, "top"/>}
          {equip.shoulder !== undefined &&
            DataTableShortItem(equip.shoulder, 1, "shoulder")}
          {equip.pants !== undefined &&
            DataTableShortItem(equip.pants, 2, "pants")}
          {equip.belt !== undefined &&
            DataTableShortItem(equip.belt, 3, "belt")}
          {equip.shoe !== undefined &&
            DataTableShortItem(equip.shoe, 4, "shoe")}
          {equip.bracelet !== undefined &&
            DataTableShortItem(equip.bracelet, 5, "bracelet")}
          {equip.neckless !== undefined &&
            DataTableShortItem(equip.neckless, 6, "neckless")}
          {equip.ring !== undefined &&
            DataTableShortItem(equip.ring, 7, "ring")}
          {equip.support !== undefined &&
            DataTableShortItem(equip.support, 8, "support")}
          {equip.stone !== undefined &&
            DataTableShortItem(equip.stone, 9, "stone")}
          {equip.earRing !== undefined &&
            DataTableShortItem(equip.earRing, 10, "earRing")}*/}
        </table>
        <table
          className={"dataTable-table"}
          style={{ fontSize: 12, textAlign: "center" }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
              <th
                style={{
                  width: "12.5%",
                }}
              >
                {" "}
              </th>
            </tr>
          </thead>

          {items.map((item, index) => {
            return <DataTableShortItem item={item} index={index} />;
          })}
        </table>
      </>
    );
  } else {
    return (
      <>
        {/*        <table className={"dataTable-table"} style={{ fontSize: 12 }}>
          <thead>
            <tr>
              <th style={{ width: "15%" }}>장비 이름</th>
              <th style={{ width: "10%" }}>부위</th>

              <th style={{ width: "12.5%" }}>피해증가</th>
              <th style={{ width: "12.5%" }}>버프력</th>

              <th style={{ width: "25%" }}>드랍</th>

              <th style={{ width: "12.5%" }}>장착</th>
              <th style={{ width: "12.5%" }}>더보기</th>
            </tr>
          </thead>
          <tbody style={{ marginBottom: 30 }}>
                        {equip.top !== undefined && DataTableLongItem(equip.top, 0, "top")}
            {equip.shoulder !== undefined &&
              DataTableLongItem(equip.shoulder, 1, "shoulder")}
            {equip.pants !== undefined &&
              DataTableLongItem(equip.pants, 2, "pants")}
            {equip.belt !== undefined &&
              DataTableLongItem(equip.belt, 3, "belt")}
            {equip.shoe !== undefined &&
              DataTableLongItem(equip.shoe, 4, "shoe")}
            {equip.bracelet !== undefined &&
              DataTableLongItem(equip.bracelet, 5, "bracelet")}
            {equip.neckless !== undefined &&
              DataTableLongItem(equip.neckless, 6, "neckless")}
            {equip.ring !== undefined &&
              DataTableLongItem(equip.ring, 7, "ring")}
            {equip.support !== undefined &&
              DataTableLongItem(equip.support, 8, "support")}
            {equip.stone !== undefined &&
              DataTableLongItem(equip.stone, 9, "stone")}
            {equip.earRing !== undefined &&
              DataTableLongItem(equip.earRing, 10, "earRing")}
          </tbody>
        </table>*/}

        <table className={"dataTable-table"} style={{ fontSize: 12 }}>
          <thead>
            <tr>
              <th style={{ width: "15%" }}>장비 이름</th>
              <th style={{ width: "10%" }}>부위</th>

              <th style={{ width: "12.5%" }}>피해증가</th>
              <th style={{ width: "12.5%" }}>버프력</th>

              <th style={{ width: "25%" }}>드랍</th>

              <th style={{ width: "12.5%" }}>장착</th>
              <th style={{ width: "12.5%" }}>더보기</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return <DataTableLongItem item={item} index={index} />;
            })}
          </tbody>
        </table>
      </>
    );
  }
}
