export default () => {
    // Execute on-click action on table of contents.
    const tableOfContents = document.querySelector(".anchor-wrapper")
    tableOfContents.addEventListener("click", function(e) {
        // Setting scroll height accounting for the fixed navbar.
        let scrollHeight = document.querySelector(window.location.hash).offsetTop + 200;
        // Properly updating the window location.
        window.scroll(0, scrollHeight);
        e.preventDefault();
    });
}