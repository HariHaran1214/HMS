import { auth } from "../config/firebase.config";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";

function nav(link){
    const navigate = useNavigate()
    return navigate(link);
}

export const login = async(email,password) => {
    await signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user))
        console.log(user)
    })
    .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
}

export const logout = async() => {
    await signOut(auth)
    .then(() => {
        localStorage.removeItem('user')
    }).catch((error) => {
        console.log(error)
    });
}

export const checkLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user) {
        return user
    } else {
        return false
    }
}

export const checkWallet = () => {
    const account = JSON.parse(localStorage.getItem('account'))
    if(account) {
        return account
    } else {
        return false
    }
}

export const createAdmin = (email,password) => {
    try {
        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            alert("Admin added succesfully")
            window.location.reload()
        })
    } catch (error) {
        console.log(error)
    }
}