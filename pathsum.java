//Java Solution

class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        return dfs(root, sum);
    }
    
    public boolean dfs(TreeNode node, int sum) {
        if (node == null) {
            return false;
        }
        
        if (node.left == null && node.right == null && sum == node.val) {
            return true;
        }
        
        return dfs(node.left, sum - node.val) || dfs(node.right, sum - node.val);
    }
}