<template>
  <div class="container">
    <div class="course-container">
      <h1>{{$t(courseInfo.title)}}</h1>
      <div class="course-detail-container">
        <div class="course-video-play-container">
          <div class="video-play-container">
<!--            <div v-if="courseInfo.barrageSwitch" class="barrage-container">
              <div class="barrage-move-container">
                <div class="barrage-content" ref="barrageContent" :style="{ transform: 'translateX(' + (scrollPosition) + 'px)'}">
                  <div v-for="(item,index) in courseInfo.barrage" class="barrage-item">
                    <h1 :style="{ marginTop: item.marginTop }">{{item.name}}</h1>
                  </div>
                </div>
              </div>
            </div>-->
            <img v-if="!courseInfo.playing" :src="courseInfo.previewImgUrl" @click="courseInfo.playing=true">
            <video ref="videoPlayer" v-if="courseInfo.playing"  :autoplay="courseInfo.playing"  controls  :src="courseInfo.videoUrl"
                   @change="getVideoChang" @ended="onVideoEnded(courseInfo)"></video>
          </div>
          <div class="send-barrage-container">
            <h1>{{ $t('course.detail.AlreadyLoaded') }} {{courseInfo.barrage.length}} {{ $t('course.detail.barrageNumber') }} </h1>
            <img  :src="courseInfo.barrageSwitch? 'https://file.kwunphi.com/kwunphi4/images/commons/danmu.svg':'https://file.kwunphi.com/kwunphi4/images/commons/danmu1.svg'" @click="courseInfo.barrageSwitch=!courseInfo.barrageSwitch">
            <div class="barrage-input-container">
                <input type="text"  placeholder="" v-model="inputQuestion"  @keyup.enter="SendBarrage">
<!--              <img v-if="inputQuestion!==null&&inputQuestion!==''"  src="https://file.kwunphi.com/kwunphi4/images/commons/chuquinput.svg" @click="inputQuestion=''">-->
              <div class="search-button" @click="SendBarrage">{{ $t('course.detail.SendBarrage') }} </div>
            </div>
          </div>
