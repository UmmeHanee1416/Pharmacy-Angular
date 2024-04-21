export interface Doctor {
    id: number,
    name: string,
    address: string,
    specialty: string,
    contact: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: number,
    updatedBy: number,
    isActive: Boolean,
    deleted: Boolean
}
