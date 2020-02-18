public static void levelOrder(Node root) {
        if (root == null) return; 
        LinkedList<Node> nodeQueue = new LinkedList<Node>(); 
        nodeQueue.add(root);
        while (nodeQueue.peekLast() != null){
            Node node = nodeQueue.removeFirst();
            if (node.left != null){
                nodeQueue.add(node.left);
            }
            if (node.right != null){
                nodeQueue.add(node.right);
            }
            System.out.print(node.data + " "); 
        }
    }