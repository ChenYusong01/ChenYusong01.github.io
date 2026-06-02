/**
 * 日程看板数据配置文件
 * 数据结构说明：
 *   - 顶层按"周一~周五"分组
 *   - 每个日程项包含：
 *     - id:        唯一标识（用于编辑/删除时定位）
 *     - time:      时间段，格式 "HH:MM - HH:MM"
 *     - duration:  持续时长描述（展示用）
 *     - title:     日程标题
 *     - type:      类型 - teaching(教学占用) / planned(规划任务) / free(空闲机动)
 *     - subTasks:  可选的子日程数组，结构与父日程一致（不再嵌套 subTasks）
 */
window.DEFAULT_SCHEDULE_DATA = {
    "周一": [
        { id: "mon-1",  time: "08:00 - 09:00", duration: "60'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "mon-2",  time: "09:00 - 09:35", duration: "35'",  title: "🏃 早操大课间", type: "teaching", subTasks: [] },
        { id: "mon-3",  time: "09:35 - 10:15", duration: "40'",  title: "📖 语文", type: "teaching", subTasks: [] },
        { id: "mon-4",  time: "10:15 - 10:30", duration: "15'",  title: "☕ 课间休息", type: "free", subTasks: [] },
        { id: "mon-5",  time: "10:30 - 10:35", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "mon-6",  time: "10:35 - 11:05", duration: "30'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "mon-7",  time: "11:05 - 11:25", duration: "20'",  title: "🍃 自由机动", type: "free", subTasks: [] },
        { id: "mon-8",  time: "11:25 - 12:00", duration: "35'",  title: "📖 语文", type: "teaching", subTasks: [] },
        { id: "mon-9",  time: "12:00 - 14:00", duration: "120'", title: "🍱 午休及午餐", type: "free", subTasks: [] },
        { id: "mon-10", time: "14:00 - 15:05", duration: "65'",  title: "📚 教案书写", type: "planned", subTasks: [] },
        { id: "mon-11", time: "15:05 - 15:10", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "mon-12", time: "15:10 - 15:45", duration: "35'",  title: "🍃 自由机动", type: "free", subTasks: [] },
        { id: "mon-13", time: "15:45 - 16:20", duration: "35'",  title: "🏃 下午大课间", type: "teaching", subTasks: [] },
        { id: "mon-14", time: "16:20 - 16:25", duration: "5'",   title: "🎒 放学", type: "free", subTasks: [] },
        { id: "mon-15", time: "16:25 - 17:05", duration: "40'",  title: "辅 课后作业辅导", type: "teaching", subTasks: [] },
        { id: "mon-16", time: "17:05 - 18:00", duration: "55'",  title: "📚 教案书写", type: "planned", subTasks: [] }
    ],
    "周二": [
        { id: "tue-1",  time: "08:00 - 08:20", duration: "20'",  title: "🍃 上班前空档", type: "free", subTasks: [] },
        { id: "tue-2",  time: "08:20 - 09:00", duration: "40'",  title: "📖 语文", type: "teaching", subTasks: [] },
        { id: "tue-3",  time: "09:00 - 09:35", duration: "35'",  title: "🏃 早操大课间", type: "teaching", subTasks: [] },
        { id: "tue-4",  time: "09:35 - 10:30", duration: "55'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "tue-5",  time: "10:30 - 10:35", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "tue-6",  time: "10:35 - 12:00", duration: "85'",  title: "📚 教案书写", type: "planned", subTasks: [] },
        { id: "tue-7",  time: "12:00 - 14:00", duration: "120'", title: "🍱 午休及午餐", type: "free", subTasks: [] },
        { id: "tue-8",  time: "14:00 - 14:15", duration: "15'",  title: "🍃 课前准备+广播", type: "free", subTasks: [] },
        { id: "tue-9",  time: "14:15 - 14:50", duration: "35'",  title: "📖 阅读/少队课", type: "teaching", subTasks: [] },
        { id: "tue-10", time: "14:50 - 15:05", duration: "15'",  title: "☕ 课间休息", type: "free", subTasks: [] },
        { id: "tue-11", time: "15:05 - 15:10", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "tue-12", time: "15:10 - 15:45", duration: "35'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "tue-13", time: "15:45 - 16:20", duration: "35'",  title: "🏃 下午大课间", type: "teaching", subTasks: [] },
        { id: "tue-14", time: "16:20 - 16:25", duration: "5'",   title: "🎒 放学", type: "free", subTasks: [] },
        { id: "tue-15", time: "16:25 - 17:00", duration: "35'",  title: "📚 教案书写", type: "planned", subTasks: [] },
        { id: "tue-16", time: "17:00 - 17:20", duration: "20'",  title: "🍃 自由机动", type: "free", subTasks: [] },
        { id: "tue-17", time: "17:20 - 18:00", duration: "40'",  title: "🎨 课后兴趣拓展", type: "teaching", subTasks: [] }
    ],
    "周三": [
        { id: "wed-1",  time: "08:00 - 09:00", duration: "60'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "wed-2",  time: "09:00 - 09:35", duration: "35'",  title: "🏃 早操大课间", type: "teaching", subTasks: [] },
        { id: "wed-3",  time: "09:35 - 10:15", duration: "40'",  title: "📖 语文", type: "teaching", subTasks: [] },
        { id: "wed-4",  time: "10:15 - 10:30", duration: "15'",  title: "☕ 课间休息", type: "free", subTasks: [] },
        { id: "wed-5",  time: "10:30 - 10:35", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "wed-6",  time: "10:35 - 11:10", duration: "35'",  title: "🧹 劳动", type: "teaching", subTasks: [] },
        { id: "wed-7",  time: "11:10 - 11:40", duration: "30'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "wed-8",  time: "11:40 - 12:00", duration: "20'",  title: "🍃 自由机动", type: "free", subTasks: [] },
        { id: "wed-9",  time: "12:00 - 14:00", duration: "120'", title: "🍱 午休及午餐", type: "free", subTasks: [] },
        { id: "wed-10", time: "14:00 - 15:05", duration: "65'",  title: "📚 教案书写", type: "planned", subTasks: [] },
        { id: "wed-11", time: "15:05 - 15:10", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "wed-12", time: "15:10 - 15:45", duration: "35'",  title: "🍃 自由机动", type: "free", subTasks: [] },
        { id: "wed-13", time: "15:45 - 16:20", duration: "35'",  title: "🏃 下午大课间", type: "teaching", subTasks: [] },
        { id: "wed-14", time: "16:20 - 16:25", duration: "5'",   title: "🎒 放学", type: "free", subTasks: [] },
        { id: "wed-15", time: "16:25 - 17:05", duration: "40'",  title: "辅 课后作业辅导", type: "teaching", subTasks: [] },
        { id: "wed-16", time: "17:05 - 18:00", duration: "55'",  title: "📚 教案书写", type: "planned", subTasks: [] }
    ],
    "周四": [
        { id: "thu-1",  time: "08:00 - 08:20", duration: "20'",  title: "🍃 上班前空档", type: "free", subTasks: [] },
        { id: "thu-2",  time: "08:20 - 09:00", duration: "40'",  title: "📖 语文", type: "teaching", subTasks: [] },
        { id: "thu-3",  time: "09:00 - 09:35", duration: "35'",  title: "🏃 早操大课间", type: "teaching", subTasks: [] },
        { id: "thu-4",  time: "09:35 - 10:30", duration: "55'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "thu-5",  time: "10:30 - 10:35", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "thu-6",  time: "10:35 - 12:00", duration: "85'",  title: "📚 教案书写", type: "planned", subTasks: [] },
        { id: "thu-7",  time: "12:00 - 14:00", duration: "120'", title: "🍱 午休及午餐", type: "free", subTasks: [] },
        { id: "thu-8",  time: "14:00 - 14:35", duration: "35'",  title: "📚 教案书写", type: "planned", subTasks: [] },
        { id: "thu-9",  time: "14:35 - 15:05", duration: "30'",  title: "🍃 自由机动", type: "free", subTasks: [] },
        { id: "thu-10", time: "15:05 - 15:10", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "thu-11", time: "15:10 - 15:45", duration: "35'",  title: "✍️ 书法", type: "teaching", subTasks: [] },
        { id: "thu-12", time: "15:45 - 16:20", duration: "35'",  title: "🏃 下午大课间", type: "teaching", subTasks: [] },
        { id: "thu-13", time: "16:20 - 16:25", duration: "5'",   title: "🎒 放学", type: "free", subTasks: [] },
        { id: "thu-14", time: "16:25 - 17:00", duration: "35'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "thu-15", time: "17:00 - 17:20", duration: "20'",  title: "🍃 自由机动", type: "free", subTasks: [] },
        { id: "thu-16", time: "17:20 - 18:00", duration: "40'",  title: "🎨 课后兴趣拓展", type: "teaching", subTasks: [] }
    ],
    "周五": [
        { id: "fri-1",  time: "08:00 - 09:00", duration: "60'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "fri-2",  time: "09:00 - 09:35", duration: "35'",  title: "🏃 早操大课间", type: "teaching", subTasks: [] },
        { id: "fri-3",  time: "09:35 - 10:15", duration: "40'",  title: "📖 语文", type: "teaching", subTasks: [] },
        { id: "fri-4",  time: "10:15 - 10:30", duration: "15'",  title: "☕ 课间休息", type: "free", subTasks: [] },
        { id: "fri-5",  time: "10:30 - 10:35", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "fri-6",  time: "10:35 - 12:00", duration: "85'",  title: "📚 教案书写", type: "planned", subTasks: [] },
        { id: "fri-7",  time: "12:00 - 14:00", duration: "120'", title: "🍱 午休及午餐", type: "free", subTasks: [] },
        { id: "fri-8",  time: "14:00 - 15:05", duration: "65'",  title: "🍃 自由机动", type: "free", subTasks: [] },
        { id: "fri-9",  time: "15:05 - 15:10", duration: "5'",   title: "👀 眼保健操", type: "teaching", subTasks: [] },
        { id: "fri-10", time: "15:10 - 15:40", duration: "30'",  title: "📝 作业批改", type: "planned", subTasks: [] },
        { id: "fri-11", time: "15:40 - 15:45", duration: "5'",   title: "🍃 自由机动", type: "free", subTasks: [] },
        { id: "fri-12", time: "15:45 - 16:20", duration: "35'",  title: "🏃 下午大课间", type: "teaching", subTasks: [] },
        { id: "fri-13", time: "16:20 - 16:25", duration: "5'",   title: "🎒 放学", type: "free", subTasks: [] },
        { id: "fri-14", time: "16:25 - 17:05", duration: "40'",  title: "辅 课后作业辅导", type: "teaching", subTasks: [] },
        { id: "fri-15", time: "17:05 - 17:40", duration: "35'",  title: "📚 教案书写", type: "planned", subTasks: [] },
        { id: "fri-16", time: "17:40 - 18:00", duration: "20'",  title: "🍃 自由机动", type: "free", subTasks: [] }
    ]
};
