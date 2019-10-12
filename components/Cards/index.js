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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    console.log(response);

    response.data.articles.bootstrap.forEach(element => {
        Article(element);
    });
    response.data.articles.javascript.forEach(element => {
        Article(element);
    });
    response.data.articles.jquery.forEach(element => {
        Article(element);
    });
    response.data.articles.node.forEach(element => {
        Article(element);
    });
    response.data.articles.technology.forEach(element => {
        Article(element);
    });


  })
  .catch(function (error) {
    console.log('error');
  })


  const Article = (object) => {

        let grandParent = document.querySelector(".cards-container");
        let parent = document.createElement('div');
        let headline = document.createElement('div');
        let author = document.createElement('div');
        let imgContainer = document.createElement('div');
        let img = document.createElement('img');
        let span = document.createElement('span');

        parent.classList.toggle('card')
        headline.classList.toggle('headline')
        author.classList.toggle('author')
        imgContainer.classList.toggle('img-container')
        
        parent.append(headline, author);
        author.append(imgContainer, span);
        imgContainer.append(img);

        headline.textContent = object.headline;
        img.src = object.authorPhoto;
        span.textContent = object.authorName;

        grandParent.append(parent);


        return parent;
  }