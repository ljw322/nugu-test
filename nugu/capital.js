//
// This is a skeleton code to handle an action of NUGU SDK.
// Written by Seungho Han, 
// a student of SKKU, SW department.
// Contact: kevhahn97@skku.edu
//

const uuid = require('uuid').v4
const _ = require('lodash')
const {DOMAIN} = require('../config')

class Response {
    constructor(req) {
        console.log(`HTTP Request: ${JSON.stringify(req)}`)

        this.version = req.version
        this.resultCode = 'OK' //can be modified later
        this.output = {}

        //set Utterance Parameters to response
        this.setParameters({
            country: req.action.parameters.country.value
        })
    }

    writeResponse(req) {
        var Country = req.action.parameters.country.value
        var Capital
        if(Country == '한국'){
            Capital = '서울'
            this.setParameters({
                capital: Capital,
                isCapitalAvailable: 'yes'
            })
        }
        else{
            this.setParameters({
                isCapitalAvailable: 'no'
            })
        }
    }

    setParameters(outputKeyAndValues) { //overwrites an object if already exists. Otherwise, it appends the given object.
        this.output = _.assign(this.output, outputKeyAndValues)
    }

}

function main(params) {
    response = new Response(params)
    response.writeResponse(params)
    console.log(`HTTP Response: ${JSON.stringify(response)}`)
    return response;
}
