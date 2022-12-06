<template>
  <div>
    <b-modal  centered :busy="true" id="modal-oif" :hide-header='true' :hide-footer='true'  style="width:30%;">
          <template #modal-header class="">
            <header class=""></header>
            
          </template>
          <template #modal-footer>
            <div class="mx-auto w-full" style="margin-left:7%; margin-right:7%">
              
            </div>
          </template> 
          <form name="oifForm"
          @submit.prevent="handleFormSubmit"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'flex flex-column items-start']" style="margin-left:7%; margin-right:7%"
              >
              <input type="hidden" name="form-name" value="oifForm" >
              <input type="hidden" name="utmSource" :value="this.$store.getters['getUtmSource']" />
              <input type="hidden" name="utmContent" :value="this.$store.getters['getUtmContent']" />
              <input type="hidden" name="utmCpc" :value="this.$store.getters['getUtmCpc']" />
              <input type="hidden" name="utmCampaign" :value="this.$store.getters['getUtmCampaign']" />
              <input type="hidden" name="utmReferrer" :value="this.$store.getters['getUtmReferrer']" />
            <div class="mx-auto font-bold text-xl" style="color:rgba(90, 90, 90, 1); margin-top:3vh; margin-bottom:3vh" v-html="$t('modals.title')"></div>
            <div class="pt-3 font-bold" v-html="$t('modals.name_title')"></div>
            <input @focusout="checkName" type="text" name="name" class="pl-3 bg-slate-200 w-full rounded-sm" style="height:9vh;" v-model="response_name" :placeholder="$t('modals.name')" required>
            <div class="pt-3 font-bold text-red-600 text-xs" v-if="isNameWrong" v-html="$t('modals.required')"></div>
            <div class="pt-3 font-bold" style="margin-top:2vh" v-html="$t('modals.email_title')"></div>
            <input @focusout="checkEmail" type="email" name="email" class="pl-3 bg-slate-200 w-full rounded-sm" style="height:9vh;" v-model="response_email" :placeholder="$t('modals.email')" required>
            <div class="pt-3 font-bold text-red-600 text-xs" v-if="isEmailWrong" v-html="$t('modals.required')"></div>
            <div class="pt-3 font-bold" style="margin-top:2vh" v-html="$t('modals.phone_title')"></div>
            <input @focusout="checkPhone" type="tel" name="phone" class="pl-3 bg-slate-200 w-full rounded-sm" style="height:9vh;" v-model="response_phone" :placeholder="$t('modals.phone')" required>
            <div class="pt-3 font-bold text-red-600 text-xs" v-if="isPhoneWrong" v-html="$t('modals.required')"></div>
            <div
              @click="checkAll" class="w-full flex cursor-pointer">
                <button type="submit" name="submit" class="rounded-md mx-auto flex flex-column items-center h-fit w-full" style="background-color:rgba(67, 133, 245, 1); margin-top:3vh">
                  <div class="mx-auto text-white py-2" v-html="$t('modals.send')"></div>
                </button>
            </div>
            <div class="w-full" style="color:rgba(71, 71, 71, 1); font-size:calc(0.75px + 0.60625vw);" v-html="$t('modals.agreement')"></div>
          </form>
          <form name="oifForm"
          @submit.prevent="handleFormSubmit"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              :class="[!this.$store.getters['getIsMobile'] ? 'hidden' : 'flex flex-column items-start']" style="margin-left:7%; margin-right:7%"
              >
              <input type="hidden" name="form-name" value="oifForm" />
              <input type="hidden" name="utmSource" :value="this.$store.getters['getUtmSource']" />
              <input type="hidden" name="utmContent" :value="this.$store.getters['getUtmContent']" />
              <input type="hidden" name="utmCpc" :value="this.$store.getters['getUtmCpc']" />
              <input type="hidden" name="utmCampaign" :value="this.$store.getters['getUtmCampaign']" />
              <input type="hidden" name="utmReferrer" :value="this.$store.getters['getUtmReferrer']" />
            <div class="mx-auto font-bold mobile-text-base-responsive" style="color:rgba(90, 90, 90, 1); margin-top:1vh; margin-bottom:1vh" v-html="$t('modals.title')"></div>
            <div class="pt-3 mobile-text-base-responsive font-bold" v-html="$t('modals.name_title')"></div>
            <input @focusout="checkName" type="text" name="name" class="pl-3 bg-slate-200 w-full rounded-sm mobile-text-sm-responsive" style="height:3vh;" v-model="response_name" :placeholder="$t('modals.name')" required>
            <div class="pt-3 font-bold text-red-600 mobile-text-sm-responsive" v-if="isNameWrong" v-html="$t('modals.required')"></div>
            <div class="pt-3 mobile-text-base-responsive font-bold" style="margin-top:2vh" v-html="$t('modals.email_title')"></div>
            <input @focusout="checkEmail" type="email" name="email" class="pl-3 bg-slate-200 w-full rounded-sm mobile-text-sm-responsive" style="height:3vh;" v-model="response_email" :placeholder="$t('modals.email')" required>
            <div class="pt-3 font-bold text-red-600 mobile-text-sm-responsive" v-if="isEmailWrong" v-html="$t('modals.required')"></div>
            <div class="pt-3 mobile-text-base-responsive font-bold" style="margin-top:2vh" v-html="$t('modals.phone_title')"></div>
            <input @focusout="checkPhone" type="tel" name="phone" class="pl-3 bg-slate-200 w-full rounded-sm mobile-text-sm-responsive" style="height:3vh;" v-model="response_phone" :placeholder="$t('modals.phone')" required>
            <div class="pt-3 font-bold text-red-600 mobile-text-sm-responsive" v-if="isPhoneWrong" v-html="$t('modals.required')"></div>
            
            <div
              @click="checkAll" class="w-full flex cursor-pointer">
                <button type="submit" name="submit" class="rounded-md mx-auto flex flex-column items-center h-fit w-full" style="background-color:rgba(67, 133, 245, 1); margin-top:3vh">
                  <div class="mx-auto text-white py-2mobile-text-base-responsive" v-html="$t('modals.send')"></div>
                </button>
            </div>
            <div class="w-full" style="color:rgba(71, 71, 71, 1); font-size:calc(0.75px + 0.60625vw);" v-html="$t('modals.agreement')"></div>
  
          </form>
        </b-modal>
    </div>
  </template>
  
  <style>
  
  input::placeholder {
    opacity: 1;
    color:rgba(18, 18, 18, 1);
  }
  
  </style>
  
  <script>
    export default {
    data: function () {
      return {      
        showModal: false,
        isNameWrong: false,
        isPhoneWrong: false,
        isEmailWrong: false,
        isTimesWrong: false,
        response_name: "",
        response_email: null,
        response_phone: null,
        checkedTimes:[],
      }
    },
    methods:{   
      async handleFormSubmit ($event) {
        if (!this.isEmailWrong&!this.isPhoneWrong&!this.isNameWrong){
          const form = $event.target
          const body = new URLSearchParams(new FormData(form))
          try {
            const res = await fetch(form.action, { method: 'POST', body })
            if (res.ok) {
              $nuxt.$emit('bv::hide::modal','modal-1');
              window.open('https://buy.stripe.com/cN2dTKd8V9xR0AEfZ0', '_blank');
              
            } else {
              throw res
            }
          } catch (err) {
            console.error(err)
            // you don't have an error page but maybe you should add one
          }
        }
  },
      checkEmail(){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.response_email))
        {
          this.isEmailWrong = false;
        } else{
          this.isEmailWrong = true;
        } 
      },
      checkPhone(){
        if (/^(?=.*[0-9])[- +()0-9]+$/.test(this.response_phone)) 
        {
          this.isPhoneWrong = false;
        } else{
          this.isPhoneWrong = true;
        } 
      },
      checkName(){
        if (this.response_name == "") 
        {
          this.isNameWrong = true;
        } else{
          this.isNameWrong = false;
        } 
      },
      checkAll(){
        this.checkEmail();
        this.checkName();
        this.checkPhone();
        //if (!this.isNameWrong && !this.isEmailWrong && !this.isPhoneWrong && !this.isTimesWrong){
        //let routeData = this.$router.resolve({name: 'https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl', /*query: {data: "someData"}*/});
        //  window.open('https://checkout.stripe.com', '_blank');
        //}
        
      },
      checkAllNoTimes(){
        this.checkEmail();
        this.checkName();
        this.checkPhone();
        //if (!this.isNameWrong && !this.isEmailWrong && !this.isPhoneWrong){
        //let routeData = this.$router.resolve({name: 'https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl', /*query: {data: "someData"}*/});
        //  window.open('https://checkout.stripe.com', '_blank');
        //}
        
      },
    }
  
  }
  </script>