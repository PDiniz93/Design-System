import {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps } from './Button'

export default{ //configurações globais para todas as variações
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Salvar', //padrões
        
    },
    argTypes : {}
    
}as Meta<ButtonProps>



export const Default: StoryObj<ButtonProps> = {} //modelo padrão
export const Button2: StoryObj<ButtonProps> = {} //modelo 2