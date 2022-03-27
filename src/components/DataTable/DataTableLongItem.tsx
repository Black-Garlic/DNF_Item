import React, { useEffect, useState } from "react";
import "@assets/css/styles.css";
import { useAppDispatch, useAppSelector } from "@store/store";
import { itemProps, dataTableProps } from "@typings/types";
import { checkEquip, parseLineBreak } from "@libs/DataTableLibrary";
import { removeEquip, setEquip } from "@services/DataSlice";

export default function DataTableLongItem({
  item,
  index,
  partString,
}: dataTableProps) {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const equip = useAppSelector((state) => state.data.equip);

  if (item.drop3) {
    return (
      <>
        <tr
          key={
            partString ? partString + "-large-1" : item.itemName + "-large-1"
          }
          style={{ borderTopWidth: 2 }}
        >
          <td rowSpan={3}>{item.itemName}</td>
          <td rowSpan={3}>
            {item.part}
            {item.material && "(" + item.material + ")"}
          </td>
          <td rowSpan={3}>{item.dmg}</td>
          <td rowSpan={3}>{item.buff}</td>
          <td>{item.drop1}</td>
          <td
            rowSpan={3}
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
          <td
            rowSpan={3}
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
        <tr
          key={
            partString ? partString + "-large-2" : item.itemName + "-large-2"
          }
        >
          <td>{item.drop2}</td>
        </tr>
        <tr
          key={
            partString ? partString + "-large-3" : item.itemName + "-large-3"
          }
        >
          <td>{item.drop3}</td>
        </tr>
        {active && (
          <tr key={"option-" + index}>
            {parseLineBreak(item.option1, 2)}
            {parseLineBreak(item.option2, 2)}
            {parseLineBreak(item.option3, 1)}
            {parseLineBreak(item.option4, 2)}
          </tr>
        )}
      </>
    );
  } else if (item.drop2) {
    return (
      <>
        <tr
          key={
            partString ? partString + "-large-1" : item.itemName + "-large-1"
          }
          style={{ borderTopWidth: 2 }}
        >
          <td rowSpan={2}>{item.itemName}</td>
          <td rowSpan={2}>
            {item.part}
            {item.material && "(" + item.material + ")"}
          </td>
          <td rowSpan={2}>{item.dmg}</td>
          <td rowSpan={2}>{item.buff}</td>
          <td>{item.drop1}</td>
          <td
            rowSpan={2}
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
          <td
            rowSpan={2}
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
        <tr
          key={
            partString ? partString + "-large-2" : item.itemName + "-large-2"
          }
        >
          <td>{item.drop2}</td>
        </tr>
        {active && (
          <tr key={"option-" + index}>
            {parseLineBreak(item.option1, 2)}
            {parseLineBreak(item.option2, 2)}
            {parseLineBreak(item.option3, 1)}
            {parseLineBreak(item.option4, 2)}
          </tr>
        )}
      </>
    );
  } else {
    return (
      <>
        <tr
          key={
            partString ? partString + "-large-1" : item.itemName + "-large-1"
          }
          style={{ borderTopWidth: 2 }}
        >
          <td>{item.itemName}</td>
          <td>
            {item.part}
            {item.material && "(" + item.material + ")"}
          </td>
          <td>{item.dmg}</td>
          <td>{item.buff}</td>
          <td>{item.drop1}</td>
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
        {active && (
          <tr key={"option-" + index}>
            {parseLineBreak(item.option1, 2)}
            {parseLineBreak(item.option2, 2)}
            {parseLineBreak(item.option3, 1)}
            {parseLineBreak(item.option4, 2)}
          </tr>
        )}
      </>
    );
  }
}
