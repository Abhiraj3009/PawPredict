const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const BREED_DETAILS = require("./breedsData.js"); 

// Initialize Firebase
initializeApp({
  credential: cert("./firebase_key.json"), // path to your JSON
});

const db = getFirestore();

async function uploadBreeds() {
  const collectionRef = db.collection("breeds"); 
  for (const [breedName, data] of Object.entries(BREED_DETAILS)) {
    await collectionRef.doc(breedName).set(data);
    console.log(`Uploaded ${breedName}`);
  }
}

uploadBreeds()
  .then(() => console.log("All breeds uploaded!"))
  .catch(console.error);
