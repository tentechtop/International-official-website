const langs: any = {
    'cn': 'cn',
}



const LANG_ENV = process.env.LANG_ENV

const CURRENT_LANG_ENV: string = LANG_ENV && langs.hasOwnProperty(LANG_ENV) ? LANG_ENV : 'cn'

const LANG = langs.hasOwnProperty(CURRENT_LANG_ENV) ? langs[CURRENT_LANG_ENV] : langs.cn

const NODE_ENV = process.env.NODE_ENV


console.error("打包环境: "+NODE_ENV,"   语言环境: "+ LANG_ENV,"   主要语言: "+ LANG)
export default defineNuxtConfig({
    buildDir: LANG_ENV ? ('.nuxt-' + LANG_ENV) : '.nuxt',
    build: {
        // transpile: [/vue3-library-reproduction/]
        /* meta: {
            name: 'kwunphi',
            version: '4.0.0'
        } */
    },
    nitro: {
        output: LANG_ENV ? {
            dir: '../.output-' + LANG_ENV,
            serverDir: '../.output-' + LANG_ENV + '/server',
            publicDir: '../.output-' + LANG_ENV + '/public'
        } : {
            dir: '../.output',
            serverDir: '../.output/server',
            publicDir: '../.output/public'
        },
        devProxy: {
            "/api": {
                //要访问的跨域的域名
                target: "http://192.168.2.213:80/api",
                changeOrigin: true,
                // @ts-ignore
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    ssr: true,
    app: {
        head: {
            title: 'Kwunphi',
            htmlAttrs: {
                //lang: LANG,
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'keywords', name: 'keywords', content: '' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                // { rel: "stylesheet", type: "text/css", href: '@/assets/iconfont/iconfont.css' }
            ],
            script: [
                // { src: '@/assets/iconfont/iconfont.js', type: 'text/javascript' },
                // 引入百度统计 https://tongji.baidu.com/
                /*{ src: 'https://hm.baidu.com/hm.js?bbe5df24e1c24e850d281175d369d6d0' },*/
                // { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js' }
                // {
                //     //type: 'type/javascript',
                //     src: 'https://api.map.baidu.com/getscript?v=2.0&ak=AUP3eN9CHqxqQm0DPM0Vm9hFPSqljRqo'
                // }
                // {
                //     src: 'https://webapi.amap.com/maps?v=2.0&key=57c56b646db5005d46733a1ec1c29a12'
                // }
            ]
        },
        // automatic transition，转场动画 晃眼睛而且性能差
        pageTransition: {
            name: 'scale',
            appear: true,
            mode: 'out-in', }
    },
    css: ["@/assets/main.css",
        "@/assets/iconfont/iconfont.css",
        "@/styles/index.less",
        "animate.css/animate.css"
    ],
    plugins: [
        // { src: "@/assets/iconfont/iconfont.js", mode: "client" }
        "@/plugins/Directives",
    ],
    modules: [
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@tailvue/nuxt',
        '@element-plus/nuxt',
    ],
    i18n: {
        strategy: 'prefix_except_default',
        locales: [ {
            code: 'cn',
            iso: 'cn',
            domain: NODE_ENV === 'production' ? 'https://www.kwunphi.com' : ''
            // domain: 'https://www.tentech.top'
        }],
        // differentDomains: NODE_ENV === 'production',
        differentDomains: false,
        defaultLocale: LANG,
        vueI18n: './plugins/i18n/vueI18n.ts'
    },


})
