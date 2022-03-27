export interface itemProps {
  itemName: string;
  part: string;
  material?: string;
  drop1?: string;
  drop2?: string;
  drop3?: string;
  dmg: number;
  buff: number;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  equip?: boolean;
}

export interface equipItem {
  top?: itemProps;
  shoulder?: itemProps;
  pants?: itemProps;
  belt?: itemProps;
  shoe?: itemProps;
  bracelet?: itemProps;
  neckless?: itemProps;
  ring?: itemProps;
  support?: itemProps;
  stone?: itemProps;
  earRing?: itemProps;
}

export interface dataTableProps {
  item: itemProps;
  index: number;
  partString?: string;
}
