import { Customer } from '../entity/customer';
import { ICustomer } from '../interface/iCustomer';
import { calcPagination } from '../utils/common';


export const getListCustomers = async (options: { limit: string, page: string }) => {
    const [results, total] = await Customer.findAndCount({
        take: Number(options.limit),
        skip: (Number(options.page) - 1) * Number(options.limit),
    })

    return {
        data: results,
        info: calcPagination(total, Number(options.limit), Number(options.page))
    }
}



export const getCustomer = async (id: number) => {
    try {
        const customer = await Customer.findOne({
            where: { id },
            relations: ['phones']
        });
        if (!customer) throw new Error("No existe el cliente");
        return {
            error: false,
            data: customer
        }
    } catch (error: any) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const createCustomer = async (data: ICustomer) => {
    try {
        const customer = await Customer.create(data);
        customer.save();
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

export const deleteCustomer = async (id: number) => {
    try {
        const customer = await Customer.findOne(id);
        if (customer) await Customer.softRemove(customer);
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

export const updateCustomer = async (data: ICustomer, id: number) => {
    try {
        await Customer.update({ id }, data);
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