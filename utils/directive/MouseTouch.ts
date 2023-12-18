export default {
    mounted(el, binding) {
        el.addEventListener('touchstart', () => {
            console.log('鼠标触摸');
            // 添加指定的 CSS 类
            el.classList.add('animate__fadeInBottomLeft');
        });
    }
}
