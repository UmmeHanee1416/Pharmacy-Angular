export interface Customer {
    // id: number,
    name: string,
    contact:string,
    purchaseDate: string,
    totalPay: number,
    payMethod: string,
    empId:number,
    createdAt: Date,
    updatedAt: Date,
    createdBy: number,
    updatedBy: number,
    isActive: Boolean,
    deleted: Boolean
}
