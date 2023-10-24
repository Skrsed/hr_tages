import { Post } from './post'

export type User = {
    id: number, // json:"id" example:"1"
    name: string, // json:"name" example:"Leanne Graham"
    email: string, // json:"email" example:"Sincere@april.biz"
    // объединение полей city, street, suit
    address: string, // json:"address" example:"Gwenborough, Kulas Light, Apt. 556"
    // добавление статичного протокола "https://" для корректной работы ссылки
    website: string, // json:"website" example:"https://hildegard.org"
    // только поле name
    company: string, //json:"company" example:"Romaguera-Crona"
    posts: Post[]  // json:"-"
} 