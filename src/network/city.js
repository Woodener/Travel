import { request } from './request';

export function getCitydata() {
    return request({
        url: '/city.json'
    })
}

export function getDetails(id) {
    return request({
        url: '/detail.json',
        params: {
            id
        }

    })
}
