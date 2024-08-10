export default function statusConverter(status: number) {
  switch (status){
    case 1:
      return '공개'
    case 2:
      return '비공개'
    case 3:
      return '비밀글'
    default:
      return '미등록'
  }
}