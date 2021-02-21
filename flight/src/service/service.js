import data from '../data/flights.json'

// Иммитация fetching-а данных с сервера, не обрабатываем ошибки так как предполагаем, что файл точно пришел к нам

export const baseFetch = () => {
     return data
}