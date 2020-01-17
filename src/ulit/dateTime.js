// 格式化时间
export function formatTime(date, formatter = "yyyy-MM-dd") {
  //return date;
  if (!date) return;

  if (typeof date === "string") {
    date = new Date(date);
  }
  if (typeof date === "number") {
    date = new Date(date);
  }

  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(formatter))
    formatter = formatter.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );

  for (let k in o) {
    if (new RegExp("(" + k + ")").test(formatter)) {
      o[k] = (o[k] + "").padStart(2, "0");
      formatter = formatter.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }

  return formatter;
}
