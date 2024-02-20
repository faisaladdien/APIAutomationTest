const request = require("supertest") //import supertest
const {expect} = require("chai") //import chai
const baseURL = require("../variable/globalVariable") //import base url

const url = `${baseURL}`

//post testing function
async function postMethod(){
    const response = await request(url).post("objects")
    //request body
    .send({
        "name": "Acer Predator Helios 16",
        "data": {
           "year": 2024,
           "price": 24000000,
           "CPU model": "Intel Core i7 13900HX",
           "Hard disk size": "1 TB SSD"
        }
     })
    //Assertation
    expect(response.status).to.equal(200)
    expect(response.body.name).to.equal("Acer Predator Helios 16")
    expect(response.body.data).to.deep.equal({
        "year": 2024,
        "price": 24000000,
        "CPU model": "Intel Core i7 13900HX",
        "Hard disk size": "1 TB SSD"
    })  

    const id = response.body.id
    return id
}

//get testing function
async function getAllObjectsMethod(){
    const response = await request(url).get("objects")

    //Assertation
    expect(response.status).to.equal(200)

}

async function getAnObjectMethod(id){
    const response = await request(url).get(`objects/${id}`)
    
    //Assertation
    expect(response.status).to.equal(200)
    expect(response.body.id).to.equal(id)
    expect(response.body.name).to.equal("Acer Predator Helios 16")
    expect(response.body.data).to.deep.equal({
        "year": 2024,
        "price": 24000000,
        "CPU model": "Intel Core i7 13900HX",
        "Hard disk size": "1 TB SSD"
    }) 
}

module.exports = {postMethod, getAllObjectsMethod, getAnObjectMethod}