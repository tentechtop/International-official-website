<template>
  <div class="container">
    <div v-if="isShowMessage" class="toast-windows" :style="{'background-color':submitMessage.bgColor,'border':submitMessage.borderRadius}">
      <p>{{submitMessage.message}}</p>
    </div>
<!--    <nav-header :title="$t('customer.leaveMessage')"></nav-header>-->
    <div class="maintenance-container">
      <div class="maintenance-item-container">
        <h1 v-if="!isSendSuccess">{{ $t('customer.leaveMessage') }}</h1>

        <div v-if="!isSendSuccess" class="leave-message-container">
          <div class="line-container">
            <div class="message-item">
              <div class="message-title"><p>{{ $t('contact.placeholder.name') }}</p><p style="color: red">*</p></div>
              <div class="info-input">
                <input v-model="leaveMessage.name">
              </div>
            </div>
            <div class="message-item">
              <div class="message-title"><p>{{ $t('contact.placeholder.company') }}</p><p style="color: red"></p></div>
              <div class="info-input">
                <input v-model="leaveMessage.company">
              </div>
            </div>
          </div>
          <div class="line-container">
            <div class="message-item">
              <div class="message-title"><p>{{ $t('contact.placeholder.email') }}</p><p v-if=" !locale.startsWith('zh')" style="color: red">*</p></div>
              <div class="info-input" >
                <input v-model="leaveMessage.email">
              </div>
            </div>
            <div class="message-item">
              <div class="message-title"><p>{{ $t('contact.placeholder.telphone') }}</p><p v-if="locale.startsWith('zh')" style="color: red">*</p></div>
              <div class="info-input" >
                <input v-model="leaveMessage.phone">
              </div>
            </div>
          </div>
          <div class="line-container">
            <div class="message-item">
              <div class="message-title"><p>{{ $t('contact.label.questions') }}</p><p style="color: red">*</p></div>
              <div class="info-input" >
                <textarea v-model="leaveMessage.questions"  />
              </div>
            </div>
          </div>
          <div class="line-container">
            <div class="message-item">
              <div class="agree-policy" @click="isAgree = !isAgree">
                <div class="agree-button" :class="{'is-agree-button':isAgree}" ></div>
                <p>{{ $t('contact.agreePolicy') }}</p>
              </div>
            </div>
          </div>
          <div class="line-container">
            <div class="message-item">
                <div class="submit-button" :class="{'unable-button':!isAgree}"  @click="saveMessage">
                  <p>{{ $t('contact.label.submit') }}</p>
                </div>
            </div>
          </div>
        </div>

        <div v-if="isSendSuccess" class="leave-message-container">
          <img  src="https://file.kwunphi.com/kwunphi4/images/email/check.svg">
          <h1>{{ $t('customer.sendSuccess') }}</h1>
          <p>{{ $t('customer.thankYouSubscribe') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
const { t, locale } = useI18n()
import kwValidate from "assets/js/validate";
import {ref} from 'vue';

useHead({
  title: t('customer.leaveMessage'),
  meta: [
    {name: 'keywords', content: t('seo.pages.home.keywords') },
    {name: 'description', content: t('seo.pages.home.description') }
  ],
})

const isAgree = ref(false)
const isSaving = ref(false)
const isSendSuccess = ref(false)
const leaveMessage = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  questions: ''
})
const isShowMessage = ref(false)
const submitMessage = ref({
  message:"",
  bgColor:"",
  borderRadius:""
})

const rules = ref({
  name: {
    rules: [{
      required: true,
      errorMessage: t('rules.required')
    }],
    label: t('contact.label.name'),
    validateTrigger: 'submit'
  },
  company: {
    rules: [
    ],
    label: t('contact.label.company'),
    validateTrigger: 'submit'
  },
  email: {
    rules: [{
      required: !locale.value.startsWith('zh'),
      errorMessage: t('rules.required')
    },
      {
        format: "email",
        errorMessage: t('rules.email')
      }],
    label: t('contact.label.email'),
    validateTrigger: 'submit'
  },
  phone: {
    rules: [{
      required: locale.value.startsWith('zh'),
      errorMessage: t('rules.required')
    },
      {
        format: "telphone",
        errorMessage: t('rules.telphone')
      },
    ],
    label: t('contact.label.phone'),
    validateTrigger: 'submit'
  },
  questions: {
    rules: [{
      required: true,
      errorMessage: t('rules.required')
    }],
    label: t('contact.label.questions'),
    validateTrigger: 'submit'
  }
})

