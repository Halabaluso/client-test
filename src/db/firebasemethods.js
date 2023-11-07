import { getDatabase, ref, push, set, equalTo,get , query, orderByChild, child } from "firebase/database";

async function loadData(querystring){
    let data = null
    const dbRef = ref(getDatabase());
    await get(child(dbRef, querystring)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log("Pasa :D")
        data = snapshot.val();
      } else {
        data = null
      }
    }).catch((error) => {
      data = null
    });

    return data
}

async function writeData(querystring, object){
    // Send data to the server
    let boolean = false
    const db = getDatabase();
    const postListRef = ref(db, querystring);
    const newPostRef = push(postListRef);
    await set(newPostRef, object)
    .then(() => {
        boolean = true
    })
    .catch(() => {
        boolean = false
    })
    return boolean
}

async function filterData(querystring, where, what){
        // Send data to the server
        const db = getDatabase()
        const topUserPostsRef = await get(query(ref(db, querystring ), orderByChild(where), equalTo(what)))
        return topUserPostsRef
}

export {
    writeData,
    filterData,
    loadData
}