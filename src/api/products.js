import {URL} from './config'

export  const  DMLProducts = async (inputs,type) => {
    const res = await fetch(`${URL}profiles`,{
        method: type,
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })

    return await res.json()

}

export const retrieveProducts = async () =>{
    const res = await fetch(`${URL}api/products/`,{
        method: 'GET',
        header:{
            Accept:'application/json',
            'Content-Type':'application/json'

        },
    })

    return await res.json()  
}

export const createProducts = async (postData) => {
    const res = await fetch(`${URL}api/products/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })

    return await res.json()
}

export const updateProducts = async (patchData) => {
    const res = await fetch(`${URL}api/products/`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patchData)
    })

    return await res.json()
}

export const deleteProducts = async (deleteData) => {
    const res = await fetch(`${URL}api/products/`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteData)
    })

    return await res.json()
}