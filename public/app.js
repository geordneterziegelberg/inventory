// const axios = require('axios');
// const axios = require('../axios/dist/browser/axios.cjs'); // browser
const searchButton = document.querySelector("#search-button")
const itemContainer = document.querySelector(".item-container")

searchButton.addEventListener("click", () => {
    const input = document.querySelector("#search-input").value
    console.log(input)
})

// itemContainer.addEventListener("click", (e) => {
//     const clickedItem = e.target.closest("tr")
//     const trID = clickedItem.getAttribute("id")
//     axios.get('/items', {
//         params: {
//             clicked: trID
//         }
//       })
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
    
// })