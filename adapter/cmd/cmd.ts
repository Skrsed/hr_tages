import { getUsersWithPostsAndComments } from "../../core/service/user"

export const WriteUsersToConsole = async () => {
    const limit = 10

    const users = await getUsersWithPostsAndComments()
    const slicedUsers = users.slice(0, limit)

    const str = JSON.stringify(slicedUsers, undefined, 2)

    console.info(str)
}