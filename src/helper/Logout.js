/* eslint-disable prettier/prettier */
import {signOut} from 'firebase/auth';
import {firebase_auth} from '../../firebase';
import {Newcontext} from '../screens/Authiopn';
import {useContext} from 'react';

const Logout = () => {
  const {logout} = useContext(Newcontext);

  const auth = firebase_auth;

  signOut(auth)
    .then(() => {
      logout();
    })
    .catch(error => alert(error.message));
};

export default Logout;
