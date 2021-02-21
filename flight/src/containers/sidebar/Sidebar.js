import React, {useContext} from 'react'
import {Settings, SettingsBlock, SidebarWrapper} from './styled'
import {Input} from '../../components/Input/Input'
import {MainContext} from '../../context/main/mainContext'

export const Sidebar = () => {
    const {settings, filters, changeHandler} = useContext(MainContext)

    return (
        <SidebarWrapper>
            <Settings>
                {
                    settings.map(item => (
                        <SettingsBlock key={item.key} id={item.id}>
                            <h3>{item.title}</h3>
                            {
                                item.inputs?.map(input => (
                                        <Input key={input.key}
                                               id={input.id}
                                               type={item.type}
                                               name={item.name || null}
                                               label={input.label}
                                               //disabled={!!((filters.filter.includes('noTransfers') && input.direct === 'no') || (filters.filter.includes('oneTransfer') && input.direct === 'yes'))}
                                               placeholder={input.placeholder || null}
                                               onChange={e => changeHandler(item.name, input.id, e.target.value)}
                                        />
                                    )
                                )
                            }
                        </SettingsBlock>
                    ))
                }
            </Settings>
        </SidebarWrapper>
    )
}