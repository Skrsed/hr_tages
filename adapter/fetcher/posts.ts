import { api } from './api'
import { PostRes } from './types'
import { Post } from '../../core/domain/post'

export const fetchPosts =
    async (): Promise<Post[]> => {
        try {
            const posts = await api<PostRes[]>(`/posts`)

            return deserialize(posts)
        } catch (error) {
            console.log(error)
        }

        return []
    }

const deserialize = (postsRes: PostRes[]): Post[] => {
    return postsRes.map(postsRes => {
        return <Post>{
            ...postsRes,
            title_crop: postsRes.title.slice(0, 20) + '…'
        }
    })
}