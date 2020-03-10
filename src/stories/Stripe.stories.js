import React from 'react';
import "../App.scss";

import Stripe from '../comps/Stripe';

export default {
  title: "Stripe",
  components: Stripe
}

export const DefaultForm = () => {
  return (
    <Stripe />
  )
}