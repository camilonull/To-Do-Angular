export default interface TaskModel {
    id?: number;
    title: string;
    description: string;
    status: number;
    dueDate: string;
    createdAt?: string;
    updatedAt?: string;
}
