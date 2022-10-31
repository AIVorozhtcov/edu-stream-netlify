<template>
  <div class="flex flex-column">
    <div class="relative h-fit">   
      <img class="w-full h-3/4" :src="frontpageWelcome" />
      <div class="absolute right-1/4 bottom-0 w-30 rounded-lg bg-white"><img class="w-6/12 py-2 mx-auto h-1/12" :src="oeifLogo" /></div>      
      <div class="flex flex-column absolute top-2/4 left-0 w-5/12">
        <div class="h-fit text-white pb-4 text-2xl font-bold" v-html="$t('exams.oif.image-text')"></div>
        <button type="button" class="btn bg-white-500 rounded-2xl h-fit w-fit" @click="$bvModal.show('modal-1')" >
          <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
        </button>
      </div>
    </div>
    <div class="flex flex-row justify-evenly  h-3/4">
      <div class="flex pl-6 w-full flex-column py-10 items-start text-base text-white" style="background-color:#FF7C33;">
        <img class="left-1/2 h-2/12 w-2/12 pb-2 pr-3" :src="colorTabsIcon1">
        <div class="pr-6 pb-6" v-html="$t('main.color_tabs.t_1')"></div>
      </div>
      <div class="flex pl-6 w-full flex-column py-10 items-start text-base text-white" style="background-color:#96BDFF;">
        <img class="left-1/2 h-2/12 w-2/12 pb-2 pr-3" :src="colorTabsIcon2">
        <div class="pr-6 pb-6" v-html="$t('main.color_tabs.t_2')"></div>
      </div>
      <div class="flex pl-6 w-full flex-column py-10 items-start text-base text-white" style="background-color:#4385F5;">
        <img class="left-1/2 h-2/12 w-2/12 pb-2 pr-3" :src="colorTabsIcon3">
        <div class="pr-6 pb-6" v-html="$t('main.color_tabs.t_3')"></div>
      </div>
      <div class="flex pl-6 w-full flex-column py-10 items-start text-base text-white" style="background-color:#253984;">
        <img class="left-1/2 h-2/12 w-2/12 pb-2 pr-3" :src="colorTabsIcon4" />
        <div class="pr-6 pb-6" v-html="$t('main.color_tabs.t_4')"></div>
      </div>
      

    </div>
    <div class="flex flex-row py-16 pl-2 w-full items-start justify-between">
        <div class="flex flex-column pr-5 items-start">
          <h1 class="font-bold w-3/4 text-xl">{{$t('main.info_columns.titles.t_1')}}</h1>
          <p class="text-base">{{$t('main.info_columns.bodies.b_1')}}</p>
        </div>
        <div class="flex flex-column pr-5 items-start">
          <h1 class="font-bold w-1/2 text-xl">{{$t('main.info_columns.titles.t_2')}}</h1>
          <p class="text-base">{{$t('main.info_columns.bodies.b_2')}}</p>
        </div>
        <div class="flex flex-column pr-5 items-start">
          <h1 class="font-bold w-1/2 text-xl">{{$t('main.info_columns.titles.t_3')}}</h1>
          <p class="text-base">{{$t('main.info_columns.bodies.b_3')}}</p>
        </div>
    </div>
    <div class="border-y py-16 flex flex-column items-start justify-between w-full">
      <h1 class="text-2xl font-bold">{{$t('main.courses_and_exams.self')}}</h1>
      <div class="flex flex-row w-full justify-around h-fit items-start pt-8">
        <div class="flex w-5/12 h-full flex-column items-start" style="background-color:rgba(239, 248, 255, 1);">
          <h1 class="text-xl pl-2 font-bold pt-3">{{$t('main.courses_and_exams.courses.titles.t_1')}}</h1>
          <p class="text-base pl-2 pb-4">{{$t('main.courses_and_exams.courses.bodies.b_1')}}</p>
        </div>
        <div class="flex w-5/12 h-full flex-column items-start" style="background-color:rgba(239, 248, 255, 1);">
          <h1 class="text-xl pl-2 font-bold pt-3">{{$t('main.courses_and_exams.courses.titles.t_2')}}</h1>
          <p class="text-base pl-2 pb-4">{{$t('main.courses_and_exams.courses.bodies.b_2')}}</p>
        </div>
      </div>
      
    </div>
    <div>
      <b-modal centered busy=true id="modal-1" :title="$t('modals.title')">
        <template #modal-header>
          <div class="mx-auto font-bold" v-html="$t('modals.title')"></div>
        </template>
        <template #modal-footer>
          <div class="mx-auto w-full">
            <div
            @click="checkAll">
              <div class="bg-blue-700 rounded-xl mx-auto flex flex-column items-center h-fit w-full">
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

<script>

import frontpageWelcome from "~/assets/frontpage_welcome.png"
import colorTabsIcon1 from "~/assets/color_tabs_icon_1.svg"
import colorTabsIcon2 from "~/assets/color_tabs_icon_2.svg"
import colorTabsIcon3 from "~/assets/color_tabs_icon_3.svg"
import colorTabsIcon4 from "~/assets/color_tabs_icon_4.svg"
export default {
  data: function () {
    return {
      frontpageWelcome: frontpageWelcome,
      colorTabsIcon1:colorTabsIcon1,
      colorTabsIcon2: colorTabsIcon2,
      colorTabsIcon3: colorTabsIcon3,      
      colorTabsIcon4: colorTabsIcon4,
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
      
    }
  }

}
</script>

<style>
</style>