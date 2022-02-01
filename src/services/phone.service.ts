import { Phone } from '../entity/phone';
import { IPhone } from '../interface/IPhone';
import { calcPagination } from '../utils/common';


export const getListPhones = async (options: { limit: number, page: number, customerId: number }) => {
    const [results, total] = await Phone.findAndCount({
        take: options.limit,
        skip: (Number(options.page) - 1) * Number(options.limit),
        where: {
            customerId: options.customerId
        }
    })


    return {
        data: results,
        info: calcPagination(total, Number(options.limit), Number(options.page))
    }
}

export const getPhone = async (id: number) => {
    try {
        const phone = await Phone.findOne({
            where: { id },
            relations: ['repairs']
        });
        return {
            error: false,
            data: phone
        }
    } catch (error: any) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const createPhone = async (data: IPhone) => {
    try {
        const phone = await Phone.create(data);
        phone.save();
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

export const deletePhone = async (id: number) => {
    try {
        const phone = await Phone.findOne(id);
        if (phone) await Phone.softRemove(phone);
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

export const updatePhone = async (data: IPhone, id: number) => {
    try {
        await Phone.update({ id }, data);
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