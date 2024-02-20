const { postMethod, getAllObjectsMethod, getAnObjectMethod, putMethod, patchMethod, deleteMethod } = require("../apiServer/apiObject") //import API function

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
    //Get an object test case
    it("Get an object", async function(){
        await getAnObjectMethod(id)
       
    })
    //Put test case
    it("Put an object", async function(){
        await putMethod(id)
    })
    //Patch test case
    it("Patch an object", async function(){
        await patchMethod(id)
    })
    //Delete test case
    it("Delete an object", async function(){
        await deleteMethod(id)
    })
    
})