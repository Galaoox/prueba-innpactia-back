import { Phone } from '../entity/phone';
import { IPhone } from '../interface/IPhone';


export const getListPhones = async (options: { limit: number, page: number, customerId: number }) => {
    const [results, total] = await Phone.findAndCount({
        take: options.limit,
        skip: options.page,
        where: {
            customerId: options.customerId
        }
    })
    return {
        data: results,
        total
    }
}

export const getPhone = async (id: number) => {
    try {
        const phone = await Phone.findOne(id);
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
        if (phone) await Phone.remove(phone);
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