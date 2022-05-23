// write a function like the examples below:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    const arr = s.toLowerCase().split('').map((el,index,array) => el.toUpperCase()+ el.repeat(index)).join('-')
    return arr
}