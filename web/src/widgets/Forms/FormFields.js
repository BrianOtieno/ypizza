import React from "react";


const FormFields = (props) =>{
    const renderFields = () =>{
        const formArray = [];
    
        for(let elementName in props.formData){
            formArray.push({
                id:elementName,
                settings: props.formData[elementName]

            })
        }
        return formArray.map((item, i)=>{
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })
    }

    const renderTemplates = (data) =>{
        let values = data.settings;
        let formTemplate = "";

        switch(values.element){
            case('input'):
            break;
            default:

        }
        return formTemplate
    }
    
    return <div>
        {renderFields()}
    </div>
}

export default FormFields;