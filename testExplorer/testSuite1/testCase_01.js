const { postMethod, getAllObjectsMethod, getAnObjectMethod } = require("../apiServer/apiObject") //import API function

describe("API Automation Testing", function(){
    let id 
    //Post test case
    it("Add an object", async function(){
        id = await postMethod()
    })
    //Get all object test case
    it("Get all objects", async function(){
        await getAllObjectsMethod()
    })
    it ("Get an object", async function(){
        await getAnObjectMethod(id)
    })
})