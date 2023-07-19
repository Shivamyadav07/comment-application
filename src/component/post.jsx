import { Button, Card, CardBody, CardFooter, Image } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import React from 'react'
import { CommentInput } from './commentInput'
import {Comment} from './comment'

export const Post = () => {
    return (
        <div>
            <Card width='md'>
                <CardBody>
                    <Image
                        objectFit='cover'
                        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Chakra UI'
                    />
                </CardBody>
                <CardFooter>
                    <Comment />
                    <CommentInput />
                </CardFooter>
            </Card>
        </div>
    )
}
