import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {

  customers: Array<Customer> = [];

  constructor() {

    const customer = new Customer();

    customer.firstname = 'Almir';
    customer.lastname = 'Frank';
    customer.birth = '16/06/2000';
    customer.gender = 'Masculino';
    customer.cellphone = 999999999;
    customer.telephone = 32544523;
    customer.email = 'example@email.com';
    customer.address = 'Rua Ceará - 123';
    customer.cpf = '123456789-10';
    customer.rg = '12345678-9';

    this.customers.push(customer);
    
  }

  findAll() {

    return this.customers;

  }

  save(customer: Customer) {

    this.customers.push(customer)
    return this.customers;

  }

}
