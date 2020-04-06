export class ProductInputModel {
    product_id: number;
    basecode: string;
    name: string;
    name1: string;
    packing: string;
    category_id: string | number = '';
    category_id1:  string | number = '';
    slab_id:  string | number = '';
    hsncode: string;
    discount_type:  string | number = '';
    discount_slab:  string | number = '';
    enable_batch: boolean;
    enable_stockvalue: boolean;
    enable_stockcheck: boolean;
    enable_fssai: boolean;
    event_ip: string;
    user_id: number;
}