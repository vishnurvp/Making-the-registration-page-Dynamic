const posts = [
    {title: 'post one', body: 'this is post one', createdAt: new Date()},
    {title: 'post two', body: 'this is post two', createdAt: new Date()}
];

let last_edit = new Date();
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} created at ${Math.floor((new Date() - post.createdAt)/1000)} seconds ago</li>`;
            // last_edit = post.createdAt;
        });
        output += `<br><p>Last Edited: ${Math.floor((new Date()-last_edit)/1000)} seconds ago`;
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.createdAt = new Date();
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });    
}

createPost({title: 'post three', body: 'this is post three'})
.then(getPosts)
.catch(err => console.log(err));


function deletePost() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const error = (posts.length===0);
            posts.pop();
            if (!error) resolve();
            else reject('Error: Posts are empty now');
        }, 1000);
    });
}

// wait till the three contents load 2+1 = 3 seconds and call deletepost()
setTimeout(()=>{deletePost().then(getPosts).catch(err => console.log(err))},3000);
// wait till 2 seconds since this will take 3+1+1 seconds
setTimeout(()=>{deletePost().then(getPosts).catch(err => console.log(err))},5000);
// wait till 5+2 sec
setTimeout(()=>{deletePost().then(getPosts).catch(err => console.log(err))},7000);
// wait 9 sec
setTimeout(()=>{deletePost().then(getPosts).catch(err => console.log(err))},9000); // error


// 4) and 5) // try creating post and deleting while not depending on setTimer
// execute this whe all the able code is executed.
setTimeout(()=>{
    createPost({title: 'post four', body: 'this is post four'})
    .then(deletePost)
    .catch(err => console.log(err));
}, 11000);
// creates new post and deletes it imediately

