var firebaseConfig = {
    apiKey: "AIzaSyC-pKtCM2VQKsxnO0zCU0m7OdNj7W0Zr7c",
    authDomain: "authfirebase-2533f.firebaseapp.com",
    databaseURL: "https://authfirebase-2533f.firebaseio.com",
    projectId: "authfirebase-2533f",
    storageBucket: "authfirebase-2533f.appspot.com",
    messagingSenderId: "537279639100",
    appId: "1:537279639100:web:8ed5796c0f784074a2dd39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  // update firestore settings
  db.settings({ timestampsInSnapshots: true });

window.onload=function () {
  render();
};
function render() {
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth() {
    //get the number
    var number=document.getElementById('phone').value;
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        alert("Message sent");
    }).catch(function (error) {
        alert(error.message);
    });
}
function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        alert("Successfully registered");
        var user=result.user;
        console.log(user);
    }).catch(function (error) {
        alert(error.message);
    });
}
const auth = firebase.auth();

//auth.languageCode = 'DE_de';

auth.useDeviceLanguage();

const resetPasswordFunction = () => {
    const email = mailField.value;

    auth.sendPasswordResetEmail(email)
    .then(() => {
        console.log('Password Reset Email Sent Successfully!');
    })
    .catch(error => {
        console.error(error);
    })
}


resetPassword.addEventListener('click', resetPasswordFunction);

     
  gs=()=>{
  base_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(base_provider).then((cred) => {
    window.location.replace("home.html");
    loginForm.reset();
  });


}
    fs=()=>{
    face_provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(face_provider).then((cred) => {
    window.location.replace("home.html");
    loginForm.reset();
  });

    }
/*
  fs=()=>{
    face_provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(face_provider).then(function(result){
            console.log(result)
            console.log("Su")
        }).catch(function(err){
            console.log(err)
            console.log("fa")
        })
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('guides').add({
    full_name: createForm.full_name.value,
    your_email: createForm.your_email.value,
    password: createForm.password.value,
    sub: createForm.sub.value,
    msg: createForm.msg.value
  }).then(() => {
    // close the create modal & reset form
   
    createForm.reset();
  })
});

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['your_email'].value;
  const password = signupForm['password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
        name: signupForm['full_name'].value,
        email: signupForm['your_email'].value,
        phone: signupForm['phone'].value,
    });
  }).then(() => {
    window.location.replace("home.html");
    signupForm.reset();
  });
});
*/
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['your_email'].value;
  const password = signupForm['password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
        name: signupForm['full_name'].value,
        email: signupForm['your_email'].value,
        phone: signupForm['phone'].value,
    });
  }).then(() => {
   
    console.log('Signed Up Successfully !');
      alert('Signed Up Successfully !');
      sendVerificationEmail();
  }).catch(error => {
      console.error(error);
  })
});
const sendVerificationEmail = () => {
    //Built in firebase function responsible for sending the verification email
    auth.currentUser.sendEmailVerification()
    .then(() => {
        console.log('Verification Email Sent Successfully !');
        alert('Verification Email Sent Successfully !');
        //redirecting the user to the profile page once everything is done correctly
        window.location.replace("home.html");
    })
    .catch(error => {
        console.error(error);
    })
}
/*
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
      console.log('Signed Up Successfully !');
      sendVerificationEmail();
  })
  .catch(error => {
      console.error(error);
  })
});
const sendVerificationEmail = () => {
    //Built in firebase function responsible for sending the verification email
    auth.currentUser.sendEmailVerification()
    .then(() => {
        console.log('Verification Email Sent Successfully !');
        //redirecting the user to the profile page once everything is done correctly
        window.location.assign('../profile');
    })
    .catch(error => {
        console.error(error);
    })
}*/

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    window.location.replace("home.html");
    loginForm.reset();
  });

});
