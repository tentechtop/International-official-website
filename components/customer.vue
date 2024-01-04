<template>
  <div>
    <a v-if="!isShowChatWindows" class="root-page"
         @mouseleave="isMouseOver=false"
         @mouseover="isMouseOver=true">
<!--      :href="getRandomChatCustomer()" target="_blank"-->
      <img src="https://image.crisp.chat/avatar/operator/5ea15f83-614b-4f36-b038-5691f1f97d3a/240/?1695276836189">
      <div class="point"></div>
    </a>









  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, onMounted, getCurrentInstance,onUnmounted,watch,computed ,nextTick} from "vue";
import { useI18n } from "vue-i18n";
const { t,locale} = useI18n()
import { chat } from "assets/libs/gpt";
import type {ChatMessage} from "assets/types";
const router = useRouter()
const localePath = useLocalePath();
const route = useRoute()
import cryptoJS from "crypto-js";
import Loding from "@/components/Loding.vue";
import Copy from "@/components/Copy.vue";
import keywordsList from "assets/js/keywordsChat/keywordsList";
import keywordsArray from "assets/js/keywordsChat/keywordsArray";
import { md } from "assets/libs/markdown";
/*let apiKey = "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";*/

function gotoTargetPage(){
  router.push({ path: localePath('/leave-message') })
}

let apiKey = "sk-VcsMNS2JQziQbWaFdmRvHBVqzIH0Ph6QNLN5a1X8QdaemMQ7";
let isConfig = ref(true);
let isTalking = ref(false);
const isMouseOver = ref(false)
let messageContent = ref("");

const isShowChatWindows = ref(false)



watch(messageContent,(newValue)=>{

})
function isStringAllSpaces(inputString) {
  // 使用trim()方法去掉字符串两端的空格，然后检查结果是否为空字符串
  return inputString.trim() === '';
}



function getHtml(content){
  let html = md.render(content).replace(/<li>/g, `<li style='opacity: 1;margin:0 15px'> `)
  return html.replace(/<p>.*?<img.*?<\/p>/g, (match: string) => {
    return match.replace(/<img/g, '<img style="max-width: 200px; max-height: 200px"')
  });
}




const decoder = new TextDecoder("utf-8");
const roleAlias = { user: "ME", assistant: "ChatGPT", system: "System" };

