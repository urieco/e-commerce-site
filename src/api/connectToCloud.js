import firebaseApp from "../firebaseInit.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";


const db = getFirestore(firebaseApp);

const addDataToCloud = (data, collectionName) => {
  try {
    setDoc(doc(collection(db, collectionName), data.username), data, { merge: true });
  } catch (e) {
    console.log("Unexpected Error while adding document: ", e);
  }
}


const login = async (loginData, errorFunc, setAccountFunc) => {
  try {
    const userRef = doc(db, "users", loginData.username)
    const querySnapshot = await getDoc(userRef);

    if (!querySnapshot.exists())
      return errorFunc("Username doesn't exist!");

    const userData = querySnapshot.data();
    if (loginData.password !== userData.password)
      return errorFunc("Password doesn't match!");
    setAccountFunc(userData.username);
    setTimeout(() => window.location.href = "/", 500);

  } catch (e) {
    console.error("Unexpected Error while querying for user data", e)
  }
}


export { addDataToCloud, login };