import React, {useReducer} from 'react'
import {MainContext} from './mainContext'
import {mainReducer} from './mainReducer'
import {baseFetch} from '../../service/service'
import groupBy from 'lodash/groupBy'
import mapValues from 'lodash/mapValues'

export const MainState = ({children}) => {
    const initialState = {
        data: {},
        itemsOnPage: 10,
        isLoading: false,
        settings: [
            {id: 'sort', title: 'Сортировать', type: 'radio', name: 'sort', key: Math.random(), inputs: [
                    {id: 'ascending', key: Math.random(), label: '- по возрастанию цены'},
                    {id: 'descending', key: Math.random(), label: '- по убыванию цены'},
                    {id: 'timeInFlight', key: Math.random(), label: '- по времени в пути'}
                ]},
            {id: 'filter', title: 'Фильтровать', type: 'checkbox', name: 'filter', key: Math.random(), inputs: [
                    {id: 'oneTransfer', key: Math.random(), label: '- 1 пересадка'},
                    {id: 'noTransfers', key: Math.random(), label: '- без пересадок'}
                ]},
            {id: 'price',title: 'Цена', type: 'number', name: 'price', key: Math.random(), inputs: [
                    {id: 'startPrice', key: Math.random(), label: 'От', placeholder: '0'},
                    {id: 'endPrice', key: Math.random(), label: 'До', placeholder: '10000'}
                ]}
        ],
        filters: {
            sort: null,
            filter: [],
            price: {
                startPrice: null,
                endPrice: null
            },
            airlines: []
        },
        filteredData: {}
    }

    const [state, setState] = useReducer(mainReducer, initialState)

    const getData = () => {
        setLoading()
        const response = baseFetch()

        setState({
            data: response.result,
            filteredData: response.result,
            settings: [...state.settings, {id: 'airlines', title: 'Авиакомпании', type: 'checkbox', name: 'airlines', key: Math.random(), ...getBestPrices(response.result.bestPrices)}],
            isLoading: false
        })
    }

    const showMore = () => {
        setLoading()

        setState({itemsOnPage: state.itemsOnPage + 10, isLoading: false})
    }

    const getBestPrices = flights => {
        const direct = flights.DIRECT.bestFlights
        const oneConnection = flights.ONE_CONNECTION.bestFlights

        let directMapped = direct.map(item => ({
            id: item.carrier.uid,
            price: trimNumber(item.price.amount),
            label: `- ${trimString(item.carrier.caption)} от ${trimNumber(item.price.amount)}`,
            direct: 'yes',
            key: Math.random()
        }))

        let oneConnectionMapped = oneConnection.map(item => ({
            id: item.carrier.uid,
            price: trimNumber(item.price.amount),
            label: `- ${trimString(item.carrier.caption)} от ${trimNumber(item.price.amount)}`,
            direct: 'no',
            key: Math.random()
        }))

        directMapped = mapValues(groupBy(directMapped, 'id'))

        oneConnectionMapped = mapValues(groupBy(oneConnectionMapped, 'id'))

        const directBestFlights = []
        const oneConnectionBestFlights = []

        Object.keys(directMapped).map(airline => {
            directMapped[airline].filter((a, b) => b - a)
            directBestFlights.push(directMapped[airline][0])
        })

        Object.keys(oneConnectionMapped).map(airline => {
            oneConnectionMapped[airline].filter((a, b) => b - a)
            oneConnectionBestFlights.push(oneConnectionMapped[airline][0])
        })

        let commonBestPrices = [...directBestFlights, ...oneConnectionBestFlights]
        commonBestPrices = mapValues(groupBy(commonBestPrices, 'id'))
        const commonBestPricesFiltered = Object.keys(commonBestPrices).map(id => {
            commonBestPrices[id].sort((a, b) => a.price - b.price)
            return commonBestPrices[id][0]
        })

        return {bestPrices: commonBestPrices, inputs: Object.values(commonBestPricesFiltered)}
    }

    const trimNumber = number => {
        return number.split('.')[0]
    }

    const trimString = str => {
        return str.length > 11 ? str.substr(0, 11) + '...' : str
    }

    const changeHandler = (name, filter, value) => {
        const filters = {...state.filters}

        if (name === 'sort') {
            filters[name] = filter
        }
        if (name === 'filter') {
            if (!filters[name].includes(filter)) {
                filters[name].push(filter)
            } else {
                const i = filters[name].indexOf(filter)
                filters[name].splice(i , 1)
            }
        }
        if (name === 'price') {
            filters.price[filter] = value === '' ? null : +value
        }
        if (name === 'airlines') {
            if (!filters[name].includes(filter)) {
                filters[name].push(filter)
            } else {
                const i = filters[name].indexOf(filter)
                filters[name].splice(i , 1)
            }
        }

        setState({filters})

        const filteredData = dataFilter(filters)
        setState({filteredData: {flights: filteredData}})
    }

    const dataFilter = filters => {
        let flights = [...state.data.flights]

        //Фильтр авиакомпаний
        if (filters.airlines.length) {
            let carriers = []

            filters.airlines.map(airline => {
                const carrier = flights.filter(f => {
                    return f.flight.carrier.uid === airline
                })
                carriers = [...carriers, ...carrier]
            })

            flights = carriers
        }

        //Фильтры "с 1 пересадкой" и "без пересадок"
        if (filters.filter[0] === 'noTransfers' && !(filters.filter.length > 1)) {
            flights = flights.filter(f => {
                return f.flight.legs[0].segments.length === 1 && f.flight.legs[1].segments.length === 1
            })
        } else if (filters.filter[0] === 'oneTransfer' && !(filters.filter.length > 1)) {
            flights = flights.filter(f => {
                return f.flight.legs[0].segments.length > 1 || f.flight.legs[1].segments.length > 1
            })
        }

        //Фильтры цены
        if (filters.price.startPrice !== null) {
            flights = flights.filter(f => {
                return f.flight.price.total.amount > filters.price.startPrice
            })
        }
        if (filters.price.endPrice !== null) {
            flights = flights.filter(f => {
                return f.flight.price.total.amount < filters.price.endPrice
            })
        }

        //Фильтры сортировки
        if (filters.sort === 'ascending') {
            flights = flights.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
        }
        if (filters.sort === 'descending') {
            flights = flights.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
        }
        if (filters.sort === 'timeInFlight') {
            flights = flights.sort((a, b) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration))
        }

        return flights
    }

    const setLoading = () => setState({isLoading: true})

    const {itemsOnPage, isLoading, settings, filters, filteredData} = state

    return (
        <MainContext.Provider value={{
            setLoading, getData, showMore, changeHandler,
            itemsOnPage, isLoading, settings, filters, filteredData
        }}>
            {children}
        </MainContext.Provider>
    )
}
