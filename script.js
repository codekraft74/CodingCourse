const searchBar = document.getElementById('searchBar');
const suggestionsBox = document.getElementById('suggestionsBox');
const topics = [
    { name: 'PHP - Home', id: 'php-home' },
    { name: 'PHP - Roadmap', id: 'php-roadmap' },
    { name: 'PHP - Introduction', id: 'php-introduction' },
    { name: 'PHP - Installation', id: 'php-installation' },
    { name: 'PHP - History', id: 'php-history' },
    { name: 'PHP - Features', id: 'php-features' },
    { name: 'PHP - Syntax', id: 'php-syntax' },
    { name: 'PHP - Hello World', id: 'php-hello-world' },
    { name: 'PHP - Comments', id: 'php-comments' },
    { name: 'PHP - Variables', id: 'php-variables' },
    { name: 'PHP - Echo/Print', id: 'php-echo-print' },
    { name: 'PHP - var_dump', id: 'php-var-dump' },
    { name: 'PHP - $ and $$ Variables', id: 'php-and-variables' },
    { name: 'PHP - Constants', id: 'php-constants' },
    { name: 'PHP - Magic Constants', id: 'php-magic-constants' },
    { name: 'PHP - Data Types', id: 'php-data-types' },
    { name: 'PHP - Type Casting', id: 'php-type-casting' },
    { name: 'PHP - Type Juggling', id: 'php-type-juggling' },
    { name: 'PHP - Strings', id: 'php-strings' },
    { name: 'PHP - Boolean', id: 'php-boolean' },
    { name: 'PHP - Integers', id: 'php-integers' },
    { name: 'PHP - Files & I/O', id: 'php-files-io' },
    { name: 'PHP - Maths Functions', id: 'php-maths-functions' },
    { name: 'PHP - Heredoc & Nowdoc', id: 'php-heredoc-nowdoc' },
    { name: 'PHP - Compound Types', id: 'php-compound-types' },
    { name: 'PHP - File Include', id: 'php-file-include' },
    { name: 'PHP Date & Time', id: 'php-date-time' },
    { name: 'PHP - Scalar Type Declarations', id: 'php-scalar-type-declarations' },
    { name: 'PHP - Return Type Declarations', id: 'php-return-type-declarations' },
    { name: 'PHP - Operators', id: 'php-operators' },
{ name: 'PHP - Arithmetic Operators', id: 'php-arithmetic-operators' },
{ name: 'PHP - Comparison Operators', id: 'php-comparison-operators' },
{ name: 'PHP - Logical Operators', id: 'php-logical-operators' },
{ name: 'PHP - Assignment Operators', id: 'php-assignment-operators' },
{ name: 'PHP - String Operators', id: 'php-string-operators' },
{ name: 'PHP - Array Operators', id: 'php-array-operators' },
{ name: 'PHP - Conditional Operators', id: 'php-conditional-operators' },
{ name: 'PHP - Spread Operator', id: 'php-spread-operator' },
{ name: 'PHP - Null Coalescing Operator', id: 'php-null-coalescing-operator' },
{ name: 'PHP - Spaceship Operator', id: 'php-spaceship-operator' },
{ name: 'PHP Control Statements', id: 'php-control-statements' },
{ name: 'PHP - Decision Making', id: 'php-decision-making' },
{ name: 'PHP - If...Else Statement', id: 'php-if-else-statement' },
{ name: 'PHP Switch Statement', id: 'php-switch-statement' },
{ name: 'PHP - Loop Types', id: 'php-loop-types' },
{ name: 'PHP - For Loop', id: 'php-for-loop' },
{ name: 'PHP Foreach Loop', id: 'php-foreach-loop' },
{ name: 'PHP While Loop', id: 'php-while-loop' },
{ name: 'PHP - Do... While Loop', id: 'php-do-while-loop' },
{ name: 'PHP - Break Statement', id: 'php-break-statement' },
{ name: 'PHP - Continue Statement', id: 'php-continue-statement' },
{ name: 'PHP Arrays', id: 'php-arrays' },
{ name: 'PHP - Arrays', id: 'php-arrays' },
{ name: 'PHP - Indexed Array', id: 'php-indexed-array' },
{ name: 'PHP - Associative Array', id: 'php-associative-array' },
{ name: 'PHP - Multidimensional Array', id: 'php-multidimensional-array' },
{ name: 'PHP - Array Functions', id: 'php-array-functions' },
{ name: 'PHP - Constant Arrays', id: 'php-constant-arrays' },
{ name: 'PHP - Functions', id: 'php-functions' },
{ name: 'PHP - Function Parameters', id: 'php-function-parameters' },
{ name: 'PHP - Call by value', id: 'php-call-by-value' },
{ name: 'PHP - Call by Reference', id: 'php-call-by-reference' },
{ name: 'PHP - Default Arguments', id: 'php-default-arguments' },
{ name: 'PHP - Named Arguments', id: 'php-named-arguments' },
{ name: 'PHP - Variable Arguments', id: 'php-variable-arguments' },
{ name: 'PHP - Returning Values', id: 'php-returning-values' },
{ name: 'PHP - Passing Functions', id: 'php-passing-functions' },
{ name: 'PHP - Recursive Functions', id: 'php-recursive-functions' },
{ name: 'PHP - Type Hints', id: 'php-type-hints' },
{ name: 'PHP - Variable Scope', id: 'php-variable-scope' },
{ name: 'PHP - Strict Typing', id: 'php-strict-typing' },
{ name: 'PHP - Anonymous Functions', id: 'php-anonymous-functions' },
{ name: 'PHP - Arrow Functions', id: 'php-arrow-functions' },
{ name: 'PHP - Variable Functions', id: 'php-variable-functions' },
{ name: 'PHP - Local Variables', id: 'php-local-variables' },
{ name: 'PHP Global Variables', id: 'php-global-variables' },
{ name: 'PHP Superglobals', id: 'php-superglobals' },
{ name: 'PHP - Superglobals', id: 'php-superglobals' },
{ name: 'PHP - $GLOBALS', id: 'php-globals' },
{ name: 'PHP - $_SERVER', id: 'php-server' },
{ name: 'PHP - $_REQUEST', id: 'php-request' },
{ name: 'PHP - $_POST', id: 'php-post' },
{ name: 'PHP - $_GET', id: 'php-get' },
{ name: 'PHP - $_FILES', id: 'php-files' },
{ name: 'PHP - $_ENV', id: 'php-env' },
{ name: 'PHP $_COOKIE', id: 'php-cookie' },
{ name: 'PHP $_SESSION', id: 'php-session' },
{ name: 'PHP File Handling', id: 'php-file-handling' },
{ name: 'PHP - Open File', id: 'php-open-file' },
{ name: 'PHP - Read File', id: 'php-read-file' },
{ name: 'PHP - Write File', id: 'php-write-file' },
{ name: 'PHP - File Existence', id: 'php-file-existence' },
{ name: 'PHP - Download File', id: 'php-download-file' },
{ name: 'PHP - Copy File', id: 'php-copy-file' },
{ name: 'PHP - Append File', id: 'php-append-file' },
{ name: 'PHP - Delete File', id: 'php-delete-file' },
{ name: 'PHP - Handle CSV File', id: 'php-handle-csv-file' },
{ name: 'PHP File Permissions', id: 'php-file-permissions' },
{ name: 'PHP - Create Directory', id: 'php-create-directory' },
{ name: 'PHP - Listing Files', id: 'php-listing-files' },
{ name: 'Object Oriented PHP', id: 'object-oriented-php' },
{ name: 'PHP - Object Oriented Programming', id: 'php-object-oriented-programming' },
{ name: 'PHP - Classes and Objects', id: 'php-classes-objects' },
{ name: 'PHP - Constructor and Destructor', id: 'php-constructor-destructor' },
{ name: 'PHP - Access Modifiers', id: 'php-access-modifiers' },
{ name: 'PHP - Inheritance', id: 'php-inheritance' },
{ name: 'PHP - Class Constants', id: 'php-class-constants' },
{ name: 'PHP - Abstract Classes', id: 'php-abstract-classes' },
{ name: 'PHP - Interfaces', id: 'php-interfaces' },
{ name: 'PHP - Traits', id: 'php-traits' },
{ name: 'PHP - Static Methods', id: 'php-static-methods' },
{ name: 'PHP - Static Properties', id: 'php-static-properties' },
{ name: 'PHP - Namespaces', id: 'php-namespaces' },
{ name: 'PHP - Object Iteration', id: 'php-object-iteration' },
{ name: 'PHP - Encapsulation', id: 'php-encapsulation' },
{ name: 'PHP - Final Keyword', id: 'php-final-keyword' },
{ name: 'PHP - Overloading', id: 'php-overloading' },
{ name: 'PHP - Cloning Objects', id: 'php-cloning-objects' },
{ name: 'PHP - Anonymous Classes', id: 'php-anonymous-classes' },
{ name: 'PHP Web Development', id: 'php-web-development' },
{ name: 'PHP - Web Concepts', id: 'php-web-concepts' },
{ name: 'PHP - Form Handling', id: 'php-form-handling' },
{ name: 'PHP - Form Validation', id: 'php-form-validation' },
{ name: 'PHP - Form Email/URL', id: 'php-form-email-url' },
{ name: 'PHP - Complete Form', id: 'php-complete-form' },
{ name: 'PHP - File Inclusion', id: 'php-file-inclusion' },
{ name: 'PHP GET & POST', id: 'php-get-post' },
{ name: 'PHP - File Uploading', id: 'php-file-uploading' },
{ name: 'PHP - Cookies', id: 'php-cookies' },
{ name: 'PHP - Sessions', id: 'php-sessions' },
{ name: 'PHP - Session Options', id: 'php-session-options' },
{ name: 'PHP - Sending Emails', id: 'php-sending-emails' },
{ name: 'PHP - Sanitize Input', id: 'php-sanitize-input' },
{ name: 'PHP - Post-Redirect-Get (PRG)', id: 'php-post-redirect-get' },
{ name: 'PHP - Flash Messages', id: 'php-flash-messages' },
{ name: 'PHP AJAX', id: 'php-ajax' },
{ name: 'PHP - AJAX Introduction', id: 'php-ajax-introduction' },
{ name: 'PHP - AJAX Search', id: 'php-ajax-search' },
{ name: 'PHP - AJAX XML Parser', id: 'php-ajax-xml-parser' },
{ name: 'PHP - AJAX Auto Complete Search', id: 'php-ajax-auto-complete-search' },
{ name: 'PHP - AJAX RSS Feed Example', id: 'php-ajax-rss-feed-example' },
{ name: 'PHP XML', id: 'php-xml' },
{ name: 'PHP XML Introduction', id: 'php-xml-introduction' },
{ name: 'PHP - Simple XML Parser', id: 'php-simple-xml-parser' },
{ name: 'PHP - SAX Parser Example', id: 'php-sax-parser-example' },
{ name: 'PHP - DOM Parser Example', id: 'php-dom-parser-example' },
{ name: 'PHP - Regular Expression', id: 'php-regular-expression' },
{ name: 'PHP - Error Handling', id: 'php-error-handling' },
{ name: 'PHP - Try...Catch', id: 'php-try-catch' },
{ name: 'PHP - Bugs Debugging', id: 'php-bugs-debugging' },
{ name: 'PHP - For C Developers', id: 'php-for-c-developers' },
{ name: 'PHP - For PERL Developers', id: 'php-for-perl-developers' },
{ name: 'PHP - Frameworks', id: 'php-frameworks' },
{ name: 'PHP - Core PHP vs Frame Works', id: 'php-core-php-vs-frameworks' },
{ name: 'PHP - Design Patterns', id: 'php-design-patterns' },
{ name: 'PHP Filters', id: 'php-filters' },
{ name: 'PHP - Filtered unserialize()', id: 'php-filtered-unserialize' },
{ name: 'PHP - IntiChar', id: 'php-intichar' },
{ name: 'PHP-CSPRNG', id: 'php-csprng' },
{ name: 'PHP - Expectations', id: 'php-expectations' },
{ name: 'PHP - Use Statement', id: 'php-use-statement' },
{ name: 'PHP - Integer Division', id: 'php-integer-division' },
{ name: 'PHP - Deprecated Features', id: 'php-deprecated-features' },
{ name: 'PHP - Removed Extensions & SAPIS', id: 'php-removed-extensions-sapis' },
{ name: 'PHP PEAR', id: 'php-pear' },
{ name: 'PHP-CSRF', id: 'php-csrf' },
{ name: 'PHP - FastCGI Process', id: 'php-fastcgi-process' },
{ name: 'PHP PDO Extension', id: 'php-pdo-extension' },
{ name: 'PHP - Built-In Functions', id: 'php-built-in-functions' },
{ name: 'PHP Useful Resources', id: 'php-useful-resources' },
{ name: 'PHP Cheatsheet', id: 'php-cheatsheet' },
{ name: 'PHP - Questions & Answers', id: 'php-questions-answers' },
{ name: 'PHP - Quick Guide', id: 'php-quick-guide' },
{ name: 'PHP - Online Compiler', id: 'php-online-compiler' },
{ name: 'PHP - Useful Resources', id: 'php-useful-resources' },
{ name: 'PHP - Discussion', id: 'php-discussion' },

            
   
];

