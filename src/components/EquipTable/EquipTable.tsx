import React, { useEffect, useState } from "react";
import "@assets/css/styles.css";
import { useAppDispatch, useAppSelector } from "@store/store";
import DataTableLongItem from "@components/DataTable/DataTableLongItem";
import DataTableShortItem from "@components/DataTable/DataTableShortItem";

export default function EquipTable() {
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
          {equip.top !== undefined && (
            <DataTableShortItem item={equip.top} index={0} partString={"top"} />
          )}
          {equip.shoulder !== undefined && (
            <DataTableShortItem
              item={equip.shoulder}
              index={1}
              partString={"shoulder"}
            />
          )}
          {equip.pants !== undefined && (
            <DataTableShortItem
              item={equip.pants}
              index={2}
              partString={"pants"}
            />
          )}
          {equip.belt !== undefined && (
            <DataTableShortItem
              item={equip.belt}
              index={3}
              partString={"belt"}
            />
          )}
          {equip.shoe !== undefined && (
            <DataTableShortItem
              item={equip.shoe}
              index={4}
              partString={"shoe"}
            />
          )}
          {equip.bracelet !== undefined && (
            <DataTableShortItem
              item={equip.bracelet}
              index={5}
              partString={"bracelet"}
            />
          )}
          {equip.neckless !== undefined && (
            <DataTableShortItem
              item={equip.neckless}
              index={6}
              partString={"neckless"}
            />
          )}
          {equip.ring !== undefined && (
            <DataTableShortItem
              item={equip.ring}
              index={7}
              partString={"ring"}
            />
          )}
          {equip.support !== undefined && (
            <DataTableShortItem
              item={equip.support}
              index={8}
              partString={"support"}
            />
          )}
          {equip.stone !== undefined && (
            <DataTableShortItem
              item={equip.stone}
              index={9}
              partString={"stone"}
            />
          )}
          {equip.earRing !== undefined && (
            <DataTableShortItem
              item={equip.earRing}
              index={10}
              partString={"earRing"}
            />
          )}
        </table>
      </>
    );
  } else {
    return (
      <>
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
          <tbody style={{ marginBottom: 30 }}>
            {equip.top !== undefined && (
              <DataTableLongItem
                item={equip.top}
                index={0}
                partString={"top"}
              />
            )}
            {equip.shoulder !== undefined && (
              <DataTableLongItem
                item={equip.shoulder}
                index={1}
                partString={"shoulder"}
              />
            )}
            {equip.pants !== undefined && (
              <DataTableLongItem
                item={equip.pants}
                index={2}
                partString={"pants"}
              />
            )}
            {equip.belt !== undefined && (
              <DataTableLongItem
                item={equip.belt}
                index={3}
                partString={"belt"}
              />
            )}
            {equip.shoe !== undefined && (
              <DataTableLongItem
                item={equip.shoe}
                index={4}
                partString={"shoe"}
              />
            )}
            {equip.bracelet !== undefined && (
              <DataTableLongItem
                item={equip.bracelet}
                index={5}
                partString={"bracelet"}
              />
            )}
            {equip.neckless !== undefined && (
              <DataTableLongItem
                item={equip.neckless}
                index={6}
                partString={"neckless"}
              />
            )}
            {equip.ring !== undefined && (
              <DataTableLongItem
                item={equip.ring}
                index={7}
                partString={"ring"}
              />
            )}
            {equip.support !== undefined && (
              <DataTableLongItem
                item={equip.support}
                index={8}
                partString={"support"}
              />
            )}
            {equip.stone !== undefined && (
              <DataTableLongItem
                item={equip.stone}
                index={9}
                partString={"stone"}
              />
            )}
            {equip.earRing !== undefined && (
              <DataTableLongItem
                item={equip.earRing}
                index={10}
                partString={"earRing"}
              />
            )}
          </tbody>
        </table>
      </>
    );
  }
}
