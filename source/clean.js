function onLoad(){
  var element = document.querySelector('#board > div.js-add-list.list-wrapper.mod-add.is-idle');
  element.parentNode.removeChild(element);
}

document.addEventListener('DOMContentLoaded', onLoad);