<!--          <div class="follow-forward-container">
            <div class="follow-forward-item">
              <img @mouseover="mouseoverLike=true"
                   @mouseleave="mouseoverLike=false"
                   @click="isLike=!isLike;isLike? courseInfo.likesNum+=1:courseInfo.likesNum-=1"
                   :src="isLike?'/images/20230711/like1.svg':'https://file.kwunphi.com/kwunphi4/images/commons/like.svg'">
              <h1>{{courseInfo.likesNum}}</h1>
            </div>
            <div class="follow-forward-item">
              <img @mouseover="mouseoverCoin=true"
                   @mouseleave="mouseoverCoin=false"
                   @click="isCoin=!isCoin;isCoin? courseInfo.coinNum+=1:courseInfo.coinNum-=1"
                   :src="isCoin?'/images/20230711/coin1.svg':'/images/20230711/coin.svg'">
              <h1>{{courseInfo.coinNum}}</h1>
            </div>
            <div class="follow-forward-item">
              <img @mouseover="mouseoverCollection=true"
                   @mouseleave="mouseoverCollection=false"
                   @click="isCollection=!isCollection;isCollection? courseInfo.collection+=1:courseInfo.collection-=1"
                   :src="isCollection?'/images/20230711/shocang1.svg':'/images/20230711/shocang.svg'">
              <h1>{{courseInfo.collection}}</h1>
            </div>
            <div class="follow-forward-item">
              <img @mouseover="mouseoverForward=true"
                   @mouseleave="mouseoverForward=false"
                   @click="isForward=!isForward;isForward? courseInfo.forward+=1:courseInfo.forward-=1"
                   :src="isForward?'/images/20230711/forward1.svg':'/images/20230711/forward.svg'">
              <h1>{{courseInfo.forward}}</h1>
              <div  :style="mouseoverForward?'display: block;':'display: none;'" class="forward-card"
                    @mouseover="mouseoverForward=true"
                    @mouseleave="mouseoverForward=false">
                <div class="course-info-card">
                  <img :src="courseInfo.previewImgUrl">
                </div>
                <div class="forward-info-card">
                  <div v-for="(item,index) in forwardinfocard" class="ss-card" @click="share(item,index)">
                    <img :src="item.imgUrl">
                    <h1>{{item.title}}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>-->
          <div class="split-line"></div>
          <div class="course-desc">
            <p>{{$t(courseInfo.desc)}}</p>
          </div>
          <div class="course-tag-container">
            <div v-for="(tag,index) in courseInfo.tag" class="tag-item">
              <h5>{{$t(tag.name)}}</h5>
            </div>
          </div>
          <div class="split-line"></div>
          <div class="comment-header-title-container" style="display:none;">
            <div class="switch-comment-course-button" @click="isSelectComment=!isSelectComment">
              <p>{{ isSelectComment? $t('course.detail.comments'):$t('course.detail.RecommendedVideos') }}</p>
            </div>
            <h5 v-if="isSelectComment" >{{courseInfo.commentsNumber}}</h5>
            <div v-if="isSelectComment"  class="comment-sort-container">
              <h4 v-for="(menu,index) in menuList" @click="getMenu(menu,index)" :style="{color:menu.isSelected? '#000':''}">{{menu.name}}</h4>
            </div>

          </div>
          <div v-if="isSelectComment" class="comment-detail-container">
            <div class="comment-input-container">
              <img :src="userInfo.avatar">
              <div class="input-comment-container">
                <input type="text" :placeholder="$t('course.detail.PleaseLogInFirst')" v-model="inputCommit" @keyup.enter="postComment">
                <img v-if="inputCommit!==null&&inputCommit!==''" src="https://file.kwunphi.com/kwunphi4/images/commons/chuquinput.svg" @click="inputCommit=''">
                <div class="post-comment-button" @click="postComment" >{{ $t('course.detail.publish') }}</div>
              </div>
            </div>
            <div v-for="(comment,index) in courseInfo.comments" class="comment-item-detail">
              <img :src="comment.avatar">
              <div class="comment-detail-info-container">
                <h4>{{comment.userName}}</h4>
                <p> {{comment.commentContent}}</p>
                <div class="comment-like-tag-container">
                  <h5>{{comment.date}}</h5>
                  <img src="https://file.kwunphi.com/kwunphi4/images/commons/like.svg" @click="comment.likeNum+=1">
                  <h5>{{comment.likeNum}}</h5>
                  <img src="https://file.kwunphi.com/kwunphi4/images/commons/like.svg" style="transform: rotate(90deg)"  @click="comment.likeNum-=1">
                </div>
                <div class="watch-sub-comment" @click="comment.expandReplies=!comment.expandReplies">
                  <p>共有{{comment.subComments.length}}{{ $t('course.detail.NumberOfResponses') }}</p>
                  <h4 v-if="comment.subComments.length!==0">{{ $t('course.detail.ClickToView') }}</h4>
                </div>
                <div class="sub-cpmment-container">
                  <div v-for="(sub,subIndex) in comment.subComments" class="sub-comment-item">
                    <img :src="sub.avatar">
                    <div class="sub-comment-detail-container">
                      <h4>{{sub.userName}}</h4>
                      <p>{{sub.isTop}} {{sub.commentContent}}</p>
                      <div class="sub-comment-tag-container">
                        <h5>{{sub.date}}</h5>
                        <img src="https://file.kwunphi.com/kwunphi4/images/commons/like.svg" @click="sub.likeNum+=1">
                        <h5>{{sub.likeNum}}</h5>
                        <img style="transform: rotate(90deg);cursor: pointer" src="https://file.kwunphi.com/kwunphi4/images/commons/like.svg" @click="sub.likeNum-=1">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!isSelectComment" class="select-course-table" style="display:none;">
            <div v-for="(next,index) in courseInfo.directory" class="select-course-item" @click="switchVideo(next)">
              <kw-image class="select-course-item-img" :src="next.previewImgUrl" scale="true"></kw-image>
              <div class="select-course-item-intro">
                <p>{{ $t('course.detail.Title') }}：{{next.title}}</p>
