import { Repair } from '../entity/repair';
import { IRepair } from '../interface/IRepair';


export const getListRepairs = async (options: { limit: number, page: number, phoneId: number }) => {
    const [results, total] = await Repair.findAndCount({
        take: options.limit,
        skip: options.page,
        where: {
            phoneId: options.phoneId
        }
    })
    return {
        data: results,
        total
    }
}

export const getRepair = async (id: number) => {
    try {
        const repair = await Repair.findOne(id);
        return {
            error: false,
            data: repair
        }
    } catch (error: any) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const createRepair = async (data: IRepair) => {
    try {
        const repair = await Repair.create(data);
        repair.save();
        return {
            error: false
        }
    } catch (error: any) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const deleteRepair = async (id: number) => {
    try {
        const repair = await Repair.findOne(id);
        if (repair) await Repair.remove(repair);
        return {
            error: false
        }
    } catch (error: any) {
        return {
            error: true,
            message: error.message
        }
    }
}