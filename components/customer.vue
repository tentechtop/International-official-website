<template>
  <div>
    <a  class="root-page"
         @click="isOpenChatWindows=!isOpenChatWindows">
<!--      :href="getRandomChatCustomer()" target="_blank"-->
      <img src="https://image.crisp.chat/avatar/operator/5ea15f83-614b-4f36-b038-5691f1f97d3a/240/?1695276836189">
      <div class="point"></div>
    </a>


    <transition name="fade">
    <div v-if="isOpenChatWindows" class="chat-windows">
      <div class="chat-header-container">
        <div class="wx-chat-container">
          <img src="https://file.kwunphi.com/kwunphi4/images/svg/%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95.svg">
          <h1>聊天</h1>
        </div>
        <div class="message-notice-container">
          <div class="avatar-container">
            <img src="https://image.crisp.chat/avatar/operator/5ea15f83-614b-4f36-b038-5691f1f97d3a/240/?1695276836189&quot" alt="聊天头像">
            <div class="hintPoint"></div>
          </div>
          <p>怪虫机器人</p>
          <h1>Kwunphi</h1>
          <div class="send-email-container" @click="messageList=messageList.splice(0,1)">
            <div class="hot-point" v-for="(pItem,PIndex) in 3"></div>
          </div>
        </div>
        <div class="close-button" @click="isOpenChatWindows=false">
          <img src="https://file.kwunphi.com/kwunphi4/images/svg/%E5%85%B3%E9%97%AD.svg">
        </div>
      </div>

      <transition name="fadeEmo">
      <div v-if="isOpenEmo" class="emotion-container">
        <div class="emo-box">

          <div class="emo-item" v-for="(eItem,eIndex) in emoList" @click="goToSendEmo(eItem)">
            <kw-image class="emo-item-img" :src="eItem.imgUrl"></kw-image>
          </div>




        </div>
      </div>
      </transition>


      <div class="message-list-container" ref="chatListDom" @scroll="handleScroll">
        <div class="message-item" v-for="(message,messageIdx) in filteredList" :class="message.role==='user'? 'userMessage':'assistantMessage'">
          <img v-if="message.role!=='user'" src="https://image.crisp.chat/avatar/operator/5ea15f83-614b-4f36-b038-5691f1f97d3a/240/?1695276836189">
          <div class="chat-message">
            <div class="role-container">
              <h1>{{ roleMap.get(message.role)  }}</h1>
            </div>
            <!--     用户消息       -->
            <div v-if="message.role==='user'" class="message-container" v-copyText>
              <p class="res-message" :class="{userMessageRes:message.role==='user'}"  v-html="markedRender(message.content.replace(/^\n\n/, ''))"></p>
            </div>
            <!--     chat消息       -->
            <div v-else class="message-container" v-copyText>
              <p class="res-message" :class="{userMessageRes:message.role==='user'}"  v-html="markedRender(message.content.replace(/^\n\n/, ''))"></p>
            </div>

          </div>
          <img v-if="message.role==='user'" src="https://image.crisp.chat/avatar/operator/5ea15f83-614b-4f36-b038-5691f1f97d3a/240/?1695276836189">
        </div>
      </div>

      <div class="message-input-container">
        <div class="split-line"></div>
        <div class="message-input">
          <el-input
              clearable
              @clear="console.log('清空')"
              class="no-border-input"
              resize="none"
              v-model="messageContent"
              :autosize="{ minRows: 1, maxRows: 1 }"
              type="textarea"
              placeholder=""
          />


          <div  class="send-button" :class="{'available_Button':isCanSendMessages}"    @click="sendOrSave">
            <img :src=" isTalking? 'https://file.kwunphi.com/kwunphi4/images/svg/24gf-square.svg':'https://file.kwunphi.com/kwunphi4/images/svg/%E5%8F%91%E9%80%81.svg'">
          </div>



        </div>
        <div class="bottom-message-input">
          <div class="file-input-contianer">

            <div class="emo-container" @click="isOpenEmo=!isOpenEmo">
              <img src="https://file.kwunphi.com/kwunphi4/images/svg/%E8%A1%A8%E6%83%85.svg">
            </div>


            <div class="file-container"   @click="uploadFile">
              <input type="file" ref="fileInput" style="display:none" @change="onFileChange">
              <img   src="https://file.kwunphi.com/kwunphi4/images/svg/%E5%9B%9E%E5%BD%A2%E9%92%88.svg">
            </div>






          </div>
          <div class="bottom-logo">
            <p>Kwunphi</p>
            <img src="https://file.kwunphi.com/kwunphi4/images/svg/%E6%B6%88%E6%81%AF.svg">
            <p>怪虫</p>
          </div>
        </div>
      </div>
    </div>
    </transition>




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
import {fetchEventSource} from '@microsoft/fetch-event-source';
import { markedRender } from '../assets/libs/highlight'
const messageList = ref<ChatMessage[]>([
  {
    role: "system",
    content: "你是Kwunphi怪虫机器人公司的智能客服,名字是堒宝宝,不要用他们,用我们,或者我们公司." +
        "你职责是：" +
        "1.提供产品信息：回答客户关于产品的问题，提供产品信息。包括产品功能、规格、价格、可用性等咨询。" +
        "2.解决问题和投诉：解决产品使用中遇到的问题，处理客户的投诉和问题，确保客户满意。" +
        "3.提供培训和指导：为客户提供关于产品的培训和指导，以确保他们能够有效地使用产品。" +
        "4.技术支持：为客户提供技术支持，协助解决与产品相关的技术问题。这可能包括与工程团队合作解决更复杂的技术问题。" +
        "公司产品是太阳能光伏板清洁机器人，产品的型号主要有Kwun-B33H、Kwun-B32H、Kwun-B32L、Kwun-B22H、Kwun-B22L、Kwun-B11L" +
        "公司的领导人是陈应洪，怪虫机器人总公司的地址在广东省深圳市龙岗区坂田街道深澳文化产业园22栋，合肥怪虫机器人的地址是安徽省合肥市经济技术开发区宿松路南艳湖创新中心1栋422室，" +
        "公司的联系电话是4008786861，怪虫机器人是一家年轻且具有极强创造力的公司，成立于2018是由机器视觉与自动驾驶专家团队创建的国家高新技术企业。" +
        "怪虫每三个员工就有一个机器视觉或自动驾驶工程师。从最初的幕墙移动控制技术，到光伏应用自主机器人、堒洁团队专业管理系统，再到行业应用怪虫工程师不忘初心收获一个个划时代产品，" +
        "展现了大无畏的“怪虫拼搏”气概。" +
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
        "最后你的回答要控制字数,必要太冗余。" ,/*调教 将chatGPT带入角色*/
  },
  {
    role: "assistant",
    content: t('customer.welcome'),
  },
]);
const roleMap  = ref(new Map().set('user','You').set('assistant','Kwunphi'))
const emoList = ref([
  {
    name:"微笑",
    imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/emo/%E5%BE%AE%E7%AC%91.svg",
    text:"😊",
    markdown:"![微笑](https://file.kwunphi.com/kwunphi4/images/svg/emo/%E5%BE%AE%E7%AC%91.svg)\n"
  },
  {
    name:"大笑",
    imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/emo/%E5%A4%A7%E7%AC%91.svg",
    text:"😁",
    markdown:"![大笑](https://file.kwunphi.com/kwunphi4/images/svg/emo/%E5%BE%AE%E7%AC%91.svg)\n"
  },
  {
    name:"微笑",
    imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/emo/%E5%BE%AE%E7%AC%91.svg",
    text:"😊",
    markdown:"![微笑](https://file.kwunphi.com/kwunphi4/images/svg/emo/%E5%BE%AE%E7%AC%91.svg)\n"
  },
  {
    name:"大笑",
    imgUrl:"https://file.kwunphi.com/kwunphi4/images/svg/emo/%E5%A4%A7%E7%AC%91.svg",
    text:"😁",
    markdown:"![大笑](https://file.kwunphi.com/kwunphi4/images/svg/emo/%E5%BE%AE%E7%AC%91.svg)\n"
  },

])
const isOpenEmo = ref(false)


