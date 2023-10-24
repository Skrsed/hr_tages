import { Post } from "./post"

export type Comment = {
    id: number, // json:"id" example:"1"
    name: string, // json:"name" example:"Leanne Graham"
    email: string, // json:"email" example:"Sincere@april.biz"
    body: string // json:"body" example:"quia et suscipit\nsuscipit recusandae ..."
    postId: Post['id']  // json:"-"
}