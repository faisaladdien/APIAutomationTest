const request = require("supertest") //import supertest
const {expect} = require("chai") //import chai
const baseURL = require("../variable/globalVariable") //import base url
const payload = require("../testData/payload.json") //import payload
const payloadPut = require("../testData/payloadPut.json")


const url = `${baseURL}`

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

    const id = response.body.id
    return id
}

async function putPayloadMethod(id){
    const response = await request(url).put(`objects/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(payloadPut)

    expect(response.status).to.equal(200)
    expect(response.body.name).to.equal("Acer Predator Helios 19")
    expect(response.body.data).to.deep.include({
        "price": 30000000,
        "CPU model": "Intel Core i9 13900HX",
        "Hard disk size": "2 TB SSD"
    }
    )
}

module.exports = {postPayloadMethod, putPayloadMethod}