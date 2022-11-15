<template>
<div>
    <b-modal centered :busy="true" id="modal-1" :hide-header='true' :hide-footer='true' style="width:30%;">
      <template #modal-header class="">
        <header class=""></header>
        
      </template>
      <template #modal-footer>
        <div class="mx-auto w-full" style="margin-left:7%; margin-right:7%">
          
        </div>
      </template> 
      <div class="flex flex-column items-start text-black" style="margin-left:7%; margin-right:7%">
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
            <input @animationend="checkTimes" type="checkbox" :value="$t('modals.mon_wed')" v-model="checkedTimes">
          <div class="pl-3" v-html="$t('modals.mon_wed')"></div>
        </div>
        <div class="pt-1 flex flex-row">
          <input @animationend="checkTimes" type="checkbox" :value="$t('modals.tue_thu')" v-model="checkedTimes">
          <div class="pl-3" v-html="$t('modals.tue_thu')"></div>
        </div>
        <div class="pt-1 flex flex-row">
          <input @animationend="checkTimes" type="checkbox" style="accent-color:rgba(67, 133, 245, 1) !important" :value="$t('modals.any_day')" v-model="checkedTimes">
          <div class="pl-3" v-html="$t('modals.any_day')"></div>
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
    checkAllNoTimes(){
      this.checkEmail();
      this.checkName();
      this.checkPhone();
      if (!this.isNameWrong && !this.isEmailWrong && !this.isPhoneWrong){
      let routeData = this.$router.resolve({name: 'https://checkout.stripe.com/c/pay/cs_live_a18PAktLRCExf4QbCUahRYb2YzgjJYrWSZhmctnue81qkIPRJWEwkivg4y#fidkdWxOYHwnPyd1blppbHNgWjA0TnZVUn1AV19LRjZhVUtWf0JsbTBiV2g9VWxuZmo1MjRqXHNsd2pOalVCN0Rhan1mVzZ2VjVfREFjQ1Z3V20wQT1GfTZUcjdTNjJSajZ1XXFpT2xuQVFANTVGa3ZjbXB1aicpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqYGFwKHZxd2BkaCtkcSd4JSUl', /*query: {data: "someData"}*/});
        window.open('https://checkout.stripe.com', '_blank');
      }
      
    }
  }

}
</script>