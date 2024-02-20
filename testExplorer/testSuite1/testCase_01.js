const { postMethod } = require("../apiServer/apiObject") //import API function

describe("API Automation Testing", function(){
    let id 
    //Post Method Test
    it("Post Method", async function(){
        id = await postMethod()
    })
})