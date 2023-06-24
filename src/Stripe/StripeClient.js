import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51IvIySJzkqBjcDruZRPj6kIra2jdsvhN2LFym7mI6PoNLqiqTHXFUpNGdarjI6kme3qV6aOhPbHvDv133XRa6RgU00rzv1csyo');

export default stripePromise;