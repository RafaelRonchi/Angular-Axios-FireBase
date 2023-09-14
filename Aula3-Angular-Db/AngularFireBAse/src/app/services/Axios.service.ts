import { Injectable } from '@angular/core';
import axios from 'axios';
import { Pessoa } from '../interfaces/pessoa.interface';

@Injectable({
    providedIn: 'root'
})
export class AxiosService {
    urlAPI = 'https://app-multi-task-rafaelr-default-rtdb.firebaseio.com/pessoa.json';
    constructor() { }

    getPessoa(){
        return axios.get(this.urlAPI).then(response => {
            console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    });
    }

    postPessoa(pessoa: Pessoa){
        let body = JSON.stringify(pessoa);
        let headers = {
            'Content-Type': 'application/json'
        }
        return axios.post(this.urlAPI, body, {headers}).then( resp=>{
            console.log(resp)
            return resp;
        }).catch( error=>{
            console.log(error)
            return error;
        })
}

}