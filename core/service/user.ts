import { fetchUsers } from "../../adapter/fetcher/user"
import { fetchPosts } from '../../adapter/fetcher/posts'
import { fetchCommentsByPostId } from "../../adapter/fetcher/comments"
import { User, UserView } from "../domain/user"
import { Post, PostView } from "../domain/post"
import { Comment, CommentView } from "../domain/comment"

export const getUsersWithPostsAndComments = async (): Promise<UserView[]> => {
    const users = await fetchUsers()
    const posts = await fetchPosts()

    const usersPopulated: UserView[] = users.map((user) => {
        const { id, ...rest } = user
        const userPostsMap: PostView[] = posts
            .filter(({ userId }) => user.id === userId)
            .map(({ userId, ...restPost }): PostView => {
                return {
                    ...restPost,
                    comments: []
                }
            })

        return {
            id,
            ...rest,
            posts: userPostsMap
        }
    })

    const ervinHowell = usersPopulated.find(isErvinHowell)
    if (!ervinHowell) return usersPopulated

    const ervinHowellPostsIds = ervinHowell.posts.map(({ id }) => id)
    const commentsCalls = ervinHowellPostsIds.map((id) => {
        return fetchCommentsByPostId(id)
    })
    const comments = await Promise.all(commentsCalls)
    const ervinHowellPosts: PostView[] = ervinHowell.posts
        .map(({ id, ...rest }) => {
            const filteredComents = comments
                .flat()
                .filter(({ postId }: Comment) => postId === id)

            const omitedComments: CommentView[] =
                filteredComents
                    .map(({ postId, ...rest }): CommentView => {
                        return {
                            ...rest
                        }
                    })

            return {
                id,
                ...rest,
                comments: omitedComments
            }
        })
    const ervinHowellPopulated: UserView = {
        ...ervinHowell,
        posts: ervinHowellPosts
    }

    return <UserView[]>[
        ervinHowellPopulated,
        ...usersPopulated
    ]
}

const isErvinHowell = (user: UserView): boolean => {
    const { name } = user
    return name === 'Ervin Howell'
}
