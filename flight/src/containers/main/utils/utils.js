export const parseDate = date => {
    const ms = Date.parse(date)
    const parsedDate = new Date(ms)
    return {
        date: `${parsedDate.getDate()} ${convertMonth(parsedDate.getMonth())} ${convertDay(parsedDate.getDay())}`,
        time: `${parsedDate.getHours()}:${(parsedDate.getMinutes() < 10 ? '0' : '') + parsedDate.getMinutes()}`
    }
}

export const convertDuration = dur => {
    const hours = ~~(dur / 60)
    const min = Math.round(((dur / 60) - (~~(dur / 60))) * 60)

    return `${hours} ч ${min === 0 ? '' : min + ' мин'}`
}

const convertMonth = number => {
    const months = [
        'янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'
    ]
    return months[number]
}

const convertDay = number => {
    const days = [
        'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'
    ]
    return days[number]
}