import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"

// const mongoose = require("mongoose");
// const uri = "mongodb+srv://test:test@cluster0.anx9a.mongodb.net/thenewsil?retryWrites=true&w=majority";
// try{
//   mongoose.connect(uri, {useNewUrlParser: true}, {useUnifiedTopology: true});
// }
// catch(error){
//   console.log('could not connect')
// }
// const DocSchema = {
//   headline: String,
//   body: String,
//   time: String
// }
// const Doc = mongoose.model("updates", DocSchema); //(collection, data schema)
// var updateCursor = Doc.find({}).sort({"_id": -1}).limit(4);

// console.log(updateCursor[0]);

// //


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://test:test@cluster0.anx9a.mongodb.net/thenewsil?retryWrites=true&w=majority";
// MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
// if (err) {
//   console.log('error connecting...')
// }
// else {
//   var collection = client.db('thenewsil').collection('updates');
//   var updateCursor = collection.find({}).sort({"_id": -1}).limit(4);
//   console.log(updateCursor[0]);
// }
// });




export default function Header(props) {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.header__nav} role="navigation" aria-label="main navigation">
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>

        <div className={headerStyles.tweets}>
          <a
            aria-hidden="true"
            aria-label="twitter-timeline"
            className="twitter-timeline"
            data-lang="he"
            data-height="100%"
            href="https://twitter.com/thenewsil?ref_src=twsrc%5Etfw"
          />
        </div>
      </nav>
    </header>
  )
}












/*





import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import { isConditionalExpression } from "typescript";






// function listitems() {
//   const list = ["a", "b", "c"];
//   for(let i = 0; i < list.length; i++){
//       listvalue = document.createElement("li");
//       listvalue.innerHTML = list[i];
//       listelement.appendChild(listvalue);
//   }
//   return listelement;
// }
// const listelement = document.createElement('ul', {class: 'listclass'}, listitems());


// document.getElementById("list").appendChild(listitems()); 





/*
MONGODB ATTEMPT 1


const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test@cluster0.anx9a.mongodb.net/new_db?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(collection)
  client.close();
});



window.onload =  document.getElementById("list").appendChild(listitems());
function listitems() {
  const listelement = document.createElement("ul");
  listelement.setAttribute("class", "listclass");
  const list = ["a", "b", "c"];

  for(let i = 0; i < list.length; i++){
      var listvalue = document.createElement("li");
      listvalue.innerHTML = list[i];
      listelement.appendChild(listvalue);
  }
  return listelement;
}

// window.onload = function(){
//   console.log("hi")
//   document.getElementById("list").appendChild(listitems());
// }






export default function Header(props) {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.header__nav} role="navigation" aria-label="main navigation">
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>

        


        <div className={headerStyles.tweets}>
        <div id="list">
        </div>
        
        </div>
      </nav>
    </header>
  )
}


*/