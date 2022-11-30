<template>
    <div class="">
      <div
        v-for="(question, index) in Questions"
        :key="question.questionTitle"
      >
          <div class="flex flex-row items-center justify-between cursor-pointer py-3 border-b-2"  style="border-bottom-color: rgba(67, 133, 245, 1);" @click="questionItemClick(index)">
          
              <p :class="[rpthis.getters['getIsMobile'] ? 'mobile-text-base-responsive' : '',]" >
                  {{ question.questionTitle }}
              </p>
              <b-icon icon="plus" />
  
      </div>
        <div :data-question-id="index" class="p-6 hidden"  style="background-color:rgba(248, 248, 248, 1);">
          <div :class="[rpthis.getters['getIsMobile'] ? 'mobile-text-base-responsive' : 'text-base-responsive', 'pt-3']" v-html="question.questionAnswer"></div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  
  </style>
  
  <script>
  export default {
    data () {
      return {
        rpthis: this.$store,
        Questions: [
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_1'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_1')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_2'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_2')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_3'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_3')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_4'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_4')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_5'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_5')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_6'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_6')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_7'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_7')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_8'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_8')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_9'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_9')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_10'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_10')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_11'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_11')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_12'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_12')
          },
          {
            questionTitle: this.$t('FAQ_OSD.titles.t_13'),
            questionAnswer: this.$t('FAQ_OSD.answers.a_13')
          }
        ]
      }
    },
    methods: {
      questionItemClick (questionIndex) {
        const questionInfoElement = document.querySelectorAll('[data-question-id="' + questionIndex + '"]')[0]
        if (questionInfoElement.classList.contains('block')) {
          questionInfoElement.classList.remove('block')
          questionInfoElement.classList.add('hidden')
        } else {
          questionInfoElement.classList.remove('hidden')
          questionInfoElement.classList.add('block')
        }
      }
    }
  }
  </script>
  