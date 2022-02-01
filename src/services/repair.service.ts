import { Repair } from '../entity/repair';
import { IRepair } from '../interface/IRepair';
import { calcPagination } from '../utils/common';


export const getListRepairs = async (options: { limit: number, page: number, phoneId: number }) => {
    const [results, total] = await Repair.findAndCount({
        take: options.limit,
        skip: (Number(options.page) - 1) * Number(options.limit),
        where: {
            phoneId: options.phoneId
        },
    })

    return {
        data: results,
        info: calcPagination(total, Number(options.limit), Number(options.page))
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
        if (repair) await Repair.softRemove(repair);
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

export const updateRepair = async (data: IRepair, id: number) => {
    try {
        await Repair.update({ id }, data);
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