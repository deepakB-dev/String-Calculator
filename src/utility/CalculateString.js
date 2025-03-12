

const CalculateString = (numbers) =>{
    if (!numbers.trim()) return 0; // Handle empty input

    let delimiter = /,|\n/;  // Default delimiters (comma and newline)
    let match = numbers.match(/^\/\/(\[.*?\]|\S)\n(.*)/);
  
    if (match) {
      let customDelimiter = match[1];
      numbers = match[2];
      
      if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
        // Handle multiple custom delimiters like "//[*][%]\n1*2%3"
        let delimiters = customDelimiter.slice(1, -1).split("][");
        delimiter = new RegExp(`(${delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})|,`);
      } else {
        // Handle single custom delimiter like "//;\n1;2"
        delimiter = new RegExp(`${customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}|,|\n`);
      }
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