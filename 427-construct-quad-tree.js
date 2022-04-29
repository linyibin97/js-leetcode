/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
 var construct = function(grid) {
    const isEqual = (x1,y1,x2,y2) => {
        for (let i=x1; i<x2; i++) {
            for (let j=y1; j<y2; j++) {
                if (grid[i][j] !== grid[x1][y1]) 
                    return false
            }
        }
        return true
    }
    const build = (x1,y1,x2,y2) => {
        if (isEqual(x1, y1, x2, y2)) {
            return new Node(grid[x1][y1], true, null, null, null, null)
        } else {
            const xm = (x1 + x2) >> 1
            const ym = (y1 + y2) >> 1
            return new Node(
                1, 
                false, 
                build(x1,y1,xm,ym),
                build(x1,ym,xm,y2),
                build(xm,y1,x2,ym),
                build(xm,ym,x2,y2)
            )
        }
    }
    return build(0, 0, grid.length, grid[0].length)
};