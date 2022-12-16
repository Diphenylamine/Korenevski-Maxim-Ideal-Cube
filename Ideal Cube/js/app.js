let img = document.images;
let count_img = img.length;
let load_img = 0;

function load_image(){
  load_img++;
  document.querySelector('.progress_line_pre').style.width = (((100 / count_img) * load_img) << 0 ) + '%';
  document.querySelector('.result').innerHTML = (((100 / count_img) * load_img) << 0 ) + '%';

  if(load_img >= count_img){
    setTimeout(function (){
      document.querySelector('.preloader').style.display = 'none';
    }, 2000);
  }
}