async function saveMessage() {
  if (isSaving.value || !isAgree.value) {
    return
  }
  const data = {
    name: leaveMessage.value.name.trim(),
    company: leaveMessage.value.company.trim(),
    email: leaveMessage.value.email.trim(),
    phone: leaveMessage.value.phone.trim(),
    questions: leaveMessage.value.questions.trim()
  }

  const res = kwValidate.validate(data, rules.value)
  if (!res.isOk) {
    submitMessage.value.message = res.errorMessage
    submitMessage.value.bgColor = "#FF3366"
    submitMessage.value.borderRadius = "1px solid #CC3333"
    isShowMessage.value = true
    setTimeout(()=>{
      isShowMessage.value = false
    },3000)
    return
  }
  isSaving.value = true
  isShowMessage.value = false

/*  https://api.kwunphi.com/kwunphi/api/leave-message/save*/

  const resp = await useFetch('https://api.kwunphi.com/kwunphi/api/leave-message/save',{
    method:"POST",
    body: {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      questions: data.questions
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  }).then((response) => {

    isSendSuccess.value = true

    isSaving.value = false
    leaveMessage.value.name = ""
    leaveMessage.value.company = ""
    leaveMessage.value.email = ""
    leaveMessage.value.phone = ""
    leaveMessage.value.questions = ""
    submitMessage.value.message = "Success"
    submitMessage.value.bgColor = "#FFF"
    submitMessage.value.borderRadius = "1px solid #99FF99"
    isShowMessage.value = true
    setTimeout(()=>{
      isShowMessage.value = false
      isAgree.value = false
      isSendSuccess.value = false
    },3000)

  }).catch((err) => {
    submitMessage.value.message = "Network error，Please try again"
    submitMessage.value.bgColor = "#FFF"
    submitMessage.value.borderRadius = "1px solid #CC3333"
    isShowMessage.value = true
    setTimeout(()=>{
      isShowMessage.value = false
      isSendSuccess.value = false
    },3000)
  })
}





function parseCookies(cookieString) {
  let cookies = {};
  cookieString.split(';').forEach(function(cookie) {
    let parts = cookie.split('=');
    let name = decodeURIComponent(parts[0].trim());
    cookies[name] = decodeURIComponent(parts[1]);
  });
  return cookies;
}
</script>

<style scoped>
.container{
  width: 100%;
}
.maintenance-container{
  padding: 96px 0 256px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.maintenance-item-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}
.maintenance-item-container>h1{
  text-align: center;
  margin-bottom: 46px;
  font-weight: 700;
  font-size: 38px;
}
.leave-message-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.leave-message-container>img{
  width: 100px;
}
.leave-message-container>h1{
  font-size: 44px;
}
.leave-message-container>p{
  font-size: 24px;
}
.line-container{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.message-item{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 8px 16px ;
}
.message-title{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.message-title>p{
  font-size: 18px;
  margin-right: 2px;
  margin-bottom:5px
}
.info-input{
  border: 1px solid rgba(0,0,0,0.25);
  padding: 2px;
}
.info-input>input{
  width: 360px;
  color: rgba(0,0,0,0.85);
  padding: 10px ;
  font-size: 18px;
  border: none;
  outline: none;
}

.info-input:hover{
  box-shadow: 0 0 2px 2px rgba(60,100,200,0.15);

}
.info-input>textarea{
  height: 120px;
  width: 758px;
  color: rgba(0,0,0,0.85);
  padding: 5px;
  font-size: 18px;
  border: none;
  outline: none;
}
.agree-policy{
  width: 758px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.agree-policy>p{
  cursor: pointer;
}
.agree-button{
  cursor: pointer;
  margin-right: 8px;
  width: 15px;
  height: 15px;
  border: 1px solid rgba(0,0,0,0.35);
}
.is-agree-button{
  border: 5px solid rgba(20,70,250);
}
.submit-button{
  cursor: pointer;
  padding: 5px 16px;
  min-width: 300px;
  min-height: 40px;
  background-color: #0d7ae1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.submit-button:hover{
  background-color: #0062be;
}
.submit-button>p{
  color: #fff;
}
.submit-button>img{
  width: 22px;
}
.unable-button{
  background-color: rgba(0,0,0,0.55);
}
.unable-button:hover{
  background-color: rgba(0,0,0,0.55);
}
.toast-windows{
  top: 180px;
  right: 0;
  width: 200px;
  height: 80px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media screen  and  (max-width: 824px){
  .line-container{
    flex-wrap: wrap;
  }

  .info-input>textarea{
    width: 100%;
    min-width: 360px;

  }

  .agree-policy{
    width: 100%;
  }
}

</style>
