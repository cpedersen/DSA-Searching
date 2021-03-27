// ** No coding is needed for these drills**.
// Once you have answered it, you can then code
// the tree and implement the traversal to see
// if your answer is correct.

// Depth-First Search (DFS) Algorithm:
//      in-order: left, parent, right
//      pre-order: parent, left, right
//      post-order: left, right, parent

// 1) Given a binary search tree whose in-order
// and pre-order traversals are respectively
// 14 15 19 25 27 35 79 89 90 91 and
// 35 25 15 14 19 27 89 79 91 90. What would be
// its postorder traversal?

// in-order: 14, 15, 19, 25, 27, 35, 79, 89, 90, 91
// pre-order: 35, 25, 15, 14, 19, 27, 89, 79, 91, 90
// post-order: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

//                35
//          /           \
//         25           89
//        /  \         /  \
//      15   27      79   91
//     /  \              /
//    14   19          90

// 2) The post order traversal of a binary search
// tree is 5 7 6 9 11 10 8. What is its pre-order
// traversal?

// post-order: 5 7 6 9 11 10 8
// pre-order: 8 6 5 7 10 9 11

//        8
//    /      \
//   6       10
//  / \     /  \
// 5   7   9    11