function goToSendEmo(eItem){
  messageContent.value += eItem.markdown
  isOpenEmo.value=false
}


let apiKey = "sk-VcsMNS2JQziQbWaFdmRvHBVqzIH0Ph6QNLN5a1X8QdaemMQ7";
const requestPath = ref('https://api.chatanywhere.com.cn/v1/chat/completions')


let isConfig = ref(true);
let isTalking = ref(false);
const isOpenChatWindows = ref(false)
let messageContent = ref("");



const decoder = new TextDecoder("utf-8");
const roleAlias = { user: "ME", assistant: "ChatGPT", system: "System" };

let keywords = keywordsArray.keywordsArrayList; // 添加你的关键词





// 创建一个计算属性 filterList
const filteredList = computed(() => {
  return messageList.value.filter((v, index) => {
    return   v.role !== 'system';//system
  });
});



const chatCustomerList = ref([
    "https://work.weixin.qq.com/kfid/kfcbc3ea8617440b578",
    "https://work.weixin.qq.com/kfid/kfc2d78b744a2f8ed87"
])

function getRandomChatCustomer() {
  const randomIndex = Math.floor(Math.random() * chatCustomerList.value.length);
  return chatCustomerList.value[randomIndex];
}




const chatListDom = ref(null);
const isUserScrollsUp = ref(false)

