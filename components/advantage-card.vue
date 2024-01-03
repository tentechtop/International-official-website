<template>
    <div class="adv-card" :class="{'row-odd':rowNum%2===1, 'row-even':rowNum%2===0}">
        <div class="adv-card-wrapper">
            <div class="adv-img">
                <div class="adv-img1">
                    <div class="adv-img2" :style="{'background-image': 'url('+cover+')'}"><img :src="cover" :alt="alt"/></div>
                </div>
                
            </div>
            <div class="adv-content">
                <div v-if="title" class="adv-title">
                    <img :src="'https://file.kwunphi.com/kwunphi/images/icons/numo' + rowNum + '.png'" />
                    <span>{{title}}</span>
                </div>
                <div class="adv-text">
                    <slot></slot>
                </div>
            </div>
            <div class="adv-index">
                <img :src="'https://file.kwunphi.com/kwunphi/images/icons/numo' + rowNum + '.png'" />
            </div>
        </div>
    </div>
</template>

<script>
/**
 * cover 数据格式 
 *      为 string 时：url地址
 *      为 object 时: {url, alt}
 *      为 array 时：数组元素支持 string、object
 */
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        rowNum: {
            type: Number,
            default: 1
        },
        cover: {
            type: [String, Object, Array],
            default: () => { }
        },
        alt: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            swiperOptionUsage: {
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                    waitForTransition: true
                },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true
                // },
                loop: true,
                // direction: 'vertical',
                speed: 1500
            },
            coverList: [],
            coverOne: ""
        };
    },
    created() {
        const cover = this.cover
        if (cover) {
            if (Array.isArray(cover)) {
                if (cover.length > 1) {
                    cover.forEach(item => {
                        if (typeof item === "string") {
                            this.coverList.push({ url: item, alt: "" })
                        } else {
                            this.coverList.push(item)
                        }
                    })
                } else if (cover.length === 1) {
                    if (typeof cover[0] === "string") {
                        this.coverOne = { url: cover[0], alt: "" }
                    } else {
                        this.coverOne = cover[0]
                    }
                }
            } else if (typeof cover === "string") {
                this.coverOne = { url: cover, alt: "" }
            } else if (typeof cover === "object") {
                this.coverOne = cover
            }
        }

    }
}
</script>

<style>
.adv-card {
    margin-bottom: 114px;
}

.adv-card-wrapper {
    display: flex;
    justify-content: center;
    align-items: stretch;
    max-width: 1366px;
    margin: 0 auto;
    border: 1px solid #0f0f80;
    border-radius: 5px;
    background-color: #f7f7f7;
}

.adv-img {
    position: relative;
}

.adv-img1 {
    position: relative;
    border: 1px solid #0f0f80;
    border-radius: 5px;
    background-color: #fff;
    width: 444px;
    height: 275px;
    margin: -24px 92px 24px 12px;
}

.adv-img2 {
    position: relative;
    border: 1px solid #0f0f80;
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    margin-top: -24px;
    margin-left: 12px;
    overflow: hidden;
}

.adv-img img {
    width: 100%;
    height: 100%;
    opacity: 0;
}

.adv-index img {
    width: 72px;
    height: 72px;
    margin: 25px 25px 25px 80px;
}

.adv-content {
    flex: 1;
}

/* .adv-card.row-odd {
    background-color: #EBEDF0;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
} */

.adv-card.row-even .adv-card-wrapper {
    flex-direction: row-reverse;
}


.row-even .adv-img1 {
    margin-left: 92px;
    margin-right: 12px;
}

.row-even .adv-img2 {
    margin-left: -12px;
    overflow: hidden;
}

.row-even .adv-index img {
    width: 72px;
    height: 72px;
    margin-left: 25px;
    margin-right: 80px;
}


.adv-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 42px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    line-height: 1;
}

.adv-title img {
    width: 72px;
    height: 72px;
    margin-right: 24px;
    display: none;
}

.adv-text {
    font-size: 14px;
    margin-left: 40px;
    margin-bottom: 36px;
}

.adv-text p {
    margin: 0;
    line-height: 1.6;
}

.adv-text ul {
    margin: 0.5em 0;
    line-height: 1.5;
    padding-left: 1.5em;
}

@media screen and (max-width: 1279px) {
    .adv-img1 {
        margin-right: 56px;
    }

    .adv-content {
        margin-right: 36px;
    }

    .row-even .adv-img1 {
        margin-left: 56px;
    }

    .row-even .adv-content {
        margin-left: 36px;
        margin-right: 0;
    }

    .adv-title {
        margin-top: 18px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        line-height: 1;
    }

    .adv-title img {
        width: 72px;
        height: 72px;
        margin-right: 24px;
        display: block;
    }

    .adv-text {
        margin-left: 0;
    }

    .adv-index {
        display: none;
    }
}

@media screen and (max-width: 1024px) {
    .adv-img1 {
        width: 32.5vw;
        height: 20vw;
        margin-right: 6.5vw;
        margin-top: 48px;
    }

    .row-even .adv-img1 {
        margin-left: 6.5vw;
    }

    .adv-card {
        margin-bottom: 66px;
    }
}


@media screen and (max-width: 719px) {
    .adv-card-wrapper {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .adv-card.row-even .adv-card-wrapper {
        flex-direction: column;
    }

    .adv-img1 {
        width: 100%;
        height: 100%;
        margin-left: 0 !important;
        margin-right: 0 !important;
        margin-top: 0;
        border: 0;
        border-radius: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .adv-img2 {
        /* 图片调整为9:16 */
        margin: -5% 0 !important;
        border: 0;
        border-radius: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .adv-content {
        margin-left: 18px !important;
        margin-right: 18px !important;
    }

    .adv-title {
        margin-top: 0;
        font-size: 18px;
    }

    .adv-title img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
}
</style>
