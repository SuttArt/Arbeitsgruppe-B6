const express = require('express');
const server = express();
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require("uuid");

server.use(express.json());
server.use(cookieParser());

server.use((req, res, next) => {
    if (req.cookies.session !== undefined) {
        next();
    } else {
        res.cookie("session", uuidv4(), { maxAge: 99999999999 });
        next();
    }
});

let favoriten = {};

server.get("/api/favoriten", (req,res)=>{
        const id = req.cookies.session;
        if(favoriten[id]){
            res.send(favoriten[id])
        }else{
            favoriten[id] = [];
            res.sendStatus(200);
        }
})

server.post("/api/favoriten", (req,res)=>{
        const id = req.cookies.session;
        if(req.body.status===true){
            let statusExist=false;
            if(favoriten[id]){
                for (let i of favoriten[id]){
                    if(i.name===req.body.name){
                        statusExist=true;
                        break;
                    }
                }
            }

            if(!statusExist){
                let obj = {name:req.body.name, url:req.body.url};
                if(favoriten[id]){
                    favoriten[id].push(obj);
                }else{
                    favoriten[id] = [obj];
                }
            }
        }else{
             favoriten[id] = favoriten[id].filter(fav=>{
                return fav.name !== req.body.name
            })

        }
        res.sendStatus(200);
})

// comment storage
let comments = {};

// Endpoint for querying all comments on a page
server.post("/api/comments", (req,res)=>{
    res.send(comments[req.body.page] || JSON.stringify([]))
})


// Endpoint for posting a comment on a page
server.post("/api/comment", (req,res)=>{
    const { session } = req.cookies;
    const { text, page } = req.body

    // Check if the text-content of the comment was empty
    if (typeof text != "string" || text.length <= 0) {
        res.status(400).send("Der eingebene Kommentar war unzulässig.")
        return
    }

    // Create the comment list for the page if it does not exist
    if (!comments[page]) {
        comments[page] = []
    }

    // Add the comment to the page's list
    comments[page].push({
        creator: session,
        text
    })

    // Return the changed list
    res.send(comments[page])
})

server.use(express.static(__dirname + '/public'));

server.listen(8080);
