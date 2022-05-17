import React from 'react';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';


const Signin = () => {

    const {signInUsingGoogle} = useAuth();

    //location redirect
    const location =useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    //handle google sign-in function
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(()=>{
            history.push(redirect_uri);
        })
    }



    return (
        <div className="w-75 mx-auto m-5 shadow bg-white row g-4 ">
            <div className="col-md-12 col-sm-12 col-lg-12">
                <img src={logo} alt="logo"/>
                <h3><span className="text-warning">Tour</span><span className="text-success">Guide</span></h3>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12">
                <h3 className="text-secondary mt-3 mb-4 fw-bold">SignIn to <span className="text-warning">Tour</span><span className="text-success">Guide</span></h3>
                <div className="">
                   <button
                   onClick={ handleGoogleLogin }
                   className="m-1 btn btn-danger text-light  mx-auto"
                   ><i className="fab fa-google text-light mb-2"></i> Sign In with Google</button>
                </div>
                <div className="row mb-3 mt-3">
                    <div className="col-sm-6 offset-sm-6 mx-auto m-0">
                        <p className="text-secondary">New to <span className="text-warning fw-bold">Tour</span><span className="text-success fw-bold">Guide</span>?  <Link to="/register">Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;