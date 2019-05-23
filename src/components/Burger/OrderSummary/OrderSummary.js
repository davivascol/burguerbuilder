import React from 'react';
import Aux from '../../../hoc/Auxiliar';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
					return (
					<li key={igKey}>
						<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
					</li>);
				});  

    return (
        <Aux>
            <h3>Yout Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
							{ingredientSummary}
            </ul>
						<p>Continua to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;