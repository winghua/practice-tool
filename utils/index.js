export function quickSort(arr) {
  //快排算法实现
  let base = arr[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= base) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  if (left.length >= 2) {
    left = quickSort(left);
  }

  if (right.length >= 2) {
    right = quickSort(right);
  }

  return left.concat(base, right);
}

export class Queue {
    //用两个栈模拟队列
    //栈是先进后出的
    //队列是先进先出的
    //实现原理就是每次入队的时候，就往第一个栈中压栈
    //出队列的时候，把第一个栈的数据，全部推出到另一个空的临时栈中，然后再推出临时栈的数据
    //出栈动作处理完后，再把临时栈的数据都推出，压到第一个栈中
    //如此就完成了模拟队列的先进先出方法
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    let tempStack = [];
    let result;
    while (stack.length >= 1) {
      tempStack.push(stack.pop());
    }
    result = tempStack.pop();

    while (tempStack.length >= 1) {
      stack.push(tempStack.pop());
    }

    return result;
  }
}
