class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if(this.root) this.insertNode(this.root, newNode)
        else this.root = newNode;
    }

    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if (node.left) this.insertNode(node.left, newNode)
            else node.left = newNode;
        } else {
            if(node.right) this.insertNode(node.right,newNode)
            else node.right = newNode;
        }
    }

    search(node, data) {
        if(node === null) return null;
        else if(data < node.data) return this.search(node.left, data);
        else if(data > node.data) return this.search(node.right, data);
        else return node;
    }
}


const BST = new BinarySearchTree();
BST.insert(5);
BST.insert(3);
BST.insert(7);
BST.insert(2);
console.log(BST.search(2));
console.log(BST);



