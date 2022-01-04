class Validator {




}



class ValidatorSchema {
    validations = []
    validationSchema = {}
    formData ={}
    
    constructor(formData, validationSchema) {
        this.formData = formData
        this.validationSchema = validationSchema;
    }

    isRequired = validationMethods.isRequired(value, message, this.validations)


    validate() {


        return true
    }

}


class validationMethods {


    static isRequired (value, message, validations) {
        if(value)  {
            return true
        }
        else this.handleIsNotValid(message || "Field Is Required". validations)
        
    }

    static min(value, length)


}