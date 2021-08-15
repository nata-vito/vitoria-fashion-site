import Commerce from '@chec/commerce.js';
import { truncate } from 'fs';

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, truncate);
