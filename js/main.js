const selectElement = function(e){
  let element = document.querySelector(e);
  if(!element)throw new Error('Element doesn\'t exist.')
  return element;
}

function screenChange(e){
  let container = selectElement('.container');
  let footer = selectElement('.footer');
  let containerRect = container.getBoundingClientRect();
  let footerRect = footer.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  if(windowHeight > containerRect.bottom + 32 + footerRect.height){
    footer.style.position = 'absolute';
  }else{
    footer.style.position = 'static';
  }
}


document.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('resize', screenChange);
  window.dispatchEvent(new Event('resize'));
  let cross = selectElement('.cross-icon-wrap');
  let inputTag = selectElement('input');
  cross.onclick = function(){
    inputTag.value = '';
    inputTag.focus();
    cross.style.display = 'none';
  }
  inputTag.addEventListener('input', function(){
    if(this.value){
      cross.style.display = 'block';
    }else{
      cross.style.display = 'none';
    }
  });
  inputTag.focus();

  
});

