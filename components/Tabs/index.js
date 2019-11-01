// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    //console.log(response);
    topicsContainer = document.querySelector('.topics');
    response.data.topics.forEach(item => {
        topicsContainer.appendChild(tabMaker(item));
    })
})
.catch(error => {
    console.log (error);
});


function tabMaker(item){
    //define new element
    const newTab = document.createElement('div');
    //class name
    newTab.classList.add('tab');
    //text context
    newTab.textContent = item;
    return newTab;
}

