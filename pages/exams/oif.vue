<template>
  <div class="flex flex-column">
    <div class="relative flex h-fit ignore-global-margins">   
        <div class="absolute flex flex-column h-2/4 w-6/12" style=" margin-left:21%; margin-top:23%">       
          <div class="h-fit text-white mb-4 text-base font-bold" v-html="$t('exams.oif.image-text')"></div>
          <button type="button" class="btn rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1)" @click="$bvModal.show('modal-1')" >
            <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
        <img class="h-3/4" :src="oifWelcome">            
    </div>
   
    <div class="flex flex-column w-full bg-white py-10">
      <div class="pl-5 w-5/12 text-3xl py-5 font-bold" v-html="$t('exams.oif.subtitle')"></div>
      <div class="pl-5 flex flex-row items-center">
        <div class="bg-slate-100 rounded h-fit w-fit flex flex-column">
          <div class="px-4 font-bold pb-3 pt-3" v-html="$t('exams.oif.exam-1')"></div>
          <p class="px-4 py-1">03.11.2022; 13:00</p>
          <p class="px-4 font-bold py-1">160€</p>
          <a 
          class="px-4 pt-3 pb-3"
          href="https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl"
          target="_blank">
            <div class="bg-orange-500 rounded-2xl h-fit w-fit">
              <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
            </div>
          </a>
        </div>
        <div class="px-5 bg-white"></div>
        <div class="bg-slate-100 rounded h-fit w-fit flex flex-column">
          <div class="px-4 font-bold pb-3 pt-3" v-html="$t('exams.oif.exam-2')"></div>
          <p class="px-4 py-1">21.11.2022; 13:00</p>
          <p class="px-4 font-bold py-1">160€</p>
          <a 
          class="px-4 pt-3 pb-3"
          href="https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl"
          target="_blank">
            <div class="bg-orange-500 rounded-2xl h-fit w-fit">
              <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
            </div>
          </a>
        </div>          
      </div>
    </div>
    <div class="flex flex-column bg-slate-100 pl-3 pt-5">
      <div class="pb-3" v-html="$t('exams.oif.FAQ-preview')"></div>
      <FAQAccordion />
      <!-- <b-button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</b-button>
      <p v-b-toggle="'collapse-2'"> also open</p>        
      <b-collapse class="container bg-slate-800" id="collapse-2">
        <p>wow</p>
      </b-collapse>
    <div class="h-fit flex relative flex-column">
      <div class="h-fit bg-slate-100"></div>
        <img class="h-1/12 w-1/12 hidden" :src="overlappingStudent" /> 
      <div class=" h-fitbg-blue-400">
        <img class="h-4/12 w-4/12 hidden" :src="overlappingStudent" /> 
        <img class="absolute left-2/4 top-0 h-4/12 w-4/12 z-40" :src="overlappingStudent" />               
      </div>
      
    </div>-->
    </div>
    <div class="h-fit flex relative flex-column bg-slate-100">
      <div class="h-fit bg-slate-100"></div>
        <img class="h-1/12 w-1/12 invisible" :src="overlappingStudent" /> 
      <div class=" h-fit bg-blue-400">
        <img class="h-3/12  /12 w-3/12 invisible" :src="overlappingStudent" /> 
        <img class="absolute left-2/4 top-0 h-4/12 w-4/12 z-40" :src="overlappingStudent" />               
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
  b-modal footer{
    visibility: hidden;
  }
</style>
<script>
import oifWelcome from "~/assets/oif_welcome.png"
import oeifLogo from "~/assets/oeif-logo.png"
import overlappingStudent from "~/assets/overlapping_student.png"
import ModalResponse from '/components/ModalResponse.vue'
import FAQAccordion from '/components/FAQAccordion.vue'

export default {
  data: function () {
    return {
      oifWelcome: oifWelcome,
      oeifLogo: oeifLogo,
      overlappingStudent: overlappingStudent,
      ModalResponse:ModalResponse,
      FAQAccordion: FAQAccordion,
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