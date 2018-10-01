function isTreeUniVal (root) {
  if (!root) return true;
  if (root.left) {
    if (root.val === root.left.val) {
      if (!isTreeUniVal(root.left)) {
        return false;
      }
    } else {
      return false;
    }
  }
  if (root.right) {
    if (root.val === root.right.val) {
      if(!isTreeUniVal(root.right)){ 
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


let root = new Node(10, 
                    new Node(5, new Node(2, new Node(1, null, null), new Node(3, null, new Node(4, null, null))), new Node(8, new Node(6, null, null), new Node(9, null, null))),
                    new Node(12, new Node(11, null, null), new Node(15, new Node(13, null), new Node(16, null, null))) 
                    );
let root2 = new Node(10, 
                    new Node(10, new Node(10, new Node(10, null, null), new Node(10, null, new Node(10, null, null))), new Node(10, new Node(10, null, null), new Node(10, null, null))),
                    new Node(10, new Node(10, null, null), new Node(10, new Node(10, null), new Node(10, null, null))) 
                    );
console.log('Root 1', isTreeUniVal(root));
console.log('Root 2', isTreeUniVal(root2));
