document.querySelectorAll(".odd").forEach((el) => {
  if (
    Math.abs(Number(el.textContent)) > 99 &&
    el.parentNode.classList.contains("odd-block")
  ) {
    convertAmericanToDecimal(el);
  }
});

document.querySelectorAll(".price-view-m").forEach((el) => {
  if (Math.abs(Number(el.textContent)) > 99) {
    convertAmericanToDecimal(el);
  }
});

var observer = new MutationObserver(onTextContentChange);
observer.observe(document.querySelector("#root"), {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
});

function onTextContentChange(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (
      Math.abs(Number(mutation.target.textContent)) > 99 &&
      Math.abs(Number(mutation.target.textContent)) < 100000
    ) {
      convertAmericanToDecimal(mutation.target);
    }
  }
}

function convertAmericanToDecimal(container) {
  const content = container.textContent;
  if (content && content !== "-") {
    const decimal =
      content < 0
        ? ((content - 100) / content).toFixed(2)
        : ((Number(content) + 100) / 100).toFixed(2);
    container.textContent = decimal;
  }
}
