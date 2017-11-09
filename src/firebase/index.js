import Firebase from 'firebase'
import Config from './config'

const app = Firebase.initializeApp(Config)
const db = app.database()

// create a database references
const messages = db.ref('messages')
const settings = db.ref('settings')
const pages = db.ref('pages')
const posts = db.ref('posts')
const media = db.ref('media')
const users = db.ref('users')

export { db, messages, settings, pages, posts, media, users }
