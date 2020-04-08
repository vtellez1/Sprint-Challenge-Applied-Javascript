// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    cardContainer = document.querySelector('.cards-container');

    const keys = response.data.articles;
    for (const key in keys) {
        const keysInfo = keys[key];

        keysInfo.forEach(item =>{
            cardContainer.appendChild(cardMaker(item));
        })}
})

    //This works but could be shorter:
    // response.data.articles.bootstrap.forEach(item=>{
    //     cardContainer.appendChild(cardMaker(item.headline, item.authorPhoto, item.authorName));
    // })
    // response.data.articles.javascript.forEach(item=>{
    //     cardContainer.appendChild(cardMaker(item.headline, item.authorPhoto, item.authorName));
    // })
    // response.data.articles.jquery.forEach(item=>{
    //     cardContainer.appendChild(cardMaker(item.headline, item.authorPhoto, item.authorName));
    // })
    // response.data.articles.node.forEach(item=>{
    //     cardContainer.appendChild(cardMaker(item.headline, item.authorPhoto, item.authorName));
    // })
    // response.data.articles.technology.forEach(item=>{
    //     cardContainer.appendChild(cardMaker(item.headline, item.authorPhoto, item.authorName));
    // })

.catch(error => {
    console.log (error);
});

function cardMaker(arg){

    //define new element
    const newCard = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor =document.createElement('div');
    const cardImgContainer = document.createElement('div');
    const cardImg =document.createElement('img');
    const cardAuthName= document.createElement('span');

    //Set Up Structure
    newCard.appendChild(cardHeadline);
    newCard.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgContainer);
    cardImgContainer.appendChild(cardImg);
    cardAuthor.appendChild(cardAuthName);

    //class name
    newCard.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgContainer.classList.add('img-container');

    //text context
    cardHeadline.textContent = arg.headline;
    cardImg.src= arg.authorPhoto;
    cardAuthName.textContent = arg.authorName;
    

    return newCard;
}
