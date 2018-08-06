import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDPKzn0a4vC9vMRr5a2ifNcWBHD8Whtaws",
  authDomain: "hopebeat-ffc70.firebaseapp.com",
  databaseURL: "https://hopebeat-ffc70.firebaseio.com",
  projectId: "hopebeat-ffc70",
  storageBucket: "hopebeat-ffc70.appspot.com",
  messagingSenderId: "211869392123"
};

firebase.initializeApp(config);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url = 'http://localhost:3000/'

  constructor() { }

  provider = new firebase.auth.FacebookAuthProvider()

  loginWithFacebook(){
    firebase.auth().signInWithPopup(this.provider)
    .then(snap=>{
      localStorage.setItem('facebookToken', JSON.stringify(snap.credential.accessToken))
      localStorage.setItem('user', JSON.stringify(snap.user))
      this._sendTokenToBackend(snap)
    })
  }

  _sendTokenToBackend(snap){
    const token = snap.credential.accessToken
    fetch(this.url + 'facebook/login', {
      method:'post',
      headers:{
        'Authorization': `Bearer ${token}`
      }
    }) 
    .then(r=>{
      if(!r.ok) throw new Error()
      return r.json()
    })
    .then(res=>{
      console.log(res)
    }) 
  }

}
