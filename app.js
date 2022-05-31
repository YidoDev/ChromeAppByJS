const title = document.querySelector(".hello h1:last-child");

function handleTitleClick() {
    console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);