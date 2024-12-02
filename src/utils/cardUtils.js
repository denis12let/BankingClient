import Visa from './../assets/icons/card/visa.svg';
import MasterCard from './../assets/icons/card/mastercard.svg';
import AmericanExpress from './../assets/icons/card/american-express.svg';
import Discover from './../assets/icons/card/discover-card.svg';
import DinersClub from './../assets/icons/card/diners-club-international.svg';
import JCB from './../assets/icons/card/jcb.svg';
import card from './../assets/icons/card/card.svg';

export function getCardDetails(number) {
  const cardTypes = {
    Visa: /^4/,
    MasterCard: /^(5[1-5]|2[2-7])/,
    AmericanExpress: /^(34|37)/,
    Discover: /^(6011|65)/,
    DinersClub: /^(300|301|302|303|304|305|36|38)/,
    JCB: /^(2131|1800|35)/,
  };

  const cardImages = {
    Visa,
    MasterCard,
    AmericanExpress,
    Discover,
    DinersClub,
    JCB,
  };

  const cardColors = {
    Visa: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    MasterCard: 'linear-gradient(135deg, #f87171 100%, #fb923c)',
    AmericanExpress: 'linear-gradient(45deg, #000000, #003366)',
    Discover: 'linear-gradient(45deg, #FFD700, #FFB6C1, #FF69B4)',
    DinersClub: 'linear-gradient(to right, #8B8B8B, #BEBEBE)',
    JCB: 'linear-gradient(45deg, #FF0000, #0033cc, #00cc00)',
  };

  for (const [key, regex] of Object.entries(cardTypes)) {
    if (regex.test(number)) {
      return { type: key, color: cardColors[key], icon: cardImages[key] };
    }
  }
  return { type: 'Unknow', color: 'gray', icon: card };
}

export const convertDateToCard = (dateString) => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${month}/${year}`;
};

// export const getLastSymbolsCard = (string, n = 4) => {
//   if (n > string.length) {
//     return string;
//   }

//   return string.slice(-n);
// };
