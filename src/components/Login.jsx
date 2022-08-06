import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import shareWithMeVideo from '../assets/sharewithme.mp4';
import logo from '../assets/logo.png';
import { client } from '../client.js';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const navigate = useNavigate();

  const credentialResponse = (response) => {
    const decoded = jwt_decode(response.credential);
    localStorage.setItem('user', JSON.stringify(decoded));

    const name = decoded.name;
    const googleId = decoded.sub;
    const imageUrl = decoded.picture;
    // console.log(JSON.stringify(decoded));
    // console.log(name, image, googleId);

    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareWithMeVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              onSuccess={credentialResponse}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
