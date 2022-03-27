import React, { useEffect, useState } from "react";
import "@assets/css/styles.css";
import { useAppDispatch, useAppSelector } from "@store/store";
import { itemProps, dataTableProps } from "@typings/types";
import { checkEquip, parseLineBreak } from "@libs/DataTableLibrary";
import { removeEquip, setEquip } from "@services/DataSlice";

export default function DataTableShortItem({
  item,
  index,
  partString,
}: dataTableProps) {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const equip = useAppSelector((state) => state.data.equip);

  return (
    <tbody>
      <tr
        key={partString ? partString + "-small-1" : item.itemName + "-small-1"}
      >
        <td colSpan={2}>{item.itemName}</td>
        <td colSpan={2}>
          {item.part}
          {item.material && "(" + item.material + ")"}
        </td>
        <td colSpan={3}>{item.drop1 ? item.drop1 : ""}</td>
        <td
          onClick={() => {
            if (checkEquip(item, equip)) {
              dispatch(removeEquip(item));
            } else {
              dispatch(setEquip(item));
            }
          }}
        >
          {checkEquip(item, equip) ? "장착 해제" : "장착"}
        </td>
      </tr>
      <tr
        key={partString ? partString + "-small-2" : item.itemName + "-small-2"}
      >
        <td colSpan={2}>피해증가 : {item.dmg}</td>
        <td colSpan={2}>버프력 : {item.buff}</td>
        <td colSpan={3}>{item.drop2 ? item.drop2 : ""}</td>
        <td
          onClick={() => {
            if (active) {
              setActive(false);
            } else {
              setActive(true);
            }
          }}
        >
          더보기
        </td>
      </tr>
      {item.drop3 && (
        <tr>
          <td colSpan={5}></td>
          <td colSpan={3}>item.drop3</td>
        </tr>
      )}
      {active && (
        <tr
          key={
            partString ? partString + "-small-3" : item.itemName + "-small-3"
          }
        >
          {parseLineBreak(item.option1, 2)}
          {parseLineBreak(item.option2, 2)}
          {parseLineBreak(item.option3, 2)}
          {parseLineBreak(item.option4, 2)}
        </tr>
      )}
    </tbody>
  );
}
