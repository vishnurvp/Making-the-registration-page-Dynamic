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
            last_edit = post.createdAt;
        });
        output += `<br><p>Last Edited: ${Math.floor((new Date()-last_edit)/1000)} seconds ago`;
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        post.createdAt = new Date();
        posts.push(post);
        if(callback) callback();
    }, 1000);
}

// getPosts();
createPost({title: 'post three', body: 'this is post three'}, getPosts);

function create4thpost(post, callback) {
    setTimeout(() => {
        post.createdAt = new Date();
        callback(post, getPosts);
    }, 1000);
}

create4thpost({title: 'post four', body: 'this is fourth post'}, createPost);

let recalInterval = setInterval(getPosts,1000);

