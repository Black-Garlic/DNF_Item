import React from "react";
import { equipItem, itemProps } from "@typings/types";

export const parseLineBreak = (option: string, colSpan: number) => {
  let result: any;
  const splitOption = option.split("\n");

  return (
    <td colSpan={colSpan}>
      <ul style={{ listStyle: "none", paddingLeft: 0, textAlign: "left" }}>
        {splitOption.map((value) => {
          return <li>{value}</li>;
        })}
      </ul>
    </td>
  );
};

export const checkEquip = (item: itemProps, equip: equipItem) => {
  switch (item.part) {
    case "상의":
      if (equip.top === item) return true;
      break;
    case "머리어깨":
      if (equip.shoulder === item) return true;
      break;
    case "하의":
      if (equip.pants === item) return true;
      break;
    case "벨트":
      if (equip.belt === item) return true;
      break;
    case "신발":
      if (equip.shoe === item) return true;
      break;
    case "팔찌":
      if (equip.bracelet === item) return true;
      break;
    case "목걸이":
      if (equip.neckless === item) return true;
      break;
    case "반지":
      if (equip.ring === item) return true;
      break;
    case "보조장비":
      if (equip.support === item) return true;
      break;
    case "마법석":
      if (equip.stone === item) return true;
      break;
    case "귀걸이":
      if (equip.earRing === item) return true;
      break;
  }
  return false;
};
