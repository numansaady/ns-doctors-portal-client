import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl text-center font-bold">Login</h2>
          
          <div class="divider">OR</div>
          <button 
          onClick={()=> signInWithGoogle()}
          class="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
