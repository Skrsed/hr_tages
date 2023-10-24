import { CommentView } from './comment'
import { User } from './user'

export type Post = {
    id: number,
    title: string,
    // короткий заголовок (20 символов + троеточие)
    title_crop: string
    body: string
    userId: User['id'],
    comments: Comment[]
}

export type PostView = Omit<Post, 'userId' | 'comments'> & {
    comments: CommentView[]
}