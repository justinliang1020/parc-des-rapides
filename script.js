function handleBodyClick(event) {
  // Only trigger if clicking directly on body or non-clickable elements
  if (
    event.target.tagName.toLowerCase() !== "a" &&
    !event.target.closest("a") &&
    event.target.tagName.toLowerCase() !== "button"
  ) {
    // Get all hyperimages
    const hyperimages = document.querySelectorAll("#hyperimage");

    // Add highlight class
    hyperimages.forEach((h) => h.classList.add("highlight-clickable"));

    // Remove highlight class after brief moment
    setTimeout(() => {
      hyperimages.forEach((h) => h.classList.remove("highlight-clickable"));
    }, 2000);
  }
}
