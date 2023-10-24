import { fetchUsers } from "../../adapter/fetcher/user"
import { fetchPosts } from '../../adapter/fetcher/posts'
import { fetchCommentsByPostId } from "../../adapter/fetcher/comments"
import { User } from "../domain/user"
import { Post } from "../domain/post"
import { Comment } from "../domain/comment"

export const getUsersWithPostsAndComments = async (): Promise<User[]> => {
    let users = await fetchUsers()
    let posts = await fetchPosts()

    let usersPopulated = users
        .map((user) => {
            const { id, ...rest } = user
            return <User>{
                id,
                ...rest,
                posts: posts
                    .filter(({ userId }: Post) => user.id === userId)
            }
        })

    const ervinHowell = usersPopulated.find(isErvinHowell)
    if (!ervinHowell) return usersPopulated

    const ervinHowellPostsIds = ervinHowell.posts.map(({ id }) => id)
    const commentsCalls = ervinHowellPostsIds.map((id) => {
        return fetchCommentsByPostId(id)
    })
    const comments = await Promise.all(commentsCalls)
    const ervinHowellPopulated = <User>{
        ...ervinHowell,
        posts: ervinHowell.posts.map(({ id, ...rest }) => {
            return <Post>{
                id,
                ...rest,
                comments: comments
                    .flat()
                    .filter(({ postId }: Comment) => postId === id)
            }
        })
    }

    return [
        ervinHowellPopulated,
        ...usersPopulated
    ]
}

const isErvinHowell = ({ name }: User): boolean => {
    return name == 'Ervin Howell'
}
