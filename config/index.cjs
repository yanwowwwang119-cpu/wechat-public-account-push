/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
// wyw的课程表
const OTHER_COURSES = [
  ['【08:00-11:30】地理教学设计与实施（立C102）'], // 周一
  ['【08:50-12:20】课程与教学论（立C101）','【14:00-17:30】中国式现代化理论与实践（劝C506）'], // 周二
  ['【14:00-17:30】教育研究方法（劝A311）'],                 // 周三
  ['今天没课，好好休息呀'],                   // 周四
  ['【14:00-17:30】教育原理（劝C206）'],                   // 周五
  ['今天没课，好好休息呀'],              // 周六
  ['今天没课，好好休息呀']               // 周日
]

// 使用北京时间，避免 GitHub 服务器时区影响
const weekday = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Shanghai',
  weekday: 'short'
}).format(new Date())

const dayIndex = [
  'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
].indexOf(weekday)

const otherToday = OTHER_COURSES[dayIndex] || []

// 按条生成微信模板字段，至少预留四条
const otherCourseSlots = Array.from(
  { length: Math.max(4, otherToday.length) },
  (_, index) => ({
    keyword: `other_course_${index}`,
    contents: otherToday[index] || (
      index === 0 && otherToday.length === 0
        ? '今天没课，好好休息呀'
        : ''
    )
  })
)
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9764e3a1fa7f244e',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8163c4057ada41abd1cf735c51a34a1a',

  PROVINCE: '天津',
  CITY: '天津',

  // 小窝的今日课程
SLOT_LIST: otherCourseSlots,
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '小窝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oI6z32-thaOTxjmHmWkg2R8ZkWE0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '7oPKExrPjl8CChe9sqctOpVDxSPpW4RyFhBshJD0BnE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小窝', year: '2002', date: '12-21',
        },
        {
          type: '生日', name: '小佳', year: '2002', date: '12-29',
        },
        {
          type: '节日', name: '纪念日', year: '2024', date: '11-09',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-11-09' },
        // 小窝生日
        { keyword: 'wx_birthday_0', date: '2002-12-21' },
        // 小佳生日
        { keyword: 'wx_birthday_1', date: '2002-12-29' },
      ],
      
      // 小佳的课程表
      courseSchedule: {
        benchmark: {
          // 示例：一个已知属于单周的周一
          date: '2026-09-07',
          isOdd: true
        },
        courses: {
          // 单周：依次为周一到周日
          odd: [
            ['今天没课，专注工作'], // 周一
            ['今天没课，专注工作'], // 周二
            ['【14:00-15:50】跆拳道助教(综合训练馆)'],// 周三
            ['今天没课，专注工作'], // 周四
            ['【10:20-12:10】行星科学基础（智华楼113）'],// 周五
            ['今天没课，好好休息呀'],              // 周六
            ['今天没课，好好休息呀']               // 周日
          ],

          // 双周：依次为周一到周日
          even: [
            ['今天没课，专注工作'], // 周一
            ['【14:00-15:50】行星科学基础（智华楼113）'], // 周二
            ['【14:00-15:50】跆拳道助教(综合训练馆)'],// 周三
            ['今天没课，专注工作'], // 周四
            ['【10:20-12:10】行星科学基础（智华楼113）'],// 周五
            ['今天没课，好好休息呀'],              // 周六
            ['今天没课，好好休息呀']               // 周日
          ]
        }
      },
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0MoyJbG581W-bxwRpk8xxiSEBbPsGmKYsSgPvhH2w8s',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oI6z32zVXQviIn-rRiQdXnFcx6ZA',
    }
  ],

}

module.exports = USER_CONFIG

