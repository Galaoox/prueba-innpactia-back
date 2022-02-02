import { Repair } from '../entity/repair';
import { IRepair } from '../interface/IRepair';
import { calcPagination } from '../utils/common';
import { Phone } from '../entity/phone';


export const getListRepairs = async (options: { limit: number, page: number, phoneId: number }) => {
    try {
        const [results, total] = await Repair.findAndCount({
            take: options.limit,
            skip: (Number(options.page) - 1) * Number(options.limit),
            where: {
                phone: {
                    id: options.phoneId,
                }
            },
            order: {
                created_at: "DESC"
            }
        })

        return {
            data: results,
            info: calcPagination(total, Number(options.limit), Number(options.page))
        }
    } catch (error) {
        console.log(error);
        return {
            error: true,
            message: "Ha ocurrido un error"
        }
    }

}

export const getRepair = async (id: number) => {
    try {
        const repair = await Repair.findOne(id);
        if (!repair) throw new Error("No existe el registro de reparacion");
        return {
            error: false,
            data: repair
        }
    } catch (error: any) {
        console.log(error);
        return {
            error: true,
            message: "Ha ocurrido un error"
        }
    }
}

export const createRepair = async (data: IRepair) => {
    try {
        const repair = new Repair();
        repair.description = data.description;
        const phone = await Phone.findOne(data.phoneId);
        if (!phone) throw new Error("No existe el telefono");
        repair.phone = phone;
        console.log(phone);
        await repair.save();
        return {
            error: false
        }
    } catch (error: any) {
        console.log(error);
        return {
            error: true,
            message: "Ha ocurrido un error"
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
        console.log(error);
        return {
            error: true,
            message: "Ha ocurrido un error"
        }
    }
}