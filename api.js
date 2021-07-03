const getUserPosts = (id) =>{
 const ul = newTag('ul')
 const closeBtn = newTag('button')
 closeBtn.innerText = 'X'
 closeBtn.addEventListener('click',()=>document.querySelector('ul').style.display='none')
ul.appendChild(closeBtn)

 fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).
 then(posts => posts.json()).
 then(posts => posts.forEach(({title})=>{

   const li = newTag('li')
   getTag('posts', ul)
   li.innerHTML= title
   ul.appendChild(li)
 }))
}
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    }).then(data => {
        console.log(data);
        const html = data.map(user => {
            return `<div class="user">
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <button id="${user.id}" onclick="getUserPosts">Get user's posts</button>
             </div>` 
        })
        document
        .querySelector("#api")
        .insertAdjacentHTML("afterbegin",html);
    }).catch(error => {
        console.log(error);
    });
}

fetchData();