let keywords = keywordsArray.keywordsArrayList; // 添加你的关键词
const messageList = ref<ChatMessage[]>([
  {
    role: "system",
    content: "你是Kwunphi怪虫机器人公司的智能客服 名字是堒宝宝 英文名字是Kwun Baby 是公司的员工不要用他们这的词，用我们，或者我们公司，" +
        "你职责是：" +
        "1.提供产品信息和支持：回答客户关于公司产品的问题，提供详细的产品信息和技术支持。这可能包括产品功能、规格、价格、可用性等方面的咨询。" +
        "2.解决问题和投诉：协助客户解决产品使用中遇到的问题，处理客户的投诉和问题，确保客户满意。" +
        "3.提供培训和指导：为客户提供关于产品的培训和指导，以确保他们能够有效地使用产品。" +
        "4.技术支持：为客户提供技术支持，协助解决与产品相关的技术问题。这可能包括与工程团队合作解决更复杂的技术问题。" +
        "公司的产品是太阳能光伏板清洁机器人，产品的型号主要有Kwun-B33H、Kwun-B32H、Kwun-B32L、Kwun-B22H、Kwun-B22L、Kwun-B11L" +
        "公司的领导人是陈应洪，怪虫机器人总公司的地址在广东省深圳市龙岗区坂田街道深澳文化产业园22栋，合肥怪虫机器人的地址是安徽省合肥市经济技术开发区宿松路南艳湖创新中心1栋422室，" +
        "公司的联系电话是4008786861，怪虫机器人是一家年轻且具有极强创造力的公司，成立于2018是由机器视觉与自动驾驶专家团队创建的国家高新技术企业。" +
        "怪虫每三个员工就有一个机器视觉或自动驾驶工程师。从最初的幕墙移动控制技术，到光伏应用自主机器人、堒洁团队专业管理系统，再到行业应用怪虫工程师不忘初心收获一个个划时代产品，" +
        "展现了大无畏的“怪虫拼搏”气概。,最后请给你回复的每一个句话的结尾都加上笑脸😊比如您好，请问有什么可以帮您呢？😊" +
        "Kwun-B37H 关键参数如下：清洁效率: ≥650平方米/小时,续航: 3小时,充电: 3小时,水洗角度: ≤15°,干刷角度: ≤20°,机身尺寸: 585*560*250mm" +
        "机身重量(不含滚刷): 23.85公斤," +
        "角度: 干刷 0～20°/水洗 0～15°" +
        "表面温度: 干刷 -20～80℃/水洗 0～80℃" +
        "环境温度: 干刷 -20～50℃/水洗 0～50℃" +
        "间距: 40mm,高度差: 干刷 30mm/水洗 25mm" +
        "防水: IP65" +
        "寿命: 6年" +
        "保修: 1年或2400小时" +
        "电池容量: 15Ah" +
        "续航时间: 3小时" +
        "充电时间: 3小时" +
        "清洁能力：" +
        "浮尘: ≥99%" +
        "灰尘: ≥95%" +
        "鸟粪: ≥85%" +
        "效率: ≥650m²/h" +
        "操作系统: 基于TianyunOS 操作系统" +
        "视觉导航: 基于Glass vSLAM®视觉导航技术" +
        "路径规划: 基于Goodzenn®路径规划技术" +
        "AI平台: 基于AI-Kwun操作平台" +
        "OTA平台: 基于OTA-Kwun操作平台" +
        "单人最大可控制数量: 24台" +
        "软件维护升级: OTA升级" +
        "夜间作业: 支持" +
        "实时日志查看: 支持" +
        "无人机部署: 支持" +
        "坡道上的无人操作: 支持" +
        "远程控制: 支持" +
        "附加RF遥控器: 支持" +
        "断电后继续作业: 支持" +
        "调整刷子速度: 支持" +
        "额定刷子速度: 160转/分钟" +
        "操作模式: 自主作业，手机APP管理" +
        "定位方法: AI视觉语义" +
        "定位精度: ≤10mm" +
        "转向方向: 高精度吸附转向机" +
        "防跌落: AI视觉语义+超声波" +
        "防滑: 专用履带+高精度纠偏算法" +
        "防盗定位终端: ≤10米 中国境内" +
        "无缝安全认证: 必维隐裂认证" +
        "" ,/*调教 将chatGPT带入角色*/
  },

  {
    role: "assistant",
    content: t('customer.welcome'),
  },
]);


// 创建一个计算属性 filterList
const filteredList = computed(() => {
  return messageList.value.filter((v, index) => {
    return   v.role !== 'system';
  });
});


watch(locale,(newValue)=>{
  messageList.value[1].content = t('customer.welcome')
})


const chatListDom = ref(null);

const chatCustomerList = ref([
    "https://work.weixin.qq.com/kfid/kfcbc3ea8617440b578",
    "https://work.weixin.qq.com/kfid/kfc2d78b744a2f8ed87"
])

function getRandomChatCustomer() {
  const randomIndex = Math.floor(Math.random() * chatCustomerList.value.length);
  return chatCustomerList.value[randomIndex];
}

// 调用这个函数来获取一个随机的元素

//当用户上滑时取消 监听

const scrollToBottom = () => {
  if (!chatListDom.value) return;

  if (chatListDom.value) {
    // @ts-ignore
    chatListDom.value.scrollTop = chatListDom.value.scrollHeight;
  }
};

watch(messageList.value, () => nextTick(() => scrollToBottom()));


onMounted(() => {
  if (getAPIKey()) {
    switchConfigStatus();
  }
});

const appendLastMessageContent = (content: string) =>
    (messageList.value[messageList.value.length - 1].content += content);
const sendChatMessage = async (content: string = messageContent.value) => {
  let question = content
  try {
    isTalking.value = true;
    if (messageList.value.length === 2) {
      messageList.value.pop();
    }
    messageList.value.push({ role: "user", content });
    clearMessageContent();
    messageList.value.push({ role: "assistant", content: "" });

    const { body, status } = await chat(messageList.value, getAPIKey());
    if (body) {
      const reader = body.getReader();
      await readStream(reader, status).then(()=>{
        sendChatContentToMysql(question,messageList.value[messageList.value.length-1].content)
      });
    }
  } catch (error: any) {
    appendLastMessageContent(error);
  } finally {
    isTalking.value = false;
  }
};
const readStream = async (
    reader: ReadableStreamDefaultReader<Uint8Array>,
    status: number
) => {
  let partialLine = "";

  while (true) {
    // eslint-disable-next-line no-await-in-loop
    const { value, done } = await reader.read();
    if (done) break;
    // @ts-ignore
    const decodedText = decoder.decode(value, { stream: true });

    if (status !== 200) {
      const json = JSON.parse(decodedText); // start with "data: "
      const content = json.error.message ?? decodedText;
      appendLastMessageContent(content);
      return;
    }

    const chunk = partialLine + decodedText;
    const newLines = chunk.split(/\r?\n/);

    partialLine = newLines.pop() ?? "";

    for (const line of newLines) {
      if (line.length === 0) continue; // ignore empty message
      if (line.startsWith(":")) continue; // ignore sse comment message
      if (line === "data: [DONE]") return; //

      const json = JSON.parse(line.substring(6)); // start with "data: "
      const content =
          status === 200
              ? json.choices[0].delta.content ?? ""
              : json.error.message;
      appendLastMessageContent(content);
    }
  }
};


