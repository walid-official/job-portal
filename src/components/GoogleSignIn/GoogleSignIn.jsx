import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSIgnIn = () => {
        signInWithGoogle()
        .then((result) => {
            console.log(result.user);
            navigate("/")
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
   

    return (
        <div>
            <div className="">
                <button type='button' onClick={handleGoogleSIgnIn} className='btn w-full bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] text-white  hover:bg-[#0f70c2]'>Continue With Google</button>
            </div>
        </div>
    );
};

export default GoogleSignIn;