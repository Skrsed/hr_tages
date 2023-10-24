import { Comment } from '../../core/domain/comment'

export type UserRes = {
    id: number
    name: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string
    },
    website: string,
    company: {
        name: string
    }
}

export type PostRes = {
    id: number,
    title: string,
    body: string,
    userId: UserRes['id']
}

export type CommentRes = Comment