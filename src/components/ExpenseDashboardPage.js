
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = (props) => (
    <div>
        <ExpensesSummary /> 
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;

// we can pass from here to the props of the ExpenseListFilters(connectedComponent) 
// and we can pass to the props of the ExpenseListFilters from it's self using 
// statetoProp function in ExpenseListFilters..
//<ExpenseListFilters {...props.history} />
