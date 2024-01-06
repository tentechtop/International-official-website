export default {
    mounted(el, binding) {
        el.addEventListener('mouseenter', () => {
            // 检查是否已经存在一个按钮
            let copyButton = el.querySelector('button');
            // 如果不存在，就创建一个新的
            if (!copyButton) {
                copyButton = document.createElement('button');
                copyButton.innerText = '';
                copyButton.className = 'copyMessageButton';  // 添加类名
                copyButton.addEventListener('click', () => {
                    navigator.clipboard.writeText(el.innerText);
                    copyButton.className = 'alreadyCopied';  // 添加类名
                });
                el.appendChild(copyButton);
            }
        });

        el.addEventListener('mouseleave', () => {
            const copyButton = el.querySelector('button');
            if (copyButton) {
                el.removeChild(copyButton);
            }
        });
    },
};
