/**
 * @typedef {object} Comment - A single comment on a page
 * @property {string} creator - The session id that created this comment
 * @property {string} text - The content of the comment
 * */

/**
 * Returns the comments for a page by querying the api
 *
 * @param {string} page - The page to get the comments from.
 *                        This is usually the innerText of the "titleSeite" element.
 *
 * @return {Promise<Comment[]>}
 * */
async function getComments (page) {
    return fetch("/api/comments", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page })
    })
        .then( res => res.json() )
}


/**
 * Displays a list of comments into the dedicated section of the page.
 *
 * @param {Comment[]} comments - The comments to display
 * */
function displayComments(comments) {
    const container = document.getElementById("comments")
    container.innerHTML = ""
    for (const comment of comments) {
        console.log(comment)
        container.innerHTML += `
                <div class="comment">
                    <span>&gt; ${escapeHtml(comment.creator)}</span>
                    <p>${escapeHtml(comment.text)}</p>
                </div>
                `
    }
}

/**
 * Post a comment by sending it to the server
 *
 * @param {string} text - The content of the comment
 * @param {string} page - The page to post the comments on.
 *                        This is usually the innerText of the "titleSeite" element.
 *
 * @return {Promise<Comment[]>} - Returns the new list of comments,
 *                                after the comment has been posted.
 * */
async function postComment (text, page) {
    return fetch("/api/comment", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, page })
    })
        .then(res => res.json())
}

/**
 * Escapes a string to be displayed into html, preventing XSS
 *
 * @param {string} unsafe - The unsafe string to escape
 *
 * @return {string} - The escaped string
 * */
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Fetch the comments on page-load and display them
getComments(document.getElementById("titelSeite").innerText)
    .then(comments => displayComments(comments))

// Register an event handler to catch the press of the post button
document.querySelector("#commentForm > #absenden").onclick = async event => {
    textElement = document.getElementById("commentText")
    titelElement = document.getElementById("titelSeite")

    if (textElement.value.length != 0) {
        const comments = await postComment(
            textElement.value, 
            titelElement.innerText
        )

        textElement.value = ""
        displayComments(comments)
    }
}