function getAvailableButton(){
  if (isStringAllSpaces(messageContent.value) ||messageContent.value.length===0 || isTalking===true ){
    messageContent.value ='';
    return false;
  }else {
    return true
  }
}

const sendOrSave = () => {
  if (isStringAllSpaces(messageContent.value) ||messageContent.value.length===0 || isTalking===true ){
    messageContent.value ='';
    return;
  }
  if (isConfig.value) {
    if (saveAPIKey(messageContent.value.trim())) {
      switchConfigStatus();
    }
    clearMessageContent();
  } else {
    const content = messageContent.value.trim()
    // @ts-ignore
    let index = isKeywordHit(content, keywords)
    if (index !== -1) {
      // 如果包含关键词
      keywordsChat(index);
    } else {
      sendChatMessage();
    }
  }
};


//余弦相似度 处理英文
function cosineSimilarity(str1, str2) {
  // 将字符串转换为词语数组
  const tokenize = (str) => str.toLowerCase().match(/\w+/g) || [];
  const tokens1 = tokenize(str1);
  const tokens2 = tokenize(str2);
  // 创建词频向量
  const vector1 = {};
  const vector2 = {};
  tokens1.forEach((token) => {
    vector1[token] = (vector1[token] || 0) + 1;
  });
  tokens2.forEach((token) => {
    vector2[token] = (vector2[token] || 0) + 1;
  });
  // 计算余弦相似度
  const dotProduct = Object.keys(vector1).reduce((acc, token) => {
    return acc + (vector1[token] || 0) * (vector2[token] || 0);
  }, 0);
  const magnitude1 = Math.sqrt(Object.keys(vector1).reduce((acc, token) => {
    return acc + Math.pow(vector1[token] || 0, 2);
  }, 0));
  const magnitude2 = Math.sqrt(Object.keys(vector2).reduce((acc, token) => {
    return acc + Math.pow(vector2[token] || 0, 2);
  }, 0));
  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0;  // 处理零向量
  }
  return dotProduct / (magnitude1 * magnitude2);
}


//编辑距离相似度
function similarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  const longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  const editDistance = new Array(longerLength + 1);
  for (let i = 0; i <= longerLength; i++) {
    editDistance[i] = new Array(shorter.length + 1);
    editDistance[i][0] = i;
  }
  for (let j = 0; j <= shorter.length; j++) {
    editDistance[0][j] = j;
  }
  for (let i = 1; i <= longerLength; i++) {
    for (let j = 1; j <= shorter.length; j++) {
      const cost = longer[i - 1] === shorter[j - 1] ? 0 : 1;
      editDistance[i][j] = Math.min(
          editDistance[i - 1][j] + 1,
          editDistance[i][j - 1] + 1,
          editDistance[i - 1][j - 1] + cost
      );
    }
  }
  const maxLen = Math.max(str1.length, str2.length);
  const editDistanceValue = editDistance[longerLength][shorter.length];
  const similarity = (1.0 - editDistanceValue / maxLen);
  return similarity;
}
const similarThreshold = 0.65; // 设置相似度阈值
function isKeywordHit(content) {
  let keywordsArray = keywords;
  const matchingIndices = [];
  let matchingIndicesMap = new Map()
  for (let i = 0; i < keywordsArray.length; i++) {
    const keywords = keywordsArray[i];
    const similarities = keywords.map(keyword => similarity(content, keyword));
    const maxSimilarity = Math.max(...similarities);
    if (maxSimilarity >= similarThreshold) {
      matchingIndices.push(i);
      matchingIndicesMap.set(i,maxSimilarity)
    }
  }
  if (matchingIndices.length > 0) {
    let maxSimilarityIndex = -1;
    let maxSimilarityValue = -1;
    matchingIndicesMap.forEach((similarityValue, index) => {
      if (similarityValue > maxSimilarityValue) {
        maxSimilarityValue = similarityValue;
        maxSimilarityIndex = index;
      }
    });
    return maxSimilarityIndex;
  } else {
    return -1;
  }
}

