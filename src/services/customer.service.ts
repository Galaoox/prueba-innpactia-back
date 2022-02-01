import { Customer } from '../entity/customer';
import { ICustomer } from '../interface/iCustomer';


export const getListCustomers = async (options: { limit: number, page: number }) => {
    const [results, total] = await Customer.findAndCount({
        take: options.limit,
        skip: options.page,
    })
    return {
        data: results,
        total
    }
}

export const getCustomer = async (id: number) => {
    try {
        const customer = await Customer.findOne(id);
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
        if (customer) await Customer.remove(customer);
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