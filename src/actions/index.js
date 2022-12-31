export const createPolicy = (name, amount) => {
    return {
        // an Action - which is a form
        type: 'POLICY',
        payload: {
            name,
            amount,
        }
    }
}

export const deletePolicy = (name) => {
    return {
        type: 'DELETE',
        payload: {
            name
        }
    }
}

export const createClaim = (name, amount) => {
    return {
        type: 'CLAIM',
        payload: {
            name, amount,
        }
    }
}