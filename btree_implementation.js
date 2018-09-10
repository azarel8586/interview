// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search tree class
class BinarySearchTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;
  }

  // function to be implemented
  insert(data) {
    if (this.root === null) {
      this.root = new Node(data);
    } else {
      this.insertNode(data, this.root);
    }
  }
  insertNode(data, currNode) {
    if (data < currNode.data) {
      // if there isn't anything here then mak it the left node here
      if (currNode.left === null) {
        currNode.left = new Node(data);
      } else {
        this.insertNode(data, currNode.left);
      }
    } else {
      if (currNode.right === null) {
        currNode.right = new Node(data);
      } else {
        this.insertNode(data, currNode.right);
      }
    }
  }
  // remove(data) goes hand in hand with search
  remove(data) {
    if (this.root !== null) {
      this.removeNode(this.root, data);
    }
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (node.data > data) {
      node.left = this.removeNode(node.left, data);
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
    } else if (node.data === data) {
      // need to take care of the children and return the new nodes
      if ((node.left == null) & (node.right == null)) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }
      // delete the node with 2 children
      var aux = this.findMinNode(node.right);
      node.data = aux.data; // replace our matching node with the min val from the right
      node.right = this.removeNode(node.right, aux.data); // remove the node we transplanted to this node
      return node;
    }
  }

  // Helper function
  // findMinNode()
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  // getRootNode()
  getRootNode() {
    return this.root;
  }
  // inorder(node)
  // Performs inorder traversal of a tree
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  // preorder(node)
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  // postorder(node)
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  // search(node, data)
  search(node, data) {
    if (node.data === data) {
      return node;
    }
  }
}


var BST = new BinarySearchTree();
 
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

// Removing node with two children 
BST.remove(15);
     
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
var root = BST.getRootNode();
console.log("inorder traversal");
// prints 9 10 13 17 22 25 27
BST.inorder(root);
// console.log("postorder traversal");
// BST.postorder(root);
// console.log("preorder traversal");
// BST.preorder(root);
