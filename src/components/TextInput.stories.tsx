import {Meta, StoryObj} from '@storybook/react'
import { TextInput, TextInputProps, TextInputRootProps } from './TextInput'
import { Envelope } from 'phosphor-react'

export default{ //configurações globais para todas as variações
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your email'/>

        ],
    },
    argTypes : {
        argTypes: {
            children: {
                control : {
                    disable: true, 
                }
            }       
        }
    }
    
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {} //modelo padrão

export const WithoutIcon : StoryObj<TextInputRootProps> = {
    args:{
        children: <TextInput.Input placeholder= 'Type your e-mail address' />
    }
} //modelo sem ícone