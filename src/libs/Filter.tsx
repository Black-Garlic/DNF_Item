import { itemProps } from "@typings/types";
import { itemsInfo } from "@domains/itemsInfo";

export function filterItem(filters: string[]) {
  let filteredItems: itemProps[] = [];
  const items = itemsInfo;
  items.map((item) => {
    let count = 0;
    filters.map((filter) => {
      if (count === filters.length) return;
      switch (filter) {
        case "상의":
          if (item.part === filter) count++;
          break;
        case "머리어깨":
          if (item.part === filter) count++;
          break;
        case "하의":
          if (item.part === filter) count++;
          break;
        case "벨트":
          if (item.part === filter) count++;
          break;
        case "신발":
          if (item.part === filter) count++;
          break;
        case "팔찌":
          if (item.part === filter) count++;
          break;
        case "목걸이":
          if (item.part === filter) count++;
          break;
        case "반지":
          if (item.part === filter) count++;
          break;
        case "보조장비":
          if (item.part === filter) count++;
          break;
        case "마법석":
          if (item.part === filter) count++;
          break;
        case "귀걸이":
          if (item.part === filter) count++;
          break;
        case "모속강":
          if (item.allRein) count++;
          break;
        case "모속저":
          if (item.allResist) count++;
          break;
        case "화속강":
          if (item.fireRein) count++;
          break;
        case "화속저":
          if (item.fireResist) count++;
          break;
        case "명속강":
          if (item.lightRein) count++;
          break;
        case "명속저":
          if (item.lightResist) count++;
          break;
        case "수속강":
          if (item.iceRein) count++;
          break;
        case "수속저":
          if (item.iceResist) count++;
          break;
        case "암속강":
          if (item.darkRein) count++;
          break;
        case "암속저":
          if (item.darkResist) count++;
          break;
        case "전체상변":
          if (item.allState) count++;
          break;
        case "기절":
          if (item.stun) count++;
          break;
        case "화상":
          if (item.burn) count++;
          break;
        case "중독":
          if (item.poison) count++;
          break;
        case "감전":
          if (item.electric) count++;
          break;
        case "출혈":
          if (item.bleed) count++;
          break;
        case "암흑":
          if (item.blind) count++;
          break;
        case "수면":
          if (item.sleep) count++;
          break;
        case "저주":
          if (item.curse) count++;
          break;
        case "석화":
          if (item.stone) count++;
          break;
        case "혼란":
          if (item.confuse) count++;
          break;
        case "빙결":
          if (item.frozen) count++;
          break;
        case "HP":
          if (item.hp) count++;
          break;
        case "MP":
          if (item.mp) count++;
          break;
        case "백색의 땅":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        case "베리콜리스":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        case "헤블론 예언소":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        case "왕의 요람":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        case "나사우 삼림":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        case "퀸 팔트":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        case "캐니언 힐":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        case "이터널 플레임 연구소":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        case "파괴된 죽음의 성":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        case "노블레스 코드":
          if (item.drop1 && item.drop1.includes(filter)) count++;
          if (item.drop2 && item.drop2.includes(filter)) count++;
          if (item.drop3 && item.drop3.includes(filter)) count++;
          break;
        default:
          break;
      }
    });
    if (count === filters.length) filteredItems.push(item);
  });
  return filteredItems;
}

export function setDungeonCount(filteredItems: itemProps[]) {
  let dungeonCount: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  filteredItems.map((item) => {
    const drop1 = item.drop1 ? item.drop1 : "";
    const drop2 = item.drop2 ? item.drop2 : "";
    const drop3 = item.drop3 ? item.drop3 : "";
    if (
      drop1.includes("백색의 땅") ||
      drop2.includes("백색의 땅") ||
      drop3.includes("백색의 땅")
    ) {
      dungeonCount[0]++;
    }
    if (
      drop1.includes("베리콜리스") ||
      drop2.includes("베리콜리스") ||
      drop3.includes("베리콜리스")
    ) {
      dungeonCount[1]++;
    }
    if (
      drop1.includes("헤블론 예언소") ||
      drop2.includes("헤블론 예언소") ||
      drop3.includes("헤블론 예언소")
    ) {
      dungeonCount[2]++;
    }
    if (
      drop1.includes("왕의 요람") ||
      drop2.includes("왕의 요람") ||
      drop3.includes("왕의 요람")
    ) {
      dungeonCount[3]++;
    }
    if (
      drop1.includes("나사우 삼림") ||
      drop2.includes("나사우 삼림") ||
      drop3.includes("나사우 삼림")
    ) {
      dungeonCount[4]++;
    }
    if (
      drop1.includes("퀸 팔트") ||
      drop2.includes("퀸 팔트") ||
      drop3.includes("퀸 팔트")
    ) {
      dungeonCount[5]++;
    }
    if (
      drop1.includes("캐니언 힐") ||
      drop2.includes("캐니언 힐") ||
      drop3.includes("캐니언 힐")
    ) {
      dungeonCount[6]++;
    }
    if (
      drop1.includes("이터널 플레임 연구소") ||
      drop2.includes("이터널 플레임 연구소") ||
      drop3.includes("이터널 플레임 연구소")
    ) {
      dungeonCount[7]++;
    }
    if (
      drop1.includes("파괴된 죽음의 성") ||
      drop2.includes("파괴된 죽음의 성") ||
      drop3.includes("파괴된 죽음의 성")
    ) {
      dungeonCount[8]++;
    }
    if (
      drop1.includes("노블레스 코드") ||
      drop2.includes("노블레스 코드") ||
      drop3.includes("노블레스 코드")
    ) {
      dungeonCount[9]++;
    }
  });

  return dungeonCount;
}
