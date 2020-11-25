import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"

export const ApplicationViews = (props) => {
    return (
        <AnimalProvider>
        <LocationProvider>
            <CustomerProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </CustomerProvider>
        </LocationProvider>
    </AnimalProvider>
    )
}