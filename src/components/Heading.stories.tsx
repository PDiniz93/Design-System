import {Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default{ //configurações globais para todas as variações
    title: 'Components/Heading',
    component: Heading,
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
    
}as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {} //modelo padrão

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

export const CustomComponent: StoryObj<HeadingProps> =  {
args: {
    asChild: true,
    children: (
        <h1>Heading with H1</h1>
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