const cardList = document.getElementById("cardList");
const scrollToLeftButton = document.getElementById("scrollToLeft");
const scrollToRight = document.getElementById("scrollToRight");
const ellipseList = document.getElementById("ellipses");

// 1007px 2 cards
// 1398px 3 cards
// 380px card
// 15px gap

let ellipseInd = 1;
const tableVeiwPoin = 1007;
const deckVeiwPoin = 1398;

const getShiftNumber = () => {
  const clientWidth = document.body.clientWidth;

  let shiftNumber = 380;
  if (clientWidth >= tableVeiwPoin) shiftNumber = 790;
  if (clientWidth >= deckVeiwPoin) shiftNumber = 1185;

  return shiftNumber;
};

const setScroll = (shiftBy) => {
  cardList.scrollBy({ left: shiftBy, behavior: "smooth" });
};

const setEllipses = (fillUpTo) => {
  const active = "review__ellipse--active";

  for (let ind = 0; ind < cardList.children.length; ind++) {
    if (ind < fillUpTo) ellipseList.children.item(ind).classList.add(active);
    else ellipseList.children.item(ind).classList.remove(active);
  }
};

const getElipsNumber = () => {
  const clientWidth = document.body.clientWidth;

  let ellipses = 6;
  if (clientWidth >= tableVeiwPoin) ellipses = 3;
  if (clientWidth >= deckVeiwPoin) ellipses = 2;

  return ellipses;
};

scrollToLeftButton.onclick = () => {
  ellipseInd = ellipseInd === 1 ? 1 : ellipseInd - 1;
  setEllipses(ellipseInd);
  setScroll(getShiftNumber() * -1);
};
scrollToRight.onclick = (e) => {
  ellipseInd =
    ellipseInd === getElipsNumber() ? getElipsNumber() : ellipseInd + 1;
  setScroll(getShiftNumber());
  setEllipses(ellipseInd);
};
