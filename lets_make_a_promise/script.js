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
                resolve(posts);
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });    
}

function deletePost() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const error = (posts.length===0);
            let a = posts.pop();
            if (!error) resolve(posts);
            else reject('Error: Posts are empty now');
        }, 1000);
    });
}

// testing deletePost
// // wait till the three contents load 2+1 = 3 seconds and call deletepost()
// setTimeout(()=>{deletePost().then(getPosts).catch(err => console.log(err))},3000);
// // wait till 2 seconds since this will take 3+1+1 seconds
// setTimeout(()=>{deletePost().then(getPosts).catch(err => console.log(err))},5000);
// // wait till 5+2 sec
// setTimeout(()=>{deletePost().then(getPosts).catch(err => console.log(err))},7000);
// // wait 9 sec
// setTimeout(()=>{deletePost().then(getPosts).catch(err => console.log(err))},9000); // error



// 4) and 5) // try creating post and deleting while not depending on setTimer
// execute this whe all the able code is executed.
// setTimeout(()=>{
//     createPost({title: 'post four', body: 'this is post four'})
//     .then(deletePost)
//     .catch(err => console.log(err));
// }, 11000);
// // creates new post and deletes it imediately


// const promise1 = Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'googbye'));

// function updateLastUserActivityTime() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             last_edit = new Date();
//             resolve(last_edit);
//         },1000);
//     })
// }
// let p1 = createPost({title: 'post four', body: 'this is post four'});
// let p2 = updateLastUserActivityTime()
// Promise.all([p1, p2]).then(([a,b]) => {
//     console.log('_______________________________________');
//     console.log('Posts: ');
//     for (let post of a) console.log(post);
//     console.log('Last Activity time: '+b);
// }).then(deletePost).then((val)=>{
//     console.log('________________________________________');
//     console.log('Posts afeter Deleting: ')
//     for (let post of val) console.log(post);
// });



async function printPosts(){
    await createPost({title: 'post three', body: 'this is post three'}).then(getPosts);
    await createPost({title: 'post four', body: 'this is post four'}).then(getPosts);
    await createPost({title: 'post five', body: 'this is post five'}).then(getPosts);
}

printPosts();




