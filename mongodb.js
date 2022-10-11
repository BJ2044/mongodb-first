import { MongoClient,ObjectId } from 'mongodb'

import { uri } from "./credentials.js"

const client = new MongoClient(uri)

const db = client.db("sample_mflix")
const moviesCollection = db.collection("movies")

// console.log(await moviesCollection.findOne({}))
// let query = {title: {$regex: /rocky/i}} //search for "terminator" anywhere in the title and ignore case
// let movieArray = await moviesCollection
// .find(query)
// //.limit(3)
// .toArray()

// for (let i=0; i < movieArray.length; i++) {
//     console.log(movieArray[i].title)
// }

// let firstMovie = movieArray[0]
// console.log(firstMovie.title)

//console.log(`there are ${movieArray.length} of these movies`)


// add a new movie
const newMovie = {
    title: "The Boca Code story",
    rated: "R",
    genres: ["Comedy"],
    releaseDate: "2022/12/16"
}

//const results = await moviesCollection.insertOne(newMovie)
//console.log("Results of insert",results)

const updateQuery = { _id: new ObjectId("6345cd043d712351fd379245") }
const update = { $set: {title: "The New Boca Code Story"}}
const results = await moviesCollection.findOneAndUpdate(updateQuery,update
);
console.log(results)

// db.close()