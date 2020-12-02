import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Animal.css"
import { CustomerContext } from "../customer/CustomerProvider"

export const AnimalForm = (props) => {
    const { animals, addAnimal, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const location = useRef(null)
    

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getAnimals().then(getLocations)
    }, [])

    const constructNewAnimal = () => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const locationId = parseInt(location.current.value)
        // const animalId = parseInt(animal.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            
            addAnimal({
                name: name.current.value,
                locationId:locationId,
                customerId: parseInt(localStorage.getItem('kennel_customer'))
            })
            .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Appointment form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Pet's name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Pet's name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Kennel Location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select Location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Owner: </label>
                    <select defaultValue="" name="animal" ref={animal} id="employeeAnimal" className="form-control" >
                        <option></option>Owner's name
                        {animals.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset> */}
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Make appointment
            </button>
        </form>
    )
}
