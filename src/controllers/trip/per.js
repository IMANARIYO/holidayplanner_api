 export function persistence(num) {
  //code me
  let init = 0;
  if (num < 10) {
    return (init = 0);
  }

  let container = new Array();
  let result = 1;

  while (num > 10) {
    let last_num = num % 10;
    container.push(last_num);
    if (last_num != 0) {
      result *= last_num;
      console.log(result)
    }
    num =Math.floor( num / 10);
  }
  if (result >= 10) {
    init++;
    return init + persistence(result);
  }
}
