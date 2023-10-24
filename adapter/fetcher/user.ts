import { api } from './api'
import { UserRes } from './types'
import { User } from '../../core/domain/user'

export const fetchUsers =
    async (): Promise<User[]> => {
        try {
            const users = await api<UserRes[]>(`/users`)

            return deserialize(users)
        } catch (error) {
            console.log(error)
        }

        return []
    }

const deserialize = (usersRes: UserRes[]): User[] => {
    return usersRes.map(usersRes => {
        const {
            id,
            name,
            email,
            address: {
                city,
                street,
                suite
            },
            company: { name: company },
        } = usersRes

        return <User>{
            id,
            name,
            email,
            address: [city, street, suite].join(', '),
            company
        }
    })
}