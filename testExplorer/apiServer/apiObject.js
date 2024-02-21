const request = require("supertest") //import supertest
const {expect} = require("chai") //import chai
const baseURL = require("../variable/globalVariable") //import base url
const payload = require("../testData/payload.json") //import payload

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

//put testing function
async function putMethod(id){
    const response = await request(url).put(`objects/${id}`)
    .send({
        "name": "Acer Predator Helios 17",
        "data": {
           "year": 2024,
           "price": 26000000,
           "CPU model": "Intel Core i9 13980HX",
           "Hard disk size": "1 TB SSD"
        }
     })
     //Assertation
     expect(response.status).to.equal(200)
     expect(response.body.name).to.equal("Acer Predator Helios 17")
     expect(response.body.data).to.deep.equal({
        "year": 2024,
        "price": 26000000,
        "CPU model": "Intel Core i9 13980HX",
        "Hard disk size": "1 TB SSD"
    }) 
}

//Patch testing function
async function patchMethod(id){
    const response = await request(url).patch(`objects/${id}`)
    .send({
        "data": {
           "price": 26500000,
        }
     })
     //Assertation
     expect(response.status).to.equal(200)
     expect(response.body.data).to.deep.equal({
        "price": 26500000
    })
}

//Delete testing function
async function deleteMethod(id){
    const response = await request(url).delete(`objects/${id}`)
    //Asertation
    expect(response.status).to.equal(200)
    expect(response.body.message).to.equal(`Object with id = ${id} has been deleted.`)
    
}

//Post testing function using payload json file
async function postPayloadMethod(){
    const response = await request(url).post("objects")
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(payload)

    expect(response.status).to.equal(200)
    expect(response.body.name).to.equal("Acer Predator Helios 16")
    expect(response.body.data).to.deep.include({
        "CPU model": "Intel Core i7 13900HX",
        "Hard disk size": "1 TB SSD"
    })
}

module.exports = {postMethod, getAllObjectsMethod, getAnObjectMethod, putMethod, patchMethod, deleteMethod, postPayloadMethod}