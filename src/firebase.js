import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_fbase,
  authDomain: "netflix-clone-f856c.firebaseapp.com",
  projectId: "netflix-clone-f856c",
  storageBucket: "netflix-clone-f856c.firebasestorage.app",
  messagingSenderId: "901289008949",
  appId: "1:901289008949:web:42da5d54127767a598767c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
             uid: user.uid,
             name,
             authProvider: "local",
             email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const logout = () => {
    signOut(auth);
}

export {auth, db, login, signUp, logout};