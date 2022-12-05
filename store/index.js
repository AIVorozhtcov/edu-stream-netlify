export const state = () => ({
    is_mobile: null,
    utmSource:null,
    utmContent:null,
    utmCpc:null,
    utmCampaign:null,
    utmReferrer:null
  })

  export const mutations = {
    setIsMobile(state, result_is_mobile) {
      state.is_mobile = result_is_mobile
    },
    setUtmSource(state, cookieSource){
      state.utmSource = cookieSource.utm_source,
      state.utmContent = cookieSource.utm_content,
      state.utmCpc = cookieSource.utm_cpc,
      state.utmCampaign = cookieSource.utm_campaign,
      state.utmReferrer = cookieSource.utm_referrer
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