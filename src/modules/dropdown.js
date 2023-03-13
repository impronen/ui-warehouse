const dropDown = (() => {
  function revealDropdown(topItemID, menuItemClass) {
    const topItem = document.querySelector(`${topItemID}`);
    const dropdown = topItem.addEventListener("click", () => {
      const menuItems = document.querySelector(`${menuItemClass}`);
      menuItems.classList.toggle("show");
    });
  }
  return { revealDropdown };
})();

export default dropDown;
