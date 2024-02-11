import { registerOverriddenValidators } from "@medusajs/medusa"
import {
    AdminPostProductsReq as MedusaAdminPostProductsReq,
} from "@medusajs/medusa/dist/api/routes/admin/products/create-product"
import { IsString } from "class-validator"

class AdminPostProductsReq extends MedusaAdminPostProductsReq {
    @IsString()
    album: string

    @IsString()
    label: string

    @IsString()
    genre: string
}

registerOverriddenValidators(AdminPostProductsReq)
