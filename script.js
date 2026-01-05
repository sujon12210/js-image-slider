let index = 1;

function next(){
  index++;
  document.getElementById('img').src =
    `https://picsum.photos/300/200?${index}`;
}

function prev(){
  if(index > 1) index--;
  document.getElementById('img').src =
    `https://picsum.photos/300/200?${index}`;
}
