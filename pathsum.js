//Objective is to see wheter a path (from root to leaf) exists where the sum of 
//all of the nodes in the path is the same as a given value.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(5)
tree.addLeftNode(tree.root, 4)
tree.addRightNode(tree.root, 8)
tree.addLeftNode(tree.root.left, 11)
tree.addLeftNode(tree.root.left.left, 7)
tree.addRightNode(tree.root.left.left, 2)
tree.addLeftNode(tree.root.right, 13)
tree.addRightNode(tree.root.right, 4)
tree.addRightNode(tree.root.right.right, 1)


//O(n) solution that performs a dfs traversal down a tree, subtracting node values
//from the sum until a leaf a reached. When the leaf is reached, we check
//if the sum is 0

function dfs(node, sum) {
    //We've passed the leaves if we hit a null node
    if (!node) {
        return false
    }

    sum -= node.val

    //We hit a leaf, so check if sum is 0
    if (!node.left && !node.right) {
        return sum == 0
    }

    return dfs(node.left, sum) || dfs(node.right, sum)
}
return dfs(tree.root, 22)