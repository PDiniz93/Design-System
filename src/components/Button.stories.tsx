import {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps } from './Button'

export default{ //configurações globais para todas as variações
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button Component', //padrões
        
    },
    argTypes : {}
    
}as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {} //modelo padrão
