export interface ReturnedProduct {
    id: number,
    tradeName: string,
    customer: string,
    purchaseDate: Date,
    returnDate: Date,
    returnQTY: number,
    fileData: number,
    createdAt: Date,
    updatedAt: Date,
    createdBy: number,
    updatedBy: number,
    isActive: Boolean,
    deleted: Boolean
}
