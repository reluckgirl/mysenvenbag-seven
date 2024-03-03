// 引入国际化库
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const path = require('path');

// 初始化国际化库
i18next
    .use(Backend)
    .init({
        backend: {
            // 指定翻译文件的路径
            loadPath: path.join(__dirname, 'locales', '{{lng}}', '{{ns}}.json')
        },
        // 默认语言
        lng: 'en',
        // 支持的语言列表
        fallbackLng: ['en', 'zh'],
        debug: true
    });

// 设置语言
i18next.changeLanguage('en', (err, t) => {
    // 当前语言为英语
    console.log(t('welcome')); // 输出：Welcome to the application!
});

// 切换语言
i18next.changeLanguage('zh', (err, t) => {
    // 当前语言为中文
    console.log(t('welcome')); // 输出：欢迎使用应用程序！
});
