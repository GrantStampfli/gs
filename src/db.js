import Firebase from 'firebase'
import FireConfig from './config'

const firebaseApp = Firebase.initializeApp(FireConfig)
const db = firebaseApp.database()
export default db
