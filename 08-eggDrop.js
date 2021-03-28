// This is a fun exercise to do - consider this optional
// after you are done with all the exercises above. Imagine
// that you wanted to find the highest floor of a 100 story
// building that you could drop an egg from without the egg
// breaking. But you only have 2 eggs. Write an algorithm to
// find out in the most efficient way which floors you should
// drop the eggs from. After you have understood the question
// and made some attempts to solve the problem, go through
// this reading before you start coding:

// http://datagenetics.com/blog/july22012/index.html.

function eggDrop(
  eggs = 2,
  breakPt = Math.floor(Math.random() * 100),
  currFloor = 0
) {
  if (eggs === 0) {
    console.log(
      `The breakpoint was ${breakPt} and the highest safe floor was ${currFloor}`
    );
    return currFloor;
  }
  if (eggs === 1) {
    if (currFloor + 1 >= breakPt) {
      eggDrop(eggs - 1, breakPt, currFloor);
    } else {
      eggDrop(eggs, breakPt, currFloor + 1);
    }
  }
  if (eggs === 2) {
    if (currFloor + 14 > breakPt) {
      eggDrop(eggs - 1, breakPt, currFloor);
    } else {
      eggDrop(eggs, breakPt, currFloor + 14);
    }
  }
}

eggDrop();