<!--                <p>{{next.duration}}</p>-->
              </div>
            </div>
          </div>
        </div>
        <div class="next-info-container">
          <div class="author-info-container">
            <img :src="authorinfo.avatar">
            <div class="author-info-detail-container">
              <h1>{{$t('pages.home')}}</h1>
              <h2>{{$t(courseInfo.title)}}</h2>
            </div>
          </div>
          <div class="barrage-list-container" @click="expandBarrageList=!expandBarrageList">
            <h1>{{ $t('course.detail.BarrageList') }}</h1>
            <img :class="{'expand-barrage':expandBarrageList}" src="https://file.kwunphi.com/kwunphi4/images/commons/arrow-right.svg">
          </div>
          <div class="barrage-table-container" :style="{height:expandBarrageList? ((courseInfo.barrage.length*30)+30 + 'px'):''}">
            <div  class="barrage-info">
              <p>{{ $t('course.detail.time') }}</p>
              <p>{{ $t('course.detail.BarrageContent') }}</p>
              <p>{{ $t('course.detail.ReleaseTime') }}</p>
            </div>
            <div v-for="(barrage,index) in courseInfo.barrage" class="barrage-info">
              <p>{{ barrage.time }}</p><p>{{ $t(barrage.name) }}</p><p>{{ barrage.date }}</p>
            </div>


          </div>
          <div class="split-line"></div>
          <div class="next-course-play-container">
            <h4 v-if="courseInfo.directory.length>0">{{ $t('course.detail.PlayNext') }}</h4>
            <div v-for="(next,index) in courseInfo.directory" class="next-course-item" @click="switchVideo(next)">
              <kw-image class="next-course-item-img" :src="next.previewImgUrl" scale="true"></kw-image>
              <div class="next-course-info-container">
                <p>{{ $t('course.detail.Title') }}：{{$t(next.title)}}</p>
                <p>{{$t(next.duration)}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n()
useHead({
  title: t('foot.onlineClassroom'),
  meta: [
    {name: 'keywords', content: t('seo.pages.course.keywords') },
    {name: 'description', content: t('seo.pages.course.description') }
  ],
})
import courseInfoList from "assets/js/course-info-list";
const scrollPosition = ref(0);//初始距离
const inputQuestion = ref("")
const router = useRouter()
const route = useRoute()

const isSelectComment = ref(false)

function share(item,index){

}

const barrageContent = ref(null)
const scrollToTop = () => {
  const duration = 500; // 滚动持续时间（毫秒）
  const startPosition = window.scrollY;
  const startTime = performance.now();

  const animateScroll = (timestamp) => {
    const currentTime = timestamp - startTime;
    const progress = Math.min(currentTime / duration, 1);
    const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
    window.scrollTo(0, startPosition - easeProgress * startPosition);
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  requestAnimationFrame(animateScroll);
}

const userInfo =ref({
  userName:"怪虫机器人",
  avatar:"https://www.kwunphi.com/_nuxt/img/logo1.6568f30.png",

})

function  onVideoEnded(courseInfo) {
  // 视频播放结束时触发的函数
  courseInfo.playing=false
}

const  forwardinfocard=ref([
  {imgUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAgVBMVEUAAABXu0BYt0BQt0BXu0BWu0BXu0BXu0BXu0BWukBWukBXvEBXu0BXvEBXvEBYukBVukBXu0BWt0BXukBXuEBXu0D////1+/Pq9+fV7s/A5rer3aBsw1jg89uBzHBiwEy14auL0Xug2ZOW1YeBzG93yGSW1YjL6sO14azL6cN2yGP3XpzOAAAAFXRSTlMA3yAQ78+/r5+AUI9w74BgYEBAkHDBb56KAAACF0lEQVRIx52W6XKDIBRGwT3GZmsRUXFP0vb9H7AKGS8aiCXnR0TCmU/gOoh0uJck8jEZwUGYXND/cOPggyz4CE//0HZgKeDIsdSA3Qs1Bk2XejLF7ckGe1fnOT7ZBDsaDxNiZ4Jna4Jnb7rgbeKrK7QnFuzBOxIrYrsJAth9iIdl/9CwLE0pv/elqfoegWpfXdAUYINW9GRkRIBWakBemiOVGRbpE1lpijwaPDANCxvCc8qBbcVF47vq5EQ1YjCK3nyXiXE3QqrpSseeu+jptc96XgWmHSGDEGtCmDHygpK5nUuRdr2MvvfNdMvzXCN+KVNk6RO0qOpr37fXJzFCwdzmT9532THZovmqFHxlF3/WcdWQGUsBI2g3K/G3WG3o4oEVsVqOK4RHaTpfaKkXCVsWzPTL65pPN7X4kxnEX6qIXS4mJqfOH5tVKSJWzJsiXqlcklxe5AI0yuL4RDUpiKkGphRrRFRK+lLk88AQSg4KXVC9TvwSRQ4MU5m1xZ2xlmnEm1LkrqeKTVbU5rcaNtJDCAWqCOutq90CpjiKMTFQZuuah/9Oo+h6ZtPkYTSxI0YKReWLtxFBpJ5bzjOasWYsoBp6HQSRW5R5tz4C4HS0PltjO/H05sH6iQDXtz0d3/94ANPes/9Asjd9572PwE8X6Tm+DPViZMQ5mLUDxGnVCFtqwDH0VlYQS22bcxIGIhn7UXLWWn+10s6FZo+4YQAAAABJRU5ErkJggg==",
   title:"微信"
  },
  {imgUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAh1BMVEUAAADXQDjTQDzaQzfcRTfbRDfcRDbcQzbbRDbbRDfcQzbaQzbbRDbbRDbaRDfcQzbbRDfaQjjaQjXcQzfYRDfbRDTbRDf////gW1D99PPtoZvyubT76Ob20M3pioLdT0Tvrajkc2n20c3rlo7mfnb0xcD43NrrlY7kcmniZ1343driZ1z0xMEgvW1iAAAAFnRSTlMAIBDf34Dv78+/n1BAj7CvcGBgkHBwDUc+aAAAAmpJREFUSMeVlueCqjAQRgOI0qy7m0YVsN297/98OwEdCUQ05w8WDt/MkIjEhJv8RIFHAS/c/CTkM9w4XFKN5ebwgeaDNWURObYa4s+oMWrG1MOruDV9w9o1eU5A37JwDN6CUksTPWsTPXvTRe89wXBCa2rB+ukd6By3K6ca8WcNVoyxLB26i0ex/mxgzRTiMlx990A6C09PZ6XKwXbpIyP6Fn4C8zKONHVYFrJ4tJWfoUMJ5k2PPBi0igHZrX8j4HVLITPXB7udeK1gHem9ziJjouTwQYmnhCCuxh5UhSJO9qKmWwxrTcZeyh5UpcyFyOH0Bi5SaYNNyG7qYeK95CttWUWlJn6PW5RsSgVtlyqxoEhEQs1rNEPrldf5cI8Qb+hxYRKlaVsSY4NZKqU81aynpQY0kTNF3pS4fsDFvTESx4Gi0b4vMqWKdl4UcHWukmSeZXnRV9Gb5VgcDucIJ3B11JbckSmKyXAC7V7I52hxI2WmyYYk0m7+Dbd8JR7boTYlbshOE9WBsYb+MglBZ6r4p8TxXL+Hi7zov2dCnY1N8v7ViIS4z21V9q3U7Ap9YkzOulnrLAkZLtYTA4f+CpYLHEjFgCMdtwhiTBGedT+D/NwtIHU2V3li4tE9iO5qaILQwvF4LNUtTLsr8InnTX6Pebfq8qopmup/V29W0CkRIaNISDmxJwLqNeEYHwG8repzltVpA/Ua8UmP61ErPHy2xnbiniBflg9WxA0sCnXJAMezadDSRM/aRM/eDMCb4n7Z/glE9rOhq5i8xPFfaz7GmdXIs9aw4O1qZIUxam9IdtuwS/aCaJcYrT+uh9kYccQkXQAAAABJRU5ErkJggg==",
    title:"微博"
  },

])
function postComment(){
  if(inputCommit.value!==""){
    courseInfo.value.comments.unshift({
      avatar:"https://www.kwunphi.com/_nuxt/img/logo1.6568f30.png",
      avatarPackage:"https://i2.hdslb.com/bfs/face/971b69742c60b93225d38eb4c99fc382e2e5eb44.png@240w_240h_!web-avatar-comment.webp",
      isTop:false,
      userName:"怪虫机器人",
      grade:"0",
      identity:"up",
      date:formatDate1(new Date()),
      likeNum:0,
      expandReplies:false,
      commentContent:inputCommit.value,
      subComments:[]
    });
    inputCommit.value='';
  }
}

function formatDate1(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}



const inputCommit = ref('')

const expandBarrageList = ref(false)

function switchVideo(next){
  courseInfo.value.videoUrl=next.videoUrl
  courseInfo.value.previewImgUrl=next.previewImgUrl
  scrollToTop()
}

const videoPlayer = ref<HTMLVideoElement | null>(null);
const currentTime = ref<number>(0);

function getVideoChang(e){

}



const authorinfo = ref({
  avatar:"https://file.kwunphi.com/kwunphi4/images/icon/series22.png",
  userName:"怪虫机器人",
  fansNum:256,
})

const menuList =ref([
  {name:"最新",isSelected:true},
  {name:"|",isSelected:false},
  {name:"最热",isSelected:false},
])

function getMenu(menu,index){
  const temp = menu.isSelected;
  menuList.value.forEach((me)=>{
    me.isSelected=false
  })
  menu.isSelected=true

}



const mouseoverLike = ref(false)
const mouseoverCoin = ref(false)
const isLike = ref(false)
const isCoin = ref(false)
const mouseoverCollection = ref(false)
const isCollection = ref(false)

const mouseoverForward = ref(false)
const isForward = ref(false)
const getRandomMargin = () => {
  const maxMargin = 400; // 设置最大的margin-top值，根据实际需要进行调整
  const randomMargin = Math.floor(Math.random() * maxMargin);
  return `${randomMargin}px`;
};



onMounted(() => {
  setInterval(() => {
    scrollPosition.value -= 6; // 根据需要调整滚动速度和方向
    if (scrollPosition.value <= -totalBarrageWidth.value*2) {
      if (barrageContent.value){
        barrageContent.value.style.transition = 'none'
      }

      scrollPosition.value = 900;
    }else {
      if (barrageContent.value){
        barrageContent.value.style.transition = 'transform 0.6s'
      }
    }
  }, 100);

});
const totalBarrageWidth = computed(() => {
  const itemWidth = 150; // 每个弹幕项的宽度，根据实际需要进行调整
  return itemWidth * courseInfo.value.barrage.length;
});


function SendBarrage(){
  if (inputQuestion.value!==""){
    courseInfo.value.barrage.push({ name: inputQuestion.value, likeNum: 1, marginTop: getRandomMargin(),date: formatDate(new Date()) ,time:"00:22"});
    inputQuestion.value='';
  }

}

function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月份并补零
  const day = String(date.getDate()).padStart(2, '0'); // 获取日期并补零
  const hours = String(date.getHours()).padStart(2, '0'); // 获取小时并补零
  const minutes = String(date.getMinutes()).padStart(2, '0'); // 获取分钟并补零
  return `${month}-${day} ${hours}:${minutes}`;
}
const courseId = ref(Number(route.params.detail)||0)
const courseInfo = ref(courseInfoList[courseId.value-1])
</script>

<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.course-container{
  transition: all 0.3s ease;
  width: 1200px;
  display: flex;
  flex-direction: column;
}
.course-container >h1{
  font-weight: 700;
  font-size: 22px;
  margin-top: 16px;
}
.course-hot-info-container{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.course-detail-container{
  transition: all 0.3s ease;
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.course-video-play-container{
  transition: all 0.3s ease;
  margin-bottom: 48px;
  width: calc(75% - 8px);
  display: flex;
  flex-direction: column;
}
.video-play-container{
  cursor: pointer;
  width: 100%;
  min-height: 506px;
  background-color: #131313;
  overflow: hidden;
}
.video-play-container>img{
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-play-container>video{
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.barrage-container{
  width: 100%;
  height: 30%;
  opacity: 0.5;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.barrage-move-container{
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.barrage-content{
  cursor: pointer;
  width: 12000px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: transform 0.5s ease; /* 添加过渡效果 */
}
.barrage-item{
  cursor: pointer;
}
.barrage-item > h1 {
  color: rgba(255, 255, 255);
  margin-left: 150px;
  font-size: 20px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
.send-barrage-container{
  width: 100%;
  height: 72px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.send-barrage-container >h1{
  font-size: 17px;
  margin-left: 10px;
  color: rgba(0,0,0,0.75);
}
.send-barrage-container>img{
  width: 30px;
  cursor: pointer;
  margin-left: 280px;
}

.barrage-input-container{
  cursor: pointer;
  margin-right: 10px;
  width: 400px;
  height: 45px;
  background-color: #f3f3f3;
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.barrage-input-container>input{
  height: 45px;
  width: calc(75%);
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #f3f3f3;
}
.barrage-input-container>img{
  width: 22px;
  margin-right: 20px;
  position: absolute;
  margin-left: 285px;
  cursor: pointer;
}
.search-button{
  color: white;
  cursor: pointer;
  height: 45px;
  width: 90px;
  background-color: rgba(0,0,0,0.25);
  display: flex;
  font-size: 19px;
  flex-direction: column;
  border-radius: 0px 10px 10px 0px;
  justify-content: center;
  align-items: center;
}
.search-button:hover{
  background-color: rgba(0,0,0,0.35);
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 1);
}
.follow-forward-container{
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.follow-forward-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.follow-forward-item>img{
  cursor: pointer;
  width: 32px;
}
.follow-forward-item>h1{
  font-size: 19px;
}
.forward-card{
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 330px;
  position: absolute;
  max-width: 500px;
  height: 300px;
  transition: opacity 0.2s ease,height 0.01ms ease,display 0.2s ease;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
.course-info-card{
  padding: 20px;
  width: 100%;
  height: 220px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}
.course-info-card >img{
  border-radius: 10px;
  object-fit: cover;
  max-width: 300px;
  height: 160px;
}
.forward-info-card{
  width: 100%;
  height: 80px;
  background-color: #F3f3f3;
  display: flex;
  flex-direction: row;
}
.ss-card{
  cursor: pointer;
  padding-left: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ss-card >img{
  width: 33px;
}
.ss-card >h1{
  color: rgba(0,0,0,0.55);
  font-size: 16px;
}
.split-line{
  display: none;
  width: 100%;
  height: 1px;
  background-color: #a1a1a1;
}
.course-desc{
  margin: 16px 0;
}
.course-desc>p{

}
.course-tag-container{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0;
}
.tag-item{
  color: rgba(0,0,0,0.55);
  cursor: pointer;
  font-size: 19px;
  margin-right: 10px;
  padding: 5px 12px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.comment-header-title-container{
  padding: 16px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.comment-header-title-container>h1{
  font-size: 26px
}
.comment-header-title-container>h5{
  margin-left: 10px;
  font-size: 16px;
}
.comment-sort-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
}
.comment-sort-container >h4{
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  color: #c6ccd0;
}
.comment-detail-container{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.comment-input-container{
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.comment-input-container>img{
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right: 15px;
  object-fit: cover;
}
.input-comment-container{
  cursor: pointer;
  margin-right: 10px;
  width: 100%;
  height: 60px;
  background-color: #f3f3f3;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.input-comment-container>input{
  border: none;
  outline: none;
  height: 95%;
  width: calc(77%);
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  background-color: #f3f3f3;
}
.input-comment-container>img{
  width: 26px;
  margin-right: 20px;
  position: absolute;
  margin-left: 690px;
  cursor: pointer;
}
.post-comment-button{
  color: white;
  cursor: pointer;
  height: 100%;
  width: 90px;
  background-color: rgba(0,0,0,0.25);
  display: flex;
  font-size: 19px;
  flex-direction: column;
  border-radius: 0px 10px 10px 0px;
  justify-content: center;
  align-items: center;
}
.post-comment-button:hover{
  background-color: rgba(0,0,0,0.35);
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 1);
}
.comment-item-detail{
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.comment-item-detail>img{
  height: 60px;
  width: 60px;
  border-radius: 50px;
  margin-right: 15px;
  object-fit: cover;
}
.comment-detail-info-container{
  display: flex;
  flex-direction: column;
}
.comment-detail-info-container>h4{
  margin-top: 8px;
  margin-bottom: 8px;
}
.comment-detail-info-container>p{
  font-size: 18px;
}
.comment-like-tag-container{
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.comment-like-tag-container>h5{
}
.comment-like-tag-container>img{
  margin-left: 15px;
  cursor: pointer;
  width: 22px;
}
.watch-sub-comment{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.watch-sub-comment>p{
  cursor: pointer;
  font-size: 16px;
  margin-top: 2px;
}
.watch-sub-comment>h4{
  color: #1177FF;
}
.sub-cpmment-container{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.sub-comment-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.sub-comment-item>img{
  height: 60px;
  width: 60px;
  border-radius: 50px;
  margin-right: 15px;
  object-fit: cover
}
.sub-comment-detail-container{
  display: flex;
  flex-direction: column;
}
.sub-comment-detail-container>h4{

}
.sub-comment-detail-container>p{

}
.sub-comment-tag-container{
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.sub-comment-tag-container>h5{

}
.sub-comment-tag-container>img{
  margin-left: 15px;
  cursor: pointer;
  width: 20px;
}
.next-info-container{
  transition: all 0.3s ease;
  width: calc(25% - 8px);
  display: flex;
  flex-direction: column;
}

.author-info-container{
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.author-info-detail-container{
  display: flex;
  flex-direction: column;
}
.author-info-detail-container >h1{
  font-size: 25px;
  opacity: 0.85;
}
.author-info-detail-container >h2{
  font-size: 15px;
  opacity: 0.75;
}
.barrage-list-container{
  cursor: pointer;
  width: 100%;
  height: 40px;
  background-color: #eeeeee;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 10px;
}
.barrage-list-container>img{
  transform: rotate(0deg);
  cursor: pointer;
  width: 30px;
  transition: transform 0.3s ease;
}
.expand-barrage>img{
  transform: rotate(90deg);
}
.barrage-list-container >h1{
  font-size: 15px;
}
.barrage-table-container{
  margin: 16px 0;
  overflow: auto;
  border-radius: 5px;
  height: 0px;
  max-height: 420px;
  width: 100%;
  transition: height 0.2s ease;
  display: flex;
  flex-direction: column;
}
.barrage-info{
  min-height: 34px;
  margin-bottom: 5px;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.barrage-info>p{
  font-size: 12px;
}
.next-course-play-container{
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.next-course-play-container >h4{
  margin-bottom: 10px;
  font-size: 20px;
}
.next-course-item{
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px rgba(20, 20, 20, 0.03);
}
.next-course-item-img{
  width: 100%;
  height: 80%;
  object-fit: cover;
}
.next-course-info-container{
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.next-course-info-container >p{
  opacity: 0.75;
  font-size: 15px;
}
.select-course-table{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.select-course-item{
  padding-right: 8px;
  width: calc(50% - 8px);
  cursor: pointer;
  margin-bottom: 16px;
  min-height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f3f3f3;
}
.select-course-item-img{
  width: calc(50% - 8px);
  height: 100%;
  object-fit: cover;
}
.select-course-item-intro{
  padding: 16px 0;
  width: calc(50% - 8px);
  display: flex;
  flex-direction: column;
}
.select-course-item-intro>p{

}
.switch-comment-course-button{
  cursor: pointer;
  padding: 0 16px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1177FF;
}
.switch-comment-course-button>p{
  color: white;
}
@media screen and (max-width: 1232px){
  .course-container{
    width: calc(100% - 16px);
    align-items: center;
  }
  .course-detail-container{
    width: 100%;
  }
  .next-info-container{
    display: none;
  }
  .course-video-play-container{
    width: 100%;
  }

  .comment-sort-container{
    margin-left: 16px;
  }
  .comment-header-title-container{

  }
}

@media screen and (max-width: 1024px){
  .video-play-container{
    min-height: 106px;
  }
  .send-barrage-container>img{
    margin-left: auto;
  }
  .send-barrage-container{
    padding: 0 16px;
  }
}

@media screen and (max-width: 767px){
  .send-barrage-container >h1{
    font-size: 14px;
    margin-left: 2px;
  }
  .barrage-input-container{
    width: calc(75%);
  }
  .comment-input-container>img{
    width: 40px;
    height: 40px;
  }
  .sub-comment-item>img{
    width: 40px;
    height: 40px;
  }
  .comment-item-detail>img{
    width: 40px;
    height: 40px;
  }
  .follow-forward-item>img{
    width: 22px;
  }
  .select-course-item{
    padding-right: 8px;
    width: 100%;
    cursor: pointer;
    margin-bottom: 16px;
    min-height: 140px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f3f3f3;
  }
  .follow-forward-container{
    padding: 0 16px;
  }
  .course-container >h1{
    text-align: center;
  }
}
@media screen and (max-width: 480px){
  .course-detail-container{
    width: 100%;
  }
  .send-barrage-container >h1{
    display: none;
  }
  .barrage-input-container{
    width: 100%;
  }
  .input-comment-container{
    height: 48px;
  }
  .input-comment-container>input{
    height: 95%;
  }
  .forward-card{
    margin-top: 220px;
    max-width: 200px;
    height: auto;
  }
  .course-info-card{
    padding: 8px;
    height: auto;
  }
  .course-info-card >img{
    border-radius: 10px;
    object-fit: cover;
    max-width: 170px;
    height: 100px;
  }
  .send-barrage-container>img{

  }
  .send-barrage-container{
    padding: 0 0 0 4px;
  }

}
</style>
