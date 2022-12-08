export default function( { store, req }) {
    if (process.client){
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
   const isMobile = /mobile/i.test(userAgent)
   store.commit("setIsMobile", isMobile)
      }
    
  }