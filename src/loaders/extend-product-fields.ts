export default async function () {
    const imports = (await import(
        "@medusajs/medusa/dist/api/routes/store/products/index"
        )) as any
    imports.allowedStoreProductsFields = [
        ...imports.allowedStoreProductsFields,
        "album",
        "label",
        "genre",
    ]
    imports.defaultStoreProductsFields = [
        ...imports.defaultStoreProductsFields,
        "album",
        "label",
        "genre",
    ]
}