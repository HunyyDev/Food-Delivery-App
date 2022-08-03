import {
    ICON_card,
    ICON_bank,
    ICON_paypal
} from '../assets/icons/icons'
import COLOR from '../constants/colors';

const dataPayment = [
    {
        id: 1,
        title: 'Card',
        source: ICON_card,
        color: COLOR.vermilion,
    },
    {
        id: 2,
        title: 'Bank account',
        source: ICON_bank,
        color: COLOR.frenchRose,
    },
    {
        id: 3,
        title: 'Paypal',
        source: ICON_paypal,
        color: COLOR.blueRibbon,
    },
];

export default dataPayment;