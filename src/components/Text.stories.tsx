import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './Text'

export default{ //configurações globais para todas as variações
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum', //padrões
        size: 'md',
    },
    argTypes : {
        size: {
            options: ['sm','md', 'lg' ],
            control: {
                type: 'inline-radio'
            }
            
            
        }
    }
    
}as Meta<TextProps>

export const Default: StoryObj<TextProps> = {} //modelo padrão

export const Small: StoryObj = { //variação 1 componente texto
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj = { //variação 2 componente texto
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> =  {
args: {
    asChild: true,
    children: (
        <p>Testando</p>
)
},
    argTypes: {
        children: {
            control : {
                disable: true, 
            }
        }       
    }
}