// Handle input for suggestions
// सर्च बार के "input" इवेंट को हैंडल करना
searchBar.addEventListener('input', function () {
const query = searchBar.value.toLowerCase(); // यूज़र का इनपुट लोअरकेस में बदलें
suggestionsBox.innerHTML = ''; // पहले से मौजूद सुझाव हटाएं

if (query.length > 0) {
const filteredTopics = topics.filter(topic => topic.name.toLowerCase().includes(query)); // मैच खोजें
filteredTopics.forEach(topic => {
    const suggestionElement = document.createElement('p'); // नया सुझाव एलीमेंट बनाएं
    suggestionElement.textContent = topic.name; // सुझाव में टॉपिक का नाम डालें

    // सुझाव पर क्लिक करने पर नेविगेशन
    suggestionElement.addEventListener('click', () => {
        document.getElementById(topic.id).scrollIntoView({ behavior: 'smooth' }); // संबंधित सेक्शन पर स्क्रॉल करें
        searchBar.value = topic.name; // सर्च बार में चुना गया नाम दिखाएं
        suggestionsBox.innerHTML = ''; // सुझाव बॉक्स को साफ करें
    });

    suggestionsBox.appendChild(suggestionElement); // सुझाव बॉक्स में सुझाव जोड़ें
});
}
});

// सर्च बार के "keypress" इवेंट को हैंडल करना
searchBar.addEventListener('keypress', function (e) {
if (e.key === 'Enter') { // यदि यूज़र "Enter" दबाता है
const query = searchBar.value.toLowerCase();
const match = topics.find(topic => topic.name.toLowerCase().includes(query)); // पहला मैच खोजें

if (match) {
    document.getElementById(match.id).scrollIntoView({ behavior: 'smooth' }); // संबंधित सेक्शन पर स्क्रॉल करें
    suggestionsBox.innerHTML = ''; // सुझाव बॉक्स साफ करें
}
}
});
