import {createContext, useState} from 'react';

export const TipsCalculatorContext = createContext();

const initialState = {
    bill: 0,
    percentage: 0,
    people: 0
};

export const TipsCalculatorInfoProvider = ({
    children,
 }) => {
 
    const [tipsCalc, setTipsCalc] = useState(initialState);
 
    const bill = (amount) => {
        setTipsCalc(values => ({
            ...values,
            bill: amount
       }));
    }

    const percentage = (amount) => {
        setTipsCalc(values => ({
            ...values,
            percentage: amount
       }));
    }

    const people = (amount) => {
        setTipsCalc(values => ({
            ...values,
            people: amount
       }));
    }

    const reset = () => {
        setTipsCalc(initialState);

        let billInput = document.getElementById('bill');
        let peopleCountInput = document.getElementById('people-count');
        billInput.value = '';
        peopleCountInput.value = '';
    }

 
    return (
       <TipsCalculatorContext.Provider value={{tipsCalc, bill, percentage, people, reset}}>
          {children}
       </TipsCalculatorContext.Provider>
    );
}