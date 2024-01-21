function renderPopUp() {
    
    const message = document.getElementById("popUp");
  
    message.className = "show";
  
    setTimeout(()=> { message.className = message.className.replace("show", " ") }, 3000);
  }

  // eslint-disable-next-line import/prefer-default-export
  export { renderPopUp }