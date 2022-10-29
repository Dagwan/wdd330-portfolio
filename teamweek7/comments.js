//model that is set for the application

//coment model

class CommentModel {
    constructor(type) {
        this.type = type;

        //get the initial list of the comments
        this.comments = readFromLocalStorage(this.type) || [];
    }

    //get all comments
    getComments(coms = null) {
        if (coms === null) {
            //get all the comments type
            return this.comments;
        } else {
            //filter the specific comments
            return this.comments.filter(elem => elem.name === coms);
        }
    }
    //add comment
    addComment(postName, comment) {
        const newComment = {
            name: postName,
            comment: comment,
            date: new Date()
        };
        this.comments.push(newComment);
        writeToLocalStorage(this.type, this.comments);
    }
}

//using JSON.stringify and convert the object
function writeToLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

//reading from local storage(retrieve from local storage)
function readFromLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

//creating the html needed to output the lists
const commentUI = `<div class="addComment">
<h2>Add a Comment</h2>
<input type="text" id="commentEntry"/>
<button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>`;

//rendering the comment list elements
function renderCommentlist(element, comments) {
    //clear any any listed comments
    element.innerHTML = " ";

    //new list comments
    comments.forEach(elem => {
        let item = document.createElement("li");
        item.innerHTML = `
        ${elem.name}: ${elem.comment}`;

        element.appendChild(item);
    });
}

//handling the list of comments from the data source and output
class Comment {
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.model = new CommentModel(this.type);
    }

    //element.ontouchend to prevent more than a listner
    addSubmitListener(postName) {
        document.getElementsByTagName("commentSubmit").ontouchend = () => {
            //debugging...
            this.model.addComment(
                postName,
                document.getElementsByTagName("CommentEntry").value
            );
            document.getElementsByTagName("commentEntry").value = " ";
            this.showCommentList(postName);
        };
    }

    showCommentList(coms = null) {
        try {
            const parent = document.getElementsByTagName(this.commentElementId);
            if (!parent) throw new Error("Parent Comment not Fount");
            //checking to if the CommentUI has been added or not
            if (parent.innerHTML === " ") {
                parent.innerHTML = commentUI;
            }

            //look at one post and show the comment
            if (coms !== null) {
                document.querrySelector(".addComment").style.display = "block";
                this.addSubmitListener(coms);
            } else {
                //no post name is provided, hide the comment entry
                document.querySelector(".addComment").style.display = "none";
            }
            //retriving the comments from the model
            let comments = this.model.getComments(coms);
            if (comments === null) {
                //avoiding any possible errors
                comments = [];
            }
            renderCommentlist(parent.lastChild, comments);
        } catch (error) {
            console.log(error);
        }
    }
}

//EXPORTING THE DEFAULT COMMENTS
export default Comments;