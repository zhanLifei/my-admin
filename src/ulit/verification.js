// 手机号验证
export function isvalidPhone(str) {
  const reg = /^1[3|4|5|7|8][0-9]{9}$/;
  return reg.test(str);
}
// 手机号验证
export function isvalidTelephone(str) {
  // const regTel = /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{10,11}/;
  const regTel = /[0][0-9]{3,4}[0-9]{6,7}/;
  return regTel.test(str);
}
