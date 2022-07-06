// 1. Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

// 2. Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// 3. Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.



// RECUPERO GLI ELEMENTI DAL DOM
const container = document.getElementById('container');

// CREO L'ARREY DI OGGETTI DEI POST
const posts = [
    {
        id: 1, 
        authorName: 'Franco',
        authorPic: 'authorpic-1.jpg', 
        date: '07/06/2022',
        postText: 'Ciao ciao ciao ciao ciao ciao ciao',
        postImg: 'toscana.jpg',
        likeNumber: '50',
      },
    
      {
        id: 2, 
        authorName: 'Mario',
        authorPic: 'authorpic-2.jpg', 
        date: '07/06/2022',
        postText: 'Miao Miao Miao Miao Miao Miao Miao',
        postImg: 'sardegna.jpg',
        likeNumber: '70',
      },

      {
        id: 3, 
        authorName: 'Beppe',
        authorPic: 'authorpic-3.jpg', 
        date: '07/06/2022',
        postText: 'Bau bau bau bau bau bau bau bau',
        postImg: 'livorno.jpg',
        likeNumber: '80',
      },

      {
        id: 4, 
        authorName: 'Carla',
        authorPic: 'authorpic-4.jpg', 
        date: '07/06/2022',
        postText: 'Chicchirichi Chicchirichi Chicchirichi',
        postImg: 'dolomiti.jpg',
        likeNumber: '90',
      },
]

console.log(posts);

let post = '';

for (let i = 0; i < posts.length; i++){
    post += `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${posts[i]['authorPic']}" alt="Phil Mangione" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${posts[i]['authorName']}</div>
          <div class="post-meta__time">${posts[i]['date']}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
        ${posts[i]['postText']}
    </div>
    <div class="post__image">
      <img src="${posts[i]['postImg']}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${posts[i]['id']}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i]['likeNumber']}</b> persone</div>
      </div>
    </div>
  </div>`;
}

container.innerHTML = post;