
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from '../config/config';

@Injectable({ providedIn: 'root' })
export class AddGGService{
    constructor ( private httpClient: HttpClient ){}

    getCookie(username: string, password: string, key: string){
        const url = `${config.generateAuthCookieURL}/?username=${username}&password=${password}&key=${key}`;
        return this.httpClient.get(url)
    }

    getQuickPost(key: string, cookie: string, content: string){
        console.log("cookie", cookie) 
        const url = `${config.acitiviesURL}/?key=${key}&cookie=${cookie}&content=${content}`;
        return this.httpClient.get(url)
    }

    getActivities(key: string, cookie: string, page: number){
        const url = `${config.acitiviesURL}/?key=${key}&cookie=${cookie}&page=${page}`;
        return this.httpClient.get(url)
    }

}