function keywordsChat(index){
  let content = ""
  content = messageContent.value
  isTalking.value = true;
  if (messageList.value.length === 2) {
    messageList.value.pop();
  }
  messageList.value.push({ role: "user", content });
  clearMessageContent();
  let message = ""
  if (keywordsArray.keywordsMap.get(index)){
    message = keywordsArray.keywordsMap.get(index).message
  }
  messageList.value.push({ role: "assistant", content: "" });

  const messageChunks = message.split(""); // 拆分消息成字符数组
  let currentIndex = 0;

  sendChatContentToMysql(content,message)
  /*流式输出*/
  const addMessage = () => {
    if (currentIndex < messageChunks.length) {
      messageList.value[messageList.value.length-1].content += messageChunks[currentIndex];
      currentIndex++;
      if (currentIndex < messageChunks.length) {
        setTimeout(addMessage, 5); // 每隔1秒添加下一个字符
      } else {
        isTalking.value = false;
      }
    }
  };
  // 开始添加消息字符
  addMessage();
}

async function sendChatContentToMysql(content,message){
  let thisCookie =document.cookie
  let parseCookies1 = parseCookies(thisCookie);



/*  const resp = await useFetch('http://localhost:9090/official/chat/save/qa',{
    method:"POST",
    body: {
      question:content,
      answer:message
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept-Language':`${parseCookies1["language"]}`,
      'Cookie-Uuid':`${parseCookies1["cookie-uuid"]}`,
    }
  })*/
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


const saveAPIKey = (apiKey: string) => {
  if (apiKey.slice(0, 3) !== "sk-" || apiKey.length !== 51) {
    alert("API Key 错误，请检查后重新输入！");
    return false;
  }
  const aesAPIKey = cryptoJS.AES.encrypt(apiKey, getSecretKey()).toString();
  localStorage.setItem("apiKey", aesAPIKey);
  return true;
};
const getAPIKey = () => {
  if (apiKey) return apiKey;
  const aesAPIKey = localStorage.getItem("apiKey") ?? "";
  apiKey = cryptoJS.AES.decrypt(aesAPIKey, getSecretKey()).toString(
      cryptoJS.enc.Utf8
  );
  return apiKey;
};
const getSecretKey = () => "lianginx";
const switchConfigStatus = () => (isConfig.value = !isConfig.value);
const clearMessageContent = () => (messageContent.value = "");

</script>

<style scoped>
.root-page{
  z-index: 9999;
  cursor: pointer;

  right: 12px;
  bottom: 12px;
  border-radius: 100px;
  width: 60px;
  height: 60px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}



@keyframes breathing {
  0% {
    box-shadow: 0 0 5px 2px rgba(2, 70, 255, 0.2);
  }

  100% {
    box-shadow: 0 0 7px 3px rgba(2, 70, 255, 0.8);
  }
}

@keyframes breathing-deep {
  0% {
    box-shadow: 0 0 5px 2px rgba(2, 70, 255, 0.3);
  }

  100% {
    box-shadow: 0 0 10px 6px rgba(2, 70, 255, 0.8);
  }
}

.root-page>img{
  border-radius: 1000px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.point{
  bottom: 0;
  right: 0;
  position: absolute;
  background-color: #4ece3d!important;
  height: 18px;
  width: 18px;
  border-radius: 10px;
}


.root-page>p{
  width: 40%;
  text-align: center;
  font-size: 11px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}



.customer{
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.customer>img{
  width: 42px;
  object-fit: cover;
  border-radius: 100px;
}
.card-container{
  /*overflow: hidden;*/
  z-index: 9999;
  cursor: pointer;
  height: 222px;
  width: 230px;
  transform: translateX(320px);
  opacity: 0;
  right: 15px;
  bottom: 35px;
  position: fixed;
  transition: height 0.2s ease,width 0.5s ease,transform 0s ease,opacity 0.6s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 10px;
}
.hoverCard{
  transition: transform 0.5s ease;
  transform: translateX(-35px);
  opacity: 1;
}
.card{
  /*margin: 1px 1px;*/
  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  height: calc(100% - 2px);
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.noshow-card{
  height: 100px;
  width: 10px;
  opacity: 0;
}

.card >h1{
  color: rgba(0,0,0,0.65);
  font-size: 13px;
}
.chat-windows{
  transition: all 0.3s ease;
  opacity: 0;
  height: 0;
  z-index: 9999;
  position: fixed;
  right: 45px;
  bottom: 20px;
  width: 400px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 8px 8px rgba(100, 100, 100, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.windows-header{
  background-image: url("https://file.kwunphi.com/kwunphi4/images/customService/20231019162909.png");
  background-size: cover;
  z-index: 3;
  top: 0;
  position: sticky;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

}
.chat-logo-container{
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.chat-logo-container>img{
  width: 50px;
  object-fit: cover;
  border-radius: 1000px;
  margin-right: 6px;
}
.chat-logo-container>p{
  color: #fff;
}
.welcome{
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.welcome>h1{
  font-size: 16px;
  color: #fff;
}
.welcome>p{
  font-weight: 100;
  font-size: 12px;
  color: #fff;
}
.show-chat-windows{
  opacity: 1;
  height: 560px;
}

.close-line{

  width: 20px;
  height: 3px;
  background-color: #fff;
}
.close-button{
  margin-right: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.chat-message-container{
  z-index: 2;
  width: 100%;
  height: 60%;
  background-color: #f3f3f3;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.message-send-container{
  border-top: 1px solid rgba(0,0,0,0.15);
  width: 100%;
  height: calc(40% - 60px);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.service-level-container{
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.human-service{
  cursor: pointer;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.human-service>img{
  margin-right: 6px;
  width: 20px;
}
.human-service>a{
  font-size: 12px;
  color: #005ABC;
}
.message-container{
  width: 100%;
  min-height: 50px;
}
.message-input{
  padding: 0 10px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  white-space: pre-wrap;
  resize: none; /* 禁止用户手动调整大小 */
  color: black; /* 设置字体颜色为黑色 */
  font-style:normal;
}
.message-input:focus{
  border: none;
  outline: none;
}
.send-message-button-container{
  padding: 0px 20px ;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.send-message-button{
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid rgba(0,0,0,0.25);
  padding: 4px 18px;
  background-color: #fff;
  color: rgba(0,0,0,0.55);
}
.available{
  background-color: #0060E7;
  color: #fff;
  border: 1px solid rgba(0,0,0,0);
}
.message-item{
  padding: 8px 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

}
.user-message-content{
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.user-message{
  justify-content: flex-end;
}
.user-message>img{
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 5000px;
}
.service-message{

  justify-content: flex-start;
}
.service-message>img{
  width: 30px;
  object-fit: cover;
  border-radius: 5000px;
}
.no-user-message-item{
  overflow: hidden;
  color: #000;
  font-size: 14px;
  border-radius: 5px;
  background-color: #fff;
  padding:  5px;
  margin-left: 5px;

}
.no-user-message-item >p >img{
  max-width: 200px;
  max-height: 200px;
}

.user-message-item{
  color: #fff;
  border-radius: 5px;
  background-color: #38A1DF;
  padding: 5px;
  margin-right: 5px;
  font-size: 14px;
}
.card-item{
  width: 100%;
  height: 32%;
}
.card-line{
  width: 90%;
  height: 2px;
  background-color: rgba(0,0,0,0.2);
}
.call-phone{
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.call-phone>img{
  width: 24px;
  margin-right: 8px;
}
.phone-number{
  display: flex;
  flex-direction: column;
}
.phone-number>p{
  font-size: 16px;
}
.phone-number>h1{
  color: #0d7ae1;
  font-size: 18px;
}
.contact{
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.contact>img{
  width: 24px;
  margin-right: 8px;
}
.contact>p{
  font-size: 16px;
  color: #000;
  margin-right: 8px;
}
.contact-button{
  padding: 6px 12px;
  background-color: #004e98;
  color: #fff;
  font-size: 14px;
}
.more-contact{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.more-contact>img{
  width: 14px;
}
.more-contact>p{
  margin-right: 8px;
  font-size: 16px;
}
.hot-question{
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hot-question-container{
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
@media screen and (max-width: 1023px){
  .chat-windows{
    right: 0px;

  }

}
@media screen  and (max-width: 480px){


}
</style>
