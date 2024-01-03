<template>
    <div>
        <div class="container">
            <div class="wrapper">
                <div class="app-info">
                    <div class="app-meta">
                        <div class="app-logo"><img src="https://file.kwunphi.com/kwunphi4/images/commons/logo1.png" /></div>
                        <h2 class="app-name">{{ app.appName }} V{{ downloadApp.versionName }}</h2>
                    </div>
                    <div class="download-btn">
                        <!-- APP 下载 -->
                        <div class="app-download-icon">
                            <a target="_blank" :href="downloadApp.downloadUrl">
                                <img v-if="downloadApp.os === 'IOS'"
                                    src="https://file.kwunphi.com/kwunphi4/images/commons/app-store.png" />
                                <img v-if="downloadApp.os === 'ANDROID'"
                                    src="https://file.kwunphi.com/kwunphi4/images/commons/android.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const app = ref({})
const downloadApp = ref({})
const resData = ref({})
// const fetch = useFetch()
// onMounted(()=>{
const res = await useFetch('https://api.kwunphi.com/kwunphi/api/download/data')
//   console.log("请求结果：",res)
if (res.data && res.data.value) {
    let data = res.data.value
    resData.value = data
    if (data.success && data.data) {
        app.value = data.data.app || {}
        // console.log(app.value)
        if (app.value && app.value.versionList) {
            for (const key in app.value.versionList) {
                const item = app.value.versionList[key]
                if (item && item.os === 'ANDROID') {
                    downloadApp.value = item
                    break
                }
            }
        }
    }

}
//   resData.value= res.data.value

// })
</script>

<style scoped>
.breadcrumb {
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.breadcrumb>li>a {
    cursor: pointer;
    color: black;
}

.bg {
    background-color: #f0f1f2;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
}

.wrapper {
    margin: 0 auto;
    background-color: #fff;
}

.app-meta {
    padding: 36px 18px;
}

.app-logo {
    width: 60%;
    max-width: 128px;
    margin: 0 auto 24px;
}

.app-logo img {
    width: 100%;
}

.app-name {
    color: #3b3e40;
    font-size: 20px;
    margin: 0 auto;
    text-align: center;
}

.app-desc {
    font-size: 16px;
    color: #6c7073;
    line-height: 1.6;
}

.download-btn {
    margin: 0;
    padding: 0 24px 66px;
}

.app-download-icon {
    display: flex;
    justify-content: center;
}

.app-download-icon img {
    width: 100%;
    max-width: 240px;
}
</style>
