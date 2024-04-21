export interface Products {
    id:number,
    tradeName: string,
    companyName: string,
    regsrtQuantity: number,
    soldQuantity: number,
    remainedQuantity: number,
    mfd: Date,
    exp: Date,
    sellPrice: number,
    generics: number,
    genericName: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: number,
    updatedBy: number,
    isActive: Boolean,
    deleted: Boolean
}
