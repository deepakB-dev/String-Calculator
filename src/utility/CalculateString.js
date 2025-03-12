

const CalculateString = (numbers) =>{
    if (!numbers.trim()) return 0; // Handle empty input

    let delimiter = /,/; // Default delimiters (comma and newline)

    const numArray = numbers
    .split(delimiter)
    .map((n) => n.trim())
    .filter((n) => /^[0-9-]+$/.test(n))
    .map((n) => parseInt(n, 10));
    
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
}

export default CalculateString;