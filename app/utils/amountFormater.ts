export const formatAmount=(amount:number)=> {
    const million = 1000000;
    const billion = 1000000000;
  
    if (amount >= billion) {
      return '$' + (amount / billion).toFixed(2) + 'B';
    } else if (amount >= million) {
      return '$' + (amount / million).toFixed(2) + 'M';
    } else {
      return '$' + amount.toFixed(0);
    }
  }
  