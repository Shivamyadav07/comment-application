import { Input } from '@chakra-ui/react'
import React from 'react'

export const CommentInput = () => {
    return (
        <div>
            <Input variant={'flushed'} width={'sm'} outline={"black"} size={"lg"} placeholder='Add Comment...'/>
        </div>
    )
}
