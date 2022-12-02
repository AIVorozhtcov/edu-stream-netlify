<template>
  <div class="flex flex-column">
    
    <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'relative flex h-fit']">   
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-content mobile-welcome-content-background w-full pl-3' : 'welcome-content', 'absolute flex flex-column']">       
          <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-welcome-text-responsive ml-5 font-bold' : 'welcome-text font-extrabold', 'h-fit text-white']" v-html="$t('exams.oif.image-text')"></div>
          <button type="button" :class="[this.$store.getters['getIsMobile'] ? 'mobile-button mobile-welcome-button-margin' : '', 'btn rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1);" @click="$bvModal.show('modal-42')" >
            <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-button-text' : 'button-text', 'text-white']" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
        <nuxt-img
        :class="this.$store.getters['getIsMobile'] ? 'mobile-welcome-image' : 'w-full h-3/4'"
        :src="this.$store.getters['getIsMobile'] ? '/oif_welcome.png' : '/oif_welcome.png'"
        format="webp"
  alt="Welcome to OIF exam!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>
        </div>
    
   
    <div class="flex flex-column w-full bg-white py-10">
      <div :class="[this.$store.getters['getIsMobile'] ? 'w-full mobile-text-xl-responsive' : 'w-5/12 text-3xl', 'py-5 font-bold']" v-html="$t('exams.oif.subtitle')"></div>
      <div :class="[this.$store.getters['getIsMobile'] ? 'flex flex-column mobile-label-text-responsive' : 'flex flex-row', 'items-start']">
        <div :class="[this.$store.getters['getIsMobile'] ? ' w-full mb-5' : 'h-fit w-fit', 'bg-slate-100 rounded flex flex-column']" >
          <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-label-text-responsive' : 'flex flex-row', 'px-4 font-bold pb-3 pt-3']" v-html="$t('exams.oif.exam-1')"></div>
          <div class="flex flex-row items-center">
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="13/12/2022" name="A2_time" value="13/12/2022">
            <label for="13/12/2022">13.12.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row">
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="14/12/2022" name="A2_time" value="14/12/2022">
            <label for="14/12/2022">14.12.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row">
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="15/12/2022" name="A2_time" value="15/12/2022">
            <label for="15/12/2022">15.12.2022; 13:00</label><br>
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive' : '', 'px-4 font-bold py-1']">160€</p>
          <a 
          class="px-4 pt-3 pb-3"
          href="https://buy.stripe.com/14keXO9WJ25pgzCeUU"
          target="_blank" style="text-decoration:none">
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-buy-exam-button mx-auto' : 'rounded-2xl h-fit w-fit']" style="background-color:rgba(255, 124, 51, 1)">
              <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive mx-auto py-2 text-center' : 'px-5 py-1', 'text-white' ]"  v-html="$t('exams.oif.register')"></div>
            </div>
          </a>
        </div>
        <div class="px-5 bg-white"></div>
        <div :class="[this.$store.getters['getIsMobile'] ? ' w-full mb-5' : 'h-fit w-fit', 'bg-slate-100 rounded flex flex-column']">
          <div :class="[this.$store.getters['getIsMobile'] ? 'mx-auto mobile-label-text-responsive' : 'flex flex-row ', 'px-4 font-bold pb-3 pt-3']" v-html="$t('exams.oif.exam-2')"></div>
          <div class="flex flex-row items-center">
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="21/11/2022" name="B1_time" value="21/11/2022">
            <label class="w-full" for="21/11/2022">21.11.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row items-center">
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="05/12/2022" name="B1_time" value="05/12/2022">
            <label for="05/12/2022">05.12.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row">
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="06/12/2022" name="B1_time" value="06/12/2022">
            <label for="06/12/2022">06.12.2022; 13:00</label><br>
          </div>
          <div class="flex flex-row">
            <input :class="[this.$store.getters['getIsMobile'] ? 'mobile-radio' : '']" type="radio" id="07/12/2022" name="B1_time" value="07/12/2022">
            <label for="07/12/2022">07.12.2022; 13:00</label><br>
          </div>
          <p :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive' : '', 'px-4 font-bold py-1']">160€</p>
          <a 
          class="px-4 pt-3 pb-3"
          href="https://buy.stripe.com/14keXO9WJ25pgzCeUU"
          target="_blank" style="text-decoration:none">
            <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-buy-exam-button mx-auto' : 'rounded-2xl h-fit w-fit']" class="rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1)">
              <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive mx-auto py-2 text-center' : 'px-5 py-1', 'text-white' ]"  v-html="$t('exams.oif.register')"></div>
            </div>
          </a>
        </div>          
      </div>
    </div>
    <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-ignore-global-margins' : 'ignore-global-margins', 'flex']" style="background-color:rgba(248, 248, 248, 1); padding-top:5vh;">
      <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-global-margins' : 'global-margins', 'flex flex-column']">
        <div :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'pb-3']" v-html="$t('exams.oif.FAQ-preview')"></div>
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
    <div :class="[this.$store.getters['getIsMobile'] ? 'hidden' : 'ignore-global-margins', 'h-fit relative ']" >
      <nuxt-link class="w-full pb-3" style="font-size: calc(12px + 2.090625vw);" :to="localePath('/exams/osd')">
        <button class="z-40 btn absolute rounded-lg h-fit w-fit" style="margin-top:30vh; margin-left:21.75vw; background-color:rgba(255, 124, 51, 1)"  >
          <div class="text-white my-auto" style="font-size: calc(2px + 0.70625vw); padding-top:0.25vw; padding-right: 1.6vw; padding-left: 1.6vw" v-html="$t('exams.oif.register')"></div>
        </button>
      </nuxt-link>
      <nuxt-img
        class="w-full relative"
        src="/overlapping_student_group.png"
        format="webp"
  alt="A happy student of our language school!"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>
      <!--<img class="w-full relative" src="/overlapping_student_group.png" /> -->
      
    </div>
    
    <div>
      <ModalForm2 index="modal-42" />
      
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
.mobile-radio{
  border: 0px;
  width: 5%;
  height: 4vh;
}
.mobile-label-text-responsive{
  font-size: calc(6px + 3.40625vw);
}
  .bg-slate-100{
    background-color: rgba(246, 246, 246, 1);
  }
  .bg-slate-200{
    background-color: rgba(244, 244, 244, 1);
  }
  .mobile-welcome-text-responsive{
    font-size: calc(3px + 2.60625vw);
  }
  .mobile-welcome-image{
    height:24vh;
    width:auto;
  }
  
  .mobile-buy-exam-button{
    
  border-radius: 63px;
  width:80vw;
  }
  .welcome-content{
    width:35%; margin-left:21%; margin-top:23%
}
</style>
<script>
/*
import oifWelcome from "/oif_welcome.png"
import oeifLogo from "/oeif-logo.png"
import overlappingStudentGroup from "/overlapping_student_group.png"
*/
import ModalForm2 from '/components/ModalForm2.vue'
import FAQAccordion from '/components/FAQAccordion.vue'

export default {
  data: function () {
    return {
      /*
      oifWelcome: oifWelcome,
      oeifLogo: oeifLogo,
      overlappingStudentGroup: overlappingStudentGroup,
      */
      ModalForm2: ModalForm2,
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