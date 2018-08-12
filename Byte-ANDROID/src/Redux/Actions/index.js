import thunkMiddleware from 'redux-thunk';
import { store } from "./../Store"
const firebase = require("firebase");
require("firebase/firestore");



function retrievePhotos (images){ 
    return { 
        type: "FETCH_IMAGES", 
        payload: images,  

    }; 
}; 

function watchPhotosData(){


    var db = firebase.firestore();
        
    return db.collection("Images").get()
        .then(snapshot => {
            var images = []; 
            snapshot.forEach(doc => {
                 
                 
                images.push(doc.data().storageName);
            });
        

            return images; 
        })
        .then((images) => { 

            store.dispatch(retrievePhotos(images));
        })
        .catch(error => { 
            console.log(error); 
        }) 
}

export {retrievePhotos, watchPhotosData}
