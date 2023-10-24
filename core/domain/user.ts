import { Post } from './post'

export type User = {
    id: number,
    name: string,
    email: string,
    // объединение полей city, street, suit
    address: string,
    // добавление статичного протокола "https://" для корректной работы ссылки
    website: string,
    // только поле name
    company: string,
    posts: Post[]
} 