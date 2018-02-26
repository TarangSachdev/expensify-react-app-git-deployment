import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpensese = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpensese.length,
        expenseTotal: selectExpensesTotal(visibleExpensese)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
