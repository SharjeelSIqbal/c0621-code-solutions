fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

const showCase = sprite => {
  const image = document.createElement('img');
  image.setAttribute('style', 'width:500px; height:500px;');
  image.setAttribute('src', sprite);
  return document.querySelector('body').append(image);
};

fetch('https://pokeapi.co/api/v2/pokemon/bidoof')
  .then(response => response.json())
  .then(data => { showCase(data.sprites.back_default); });
