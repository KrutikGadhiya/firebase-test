import { collection } from 'firebase/firestore'
import { db } from '../firebase-config'

const postCollectionRef = collection(db, "posts")

export {
  postCollectionRef
}