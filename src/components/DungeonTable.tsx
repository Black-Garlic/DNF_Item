import React, { useEffect, useState } from "react";
import "@assets/css/styles.css";
import { useAppSelector } from "@store/store";

export default function DungeonTable() {
  const count = useAppSelector((state) => state.data.dungeonCount);

  return (
    <table
      className={"dataTable-table"}
      style={{ fontSize: 14, textAlign: "center" }}
    >
      <tbody>
        <tr>
          <td style={{ width: "35%" }}>백색의 땅</td>
          <td style={{ width: "15%" }}>{count[0] !== 0 ? count[0] : ""}</td>
          <td style={{ width: "35%" }}>베리콜리스</td>
          <td style={{ width: "15%" }}>{count[1] !== 0 ? count[1] : ""}</td>
        </tr>
        <tr>
          <td style={{ width: "35%" }}>헤블론 예언소</td>
          <td style={{ width: "15%" }}>{count[2] !== 0 ? count[2] : ""}</td>
          <td style={{ width: "35%" }}>왕의 요람</td>
          <td style={{ width: "15%" }}>{count[3] !== 0 ? count[3] : ""}</td>
        </tr>
        <tr>
          <td style={{ width: "35%" }}>나사우 삼림</td>
          <td style={{ width: "15%" }}>{count[4] !== 0 ? count[4] : ""}</td>
          <td style={{ width: "35%" }}>퀸 팔트</td>
          <td style={{ width: "15%" }}>{count[5] !== 0 ? count[5] : ""}</td>
        </tr>
        <tr>
          <td style={{ width: "35%" }}>캐니언 힐</td>
          <td style={{ width: "15%" }}>{count[6] !== 0 ? count[6] : ""}</td>
          <td style={{ width: "35%" }}>이터널 플레임 연구소</td>
          <td style={{ width: "15%" }}>{count[7] !== 0 ? count[7] : ""}</td>
        </tr>
        <tr>
          <td style={{ width: "35%" }}>파괴된 죽음의 성</td>
          <td style={{ width: "15%" }}>{count[8] !== 0 ? count[8] : ""}</td>
          <td style={{ width: "35%" }}>노블레스 코드</td>
          <td style={{ width: "15%" }}>{count[9] !== 0 ? count[9] : ""}</td>
        </tr>
      </tbody>
    </table>
  );
}
