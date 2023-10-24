import { User } from "./user"

export type Post = {
    id: number, // json:"id" example:"1"
    title: string,// json:"title" example:"sunt aut facere...",
    // короткий заголовок (20 символов + троеточие)
    title_crop: string// json:"title" example:"sunt aut facere repe...", 
    body: string// json:"body" example:"quia et suscipit\nsuscipit recusandae ..."
    userId: User['id'], // json:"-"
}