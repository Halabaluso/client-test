import { getDatabase, ref, set } from "firebase/database";
import { getDatabase, ref, push, set } from "firebase/database";

async function writeUserData(where, id, object) {
    let boolean = false
  const db = getDatabase();
  await set(ref(db, where + '/' + id), object)
    .then(() => {
        boolean = true
    })
    .catch(() => {
        boolean = false
    })

    return boolean
}


async function writeData(query, object){
    // Send data to the server
    let boolean = false
    const db = getDatabase();
    const postListRef = ref(db, query);
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