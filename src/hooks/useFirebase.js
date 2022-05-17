import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState} from 'react';



initializeAuthentication();

const useFirebase =()=>{
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const signInUsingGoogle = () =>{
       return  signInWithPopup(auth, googleProvider)
               .then(result=>{
               setUser(result.user);
               })
               .finally(()=> setIsLoading(false));
    }

    const logOut = ()=>{
        setIsLoading(true);
        signOut(auth)
            .then(()=>{
               setUser({});
            })
            .finally(()=>{setIsLoading(false)});
    }

    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return()=> unsubscribed;
    }, [auth]);

    return{
        signInUsingGoogle,
        logOut,
        isLoading,
        user,
        setUser,
        setIsLoading
    }

}

export default useFirebase;