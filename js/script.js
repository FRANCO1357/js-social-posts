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
        postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis fugit harum illo culpa, incidunt tempora distinctio veritatis quis repudiandae soluta nemo impedit, mollitia esse atque, nisi obcaecati corrupti odio iste?',
        postImg: 'toscana.jpg',
        likeNumber: 50,
      },
    
      {
        id: 2, 
        authorName: 'Mario',
        authorPic: 'authorpic-2.jpg', 
        date: '07/06/2022',
        postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis fugit harum illo culpa, incidunt tempora distinctio veritatis quis repudiandae soluta nemo impedit, mollitia esse atque, nisi obcaecati corrupti odio iste?',
        postImg: 'sardegna.jpg',
        likeNumber: 70,
      },

      {
        id: 3, 
        authorName: 'Beppe',
        authorPic: 'authorpic-3.jpg', 
        date: '07/06/2022',
        postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis fugit harum illo culpa, incidunt tempora distinctio veritatis quis repudiandae soluta nemo impedit, mollitia esse atque, nisi obcaecati corrupti odio iste?',
        postImg: 'livorno.jpg',
        likeNumber: 80,
      },

      {
        id: 4, 
        authorName: 'Carla',
        authorPic: 'authorpic-4.jpg', 
        date: '07/06/2022',
        postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis fugit harum illo culpa, incidunt tempora distinctio veritatis quis repudiandae soluta nemo impedit, mollitia esse atque, nisi obcaecati corrupti odio iste?',
        postImg: 'dolomiti.jpg',
        likeNumber: 90,
      },
]

console.log(posts);

// CREO UNA FUNZIONE CHE CREA I POST
const createPost = (postItems) => {
    const post = `<div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${postItems['authorPic']}" alt="Phil Mangione" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${postItems['authorName']}</div>
          <div class="post-meta__time">${postItems['date']}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
        ${postItems['postText']}
    </div>
    <div class="post__image">
      <img src="${postItems['postImg']}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" data-postid="${postItems['id']}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${postItems['likeNumber']}</b> persone</div>
      </div>
    </div>
  </div>`;

  return post;
}

let post = '';

// CREO TUTTI I POST CHE HO NELL'ARRAY EVOCANDO LA FUNZIONE
for (let i = 0; i < posts.length; i++){
    let postItems = posts[i]

    post += createPost(postItems);
}

// STAMPO IN PAGINA I POST
container.innerHTML = post;

// RECUPERO GLI ELEMENTI DAL POST CREATO
const likeButton = document.querySelectorAll('.like-button');
const likeCounter = document.querySelectorAll('.js-likes-counter');

// CON UN CICLO FOR PRENDO TUTTI I LIKE BUTTON
for(let i = 0; i < likeButton.length; i++){

    // AGGIUNGO O RIMUOVO LA CLASSE AI LIKE BUTTON E INCREMENTO O DECREMENTO I LIKES
    likeButton[i].addEventListener('click', function(){
        const currentLike = likeCounter[i].innerHTML = `${posts[i].likeNumber + 1}`;

        if(likeButton[i].classList.contains('like-button--liked')){
            likeButton[i].classList.remove('like-button--liked')
            likeCounter[i].innerHTML = currentLike - 1;
        } else {
            likeButton[i].classList.add('like-button--liked')
            likeCounter[i].innerHTML = `${posts[i].likeNumber + 1}`;
        }
        
    })
}




