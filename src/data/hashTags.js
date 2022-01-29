const conditions = [
  //누구랑?
  { id: 1, name: '#혼밥' },
  { id: 2, name: '#데이트' },
  { id: 3, name: '#친구들이랑' },
  //어떨 때?
  { id: 4, name: '#스트레스 받은 날' },
  { id: 5, name: '#행복한 날' },
  { id: 6, name: '#축하하고싶은 날' },
  //언제?
  { id: 7, name: '#퇴근길' },
  { id: 8, name: '#주말' },
];

const regions = [
  { id: 1, name: '#서울 송파구' },
  { id: 2, name: '#서울 강남구' },
  { id: 3, name: '#서울 종로구' },
  { id: 4, name: '#서울 용산구' },
  { id: 5, name: '#서울 마포구' },
  { id: 6, name: '#서울 성동구' },
];

const categories = [
  { id: 1, name: '#면' },
  { id: 2, name: '#밥' },
  { id: 3, name: '#고기' },
  { id: 4, name: '#해산물' },
  { id: 5, name: '#패스트푸드' },
  { id: 6, name: '#샐러드' },
];

export {
  conditions,
  regions,
  categories,
}

// ToDo 랜덤한 id 부여하기
// const conditionId = Math.floor(Math.random() * 1000);
