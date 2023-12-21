interface configState {
  iconfonrUrl: string

}
const config: configState = {
  iconfonrUrl: '//at.alicdn.com/t/c/font_3114416_4c7c9dl4ugp.js',
}
const metaEnv: any = import.meta.env
const isEnv = metaEnv.MODE === 'development'
let baseUrl: string
let adminUrl: string

console.log({ metaEnv, })

if (metaEnv.MODE === 'production') {
  baseUrl = metaEnv.VITE_NUXT_BASE_URL
  adminUrl = metaEnv.VITE_NUXT_ADMIN_URL
} else {
  baseUrl = metaEnv.VITE_NUXT_PREFIX_PATH
  adminUrl = metaEnv.VITE_NUXT_ADMIN_URL
}
export { baseUrl, adminUrl, isEnv }
export default config
