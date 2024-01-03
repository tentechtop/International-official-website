<template>
  <div class="page-content">
    <div class="contact">

      <div class="contact-content">
        <div class="us-content">
          <h1>{{ $t('solution.contactUs') }}</h1>
          <h5>{{ $t('solution.contactPhone') }}: 4008786861</h5>
          <h5>{{ $t('solution.email') }}: support@kwunphi.com</h5>
        </div>
        <div class="us-content">
          <h1>{{ $t('solution.BecomePartner') }}</h1>
          <nuxt-link :to="localePath('/contact')">{{ $t('learnMore') }} ></nuxt-link>
        </div>
      </div>


      <div class="contact-content">
        <div class="us-content">
          <h1>{{ $t('solution.HowToBuy') }}</h1>
          <nuxt-link :to="localePath('/contact')">{{ $t('learnMore') }} ></nuxt-link>
        </div>

        <div class="us-content">
          <h1>{{ $t('kwun.serviceAndSupport') }}</h1>
          <nuxt-link :to="localePath('/service')">{{ $t('learnMore') }} ></nuxt-link>
        </div>
      </div>



      <div class="us-content">
        <h1>{{ $t('solution.FollowUs') }}</h1>
        <h5>{{ $t('solution.LearnAboutIndustryApplications') }}</h5>
        <img style="width: 140px" src="https://file.kwunphi.com/kwunphi4/images/qrcode/gongzhonghao.jpg">
      </div>



    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.page-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact {
  padding-top: 60px;
  width: 1200px;
  height: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.contact-content {
  display: flex;
  flex-direction: column;
}

.us-content {
  margin-bottom: 30px;
}

.us-content>h1 {
  font-size: 22px;
  font-weight: 400;
}

.us-content>h5 {
  margin-top: 8px;
  font-weight: 300;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
}

.us-content>a {
  margin-top: 8px;
  font-weight: 300;
  font-size: 15px;
  color: rgba(2, 120, 255);
}
@media screen and (max-width: 1200px){

  .page-content{
    display: none;
  }
}
</style>
