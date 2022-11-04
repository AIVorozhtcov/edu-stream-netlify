<template>
  <div class="flex flex-column">
      <div class="relative h-fit">   
        <img class="w-full h-3/4" :src="germanCoursesWelcome">    
        <div class="absolute h-full flex flex-column -translate-y-2/4 left-0 w-5/12" style="">
          <div class="h-fit text-white mb-4 text-2xl font-bold" v-html="$t('courses.english.image_title')"></div>          
          <div class="h-fit text-white mb-4 text-base font-bold" v-html="$t('courses.english.image_subtitle')"></div>
          <button type="button" class="btn rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1)" @click="$bvModal.show('modal-1')" >
            <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
      </div>
      <div class="flex flex-row items-start justify-between w-full" style="box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.04); padding-left: 7%; padding-right: 7%;">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 5%;">
          <h1 class="text-xl font-bold pl-5">{{$t('courses.english.cards.1.title')}}</h1>
          <ul>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.1')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.2')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.3')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.4')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.5')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.6')"></li>
          </ul>
        </div>
        <div class="flex flex-column border-l-2" style="padding-top: 8%; padding-bottom: 3%; padding-left: 5%;">
          <p>4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p class="text-blue-600 font-bold text-3xl">{{$t('courses.english.cards.1.price_1')}}</p>
            <p class=" text-xs" style="color:rgba(155, 155, 155, 1);">{{$t('courses.english.cards.1.comment_price_1')}}</p>
            
          </div>
          <p  style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p class="text-blue-600 font-bold text-3xl">{{$t('courses.english.cards.1.price_2')}}</p>
            
          </div>
          <button type="button" class="btn rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-1')" >
            <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
      </div>
      <div>
      <b-modal centered :busy="true" id="modal-1" :title="$t('modals.title')">
        <template #modal-header>
          <div class="mx-auto font-bold" v-html="$t('modals.title')"></div>
        </template>
        <template #modal-footer>
          <div class="mx-auto w-full">
            <div
            @click="checkAll">
              <div class="rounded-xl mx-auto flex flex-column items-center h-fit w-full" style="background-color:rgba(67, 133, 245, 1)">
                <div class="mx-auto text-white py-2" v-html="$t('modals.send')"></div>
              </div>
            </div>
          </div>
        </template> 
        <div class="flex flex-column items-start">
          <div class="pt-3 font-bold" v-html="$t('modals.name_title')"></div>
          <input @focusout="checkName" class="bg-slate-200 w-full rounded-sm py-1" type="text" v-model="response_name" :placeholder="$t('modals.name')" required>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isNameWrong" v-html="$t('modals.required')"></div>
          <div class="pt-3 font-bold" v-html="$t('modals.email_title')"></div>
          <input @focusout="checkEmail" type="email" class="bg-slate-200 w-full rounded-sm py-1" v-model="response_email" :placeholder="$t('modals.email')" required>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isEmailWrong" v-html="$t('modals.required')"></div>
          <div class="pt-3 font-bold" v-html="$t('modals.phone_title')"></div>
          <input @focusout="checkPhone" type="tel" class="bg-slate-200 w-full rounded-sm py-1" v-model="response_phone" :placeholder="$t('modals.phone')" required>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isPhoneWrong" v-html="$t('modals.required')"></div>
          <div class="pt-3 flex flex-row">
              <input @animationend="checkTimes" type="checkbox" :value="$t('modals.mon_wed')" v-model="checkedTimes">
            <div class="pl-3" v-html="$t('modals.mon_wed')"></div>
          </div>
          <div class="pt-2 flex flex-row">
            <input @animationend="checkTimes" type="checkbox" :value="$t('modals.tue_thu')" v-model="checkedTimes">
            <div class="pl-3" v-html="$t('modals.tue_thu')"></div>
          </div>
          <div class="pt-2 flex flex-row">
            <input @animationend="checkTimes" type="checkbox" :value="$t('modals.any_day')" v-model="checkedTimes">
            <div class="pl-3" v-html="$t('modals.any_day')"></div>
          </div>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isTimesWrong" v-html="$t('modals.required')"></div>

        </div>
      </b-modal>
    </div>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
  }

  ul li:before {
    content: '✓';
  }
</style>
<script>

import germanCoursesWelcome from "~/assets/german_courses_welcome.png"

export default {
  data: function () {
    return {
      germanCoursesWelcome: germanCoursesWelcome,
      showModal: false,
      isNameWrong: false,
      isPhoneWrong: false,
      isEmailWrong: false,
      isTimesWrong: false,
      checkedTimes:[],
      response_name: "",
      response_email: null,
      response_phone: null
    
    }
  },
  methods:{
    checkEmail(){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.response_email))
      {
        this.isEmailWrong = false;
      } else{
        this.isEmailWrong = true;
      } 
    },
    checkPhone(){
      if (/^\+?\d*$/.test(this.response_phone)) 
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
    checkTimes(){
      if (this.checkedTimes.length == 0) 
      {
        this.isTimesWrong = true;
      } else{
        this.isTimesWrong = false;
      } 
    },
    checkAll(){
      this.checkEmail();
      this.checkName();
      this.checkTimes();
      this.checkPhone();
      if (!this.isNameWrong && !this.isEmailWrong && !this.isPhoneWrong && !this.isTimesWrong){
      let routeData = this.$router.resolve({name: 'https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl', /*query: {data: "someData"}*/});
        window.open('https://checkout.stripe.com', '_blank');
      }
      
    },
  }
}
</script>