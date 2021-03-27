// Suppose you have a tree representing a command structure
// of the Starship USS Enterprise.

//                           Captain Picard (5)
//                         /                \
//                Commander Riker (3)      Commander Data (6)
//                  /         \                      \
//            Lt. Cmdr.   Lt. Cmdr.                Lt. Cmdr.
//            Worf (2)    LaForge (4)              Crusher (8)
//              /                                   /
//        Lieutenant (1)                      Lieutenant (7)
//        security-officer                    Selar

// This tree is meant to represent who is in charge of
// lower-ranking officers. For example, Commander Riker is
// directly responsible for Worf and LaForge. People of the
// same rank are at the same level in the tree. However, to
// distinguish between people of the same rank, those with
// more experience are on the left and those with less on
// the right (i.e., experience decreases from left to right).
// Suppose a fierce battle with an enemy ensues. Write a
// program that will take this tree of commanding officers
// and outline the ranking officers in their ranking order
// so that if officers start dropping like flies, we know
// who is the next person to take over command.

const BST = require("./BinarySearchTree");

function main() {
  let USSEnterprise = new BST();
  USSEnterprise.insert(5, "Captain Picard");
  USSEnterprise.insert(3, "Commander Riker");
  USSEnterprise.insert(2, "Lt. Cmdr. Worf");
  USSEnterprise.insert(4, "Lt. Cmdr. LaForge");
  USSEnterprise.insert(1, "Lieutenant security-officer");
  USSEnterprise.insert(6, "Commander Data");
  USSEnterprise.insert(8, "Lt. Cmdr. Crusher");
  USSEnterprise.insert(7, "Lieutenant Selar");

  console.log(USSEnterprise.binaryFirstSearch());
}

main();
