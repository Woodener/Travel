import axios from 'axios'

// export function request(config, success, failure) {
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:8000/api/h8',
//         timeout: 5000
//     });
//     instance(config).then(res => {
//         success(res)
//     }).catch(err => {
//         failure(err)
//     })
// }

// export function request(config) {
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:8000/api/h8',
//         timeout: 5000
//     });
//     instance(config.baseconfig).then(res => {
//         config.success(res)
//     }).catch(err => {
//         config.failure(err)
//     })
// }

// export function request(config) {
//     return new Promise((reslove, reject) => {
//         const instance = axios.create({
//             baseURL: 'http://152.136.185.210:8000/api/h8',
//             timeout: 5000
//         })
//     });
//     instance(config).then(res => {
//         reslove(res)
//     }).catch(err => {
//         reject(err)
//     })
// }

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8080/api',
        timeout: 5000
    });

    instance.interceptors.request.use(config => {
        return config
    }, err => {
        // console.log(err);
            
    });

    instance.interceptors.response.use(res => {
        // console.log(res);
        return res
    }, err => {
            // console.log(err);
            
    })

    return instance(config)
}