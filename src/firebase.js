
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDeJsJA2ZJ6k8wXFpSytkqSaeGxy973L58",
  authDomain: "netflix-clone-f3927.firebaseapp.com",
  projectId: "netflix-clone-f3927",
  storageBucket: "netflix-clone-f3927.appspot.com",
  messagingSenderId: "72336030745",
  appId: "1:72336030745:web:881e1d19dc3f747389fe88"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//user signup

const signup = async(name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email,password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid:user.uid,
            name,
            authprovider:"local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout= ()=>{
    signOut(auth)
}

export {auth, db, login, signup, logout};