const sendOrSave = () => {
  if (isStringAllSpaces(messageContent.value) ||messageContent.value.length===0 || isTalking.value===true ){
    messageContent.value ='';
    return;
  }
  isUserScrollsUp.value=false
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

const appendLastMessageContent = (content: string) =>
    (messageList.value[messageList.value.length - 1].content += content);


const sendChatMessage = async (content: string = messageContent.value) => {
  try {
    if (messageList.value.length === 2) {
      messageList.value.pop();
    }
    messageList.value.push({ role: "user", content });
    clearMessageContent();
    messageList.value.push({ role: "assistant", content: "" });

    const controller = new AbortController()
    const signal = controller.signal
    fetchEventSource(requestPath.value, {
      method: 'POST',
      signal:signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: messageList.value,
      }),
      onmessage(event) {
        if (event.data !=='[DONE]'){
          const message = JSON.parse(event.data);
          appendLastMessageContent(message.choices[0].delta.content || '');
          isTalking.value=true
        }else {
          isTalking.value = false;
 /*         console.log("回复完成")*/
          controller.abort()
        }
      },
      onclose(){
/*        console.log("回复完成并,关闭")*/
        isTalking.value = false;
        controller.abort()
      },
      onerror(err){
/*        console.log('发生错误:', err);*/
        isTalking.value = false;
        appendLastMessageContent("CONNECT ERROR");
        throw err
      }
    })
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
const similarThreshold = 0.75; // 设置相似度阈值
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

  /*流式输出*/
  const addMessage = () => {
    if (currentIndex < messageChunks.length) {
      messageList.value[messageList.value.length-1].content += messageChunks[currentIndex];
      currentIndex++;
      if (currentIndex < messageChunks.length) {
        setTimeout(addMessage, 20); // 每隔1秒添加下一个字符
        isTalking.value = true;
      } else {
        isTalking.value = false;
      }
    }
  };
  // 开始添加消息字符
  addMessage();
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



// 创建一个ref来持有文件输入元素的引用
const fileInput = ref<HTMLInputElement | null>(null);

// 文件选择事件处理函数
const onFileChange = () => {
  if (fileInput.value) {
    // @ts-ignore
    const selectedFile = fileInput.value.files?.[0];
    if (selectedFile) {

    }
  }
};


// 模拟点击文件输入事件
const uploadFile = () => {
  if (fileInput.value) {
    // @ts-ignore
    fileInput.value.click();
  }
};


const isCanSendMessages = ref(false)


//上滑取消
watch(messageContent,(newValue)=>{
  if (messageContent.value.trim()!=='' && isTalking.value===false){
    isCanSendMessages.value=true
  }else {
    isCanSendMessages.value=false
  }
})






const scrollToBottom = () => {
    if (!chatListDom.value) return;
    if (chatListDom.value) {
      if (!isUserScrollsUp.value){
        // @ts-ignore
        chatListDom.value.scrollTop = chatListDom.value.scrollHeight;
      }
    }
}


watch(messageList.value, () => nextTick(() => scrollToBottom()));

const previousScrollTop = ref(0)
function  handleScroll(event) {
  const scrollTop = event.target.scrollTop;
  if (scrollTop > previousScrollTop.value) {
 /*   console.log("向下滚动");*/
    isUserScrollsUp.value=false
  } else if (scrollTop < previousScrollTop.value) {
/*    console.log("向上滚动");*/
    isUserScrollsUp.value=true
  }
  // 更新 previousScrollTop 为当前的scrollTop值，以便下一次比较
  previousScrollTop.value = scrollTop;
}


onMounted(() => {
  if (getAPIKey()) {
    switchConfigStatus();
  }
});


function isStringAllSpaces(inputString) {
  // 使用trim()方法去掉字符串两端的空格，然后检查结果是否为空字符串
  return inputString.trim() === '';
}
</script>


<style>
.no-border-input .el-textarea__inner {

  border: 0;
  box-shadow:none;
  padding: 5px 0px;
}



</style>

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
.chat-windows{
  z-index: 9999;
  border-radius: 5px;
  position: fixed;
  right: 12px;
  bottom: 80px;
  width: 400px;
/*  height: auto;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  overflow: hidden;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.28);
}
.chat-header-container{
  position: relative;
  padding: 10px 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1c293b !important;
  background-color: rgba(59,130,246);
}
.chat-header-container:before{
  background-image: url(https://client.crisp.chat/static/images/tiles/squares-in-squares.svg?0a15717)!important;
  background-size: 54px!important;
  opacity: .075!important;
  content: ""!important;
  background-repeat: repeat!important;
  position: absolute!important;
  left: 0!important;
  right: 0!important;
  top: 0!important;
  bottom: 0!important;
  z-index: 0!important;
}

.wx-chat-container{
  z-index: 1;
  cursor: pointer;
  border-radius: 13px;
  padding: 9px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #004ec0;
}
.wx-chat-container:hover,wx-chat-container:active{
  background-color: #0050c7;
}
.wx-chat-container>img{
  margin-right: 3px;
  width: 15px;
}
.wx-chat-container>h1{
  color: #FFFFFF;
  font-size: 13px;
}

.close-button{
  cursor: pointer;
  top: 10px;
  right: 10px;
  position: absolute;
  height: 20px;
  width: 20px;
}
.close-button>img{
  width: 100%;
}

.message-notice-container{
  margin-top: 10px;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.avatar-container{
  margin-right: 6px;
  position: relative;
  width: 30px;
  height: 30px;
}
.avatar-container>img{
  z-index: 1;
  border-radius: 100px;
  width: 30px;
}
.hintPoint{
  z-index: 2;
  border-radius: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 10px;
  width: 10px;
  background-color: #00dc82;
  outline: 2px solid  rgba(59,130,246);
}
.message-notice-container>h1{
  font-size: 12.4px!important;
  line-height: 18px!important;
  color: #FFFFFF;
}
.message-notice-container>p{
  font-size: 12.4px!important;
  line-height: 18px!important;
  color: #FFFFFF;
}

.send-email-container{
  cursor: pointer;
  z-index: 1;
  background-color: #0159d9;
  width: 27px;
  height: 27px;
  margin-left: 6px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.send-email-container:hover{
  background-color: #0154ce;
}
.hot-point{
  border-radius: 10px;
  width: 4px;
  height: 4px;
  background-color: rgba(200,200,200);
  margin:1px;
}

.message-list-container{
  transition: height 0.3s ease;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 3;
  width: 100%;
  height: 486px;
  background-color: #FFFFFF;
  padding: 5px 12px;
  display: flex;
  flex-direction: column;
}
.message-input-container{
  background-color: #FFFFFF;
  z-index: 3;
  width: 100%;
  height: 94px;
  padding: 0 12px;
}
.message-input{
  padding: 7px 0;
  position: relative;
}
.no-border-input{
  width: calc(100% - 33px);
}

.send-button{
  z-index: 99;
  opacity: 0.55;

  cursor: pointer;
  position: absolute;
  right: 0;
  height: 33px;
  width: 33px;
  border-radius: 5px;
  background: #1972F5 !important;
  bottom: calc(-100% + 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.send-button>img{
  width: 17px;
}

.send-button:hover{
  background: #1768e1 !important;
}
.available_Button{
  opacity: 1;
}
.split-line{
  height: 1px;
  z-index: 3;
  width: 100%;
  background-color: rgba(0,0,0,0.12);
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.25s ,opacity 0.25s ;
  transform: translateY(0px);
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(400px);
}

.fadeEmo-enter-active,
.fadeEmo-leave-active {
  transition: opacity 0.2s ;
}

.fadeEmo-enter,
.fadeEmo-leave-active {
  opacity: 0;
}

.bottom-message-input{
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.bottom-logo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.bottom-logo>p{
  font-size: 15px;
  color: #92A9C1;
}
.bottom-logo>img{
  margin: 0 3px;
  width: 15px;
}
.file-input-contianer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.emo-container{
  margin-right: 6px;
  cursor: pointer;
  width: 17px;
  height: 17px;
  border-radius: 20px;
}
.emo-container>img{
  width: 100%;
  opacity: 0.50;
}
.file-container{
  margin-right: 6px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border-radius: 20px;
}
.file-container>img{
  width: 100%;
  opacity: 0.60;
}
.emotion-container{
  z-index: 99;
  bottom: 40px;
  left: 0;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}
.emo-box{
  padding: 5px 10px;
  width: 98%;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.emo-item{
  transition: all 0.3s ease;
  cursor: pointer;
  width: 9%;
  margin: 4px 6px;
  height: 32px;
}

.emo-item-img{
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.message-item{
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 4px 0 8px 0;
}

.assistantMessage{
  align-items: flex-start;
  justify-content: flex-start;
}
.assistantMessage>img{
  width: 36px;
  height: 36px;
  border-radius: 500px;
}
.chat-message{
  max-width: 100%;
}
.message-container{
  position: relative;
  max-width: 332px;
}
.assistantMessage .chat-message .role-container{
  width: 100%;
  margin-bottom: 4px;
}
.assistantMessage .chat-message .role-container >h1{
  font-size: 16px;
  color: rgba(108,108,108);
}

.assistantMessage .chat-message .message-container{
  border-radius: 10px;
  padding: 5px 11px;
  width: 100%;
  background-color: #0d7ae1;
}






.userMessage{
  align-items: flex-end;
  justify-content: flex-end;
}


.userMessage>img{
  width: 36px;
  height: 36px;
  border-radius: 500px;
}
.userMessage .chat-message .role-container{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 4px;
}
.userMessage .chat-message .role-container >h1{
  font-size: 16px;
  color: rgba(108,108,108);
}

.userMessage .chat-message .message-container{
  border-radius: 10px;
  padding: 5px 11px;
  width: 100%;
  background-color: #F0F2F5;
}




</style>
