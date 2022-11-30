<template>
    <div>
      <b-modal   id="modal-42" :hide-header='true' :hide-footer='true' style="width:30%;">
            
            <html><script>!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1043214",hash:"0169210fa4da87a7f1da45839ce824cd",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");</script><script id="amoforms_script_1043214" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1669808715"></script></html>
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