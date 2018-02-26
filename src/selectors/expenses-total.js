
export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    }
    else {
        return expenses
            .map((expesne) => expesne.amount)
            .reduce((sum, value) => sum + value, 0)
    }
};
