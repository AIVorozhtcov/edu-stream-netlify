export const state = () => ({
    is_mobile: null,
    utmSource:null,
    utmContent:null,
    utmCpc:null,
    utmCampaign:null,
    utmReferrer:null
  })

  export const mutations = {
    setIsMobile(state, is_mobile) {
      state.is_mobile = is_mobile
    },
    setUtmSource(state, cookieSource, cookieContent, cookieCpc, cookieCampaign, cookieReferrer){
      state.utmSource = cookieSource,
      state.utmContent = cookieContent,
      state.utmCpc = cookieCpc,
      state.utmCampaign = cookieCampaign,
      state.utmReferrer = cookieReferrer
    }
  }

export const getters = {
    getIsMobile(state) {
    //console.log(state.is_mobile);
      return state.is_mobile
    },
    getUtmSource(state){
      return state.utmSource
    },
    getUtmContent(state){
      return state.utmContent
    },
    getUtmCpc(state){
      return state.utmCpc
    },
    getUtmCampaign(state){
      return state.utmCampaign
    },
    getUtmReferrer(state){
      return state.utmReferrer
    }
  }