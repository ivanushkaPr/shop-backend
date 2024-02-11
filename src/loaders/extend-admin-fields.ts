export default async function () {
    const imports = (await import(
        "@medusajs/medusa/dist/api/routes/admin/products/index"
        )) as any;

    console.log(imports);
    imports.allowedAdminProductFields = [
        ...imports.defaultAdminProductFields,
        "album",
        "label",
        "genre",
    ]
    imports.defaultAdminProductFields = [
        ...imports.defaultAdminProductFields,
        "album",
        "label",
        "genre"
    ]
}