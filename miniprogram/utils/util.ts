export const compareVersion = (v1: string, v2: string):number => {
  let v1_arr = v1.split('.')
  let v2_arr = v2.split('.')
  const len = Math.max(v1_arr.length, v2_arr.length)

  while (v1_arr.length < len) {
    v1_arr.push('0')
  }
  while (v2_arr.length < len) {
    v2_arr.push('0')
  }
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1_arr[i])
    const num2 = parseInt(v2_arr[i])
    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }
  return 0
}



export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}
