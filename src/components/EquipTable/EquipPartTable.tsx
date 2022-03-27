import React, { useEffect, useState } from "react";
import "@assets/css/styles.css";
import { useAppSelector } from "@store/store";
import { partItem } from "@domains/filterInfo";

export default function EquipPartTable() {
  const equip = useAppSelector((state) => state.data.equip);

  const checkEquip = (part: string) => {
    switch (part) {
      case "상의":
        if (equip.top) return true;
        break;
      case "머리어깨":
        if (equip.shoulder) return true;
        break;
      case "하의":
        if (equip.pants) return true;
        break;
      case "벨트":
        if (equip.belt) return true;
        break;
      case "신발":
        if (equip.shoe) return true;
        break;
      case "팔찌":
        if (equip.bracelet) return true;
        break;
      case "목걸이":
        if (equip.neckless) return true;
        break;
      case "반지":
        if (equip.ring) return true;
        break;
      case "보조장비":
        if (equip.support) return true;
        break;
      case "마법석":
        if (equip.stone) return true;
        break;
      case "귀걸이":
        if (equip.earRing) return true;
        break;
    }
    return false;
  };

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
          {partItem[0].map((value, index) => {
            if (checkEquip(value.item)) {
              return (
                <td
                  key={value.item + "-item-equip-true"}
                  style={{ backgroundColor: "#000", color: "#fff" }}
                >
                  {value.item}
                </td>
              );
            } else {
              return (
                <td key={value.item + "-item-equip-false"}>{value.item}</td>
              );
            }
          })}
          <td></td>
        </tr>
        <tr style={{ textAlign: "center" }}>
          {partItem[1].map((value, index) => {
            if (checkEquip(value.item)) {
              return (
                <td
                  key={value.item + "-item-equip-true"}
                  style={{ backgroundColor: "#000", color: "#fff" }}
                >
                  {value.item}
                </td>
              );
            } else {
              return (
                <td key={value.item + "-item-equip-false"}>{value.item}</td>
              );
            }
          })}
        </tr>
      </tbody>
    </table>
  );
}
