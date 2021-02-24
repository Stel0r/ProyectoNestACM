import { HttpService } from '@nestjs/common';
export declare class FirebaseService {
    private http;
    url: string;
    constructor(http: HttpService);
    getAll(): import("rxjs").Observable<any>;
    getOne(id: any): import("rxjs").Observable<any>;
    post(elemento: any): import("rxjs").Observable<any>;
    put(elemento: any, id: any): import("rxjs").Observable<any>;
    delete(id: any): import("rxjs").Observable<any>;
}
