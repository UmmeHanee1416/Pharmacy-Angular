export interface Purchase {
    id: number,
    productId: string,
    generics: number,
    genericName: string,
    companyId: string,
    batchId: string,
    purchaseQuantity: number,
    purchaseDate: Date,
    MRP: number
}
