import { collection } from 'firebase/firestore'
import { db } from '../firebase-config'

const postCollectionRef = collection(db, "posts")
const usersCollectionRef = collection(db, "users")

export {
  postCollectionRef, usersCollectionRef
}