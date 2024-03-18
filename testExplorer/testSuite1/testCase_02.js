const { postPayloadMethod, putPayloadMethod } = require("../apiServer/apiObjectWithPayload")

describe("API Automation Testing with payload", function(){
    //Post using json file test case
    let id
    it("Add an Object using json file", async function(){
        id = await postPayloadMethod()
    })
    it("Edit an Object using json file", async function(){
        await putPayloadMethod(id)
    })
})