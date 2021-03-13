const router = require('express').Router()
const StreamChat = require('stream-chat').StreamChat
const {STREAM_API_KEY, STREAM_API_SECRET} = require('../../secrets.js')

const serverClient = new StreamChat(STREAM_API_KEY, STREAM_API_SECRET)

router.get('/token', (req, res) => {
  const {username} = req.query
  if (username) {
    const token = serverClient.createToken(username)
    res.status(200).json({token, status: 'success'})
  } else {
    res.status(401).json({message: 'invalid request', status: 'error'})
  }
})
