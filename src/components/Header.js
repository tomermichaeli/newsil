import React, { useEffect, useState } from "react"
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
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch('http://localhost:5001')
    fetch('https://newsilserver.herokuapp.com/all')
      .then(response => response.json())
      .then(newData => {
        setData(newData)
      });
  }, []);

  // const [hideLightbox, setHideLightbox] = useState(true);
  const [hidden, setHidden] = useState(true);




  //<nav className={headerStyles.header__nav, headerStyles.test1} role="navigation" aria-label="main navigation">

  return (
    <div className={headerStyles.placeholder}>
      <div className={headerStyles.container}>
        <div className={headerStyles.header_row}>
          <div className={headerStyles.header_text}>
            <h1>
              <Link to="/">
                {props.title}
              </Link>
            </h1>
          </div>
          <div className={headerStyles.header_button}>
            <button className={headerStyles.btn} onClick={() => setHidden(s => !s)}>
              {!hidden ?
                <h4>
                  מבזקים
                </h4>
                :
                <h4>
                  מבזקים
                </h4>
              }
            </button>
          </div>
        </div>



        <div className={headerStyles.tweets}>
          <div className={headerStyles.web}>
            <ul>
              {data.slice(0, 25).map(item => (
                <li className={headerStyles.update_container}>
                  <div className={headerStyles.headline_old}><span className={headerStyles.headerspan}>{item["headline"]}</span></div>
                  <div className={headerStyles.time_old}>{item["time"].slice(11, 16) + " • " + item["time"].slice(8, 10) + "/" + item["time"].slice(5, 7) + "/" + item["time"].slice(0, 4)}</div>
                  <div className={headerStyles.body_old}>{item["body"]}</div>

                  {item["quote"] != null &&
                    <div className={headerStyles.quoted_container}>
                      <div>{item["quote_headline"]}</div>
                      <div className={headerStyles.time_quoted}>{item["quote_time"]}</div>
                      <div>{item["quote_body"]}</div>
                    </div>
                  }

                  <hr className={headerStyles.sep}></hr>
                </li>
              ))}
            </ul>
          </div>


          <div className={headerStyles.mobile}>
            {!hidden ?
              <ul>
                {data.slice(0, 3).map(item => (
                  <li className={headerStyles.update_container}>
                    <div className={headerStyles.headline_old}><span className={headerStyles.headerspan}>{item["headline"]}</span></div>
                    <div className={headerStyles.time_old}>{item["time"].slice(11, 16) + " • " + item["time"].slice(8, 10) + "/" + item["time"].slice(5, 7) + "/" + item["time"].slice(0, 4)}</div>
                    <div className={headerStyles.body_old}>{item["body"]}</div>

                    {item["quote"] != null &&
                      <div className={headerStyles.quoted_container}>
                        <div>{item["quote_headline"]}</div>
                        <div className={headerStyles.time_quoted}>{item["quote_time"]}</div>
                        <div>{item["quote_body"]}</div>
                      </div>
                    }

                    <hr className={headerStyles.sep}></hr>
                  </li>
                ))}
              </ul>
              : null}

          </div>
        </div>

        <Link to="/dbindex">
          <div className={headerStyles.link_to_updates_div}>
            לכל העדכונים {">>"}
          </div>
        </Link>

      </div>
    </div>
  )




  // return (
  //   <div className={headerStyles.main}>
  //     <header className={headerStyles.header}>
  //       <nav role="navigation" aria-label="main navigation">
  //         <div className={headerStyles.nav_links}>
  //           <Link to="/">
  //             <h1>{props.title}</h1>
  //           </Link>
  //         </div>
  //       </nav>

  //       <div className={headerStyles.tweets}>
  //         {/* <a
  //           aria-hidden="true"
  //           aria-label="twitter-timeline"
  //           className="twitter-timeline"
  //           data-lang="he"
  //           data-height="100%"
  //           href="https://twitter.com/thenewsil?ref_src=twsrc%5Etfw"
  //         /> */}
  //         <ul>
  //           {data.map(item => (
  //             // <li>{JSON.stringify(item)}</li>
  //             <>
  //               <li className={headerStyles.update_container}>
  //                 <div className={headerStyles.headline_old}><span className={headerStyles.headerspan}>{item["headline"]}</span></div>
  //                 <div className={headerStyles.time_old}>{item["time"].slice(11, 16) + " • " + item["time"].slice(8, 10) + "/" + item["time"].slice(5, 7) + "/" + item["time"].slice(0, 4)}</div>
  //                 <div className={headerStyles.body_old}>{item["body"]}</div>

  //                 {item["quote"] != null &&
  //                   <div className={headerStyles.quoted_container}>
  //                     <div>{item["quote_headline"]}</div>
  //                     <div className={headerStyles.time_quoted}>{item["quote_time"]}</div>
  //                     <div>{item["quote_body"]}</div></div>
  //                 }

  //               </li>
  //               <hr className={headerStyles.sep}></hr>
  //             </>
  //           ))}
  //         </ul>
  //       </div>
  //     </header>
  //   </div>
  // )
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



//<div className={headerStyles.navbar_container}>
  //<nav role="navigation" aria-label="main navigation">
    //{/* <span className={headerStyles.nav_links}> */}
  //  <h1>
    //  <Link to="/">
      //  {props.title}
      //</Link>
     // <button className={headerStyles.btn} onClick={() => setHidden(s => !s)}>
       // {!hidden ?
         // <b>&#128308;</b>
       //   :
         // <b>×</b>
       // }
     // </button>
   // </h1>
    //{/* </span> */}
  //</nav>
//</div>
