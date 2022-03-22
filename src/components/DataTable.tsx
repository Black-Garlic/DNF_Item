import React, { useEffect, useState } from "react";
import "@assets/css/styles.css";
import { useAppSelector } from "@store/store";

export default function DataTable() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const items = useAppSelector((state) => state.data.itemList);

  const setReinString = (item: any) => {
    let rein = "";
    if (item.allRein) {
      rein += "모속강";
    }
    if (item.fireRein) {
      if (rein.length !== 0) rein += ", ";
      rein += "화속강";
    }
    if (item.lightRein) {
      if (rein.length !== 0) rein += ", ";
      rein += "명속강";
    }
    if (item.iceRein) {
      if (rein.length !== 0) rein += ", ";
      rein += "수속강";
    }
    if (item.darkRein) {
      if (rein.length !== 0) rein += ", ";
      rein += "암속강";
    }

    return rein;
  };

  const setResistString = (item: any) => {
    let resist = "";
    if (item.allResist) {
      resist += "모속저";
    }
    if (item.fireResist) {
      if (resist.length !== 0) resist += ", ";
      resist += "화속저";
    }
    if (item.lightResist) {
      if (resist.length !== 0) resist += ", ";
      resist += "명속저";
    }
    if (item.iceResist) {
      if (resist.length !== 0) resist += ", ";
      resist += "수속저";
    }
    if (item.darkResist) {
      if (resist.length !== 0) resist += ", ";
      resist += "암속저";
    }

    return resist;
  };

  const setStatusString = (item: any) => {
    let status = "";
    if (item.allState) {
      status += "전체상변";
    }
    if (item.stun) {
      if (status.length !== 0) status += ", ";
      status += "기절";
    }
    if (item.burn) {
      if (status.length !== 0) status += ", ";
      status += "화상";
    }
    if (item.poison) {
      if (status.length !== 0) status += ", ";
      status += "중독";
    }
    if (item.electric) {
      if (status.length !== 0) status += ", ";
      status += "감전";
    }
    if (item.bleed) {
      if (status.length !== 0) status += ", ";
      status += "출혈";
    }
    if (item.blind) {
      if (status.length !== 0) status += ", ";
      status += "암흑";
    }
    if (item.sleep) {
      if (status.length !== 0) status += ", ";
      status += "수면";
    }
    if (item.curse) {
      if (status.length !== 0) status += ", ";
      status += "저주";
    }
    if (item.stone) {
      if (status.length !== 0) status += ", ";
      status += "석화";
    }
    if (item.confuse) {
      if (status.length !== 0) status += ", ";
      status += "혼란";
    }
    if (item.frozen) {
      if (status.length !== 0) status += ", ";
      status += "빙결";
    }

    return status;
  };

  const setStatString = (item: any) => {
    let stat = "";
    if (item.hp) {
      stat += "HP";
    }
    if (item.mp) {
      if (stat.length !== 0) stat += ", ";
      stat += "MP";
    }

    return stat;
  };

  const parseLineBreak = (option: string, colSpan: number) => {
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
    //return result;
  };

  window.onresize = () => {
    setWindowSize(window.innerWidth);
  };

  if (windowSize < 1000) {
    return (
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
            ></th>
            <th
              style={{
                width: "12.5%",
              }}
            ></th>
            <th
              style={{
                width: "12.5%",
              }}
            ></th>
            <th
              style={{
                width: "12.5%",
              }}
            ></th>
            <th
              style={{
                width: "12.5%",
              }}
            ></th>
            <th
              style={{
                width: "12.5%",
              }}
            ></th>
            <th
              style={{
                width: "12.5%",
              }}
            ></th>
            <th
              style={{
                width: "12.5%",
              }}
            ></th>
          </tr>
        </thead>
        {items.map((item, index) => {
          return (
            <tbody>
              <tr key={"1-" + index}>
                <td colSpan={2}>{item.itemName}</td>
                <td>피해증가 : {item.dmg}</td>
                <td>{setReinString(item)}</td>
                <td>{setResistString(item)}</td>
                <td colSpan={3}>{item.drop1 ? item.drop1 : ""}</td>
              </tr>
              <tr key={"2-" + index}>
                <td colSpan={2}>
                  {item.part}
                  {item.material && "(" + item.material + ")"}
                </td>
                <td>버프력 : {item.buff}</td>
                <td>{setStatusString(item)}</td>
                <td>{setStatString(item)}</td>
                <td colSpan={3}>{item.drop2 ? item.drop2 : ""}</td>
              </tr>
              {item.drop3 && (
                <tr>
                  <td colSpan={5}></td>
                  <td colSpan={3}>item.drop3</td>
                </tr>
              )}
              <tr key={"3-" + index}>
                {parseLineBreak(item.option1, 2)}
                {parseLineBreak(item.option2, 2)}
                {parseLineBreak(item.option3, 2)}
                {parseLineBreak(item.option4, 2)}
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  } else {
    return (
      <>
        <table className={"dataTable-table"} style={{ fontSize: 12 }}>
          <thead>
            <tr>
              <th style={{ width: "15%" }}>장비 이름</th>
              <th style={{ width: "10%" }}>부위</th>

              <th style={{ width: "8%" }}>피해증가</th>
              <th style={{ width: "8%" }}>버프력</th>
              <th style={{ width: "9%" }}>속강</th>

              <th style={{ width: "9%" }}>속저</th>
              <th style={{ width: "8%" }}>상변</th>
              <th style={{ width: "8%" }}>스탯</th>

              <th style={{ width: "25%" }}>드랍</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              if (item.drop3) {
                return (
                  <>
                    <tr key={"1-" + index} style={{ borderTopWidth: 2 }}>
                      <td rowSpan={3}>{item.itemName}</td>
                      <td rowSpan={3}>
                        {item.part}
                        {item.material && "(" + item.material + ")"}
                      </td>
                      <td rowSpan={3}>{item.dmg}</td>
                      <td rowSpan={3}>{item.buff}</td>
                      <td rowSpan={3}>{setReinString(item)}</td>
                      <td rowSpan={3}>{setResistString(item)}</td>
                      <td rowSpan={3}>{setStatusString(item)}</td>
                      <td rowSpan={3}>{setStatString(item)}</td>
                      <td>{item.drop1}</td>
                    </tr>
                    <tr key={"2-" + index}>
                      <td>{item.drop2}</td>
                    </tr>
                    <tr key={"3-" + index}>
                      <td>{item.drop3}</td>
                    </tr>
                    <tr key={"option-" + index}>
                      {parseLineBreak(item.option1, 2)}
                      {parseLineBreak(item.option2, 3)}
                      {parseLineBreak(item.option3, 3)}
                      {parseLineBreak(item.option4, 2)}
                    </tr>
                  </>
                );
              } else if (item.drop2) {
                return (
                  <>
                    <tr key={"1-" + index} style={{ borderTopWidth: 2 }}>
                      <td rowSpan={2}>{item.itemName}</td>
                      <td rowSpan={2}>
                        {item.part}
                        {item.material && "(" + item.material + ")"}
                      </td>
                      <td rowSpan={2}>{item.dmg}</td>
                      <td rowSpan={2}>{item.buff}</td>
                      <td rowSpan={2}>{setReinString(item)}</td>
                      <td rowSpan={2}>{setResistString(item)}</td>
                      <td rowSpan={2}>{setStatusString(item)}</td>
                      <td rowSpan={2}>{setStatString(item)}</td>
                      <td>{item.drop1}</td>
                    </tr>
                    <tr key={"2-" + index}>
                      <td>{item.drop2}</td>
                    </tr>
                    <tr key={"option-" + index}>
                      {parseLineBreak(item.option1, 2)}
                      {parseLineBreak(item.option2, 3)}
                      {parseLineBreak(item.option3, 3)}
                      {parseLineBreak(item.option4, 2)}
                    </tr>
                  </>
                );
              } else {
                return (
                  <>
                    <tr key={"1-" + index} style={{ borderTopWidth: 2 }}>
                      <td>{item.itemName}</td>
                      <td>
                        {item.part}
                        {item.material && "(" + item.material + ")"}
                      </td>
                      <td>{item.dmg}</td>
                      <td>{item.buff}</td>
                      <td>{setReinString(item)}</td>
                      <td>{setResistString(item)}</td>
                      <td>{setStatusString(item)}</td>
                      <td>{setStatString(item)}</td>
                      <td>{item.drop1}</td>
                    </tr>
                    <tr key={"option-" + index}>
                      {parseLineBreak(item.option1, 2)}
                      {parseLineBreak(item.option2, 3)}
                      {parseLineBreak(item.option3, 3)}
                      {parseLineBreak(item.option4, 2)}
                    </tr>
                  </>
                );
              }
            })}
          </tbody>
        </table>
      </>
    );
  }
}
