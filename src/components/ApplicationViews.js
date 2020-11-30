import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeContext, EmployeeProvider } from "./employee/EmployeeProvider"
// chapter 8
import { EmployeeForm } from "./employee/EmployeeForm"

export const ApplicationViews = (props) => {
    return (<>
        <AnimalProvider>
            <LocationProvider>
                <CustomerProvider>
                    <Route path="/animals">
                        <AnimalList />
                    </Route>
                </CustomerProvider>
            </LocationProvider>
        </AnimalProvider>

        <AnimalProvider>
            <LocationProvider>
                <CustomerProvider>
                    <Route path="/customers">
                        <CustomerList />
                    </Route>
                </CustomerProvider>
            </LocationProvider>
        </AnimalProvider>

        <AnimalProvider>
            <LocationProvider>
                <EmployeeProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />
                </EmployeeProvider>
            </LocationProvider>
        </AnimalProvider>



        <LocationProvider>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <LocationList />
            </Route>
        </LocationProvider>

    </>
    )
}