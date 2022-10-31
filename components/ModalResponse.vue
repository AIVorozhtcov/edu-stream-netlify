<!--
    <template>
    
    <div class="flex flex-column items-start">
        <div class="pt-4 font-bold" v-html="$t('modals.name_title')"></div>
        <input class="bg-slate-200 w-full rounded-sm py-1" type="text" v-model="response_name" :placeholder="$t('modals.name')" required>
        <div class="pt-4 font-bold" v-html="$t('modals.email_title')"></div>
        <input type="email" class="bg-slate-200 w-full rounded-sm py-1" v-model="response_email" :placeholder="$t('modals.email')" required>
        <div class="pt-4 font-bold" v-html="$t('modals.phone_title')"></div>
        <input type="tel" class="bg-slate-200 w-full rounded-sm py-1" v-model="response_phone" :placeholder="$t('modals.phone')" required>
        <div class="pt-4 flex flex-row">
            <input type="checkbox" :value="$t('modals.mon_wed')" v-model="checkedNames">
          <div class="pl-3" v-html="$t('modals.mon_wed')"></div>
        </div>
        <div class="pt-2 flex flex-row">
          <input type="checkbox" :value="$t('modals.tue_thu')" v-model="checkedNames">
          <div class="pl-3" v-html="$t('modals.tue_thu')"></div>
        </div>
        <div class="pt-2 flex flex-row">
          <input type="checkbox" :value="$t('modals.any_day')" v-model="checkedNames">
          <div class="pl-3" v-html="$t('modals.any_day')"></div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
           isNameWrong: boolean,
           isPhoneWrong: boolean,
           isEmailWrong: boolean,
           isTimesWrong: boolean
        },
        methods: {
            changeUsername() {
                this.$emit('changeUsername')
            }
        }
    }
</script>
-->