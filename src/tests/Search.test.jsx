// testing to see whether clicking search filters the results
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { HashRouter } from 'react-router-dom';

describe ("search filtering", () => {
    test("filters properties when search button is clicked", ()=> {
        render (
            <HashRouter>
                <App/>
            </HashRouter>
        )

        // get inputs
        const locationInput = screen.getByPlaceholderText(/location/i);
        const searchButton = screen.getByRole("button", {name:/search/i});

        // type a locatioon
        fireEvent.change(locationInput, {
            target: {value:"Orpington"},
        });

        // click search
        fireEvent.click(searchButton);

        // expect results containing Orpington to be displayed
        const results = screen.getAllByText(/Orpington/i);
        expect(results.length).toBeGreaterThan(0);
    })
})