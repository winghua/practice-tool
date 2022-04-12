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

function treeNode(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

export function buildTree(preArr,middleArr) {
  /*
    有一个前序遍历 [1,2,4,5,7,8,3,6]
    中序遍历 [4,2,7,5,8,1,3,6]
    求这棵树

    第一步，拆分出节点左子树和右子树的前序和中序遍历
      前序遍历的第一个值就是根节点的值
      在中序遍历中，找到根节点的值，左边的就是左子树的中序，右边的就是右子树的中序
    第二步，递归出所有节点
    第三步，返回根节点
  */
  let root = new treeNode(preArr[0]);

  let leftMiddle = middleArr.slice(0, middleArr.indexOf(preArr[0]));
  let leftPre = preArr.slice(1, leftMiddle.length + 1);

  let rightPre = preArr.slice(leftPre.length + 1);
  let rightMiddle = middleArr.slice(leftMiddle.length + 1);

  if (leftMiddle.length >= 2) {
    root.left = buildTree(leftPre, leftMiddle);
  } else if (leftMiddle.length === 1) {
    root.left = new treeNode(leftPre[0]);
  }

  if (rightMiddle.length >= 2) {
    root.right = buildTree(rightPre, rightMiddle);
  } else if (rightMiddle.length === 1) {
    root.right = new treeNode(rightPre[0]);
  }

  return root;
}
