function setActivePhoto (imageURL){ 
    return { 
        type: "SET_ACTIVE_PHOTO", 
        value: imageUrl,  

    }; 
}; 

export {setActivePhoto}