const body = document.body;

body.on("paging", (event) => {
    console.log(event);
});

body.on("d-pagination:to-page", (event) => {
    console.log(event);
});