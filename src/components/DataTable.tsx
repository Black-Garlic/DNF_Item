import React from "react";
import "@assets/css/styles.css";
interface DataProps {
  filters: string[];
}
export default function DataTable({ filters }: DataProps) {
  const items = [
    {
      itemName: "아머드 파워 상의",
      part: "상의",
      material: "천",
      burn: true,
      drop1: "캐니언 힐",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "죽음에 잠식된 갑주",
      part: "상의",
      material: "천",
      drop1: "왕의 요람 - 되살아난 골드 크라운",
    },
    { itemName: "준비된 근면함 상의", part: "상의", material: "천", drop1: "" },
    {
      itemName: "플래티넘 클래스 재킷",
      part: "상의",
      material: "천",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "끝을 바라보는 시선",
      part: "머리어깨",
      material: "천",
      mp: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "데저트 컨실멘트 숄더",
      part: "머리어깨",
      material: "천",
      burn: true,
      drop1: "캐일",
      drop2: "나사우 삼림",
    },
    {
      itemName: "자신감의 백색 망토",
      part: "머리어깨",
      material: "천",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "휴식을 주는 덮개",
      part: "머리어깨",
      material: "천",
      allResist: true,
      hp: true,
      drop1: "",
    },
    {
      itemName: "네오 화이트 클래스 팬츠",
      part: "하의",
      material: "천",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "데저트 테크놀로지 팬츠",
      part: "하의",
      material: "천",
      fireRein: true,
      fireResist: true,
      burn: true,
      drop1: "왕의 요람 - 말괄량이 베키",
    },
    {
      itemName: "열정의 흔적 하의",
      part: "하의",
      material: "천",
      confuse: true,
      drop1: "",
    },
    {
      itemName: "혼돈을 두른 장막",
      part: "하의",
      material: "천",
      hp: true,
      drop1: "캐니언 힐",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "HEM 리인포스 부츠",
      part: "신발",
      material: "천",
      fireRein: true,
      burn: true,
      drop1: "퀸 팔트",
      drop2: "나사우 삼림",
    },
    {
      itemName: "끝없는 노력의 장화",
      part: "신발",
      material: "천",
      iceResist: true,
      drop1: "",
    },
    {
      itemName: "신비함의 백색 구두",
      part: "신발",
      material: "천",
      drop1: "퀸 팔트",
      drop2: "나사우 삼림",
    },
    {
      itemName: "절망의 발소리",
      part: "신발",
      material: "천",
      hp: true,
      drop1: "백색 - 혼돈의 천사 루치펠",
    },
    {
      itemName: "고고함의 백색 벨트",
      part: "벨트",
      material: "천",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "노련함을 잡는 벨트",
      part: "벨트",
      material: "천",
      darkResist: true,
      curse: true,
      drop1: "",
    },
    {
      itemName: "옭아메는 공포",
      part: "벨트",
      material: "천",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "익스펜션 서플라이 벨트",
      part: "벨트",
      material: "천",
      fireResist: true,
      drop1: "베리콜리스",
      drop2: "퀸 팔트",
    },
    {
      itemName: "리버시블 레더 코트",
      part: "상의",
      material: "가죽",
      drop1: "백색 - 혼돈의 천사 루치펠",
    },
    {
      itemName: "쉐도우블랙 슈트",
      part: "상의",
      material: "가죽",
      curse: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "어릴적 꿈꿔온 무대",
      part: "상의",
      material: "가죽",
      sleep: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "탐험가의 노련한 코트",
      part: "상의",
      material: "가죽",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "근력 보강 숄더",
      part: "머리어깨",
      material: "가죽",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "마그네틱 서치 스캔",
      part: "머리어깨",
      material: "가죽",
      electric: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "블랙 캣 헬멧",
      part: "머리어깨",
      material: "가죽",
      drop1: "캐니언 힐 - 킹 디스트로이어",
    },
    {
      itemName: "화려한 청색의 음율",
      part: "머리어깨",
      material: "가죽",
      drop1: "왕의 요람 - 되살아난 골드 크라운",
    },
    {
      itemName: "라이트 어댑터 팬츠",
      part: "하의",
      material: "가죽",
      lightRein: true,
      lightResist: true,
      drop1: "캐니언 힐",
      drop2: "헤블론의 예언소",
      drop3: "이터널 플레임 연구소",
    },
    {
      itemName: "무대의 화려함",
      part: "하의",
      material: "가죽",
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "벤타블랙 팬츠",
      part: "하의",
      material: "가죽",
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "지치지 않는 여정의 하의",
      part: "하의",
      material: "가죽",
      drop1: "캐니언 힐",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "검은 발자국",
      part: "신발",
      material: "가죽",
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "대지를 딛는 부츠",
      part: "신발",
      material: "가죽",
      stun: true,
      drop1: "노블레스 코드 - AT-5T",
    },
    {
      itemName: "소망을 전하는 편지",
      part: "신발",
      material: "가죽",
      drop1: "왕의 요람 - 되살아난 골드 크라운",
    },
    {
      itemName: "일렉트릭 프루프 부츠",
      part: "신발",
      material: "가죽",
      electric: true,
      drop1: "퀸 팔트",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "가이드 라인 벨트",
      part: "벨트",
      material: "가죽",
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "별을 담는 벨트",
      part: "벨트",
      material: "가죽",
      drop1: "노블레스 코드 - 킹 디스트로이어",
    },
    {
      itemName: "썬더 레지스트 벨트",
      part: "벨트",
      material: "가죽",
      lightRein: true,
      electric: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "음율에 담은 소망",
      part: "벨트",
      material: "가죽",
      drop1: "백색 - 혼돈의 천사 루치펠",
    },
    {
      itemName: "미련이 남은 녹슨 원혼",
      part: "상의",
      material: "경갑",
      drop1: "캐니언 힐",
      drop2: "왕의 요람",
    },
    {
      itemName: "천상을 수호하는 윙 아머",
      part: "상의",
      material: "경갑",
      drop1: "노블레스 코드 - 퀸 디스트로이어",
    },
    {
      itemName: "천지를 흔드는 석갑",
      part: "상의",
      material: "경갑",
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "하이테크 전술지휘 아머",
      part: "상의",
      material: "경갑",
      allRein: true,
      drop1: "나사우 삼림 - 드락카니다",
    },
    {
      itemName: "흙으로 빚은 자연",
      part: "상의",
      material: "경갑",
      burn: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "오염된 빙석 견갑",
      part: "머리어깨",
      material: "경갑",
      poison: true,
      drop1: "베리콜리스",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "자유를 수호하는 윙 숄더",
      part: "머리어깨",
      material: "경갑",
      fireRein: true,
      fireResist: true,
      burn: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "주체할 수 없는 낡은 규칙",
      part: "머리어깨",
      material: "경갑",
      drop1: "노블레스 코드 - 속사 루이스",
      drop2: "노블레스 코드 - 쾌검 폴센",
    },
    {
      itemName: "피어나는 자연의 삶",
      part: "머리어깨",
      material: "경갑",
      iceRein: true,
      iceResist: true,
      frozen: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "하이테크 바디 프로텍트 숄더",
      part: "머리어깨",
      material: "경갑",
      drop1: "백색 - 파이디온",
    },
    {
      itemName: "깨지지 않는 빛바랜 신념",
      part: "하의",
      material: "경갑",
      darkRein: true,
      darkResist: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "숨쉬는 자연의 생명",
      part: "하의",
      material: "경갑",
      burn: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "압도하는 힘의 하갑",
      part: "하의",
      material: "경갑",
      poison: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "평화를 수호하는 윙 레깅스",
      part: "하의",
      material: "경갑",
      drop1: "캐니언 힐 - MX 3",
    },
    {
      itemName: "하이테크 전술보조 각반",
      part: "하의",
      material: "경갑",
      drop1: "노블레스 코드 - 루퍼트 도스타",
    },
    {
      itemName: "순환하는 자연의 섭리",
      part: "신발",
      material: "경갑",
      darkRein: true,
      darkResist: true,
      blind: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "어둠에 삼켜진 돌굽",
      part: "신발",
      material: "경갑",
      poison: true,
      drop1: "퀸 팔트",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "움직이는 쇠약한 집착",
      part: "신발",
      material: "경갑",
      allRein: true,
      allResist: true,
      electric: true,
      drop1: "퀸 팔트",
      drop2: "나사우 삼림",
    },
    {
      itemName: "하늘을 수호하는 윙 부츠",
      part: "신발",
      material: "경갑",
      drop1: "파괴된 죽은 자들의 성[상급] - 말괄량이 베키",
    },
    {
      itemName: "하이테크 고기동 강화 부츠",
      part: "신발",
      material: "경갑",
      allRein: true,
      drop1: "캐니언 힐 - MX 3",
    },
    {
      itemName: "대지를 수호하는 윙 벨트",
      part: "벨트",
      material: "경갑",
      drop1: "베리콜리스",
      drop2: "퀸 팔트",
    },
    {
      itemName: "마주할 수 없는 부러진 긍지",
      part: "벨트",
      material: "경갑",
      electric: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "불변의 부유석 벨트",
      part: "벨트",
      material: "경갑",
      poison: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "순수한 자연의 이치",
      part: "벨트",
      material: "경갑",
      lightRein: true,
      lightResist: true,
      electric: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "하이테크 서플라이 벨트",
      part: "벨트",
      material: "경갑",
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "격동하는 마음",
      part: "상의",
      material: "중갑",
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "드래곤 슬레이어",
      part: "상의",
      material: "중갑",
      allResist: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "천재 기술자의 전문 작업복 상의",
      part: "상의",
      material: "중갑",
      drop1: "캐니언 힐",
      drop2: "왕의 요람",
    },
    {
      itemName: "드래곤 헌터",
      part: "머리어깨",
      material: "중갑",
      fireRein: true,
      fireResist: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "빛을 잃은 진실",
      part: "머리어깨",
      material: "중갑",
      bleed: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "천재 기술자의 보호 마스크",
      part: "머리어깨",
      material: "중갑",
      drop1: "나사우 삼림 - 드락카니다, 앙스트 ZERO",
    },
    {
      itemName: "드래곤 라이더",
      part: "하의",
      material: "중갑",
      lightRein: true,
      lightResist: true,
      drop1: "헤블론의 예언소",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "천재 기술자의 멀티박스 팬츠",
      part: "하의",
      material: "중갑",
      drop1: "백색 - 스페시오",
    },
    {
      itemName: "침식되는 이성",
      part: "하의",
      material: "중갑",
      fireRein: true,
      fireResist: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "드래곤 패스파인더",
      part: "신발",
      material: "중갑",
      darkRein: true,
      darkResist: true,
      drop1: "퀸 팔트",
      drop2: "나사우 삼림",
    },
    {
      itemName: "천재 기술자의 두터운 보호부츠",
      part: "신발",
      material: "중갑",
      drop1: "나사우 삼림 - 드락카니다",
    },
    {
      itemName: "폭주하는 육신",
      part: "신발",
      material: "중갑",
      drop1: "헤블론의 예언소",
      drop2: "나사우 삼림",
    },
    {
      itemName: "드래곤 스케빈저",
      part: "벨트",
      material: "중갑",
      iceRein: true,
      iceResist: true,
      drop1: "베리콜리스",
      drop2: "왕의 요람",
    },
    {
      itemName: "천재 기술자의 멀티툴 벨트",
      part: "벨트",
      material: "중갑",
      mp: true,
      drop1: "나사우 삼림 - 드락카니다, 앙스트 ZERO",
    },
    {
      itemName: "파괴된 신념",
      part: "벨트",
      material: "중갑",
      bleed: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "고귀한 신의",
      part: "상의",
      material: "판금",
      allState: true,
      drop1: "파괴된 죽은 자들의 성[상급] - 심연을 걷는 자",
    },
    {
      itemName: "어비스 리액터",
      part: "상의",
      material: "판금",
      allRein: true,
      drop1: "캐니언 힐 - 킹 디스트로이어",
    },
    {
      itemName: "얼티밋 제너레이터",
      part: "상의",
      material: "판금",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "옥화의 망령 흉갑",
      part: "상의",
      material: "판금",
      drop1: "베리콜리스",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "매니퓰레이션",
      part: "머리어깨",
      material: "판금",
      hp: true,
      drop1: "파괴된 죽은 자들의 성[상급] - 심연을 걷는 자",
    },
    {
      itemName: "맹렬한 위세",
      part: "머리어깨",
      material: "판금",
      bleed: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "옥화의 망령 상박갑",
      part: "머리어깨",
      material: "판금",
      allState: true,
      drop1: "베리콜리스",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "헥타곤 임펄스 브릭",
      part: "머리어깨",
      material: "판금",
      stone: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "굳건한 믿음",
      part: "하의",
      material: "판금",
      iceRein: true,
      iceResist: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "스톰라이더",
      part: "하의",
      material: "판금",
      mp: true,
      drop1: "나사우 삼림 - 드락카니다, 앙스트 ZERO",
    },
    {
      itemName: "언리밋 사이버네틱",
      part: "하의",
      material: "판금",
      curse: true,
      drop1: "파괴된 죽은 자들의 성[상급] - 베키의 잃어버린 가방",
    },
    {
      itemName: "옥화의 망령 대퇴갑",
      part: "하의",
      material: "판금",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "내딛는 용기",
      part: "신발",
      material: "판금",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "스팀펑크 소닉 디스럽터",
      part: "신발",
      material: "판금",
      stone: true,
      drop1: "퀸 팔트",
      drop2: "나사우 삼림",
    },
    {
      itemName: "엑셀러레이터",
      part: "신발",
      material: "판금",
      mp: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "옥화의 망령 각갑",
      part: "신발",
      material: "판금",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "마땅한 본분",
      part: "벨트",
      material: "판금",
      allRein: true,
      drop1: "왕의 요람 - 말괄량이 베키",
    },
    {
      itemName: "얼터레이션 다이얼 벨트",
      part: "벨트",
      material: "판금",
      stone: true,
      drop1: "캐니언 힐 - 킹 디스트로이어",
    },
    {
      itemName: "옥화의 망령 요갑",
      part: "벨트",
      material: "판금",
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "파워 플랜트",
      part: "벨트",
      material: "판금",
      drop1: "파괴된 죽은 자들의 성[상급] - 되살아난 골드 크라운",
    },
    {
      itemName: "검은 별",
      part: "목걸이",
      allRein: true,
      hp: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "고양된 분노의 목걸이",
      part: "목걸이",
      allRein: true,
      drop1: "이터널 플레임 연구소 - 대장 스타크",
    },
    {
      itemName: "골렘의 심장 목걸이",
      part: "목걸이",
      iceRein: true,
      iceResist: true,
      drop1: "백색의 땅",
      drop2: "베리콜리스",
    },
    {
      itemName: "기사의 속죄",
      part: "목걸이",
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "기품의 금빛 장신구",
      part: "목걸이",
      drop1: "베리콜리스 - 성전의 영령",
    },
    {
      itemName: "냉혹한 현실의 목걸이",
      part: "목걸이",
      fireRein: true,
      fireResist: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    { itemName: "대어기원", part: "목걸이", allState: true, drop1: "" },
    {
      itemName: "디젯 퓨즈 초크",
      part: "목걸이",
      allState: true,
      drop1: "헤블론의 예언소 - 빛의 칼바리",
    },
    {
      itemName: "머신 컨트롤러 리모트",
      part: "목걸이",
      allRein: true,
      mp: true,
      drop1: "백색의 땅",
      drop2: "나사우 삼림",
    },
    {
      itemName: "솔저 호너 네클리스",
      part: "목걸이",
      fireRein: true,
      fireResist: true,
      burn: true,
      drop1: "베리콜리스",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "수호룡의 비호 - 용기",
      part: "목걸이",
      allRein: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "약동하는 생명의 고동",
      part: "목걸이",
      lightRein: true,
      lightResist: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "임펄스 트리거",
      part: "목걸이",
      drop1: "파괴된 죽은 자들의 성[상급] - 빛의 칼바리",
    },
    {
      itemName: "잔잔한 선율",
      part: "목걸이",
      allState: true,
      sleep: true,
      drop1: "노블레스 코드 - 볼트 MX3",
    },
    {
      itemName: "잠겨진 영역",
      part: "목걸이",
      allRein: true,
      allState: true,
      drop1: "퀸 팔트 - 매드 리케",
    },
    {
      itemName: "절대감각의 방위구",
      part: "목걸이",
      darkRein: true,
      darkResist: true,
      drop1: "나사우 삼림",
    },
    {
      itemName: "죄어오는 풍화된 악의",
      part: "목걸이",
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "테크놀로지 바디캠 네클리스",
      part: "목걸이",
      allRein: true,
      allState: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "퍼스트 스페이드 - 노블레스",
      part: "목걸이",
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "푸른 자연의 씨앗",
      part: "목걸이",
      iceRein: true,
      iceResist: true,
      burn: true,
      frozen: true,
      drop1: "백색의 땅",
      drop2: "퀸 팔트",
    },
    {
      itemName: "개화하는 신비의 꽃",
      part: "반지",
      darkRein: true,
      blind: true,
      drop1: "베리콜리스",
      drop2: "캐니언 힐",
    },
    {
      itemName: "고통의 상처",
      part: "반지",
      hp: true,
      drop1: "베리콜리스 - 대천사 미카엘",
    },
    {
      itemName: "골드 윙 반지",
      part: "반지",
      allRein: true,
      drop1: "파괴된 죽은 자들의 성[상급] - 되살아난 골드 크라운",
    },
    {
      itemName: "골렘의 중추석 반지",
      part: "반지",
      allState: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "기사의 긍지",
      part: "반지",
      iceRein: true,
      frozen: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "달달한 중참",
      part: "반지",
      fireResist: true,
      lightResist: true,
      blind: true,
      drop1: "",
    },
    {
      itemName: "뚜렷해지는 소멸된 사념",
      part: "반지",
      hp: true,
      mp: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "레드 라이프 링",
      part: "반지",
      fireRein: true,
      burn: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "멈추지 않는 운명",
      part: "반지",
      frozen: true,
      drop1: "헤블론의 예언소",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "반짝이는 음율",
      part: "반지",
      allRein: true,
      mp: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "빛을 발하는 생명",
      part: "반지",
      lightRein: true,
      electric: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "서드 스페이드 - 데스",
      part: "반지",
      drop1: "캐니언 힐",
      drop2: "왕의 요람",
    },
    {
      itemName: "수호룡의 비호 - 축복",
      part: "반지",
      allRein: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "어댑터블 투톤 링",
      part: "반지",
      drop1: "헤블론의 예언소 - 어둠의 골고타",
    },
    {
      itemName: "오버커런트 마그넷 링",
      part: "반지",
      allRein: true,
      stun: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "원터치 스마트 리모콘",
      part: "반지",
      mp: true,
      drop1: "퀸 팔트 - 매드 리케",
    },
    {
      itemName: "이동하는 요새",
      part: "반지",
      bleed: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "자기장 탐지링",
      part: "반지",
      drop1: "이터널 플레임 연구소 - 드락카니다, 앙스트",
    },
    {
      itemName: "전술 레이더망 링",
      part: "반지",
      drop1: "노블레스 코드 - 제국 투사 바스커빌",
    },
    {
      itemName: "핏빛의 결정 반지",
      part: "반지",
      bleed: true,
      drop1: "베리콜리스",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "골렘의 핵 팔찌",
      part: "팔찌",
      poison: true,
      drop1: "베리콜리스",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "구속된 자유",
      part: "팔찌",
      allRein: true,
      allState: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "기사의 구원",
      part: "팔찌",
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "리플레이서",
      part: "팔찌",
      mp: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "무뎌지는 둔화된 변화",
      part: "팔찌",
      allRein: true,
      burn: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "미니어쳐 헤드셋 암릿",
      part: "팔찌",
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "생명이 담긴 가죽 토시",
      part: "팔찌",
      electric: true,
      drop1: "베리콜리스",
      drop2: "나사우 삼림",
    },
    {
      itemName: "세컨드 스페이드 - 어쏘러티",
      part: "팔찌",
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "수호룡의 비호 - 자비",
      part: "팔찌",
      allRein: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "수확하는 옥수",
      part: "팔찌",
      drop1: "헤블론의 예언소 - 빛의 칼바리",
    },
    {
      itemName: "아크 블라스터 소스",
      part: "팔찌",
      stone: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "억제된 마력의 팔찌",
      part: "팔찌",
      hp: true,
      mp: true,
      drop1: "이터널 플레임 연구소 - 드락카니다, 앙스트",
    },
    {
      itemName: "열정이 맺은 열매",
      part: "팔찌",
      allResist: true,
      mp: true,
      drop1: "",
    },
    {
      itemName: "이온화조정 팔찌",
      part: "팔찌",
      drop1: "노블레스 코드 - 그림자 모슬리",
    },
    {
      itemName: "작은 풀잎의 순수함",
      part: "팔찌",
      stun: true,
      electric: true,
      drop1: "퀸 팔트 - 퀸 디스트로이어",
    },
    {
      itemName: "전술 드론 콘트롤러 암릿",
      part: "팔찌",
      drop1: "파괴된 죽은 자들의 성[상급] - 어둠의 골고타",
    },
    {
      itemName: "찬란한 금장 팔찌",
      part: "팔찌",
      allState: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "포인트 레이더 암릿",
      part: "팔찌",
      burn: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "화음하는 음색",
      part: "팔찌",
      drop1: "베리콜리스 - 빛의 순찰자",
    },
    {
      itemName: "흑화의 구속 팔찌",
      part: "팔찌",
      bleed: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "공중형 : 전술 프롭 드론",
      part: "보조장비",
      drop1: "노블레스 코드 - 매드 리케",
    },
    {
      itemName: "굴착 강화 파츠",
      part: "보조장비",
      electric: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "꿈같은 환호성",
      part: "보조장비",
      sleep: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "내면의 얼굴",
      part: "보조장비",
      fireRein: true,
      fireResist: true,
      allState: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "데카 가이던스 디바이스",
      part: "보조장비",
      drop1: "백색의 땅",
      drop2: "퀸 팔트",
    },
    {
      itemName: "드러나는 흐릿한 지식",
      part: "보조장비",
      darkRein: true,
      darkResist: true,
      allState: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "미지의 문명 - 마스크 스톤",
      part: "보조장비",
      iceRein: true,
      iceResist: true,
      allState: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "버츄얼 사이트 글래스",
      part: "보조장비",
      burn: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "불길한 데칼코마니 석판",
      part: "보조장비",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "생명의 근원이 담긴 배낭",
      part: "보조장비",
      lightRein: true,
      lightResist: true,
      allState: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "양동이 한 가득",
      part: "보조장비",
      iceResist: true,
      darkResist: true,
      frozen: true,
      drop1: "",
    },
    {
      itemName: "여명의 성배",
      part: "보조장비",
      drop1: "파괴된 죽은 자들의 성[상급] - 빛의 칼바리",
    },
    {
      itemName: "올 오어 원 매직박스",
      part: "보조장비",
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "용살자의 증표 - 용골 뿔피리",
      part: "보조장비",
      allRein: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "정의의 기사 가면",
      part: "보조장비",
      drop1: "퀸 팔트 - 퀸 디스트로이어",
    },
    {
      itemName: "죽음을 부르는 관",
      part: "보조장비",
      drop1: "베리콜리스 - 성화의 라미에르",
    },
    {
      itemName: "찰랑이는 생명수",
      part: "보조장비",
      frozen: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "터치 컨트롤 패널",
      part: "보조장비",
      hp: true,
      drop1: "이터널 플레임 연구소 - 드락카니다, 앙스트",
    },
    {
      itemName: "파괴된 생명",
      part: "보조장비",
      hp: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "홀로그램 콜",
      part: "보조장비",
      burn: true,
      poison: true,
      electric: true,
      bleed: true,
      drop1: "헤블론의 예언소 - 심연을 걷는 자",
    },
    {
      itemName: "거짓 속의 거짓",
      part: "마법석",
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    { itemName: "노력이 빛낸 결정", part: "마법석", drop1: "" },
    {
      itemName: "도데카 홀로그램",
      part: "마법석",
      stun: true,
      drop1: "캐니언 힐",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "두근거리는 열정",
      part: "마법석",
      sleep: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "미니 배터리 팩",
      part: "마법석",
      mp: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "미지의 문명 - 스타 스톤",
      part: "마법석",
      iceResist: true,
      allState: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "미지의 황금비석",
      part: "마법석",
      drop1: "노블레스 코드 - 요원 707",
    },
    {
      itemName: "생명이 깃든 초록빛 액체",
      part: "마법석",
      lightResist: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "선회하는 흐려진 혜안",
      part: "마법석",
      drop1: "이터널 플레임 연구소 - 대장 스타크",
    },
    {
      itemName: "어둠을 먹는 심장",
      part: "마법석",
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "억류된 혼의 령주",
      part: "마법석",
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "언비튼 메달",
      part: "마법석",
      fireResist: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "용살자의 증표 - 용심 가공석",
      part: "마법석",
      allRein: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "자연에 녹아드는 이슬",
      part: "마법석",
      darkResist: true,
      drop1: "캐니언 힐",
      drop2: "나사우 삼림",
    },
    {
      itemName: "자정의 성역",
      part: "마법석",
      drop1: "헤블론의 예언소 - 어둠의 골고타",
    },
    {
      itemName: "잿빛의 묘상석",
      part: "마법석",
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "curse받은 마음",
      part: "마법석",
      drop1: "베리콜리스 - 빛의 괴수 피톤",
    },
    {
      itemName: "지상형 : 전술 차륜 드론",
      part: "마법석",
      drop1: "파괴된 죽은 자들의 성[상급] - 어둠의 골고타",
    },
    {
      itemName: "평화를 위한 투쟁",
      part: "마법석",
      bleed: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "피어오르는 광기",
      part: "마법석",
      allState: true,
      drop1: "퀸 팔트 - 루퍼트 도스타",
    },
    {
      itemName: "들이치는 희미한 탄식",
      part: "귀걸이",
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "마음을 전달하는 소리",
      part: "귀걸이",
      frozen: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "미지의 문명 - 트윈 스톤",
      part: "귀걸이",
      allRein: true,
      iceResist: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "배회하는 혼령의 향로",
      part: "귀걸이",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "부스팅 펄스 튜브",
      part: "귀걸이",
      mp: true,
      drop1: "파괴된 죽은 자들의 성[상급] - 말괄량이 베키",
    },
    {
      itemName: "생명을 키우는 코발트 스틱",
      part: "귀걸이",
      allRein: true,
      lightResist: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "시각의 관점",
      part: "귀걸이",
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "아크로매틱 룸버스",
      part: "귀걸이",
      drop1: "퀸 팔트 - 루퍼트 도스타",
    },
    {
      itemName: "어복기원",
      part: "귀걸이",
      allState: true,
      curse: true,
      drop1: "",
    },
    {
      itemName: "엔데카 코어 칩",
      part: "귀걸이",
      stone: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "오퍼레이션 오더",
      part: "귀걸이",
      allRein: true,
      fireResist: true,
      drop1: "베리콜리스",
      drop2: "헤블론의 예언소",
    },
    {
      itemName: "용살자의 증표 - 용린 귀걸이",
      part: "귀걸이",
      stun: true,
      drop1: "베리콜리스 - 대천사 미카엘",
    },
    {
      itemName: "인력의 법칙",
      part: "귀걸이",
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "curse받은 굴레",
      part: "귀걸이",
      bleed: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "청명한 아침의 새싹",
      part: "귀걸이",
      allRein: true,
      darkResist: true,
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "타락한 영혼",
      part: "귀걸이",
      mp: true,
      drop1: "퀸 팔트",
      drop2: "이터널 플레임 연구소",
    },
    {
      itemName: "폭발형 : 소형 전술 플레어",
      part: "귀걸이",
      drop1: "백색의 땅",
      drop2: "왕의 요람",
    },
    {
      itemName: "폭풍을 삼킨 에너지",
      part: "귀걸이",
      mp: true,
      drop1: "이터널 플레임 연구소 - 대장 스타크",
    },
    {
      itemName: "하늘에 휘날리는 깃털",
      part: "귀걸이",
      bleed: true,
      drop1: "헤블론의 예언소 - 심연을 걷는 자",
    },
    {
      itemName: "황혼의 성단",
      part: "귀걸이",
      allRein: true,
      drop1: "노블레스 코드 - 강철의 비비안",
    },
  ];

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
    if (item.allStatus) {
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

  return (
    <table className={"dataTable-table"} style={{ fontSize: 12 }}>
      <thead>
        <tr>
          <th style={{ width: "25%" }}>장비 이름</th>
          <th style={{ width: "15%" }}>부위</th>
          <th style={{ width: "10%" }}>속강</th>
          <th style={{ width: "10%" }}>속저</th>
          <th style={{ width: "10%" }}>상변</th>
          <th style={{ width: "5%" }}>스탯</th>
          <th style={{ width: "25%" }}>드랍</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          let include = true;
          if (filters.length > 0) {
            include = false;
            filters.map((filter) => {
              if (include) return;
              switch (filter) {
                case "모속강":
                  if (item.allRein) include = true;
                  break;
                case "모속저":
                  if (item.allResist) include = true;
                  break;
                case "화속강":
                  if (item.fireRein) include = true;
                  break;
                case "화속저":
                  if (item.fireResist) include = true;
                  break;
                case "명속강":
                  if (item.lightRein) include = true;
                  break;
                case "명속저":
                  if (item.lightResist) include = true;
                  break;
                case "수속강":
                  if (item.iceRein) include = true;
                  break;
                case "수속저":
                  if (item.iceResist) include = true;
                  break;
                case "암속강":
                  if (item.darkRein) include = true;
                  break;
                case "암속저":
                  if (item.darkResist) include = true;
                  break;
                case "전체상변":
                  if (item.allState) include = true;
                  break;
                case "기절":
                  if (item.stun) include = true;
                  break;
                case "화상":
                  if (item.burn) include = true;
                  break;
                case "중독":
                  if (item.poison) include = true;
                  break;
                case "감전":
                  if (item.electric) include = true;
                  break;
                case "출혈":
                  if (item.bleed) include = true;
                  break;
                case "암흑":
                  if (item.blind) include = true;
                  break;
                case "수면":
                  if (item.sleep) include = true;
                  break;
                case "curse":
                  if (item.curse) include = true;
                  break;
                case "석화":
                  if (item.stone) include = true;
                  break;
                case "혼란":
                  if (item.confuse) include = true;
                  break;
                case "빙결":
                  if (item.frozen) include = true;
                  break;
                case "HP":
                  if (item.hp) include = true;
                  break;
                case "MP":
                  if (item.mp) include = true;
                  break;
                default:
                  break;
              }
            });
          }
          if (include) {
            if (item.drop3) {
              return (
                <>
                  <tr>
                    <td rowSpan={3}>{item.itemName}</td>
                    <td rowSpan={3}>
                      {item.part}
                      {item.material && "(" + item.material + ")"}
                    </td>
                    <td rowSpan={3}>{setReinString(item)}</td>
                    <td rowSpan={3}>{setResistString(item)}</td>
                    <td rowSpan={3}>{setStatusString(item)}</td>
                    <td rowSpan={3}>{setStatString(item)}</td>
                    <td>{item.drop1}</td>
                  </tr>
                  <tr>
                    <td>{item.drop2}</td>
                  </tr>
                  <tr>
                    <td>{item.drop3}</td>
                  </tr>
                </>
              );
            } else if (item.drop2) {
              return (
                <>
                  <tr>
                    <td rowSpan={2}>{item.itemName}</td>
                    <td rowSpan={2}>
                      {item.part}
                      {item.material && "(" + item.material + ")"}
                    </td>
                    <td rowSpan={2}>{setReinString(item)}</td>
                    <td rowSpan={2}>{setResistString(item)}</td>
                    <td rowSpan={2}>{setStatusString(item)}</td>
                    <td rowSpan={2}>{setStatString(item)}</td>
                    <td>{item.drop1}</td>
                  </tr>
                  <tr>
                    <td>{item.drop2}</td>
                  </tr>
                </>
              );
            } else {
              return (
                <tr>
                  <td>{item.itemName}</td>
                  <td>
                    {item.part}
                    {item.material && "(" + item.material + ")"}
                  </td>
                  <td>{setReinString(item)}</td>
                  <td>{setResistString(item)}</td>
                  <td>{setStatusString(item)}</td>
                  <td>{setStatString(item)}</td>
                  <td>{item.drop1}</td>
                </tr>
              );
            }
          }
        })}
      </tbody>
    </table>
  );
}
