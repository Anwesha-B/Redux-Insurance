import {combineReducers} from 'redux';

const claimsDepartment = (claimsList = [], action) => {
    if (action.type === 'CLAIM') {
        return [ ...claimsList, action.payload]
    }

    return claimsList;
}

const accountsDepartment = (currMoney = 300, action) => {
    if (action.type === 'CLAIM') {
        return currMoney - action.payload.amount;
    }
    if (action.type === 'POLICY') {
        return currMoney + action.payload.amount;
    }
    return currMoney;
}

const createPolicy = (policyList = ["Anna", 'Bob'], action) => {
    if (action.type === 'POLICY') {
        console.log("I am in here");
        return [...policyList, action.payload.name]
    }
    if (action.type === 'DELETE') {
        return policyList.filter(name => name !== action.payload.name);
    }
    return policyList;
}

export default combineReducers ({
    claims: claimsDepartment,
    policy: createPolicy,
    account: accountsDepartment,
})