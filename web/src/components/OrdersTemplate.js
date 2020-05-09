import Reat, { Component } from "react";
import FormFields from "../widgets/Forms/FormFields"

class OrdersTemplate extends Component {
    state = {
        formData:{
            name:{
                element: 'input',
                value: "",
                label: true,
                labelText: "Name",
                config:{
                    neme: "name_input",
                    text: "text",
                    placeholder: "Enter your name"
                }
            },
            phone_number:{
                element: 'input',
                value: "",
                label: true,
                labelText: "Phone Number",
                config:{
                    neme: "phone_number_input",
                    text: "text",
                    placeholder: "Enter Your Phone Number"
                }
            },
            address:{
                element: 'input',
                value: "",
                label: true,
                labelText: "Address",
                config:{
                    neme: "address_input",
                    text: "text",
                    placeholder: "Enter Your Phone Number"
                }
            },
            quantity:{
                element: 'input',
                value: "",
                label: true,
                labelText: "Quantity",
                config:{
                    neme: "quantity_input",
                    text: "text",
                    placeholder: "Enter Pizza Number"
                }
            }

        }
    }

    render(){
        return <div className="container">
            <form onSubmit={this.submitForm}> 
                <FormFields 
                    formData = {this.state.formData}
                />
            </form>
        </div>
    }

}