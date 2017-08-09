/**
 * Created by anton on 05-Nov-16.
 */
function solve() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }

    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);

            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString() {
            let output = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;

            if (this.comments.length > 0) {
                output += '\nComments:\n';
                for (let comment of this.comments) {
                    output += ` * ${comment}\n`;
                }
            }

            return output.trim();
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }

    }

    return {Post, SocialMediaPost, BlogPost};
}

let classes = solve();
let Post = classes.Post;
let SocialMediaPost = classes.SocialMediaPost;
let BlogPost = classes.BlogPost;

let post = new Post("Post", "Content");
console.log(post.toString());
console.log("------------------------------");
let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());

console.log("------------------------------");
let bp = new BlogPost("Blog post", "Just another b post", 100);
bp.view().view().view();
console.log(bp.toString());
