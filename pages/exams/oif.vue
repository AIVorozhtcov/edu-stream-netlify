<template>
  <div class="flex flex-column">
    <div class="relative flex h-fit ignore-global-margins">   
        <div class="absolute flex flex-column" style="width:35%; margin-left:21%; margin-top:23%">           
          <div class="h-fit text-white font-bold" style="font-size: calc(3px + 1.150625vw); margin-bottom: 6%;" v-html="$t('exams.oif.image-text')"></div>
          <button type="button" class="btn rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1)" @click="$bvModal.show('modal-1')" >
            <div class="text-white button-text" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
        <img class="w-full h-3/4" :src="oifWelcome">            
    </div>
    
   
    <div class="flex flex-column w-full bg-white py-10">
      <div class="w-5/12 text-3xl py-5 font-bold" v-html="$t('exams.oif.subtitle')"></div>
      <div class="flex flex-row items-start">
        <div class="bg-slate-100 rounded h-fit w-fit flex flex-column">
          <div class="px-4 font-bold pb-3 pt-3" v-html="$t('exams.oif.exam-1')"></div>
          <div class="flex flex-row items-center">
            <input type="radio" id="13/12/2022" name="A2_time" value="13/12/2022">
            <label for="13/12/2022">13.12.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row">
            <input type="radio" id="14/12/2022" name="A2_time" value="14/12/2022">
            <label for="14/12/2022">14.12.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row">
            <input type="radio" id="15/12/2022" name="A2_time" value="15/12/2022">
            <label for="15/12/2022">15.12.2022; 13:00</label><br>
          </div>
          <p class="px-4 font-bold py-1">160€</p>
          <a 
          class="px-4 pt-3 pb-3"
          href="https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl"
          target="_blank">
            <div class="rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1)">
              <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
            </div>
          </a>
        </div>
        <div class="px-5 bg-white"></div>
        <div class="bg-slate-100 rounded h-fit w-fit flex flex-column">
          <div class="px-4 font-bold pb-3 pt-3" v-html="$t('exams.oif.exam-2')"></div>
          <div class="flex flex-row items-center">
            <input type="radio" id="21/11/2022" name="B1_time" value="21/11/2022">
            <label for="21/11/2022">21.11.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row items-center">
            <input type="radio" id="05/12/2022" name="B1_time" value="05/12/2022">
            <label for="05/12/2022">05.12.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row">
            <input type="radio" id="06/12/2022" name="B1_time" value="06/12/2022">
            <label for="06/12/2022">06.12.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row">
            <input type="radio" id="07/12/2022" name="B1_time" value="07/12/2022">
            <label for="07/12/2022">07.12.2022; 13:00</label><br>
          </div>
          <p class="px-4 font-bold py-1">160€</p>
          <a 
          class="px-4 pt-3 pb-3"
          href="https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl"
          target="_blank">
            <div class="rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1)">
              <div class="px-5 py-1 text-white" v-html="$t('exams.oif.register')"></div>
            </div>
          </a>
        </div>          
      </div>
    </div>
    <div class="flex ignore-global-margins" style="background-color:rgba(248, 248, 248, 1); padding-top:5vh;">
      <div class="flex flex-column global-margins">
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
    </div>
    <div class="h-fit relative ignore-global-margins">
      <nuxt-link class="w-full pb-3" style="font-size: calc(12px + 2.090625vw);" :to="localePath('/exams/osd')">
        <button class="z-40 btn absolute rounded-lg h-fit w-fit" style="margin-top:30vh; margin-left:21.75vw; background-color:rgba(255, 124, 51, 1)"  >
          <div class="text-white my-auto" style="font-size: calc(2px + 0.70625vw); padding-top:0.25vw; padding-right: 1.6vw; padding-left: 1.6vw" v-html="$t('exams.oif.register')"></div>
        </button>
      </nuxt-link>
      <img class="w-full relative" :src="overlappingStudentGroup" /> 
      
    </div>
    
  <div>
      
    <b-modal centered :busy="true" id="modal-1" :hide-header='true' :hide-footer='true' style="width:30%;">
        <template #modal-header class="">
          <header class=""></header>
          
        </template>
        <template #modal-footer>
          <div class="mx-auto w-full" style="margin-left:7%; margin-right:7%">
            
          </div>
        </template> 
        <div class="flex flex-column items-start" style="margin-left:7%; margin-right:7%">
          <div class="mx-auto font-bold text-xl" style="color:rgba(90, 90, 90, 1); margin-top:3vh; margin-bottom:3vh" v-html="$t('modals.title')"></div>
          <div class="pt-3 font-bold" v-html="$t('modals.name_title')"></div>
          <input @focusout="checkName" class="pl-3 bg-slate-200 w-full rounded-sm" type="text" style="height:9vh;" v-model="response_name" :placeholder="$t('modals.name')" required>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isNameWrong" v-html="$t('modals.required')"></div>
          <div class="pt-3 font-bold" style="margin-top:2vh" v-html="$t('modals.email_title')"></div>
          <input @focusout="checkEmail" type="email" class="pl-3 bg-slate-200 w-full rounded-sm" style="height:9vh;" v-model="response_email" :placeholder="$t('modals.email')" required>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isEmailWrong" v-html="$t('modals.required')"></div>
          <div class="pt-3 font-bold" style="margin-top:2vh" v-html="$t('modals.phone_title')"></div>
          <input @focusout="checkPhone" type="tel" class="pl-3 bg-slate-200 w-full rounded-sm" style="height:9vh;" v-model="response_phone" :placeholder="$t('modals.phone')" required>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isPhoneWrong" v-html="$t('modals.required')"></div>
          <div class="pt-3 flex flex-row">
              <input @animationend="checkTimes" id="mon_wed" type="checkbox" :value="$t('modals.mon_wed')" v-model="checkedTimes">
            <label for="mon_wed"><div class="pl-3" v-html="$t('modals.mon_wed')"></div></label>
          </div>
          <div class="pt-1 flex flex-row">
            <input @animationend="checkTimes" id="tue_thu" type="checkbox" :value="$t('modals.tue_thu')" v-model="checkedTimes">
            <label for="tue_thu"><div class="pl-3" v-html="$t('modals.tue_thu')"></div></label>
          </div>
          <div class="pt-1 flex flex-row">
            <input @animationend="checkTimes" id="any_day" type="checkbox" style="accent-color:rgba(67, 133, 245, 1) !important" :value="$t('modals.any_day')" v-model="checkedTimes">
            <label for="any_day"><div class="pl-3" v-html="$t('modals.any_day')"></div></label>
          </div>
          <div class="pt-3 font-bold text-red-600 text-xs" v-if="isTimesWrong" v-html="$t('modals.required')"></div>
          <div
            @click="checkAll" class="w-full flex">
              <div class="rounded-md mx-auto flex flex-column items-center h-fit w-full" style="background-color:rgba(67, 133, 245, 1); margin-top:3vh">
                <div class="mx-auto text-white py-2" v-html="$t('modals.send')"></div>
              </div>
          </div>
          <div class="w-full" style="color:rgba(71, 71, 71, 1); font-size:calc(0.75px + 0.60625vw);" v-html="$t('modals.agreement')"></div>

        </div>
      </b-modal>
  </div>   
    

  </div>
    
</template>

<style scoped>
  b-modal footer{
    visibility: hidden;
  }
  input[type="radio"] {
  margin-left: 1vw;
  margin-right: 0.7vw;
  margin-top: -5px;
  vertical-align: middle;
}
  .bg-slate-100{
    background-color: rgba(246, 246, 246, 1);
  }
  .bg-slate-200{
    background-color: rgba(244, 244, 244, 1);
  }
</style>
<script>
import oifWelcome from "~/assets/oif_welcome.png"
import oeifLogo from "~/assets/oeif-logo.png"
import overlappingStudentGroup from "~/assets/overlapping_student_group.png"
import ModalForm from '/components/ModalForm.vue'
import FAQAccordion from '/components/FAQAccordion.vue'

export default {
  data: function () {
    return {
      oifWelcome: oifWelcome,
      oeifLogo: oeifLogo,
      overlappingStudentGroup: overlappingStudentGroup,
      ModalForm:ModalForm,
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