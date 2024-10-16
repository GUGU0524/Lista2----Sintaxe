function ehPalindromo(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Exemplo de uso:
console.log(ehPalindromo("A man a plan a canal Panama")); 
console.log(ehPalindromo("hello"));
console.log(ehPalindromo("radar"));
