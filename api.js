document.addEventListener("DOMContentLoaded", function(event) {
 
    const newTag=(tagName)=> document.createElement(tagName);
    
    const getTag=(parentElementClass, childTag) => document.getElementsByClassName(parentElementClass)[0].appendChild(childTag)
    
   const getUserPosts = (id) =>{
    const ul = newTag('ul')
    const button = newTag('button')
    button.innerText = 'Get Back'
    button.addEventListener('click',()=>document.querySelector('ul').style.display='none')
   ul.appendChild(button)
   
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).
    then(posts => posts.json()).
    then(posts => posts.forEach(({title})=>{
   
      const li = newTag('li')
      getTag('posts', ul)
      li.innerHTML= title
      ul.appendChild(li)
    }))
   }
   
   
   function getData() {
   fetch('https://jsonplaceholder.typicode.com/users',).
   then(data => data.json()).
   then(data => {
      console.log(data)
       data.forEach(({name, email, id})=>{
      var div = newTag('div')
        getTag('user', div);
   
        let listName = newTag('h2')
        let listEmail = newTag('p')
        let userPostBtn = newTag('button')
        userPostBtn.innerHTML = 'Get User’s Posts'   
        userPostBtn.addEventListener('click', function(e) {
            const post = document.querySelector('p')
            if(post){
                post.parentNode.removeChild(post)
            }
            getUserPosts(id)
        })
       
        div.appendChild(listName)
        div.appendChild(listEmail)
        div.appendChild(userPostBtn)
        listEmail.innerHTML = email
        listName.innerHTML=name
       
    })}).catch(error => {
    console.log(error);
   })
   }
   
   getData()
   
   })
  
