import img1 from './assets/productos/botellon_10.png';
import img2 from './assets/productos/botellon_20.png';
import img3 from './assets/productos/pack_3_10.jpg';
import img4 from './assets/productos/pack_3_20.png';
import img5 from './assets/productos/envase_vacio.png';
import img6 from './assets/productos/recarga.jpg';

const myProducts = [
    {id:1, name: "Bidon 10Lt", price: 4000.99, desc: "Bidon de 10 litros de agua purificada", img: img1, pack:false},
    {id:2, name: "Bidon 20Lt", price: 6000.99, desc: "Bidon de 20 litros de agua purificada", img: img2, pack:false},
    {id:3, name: "Pack 10Lt x3", price: 8000.99, desc: "Contiene 3 bidones de 10 litros de agua purificada", img: img3, pack:true},
    {id:4, name: "Pack 20Lt x3", price: 10000.99, desc: "Contiene 3 bidones de 20 litros de agua purificada", img: img4, pack:true},
    {id:5, name: "Botella vacia", price: 4000.99, desc: "Botellon vacio en caso de no devolver el envase", img: img5, pack:false},
    {id:6, name: "Recarga", price: 3000.99, desc: "Recarga un envase vacio de agua purificada", img: img6, pack:false}
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(myProducts);
        },2000)
    })
}

//EXPORT CATALOGO

export const getProduct = (id) => {
    return new Promise((res => {
        const product = myProducts.find(item => item.id === id);
        setTimeout(() => {
            res(product);
        })
    }))
}

//EXPORT PACK
export const getPromociones = () => {
    return new Promise((res => {
        const product = myProducts.filter(item => item.pack == true);
        setTimeout(() => {
            res(product);
        })
    }))
}