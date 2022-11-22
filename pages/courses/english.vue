<template>
  <div class="flex flex-column pb-5">
      <div class="relative flex h-fit ignore-global-margins">   
        <div class="absolute flex flex-column" style=" margin-left:21%; margin-top:20%">         
          <div class="h-fit text-white mb-4 font-extrabold" style="font-size: calc(6px + 2.450625vw);" v-html="$t('courses.english.image_title')"></div>
          <div class="h-fit text-white mb-4 font-bold" style="font-size: calc(2px + 1.150625vw);" v-html="$t('courses.english.image_subtitle')"></div>
          <button type="button" class="btn rounded-2xl h-fit w-fit" style="background-color:rgba(255, 124, 51, 1)" @click="$bvModal.show('modal-1')" >
            <div class="text-white button-text" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
        <img class="w-full h-3/4" :src="englishCoursesWelcome">            
      </div>      
      <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 3%;">
          <div class="flex flex-row items-center">          
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive' : '', 'font-bold pl-5']">{{$t('courses.english.cards.1.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.english.cards.1.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.english.cards.1.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.1')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.2')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.3')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.4')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.5')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.1.6')"></li>
          </ul>
        </div>
        <div class="flex flex-column h-full border-l-2 card-right-column">
          <p class="week-number">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p class="text-blue-600 font-bold price-tag">{{$t('courses.english.cards.1.price_1')}}</p>
            <p class="price-tag-comment">{{$t('courses.english.cards.1.comment_price_1')}}</p>
            
          </div>
          <p class="week-number" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p class="text-blue-600 font-bold price-tag">{{$t('courses.english.cards.1.price_2')}}</p>
            
          </div>
          <button type="button" class="btn rounded-lg h-fit w-fit" style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-1')" >
            <div class="button-text text-white" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
      </div>
      <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 5%;">
          <div class="flex flex-row items-center">
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive' : '', 'font-bold pl-5']">{{$t('courses.english.cards.2.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.english.cards.2.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.english.cards.2.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.2.1')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.2.2')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.2.3')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.2.4')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.2.5')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.2.6')"></li>
          </ul>
        </div>
        <div class="flex flex-column h-full border-l-2 card-right-column">
          <p class="week-number">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p class="text-blue-600 font-extrabold text-4xl price-tag">{{$t('courses.english.cards.2.price_1')}}</p>
            <p class=" text-xs price-tag-comment" style="color:rgba(155, 155, 155, 1);">{{$t('courses.english.cards.2.comment_price_1')}}</p>
            
          </div>
          <p class="week-number" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p class="text-blue-600 font-bold price-tag">{{$t('courses.english.cards.2.price_2')}}</p>
            
          </div>
          <button type="button" class="btn rounded-lg h-fit w-fit" style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-1')" >
            <div class="button-text text-white" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
      </div>
      <div class="flex flex-row mx-auto items-start justify-between w-full course-card">
        <div class="flex flex-column justify-around" style="padding-top:5%; padding-bottom: 5%;">
          <div class="flex flex-row items-center">
            <h1 :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-xl-responsive' : '', 'font-bold pl-5']">{{$t('courses.english.cards.3.title')}}</h1>
            <div class="offline-tag" v-if="$t('courses.english.cards.3.is_offline')=='true'">Offline</div>
            <div class="online-tag" v-if="$t('courses.english.cards.3.is_online')=='true'">Online</div>
          </div>
          <ul :class="[this.$store.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '', 'font-bold pl-5']">
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.3.1')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.3.2')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.3.3')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.3.4')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.3.5')"></li>
            <li class="pl-5 py-1" v-html="$t('courses.english.cards.3.6')"></li>
          </ul>
        </div>
        <div class="flex flex-column h-full border-l-2 card-right-column">
          <p class="week-number">4 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p class="text-blue-600 font-bold price-tag">{{$t('courses.english.cards.3.price_1')}}</p>
            <p class="price-tag-comment">{{$t('courses.english.cards.3.comment_price_1')}}</p>
            
          </div>
          <p class="week-number" style="padding-top:10%">8 {{$t('courses.weeks')}}</p>
          <div class="flex flex-row items-end">
            <p class="text-blue-600 font-bold price-tag">{{$t('courses.english.cards.2.price_2')}}</p>
            
          </div>
          <button type="button" class="btn rounded-lg h-fit w-fit" style="background-color:rgba(255, 124, 51, 1); margin-top:10%;" @click="$bvModal.show('modal-1')" >
            <div class="button-text text-white" v-html="$t('exams.oif.register')"></div>
          </button>
        </div>
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
.bg-slate-200{
    background-color: rgba(244, 244, 244, 1);
  }

  
  ul {
    list-style: none;
  }

  ul li:before {
    content: '✓ ';
  }
</style>
<script>

import englishCoursesWelcome from "~/assets/english_courses_welcome.png"

export default {
  data: function () {
    return {
      englishCoursesWelcome: englishCoursesWelcome,
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
      
    isMobile() {
      if (process.browser){
        if (screen.width <= 760) {
          this.$store.commit("setIsMobile", true)
        } else {
          this.$store.commit("setIsMobile", false)
        }
      }
      
  },
  },
  
  created(){
    this.isMobile()
  } 
}
</script>