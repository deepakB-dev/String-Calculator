

const CalculateString = (numbers) =>{
    if (!numbers.trim()) return 0; // Handle empty input

    let delimiter = /,/; // Default delimiters (comma and newline)
    let match = numbers.match(/^\/\/(\[.*?\]|\S)\n(.*)/);
  
    if (match) {
      let customDelimiter = match[1];
      numbers = match[2];
        delimiter = new RegExp(`${customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|,|`);
    }
    
    const numArray = numbers
      .split(delimiter)
      .map((n) => n.trim())
      .filter((n) => /^[0-9-]+$/.test(n))
      .map((n) => parseInt(n, 10));
  
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
}

export default CalculateString;