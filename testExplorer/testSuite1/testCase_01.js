const { postMethod, getAllObjectsMethod } = require("../apiServer/apiObject") //import API function

describe("API Automation Testing", function(){
    let id 
    //Post Method Test
    it("Add an object", async function(){
        id = await postMethod()
    })
    it("Get All objects", async function(){
        await getAllObjectsMethod()
    })
})