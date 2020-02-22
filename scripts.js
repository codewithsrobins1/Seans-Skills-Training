//Function Expressions to select elements
const selectElement = (s) => document.querySelector(s);

//Open the Menu on Click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active')
});

//Open the Menu on Click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active')
});

