import React from 'react'
import {InputWrapper, StyledLabel} from './styled'

export const Input = props => (
    <InputWrapper id={props.id}>
        {
            props.type === "number" ? <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel> : null
        }
        <input
            type={props.type}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
            //disabled={props.disabled}
        />
        {
            props.type === "number" ? null : <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
        }
    </InputWrapper>
)