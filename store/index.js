export const state = () => ({
    is_mobile: null
  })

  export const mutations = {
    setIsMobile(state, is_mobile) {
      state.is_mobile = is_mobile
    }
  }

export const getters = {
    getIsMobile(state) {
    //console.log(state.is_mobile);
      return state.is_mobile
    }
  }