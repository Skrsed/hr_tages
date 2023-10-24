import { api } from './api'
import { CommentRes } from './types'
import { Comment } from '../../core/domain/comment'

export const fetchCommentsByPostId =
    async (id: number): Promise<Comment[]> => {
        try {
            const comments = await api<CommentRes[]>(`/posts/${id}/comments`)

            return comments
        } catch (error) {
            console.log(error)
        }

        return []
    }