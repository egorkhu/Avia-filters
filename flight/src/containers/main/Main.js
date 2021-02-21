import React, {useEffect, useContext} from 'react'
import {
    CardDirection,
    CardHeader,
    CardWrapper, Carrier,
    DateTime,
    InfoHeader,
    InfoPass,
    InfoPrice, Loading,
    MainWrapper,
    Route, ShowMore,
    Transfer
} from './styled'
import {convertDuration, parseDate} from './utils/utils'
import {MainContext} from '../../context/main/mainContext'

export const Main = () => {
    const {getData, filteredData, itemsOnPage, isLoading, showMore} = useContext(MainContext)
    useEffect(() => {
        getData()
        //eslint-disable-next-line
    },[])

    if (isLoading) {
        return <Loading>Загрузка...</Loading>
    }

    return (
        <MainWrapper>
            {
                filteredData.flights?.map((flight, index) => {
                    if (index <= itemsOnPage - 1) {
                        const f = flight.flight
                        return (
                            <CardWrapper key={flight.flightToken}>
                                <CardHeader>
                                    <InfoHeader>
                                        <InfoPrice>{f.price.total.amount} ₽</InfoPrice>
                                        <InfoPass>Стоимость для одного взрослого пассажира</InfoPass>
                                    </InfoHeader>
                                </CardHeader>
                                {
                                    f.legs.map((leg, index) => (
                                        <React.Fragment key={f.price.total.amount + leg.segments[0].flightNumber}>
                                            <CardDirection>
                                                <Route>
                                                    <span>{leg.segments[0].departureCity?.caption}, {leg.segments[0].departureAirport.caption}
                                                        <span> ({leg.segments[0].departureAirport.uid})</span></span>
                                                    <span className="arrow"/>
                                                    {
                                                        leg.segments.length > 1
                                                            ? <span>{leg.segments[1].arrivalCity?.caption}, {leg.segments[1].arrivalAirport.caption}<span> ({leg.segments[1].arrivalAirport.uid})</span></span>
                                                            : <span>{leg.segments[0].arrivalCity.caption}, {leg.segments[0].arrivalAirport.caption}<span> ({leg.segments[0].arrivalAirport.uid})</span></span>

                                                    }
                                                </Route>
                                                <hr/>
                                                <DateTime>
                                                    <span>{parseDate(leg.segments[0].departureDate).time}
                                                    <span> {parseDate(leg.segments[0].departureDate).date}</span></span>
                                                    <span className="time">{convertDuration(leg.duration)}</span>
                                                    {
                                                        leg.segments.length > 1
                                                            ? <span><span>{parseDate(leg.segments[1].arrivalDate).date}</span> {parseDate(leg.segments[1].arrivalDate).time}</span>
                                                            : <span><span>{parseDate(leg.segments[0].arrivalDate).date}</span> {parseDate(leg.segments[0].arrivalDate).time}</span>
                                                    }
                                                </DateTime>
                                                <Transfer>
                                                    <hr/>
                                                    {
                                                        leg.segments.length > 1 && (
                                                            <>
                                                                <p>1&nbsp;пересадка</p>
                                                                <hr/>
                                                            </>
                                                        )
                                                    }
                                                </Transfer>
                                                <Carrier>Рейс выполняет: {leg.segments[0].airline.caption}</Carrier>
                                            </CardDirection>
                                            {
                                                index === 0 ? <hr/> : null
                                            }
                                        </React.Fragment>
                                    ))
                                }
                                <button>{'Выбрать'.toUpperCase()}</button>
                            </CardWrapper>
                        )
                    }
                })
            }
            {
                filteredData.flights?.length > itemsOnPage
                    ? <ShowMore onClick={() => showMore()}>Показать еще</ShowMore>
                    : null
            }
        </MainWrapper>
    )
}