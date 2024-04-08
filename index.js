function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  console.log(introduction("Aki")); // Output: Hi, my name is Aki.
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  console.log(introductionWithLanguage("Aki, JavaScript")); // Output: Hi, my name is Aki and I am learning to program in Javascript.

  function introductionWithLanguageOptional(name, language = language || 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language = language || 'JavaScript'}.`;
  }
  
  console.log(introductionWithLanguageOptional("Gracie, JavasScript")); // Output: Hi, my name is Gracie and I am learning to program in JavaScript.