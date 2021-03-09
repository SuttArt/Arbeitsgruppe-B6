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

server.use(express.static(__dirname + '/public'));

server.listen(8080);
