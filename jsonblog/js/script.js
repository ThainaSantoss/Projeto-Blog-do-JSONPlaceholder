// https://jsonplaceholder.typicode.com/posts

async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...'
  
    // requisição
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();
  
    if(json.length > 0){ // se ele tiver mais de um item
      postArea.innerHTML = '';
  
      for(let i in json) {
        let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/></div>`; // estrutura de 1 post (loop)
        postArea.innerHTML += postHtml; // concatenação // a cada post da memoria ele remove um e coloca 1,2 até 100
      }
    } else {;
      postArea.innerHTML = 'nenhum post para exibir' // substituindo o nome "carregando"
    }
  }
  
  async function addNewPost(title, body) {
    await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        body,
        userId: 2
      })
    }
  );
  // limpar o campo
  document.querySelector('#titleField').value =  '';
  document.querySelector('#bodyField').value = ''; 
  
  
  readPosts();
  }
  // evento de click
  document.querySelector('#insertButton').addEventListener('click', () => { // adicionando valor ao botão
      let title = document.querySelector('#titleField').value; 
      let body = document.querySelector('#bodyField').value; 
  
  
        if(title && body) {
            // fazer requisição para adicionar // verifica se tem algum valor digitado nele 
            addNewPost (title, body);
  
          } else {
            alert ("Preencha todos os campos.")
          }
  
    });

  readPosts();