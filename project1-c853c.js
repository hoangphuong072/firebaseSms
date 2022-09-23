const firebaseConfig = {
    apiKey: "AIzaSyDyqw_MBmJo02m3VEBe89JnjMJpC4FPOwE",
    authDomain: "project1-c853c.firebaseapp.com",
    projectId: "project1-c853c",
    storageBucket: "project1-c853c.appspot.com",
    messagingSenderId: "309053538994",
    appId: "1:309053538994:web:64e80c07e435f88a53ffab"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

var ui = new firebaseui.auth.AuthUI(auth);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const locate = urlParams.get('locate')

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: locate,
            recaptchaParameters: {
                type: 'image', // 'audio' or 'image'
                // type: 'audio', // 'audio' or 'image'
                size: 'invisible', // 'invisible' or 'compact' or 'normal'
                // size: 'normal', // 'invisible' or 'compact' or 'normal'
                badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
            },
        }
    ]
});




