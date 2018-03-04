const host = 'localhost'

module.exports = {
  port: process.env.port || process.env.PORT || '3000',
  mongoUrl: process.env.MONGODB_URI || `mongodb://chater:123@ds255768.mlab.com:55768/chat`
}
