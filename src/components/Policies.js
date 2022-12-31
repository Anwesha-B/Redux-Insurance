import React from 'react';
import {connect} from 'react-redux';
import {createPolicy, createClaim} from '../actions';

const Policies = (props) => {
    const onPolicyAdd = () => {
        console.log("Adding a new Policy");
        console.log(props);
        props.createPolicy('Greg', 500);
    }

    const onClaimAdd = () => {
        console.log("Adding a new Claim");
        console.log(props);
        props.createClaim('Greg', 100);
    }
    return (
        <React.Fragment>
        <div>
            <input type="text" placeholder="enter amount"/>
            <button onClick={() => onClaimAdd()}>Add Claim</button>
        </div><div>
          <input type="text" placeholder="enter amount"/>
          <button onClick={() => onPolicyAdd()}>Add Policy</button>
        </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        policies: state.insurance.policy
    };
}

export default connect(mapStateToProps, {createPolicy, createClaim})(Policies);