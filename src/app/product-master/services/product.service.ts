import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() { }
    
    myObjectProduct = [
        { id: 1, basecode: 435, name: 'skin care', name1: 'soap', packing: 'surya ltd', category_id: "category1", category_id1: "category2", slab_id: "taxSlab2", hsncode: 'a76Bj', discount_type: 1, discount_slab: 4, enable_batch: true, enable_stockvalue: false, enable_stockcheck: false, enable_fssai: false }
    ]

    myListProductCategory = [
        { id: 1, name: "Skin care", products: 234 },
        { id: 2, name: "Health", products: 56 },
        { id: 3, name: "Ayurveda", products: 0 },
        { id: 4, name: "Promotion", products: 278 },
        { id: 5, name: "Medicines", products: 24 },
        { id: 6, name: "Ayurvedic", products: 0 },
        { id: 7, name: "Cosmetic", products: 10 }
    ]

    myListProductItems = [
        { id: 1001, code: 443, basecode: 42, subcode: 12, name: "skin", name1: 'soap', packing: 'Roma lts', pack_qty: 42, cartoon_qty: 12, mrp: 567, saleprice: 685, points1: 42, points2: 12,
        category_id: "category1", category_id1: "category2", slab_id: "taxSlab2", hsncode: 'a76Bj', discount_type: 1, discount_slab: 4, enable_batch: true, enable_stockvalue: false, enable_stockcheck: false, enable_fssai: false },
        {
            id: 1002, code: 43, basecode: 43, subcode: 18, name: "Health", name1: 'tablet', packing: 'abc pvt', pack_qty: 20, cartoon_qty: 56, mrp: 999, saleprice: 85, points1: 42, points2: 12, enable_purchase: true,
            category_id: "category1", category_id1: "category1", slab_id: "taxSlab1", hsncode: 'jj78', discount_type: 1, discount_slab: 4, enable_batch: true, enable_stockvalue: false, enable_stockcheck: false, enable_fssai: false, enable_po: false, enable_fpo: false, enable_ps: true, enable_challan: true, enable_ob: false, enable_ratelist: false
        },
        {
            id: 1003, code: 883, basecode: 22, subcode: 2, name: "promotion", name1: 'advertisement', packing: 'sury ltd', pack_qty: 56, cartoon_qty: 77, mrp: 500, saleprice: 65, points1: 42, points2: 12, enable_purchase: true,
            category_id: "category2", category_id1: "category2", slab_id: "taxSlab1", hsncode: 'aBj', discount_type: 2, discount_slab: 2, enable_batch: true, enable_stockvalue: false, enable_stockcheck: false, enable_fssai: false,enable_po: false, enable_fpo: false, enable_ps: false, enable_challan: true, enable_ob: false, enable_ratelist: true
        },
    ];

    myListProducts = [
        { id: 1, name: "Skin Care" },
        { id: 2, name: "Health Care" },
        { id: 2, name: "Promotions" }
    ]

    myListProductSubCode = [
        {
            id: 1001, code: 443, basecode: 42, subcode: 12, name: "skin", packing: 'Roma lts', pack_qty: 42, cartoon_qty: 12, mrp: 567, saleprice: 685, points1: 42, points2: 12, enable_purchase: true,
            enable_po: false, enable_fpo: false, enable_ps: false, enable_challan: true, enable_ob: false, enable_ratelist: false
        }
    ]


}