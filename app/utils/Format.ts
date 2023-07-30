export const FormatDate=(date:Date)=> {
    // Ensure 'date' is a valid Date object
    const inputDate = new Date(date);
  
    // Get day, month, and year from the date object
    const day = String(inputDate.getDate()).padStart(2, '0');
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const year = inputDate.getFullYear();
  
    // Concatenate day, month, and year with '-' separator
    return `${day}-${month}-${year}`;
  }

  export const FormatAmount=(amount:number)=> {
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