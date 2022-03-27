import { itemProps } from "@typings/types";
import { itemsInfo } from "@domains/itemsInfo";

export function filterItem(filters: string[]) {
  let filteredItems: itemProps[] = [];
  const items = itemsInfo;
  items.map((item) => {
    let count = 0;
    filters.map((filter) => {
      console.log(filter);
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
          if (checkIncludes(item, "모든 속성 강화")) count++;
          break;
        case "모속저":
          if (checkIncludes(item, "모든 속성 저항")) count++;
          break;
        case "화속강":
          if (checkIncludes(item, "화속성 강화")) count++;
          break;
        case "화속저":
          if (checkIncludes(item, "화속성 저항")) count++;
          break;
        case "명속강":
          if (checkIncludes(item, "명속성 강화")) count++;
          break;
        case "명속저":
          if (checkIncludes(item, "명속성 저항")) count++;
          break;
        case "수속강":
          if (checkIncludes(item, "수속성 강화")) count++;
          break;
        case "수속저":
          if (checkIncludes(item, "수속성 저항")) count++;
          break;
        case "암속강":
          if (checkIncludes(item, "암속성 강화")) count++;
          break;
        case "암속저":
          if (checkIncludes(item, "암속성 저항")) count++;
          break;
        case "전체상변":
          if (checkIncludes(item, "모든 상태 이상")) count++;
          break;
        case "기절":
          if (checkIncludes(item, "기절")) count++;
          break;
        case "화상":
          if (checkIncludes(item, "화상")) count++;
          break;
        case "중독":
          if (checkIncludes(item, "중독")) count++;
          break;
        case "감전":
          if (checkIncludes(item, "감전")) count++;
          break;
        case "출혈":
          if (checkIncludes(item, "출혈")) count++;
          break;
        case "암흑":
          if (checkIncludes(item, "암흑")) count++;
          break;
        case "수면":
          if (checkIncludes(item, "수면")) count++;
          break;
        case "저주":
          if (checkIncludes(item, "저주")) count++;
          break;
        case "석화":
          if (checkIncludes(item, "석화")) count++;
          break;
        case "혼란":
          if (checkIncludes(item, "혼란")) count++;
          break;
        case "빙결":
          if (checkIncludes(item, "빙결")) count++;
          break;
        case "HP":
          if (checkIncludes(item, "HP")) count++;
          break;
        case "MP":
          if (checkIncludes(item, "MP")) count++;
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

function checkIncludes(item: itemProps, filter: string) {
  if (
    item.option1.includes(filter) ||
    item.option2.includes(filter) ||
    item.option3.includes(filter) ||
    item.option4.includes(filter)
  ) {
    console.log(item.itemName);
    return true;
  } else {
  }
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
