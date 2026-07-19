/* ---------------- floating background bubbles ---------------- */
(function(){
  const wrap = document.getElementById('bgBubbles');
  const count = 14;
  for(let i=0;i<count;i++){
    const b = document.createElement('span');
    const size = 20 + Math.random()*50;
    b.style.width = size+'px';
    b.style.height = size+'px';
    b.style.left = Math.random()*100+'vw';
    b.style.animationDuration = (12+Math.random()*14)+'s';
    b.style.animationDelay = (Math.random()*10)+'s';
    wrap.appendChild(b);
  }
})();

/* ---------------- DATA: real questions only, taken from the uploaded PDF ---------------- */
const CH1_FUNCTION = [
{q:"The small sections of code that are used to perform a particular task is called",options:["Subroutines","Files","Pseudo code","Modules"],correct:0,exp:"A subroutine is a self-contained block of code written to carry out one specific task."},
{q:"Which of the following is a unit of code that is often defined within a greater code structure?",options:["Subroutines","Function","Files","Modules"],correct:1,exp:"A function is a smaller unit of code nested inside a larger program."},
{q:"Which of the following is a distinct syntactic block?",options:["Subroutines","Function","Definition","Modules"],correct:2,exp:"A definition is a clearly separated syntactic block in code."},
{q:"The variables in a function definition are called as",options:["Subroutines","Function","Definition","Parameters"],correct:3,exp:"Variables listed in a function's definition are its parameters."},
{q:"The values which are passed to a function definition are called",options:["Arguments","Subroutines","Function","Definition"],correct:0,exp:"The actual values sent into a function call are its arguments."},
{q:"Which of the following are mandatory to write the type annotations in the function definition?",options:["{ }","( )","[ ]","< >"],correct:1,exp:"Parentheses are required around parameters/type annotations in a function definition."},
{q:"Which of the following defines what an object can do?",options:["Operating System","Compiler","Interface","Interpreter"],correct:2,exp:"The interface specifies the operations an object supports."},
{q:"Which of the following carries out the instructions defined in the interface?",options:["Operating System","Compiler","Implementation","Interpreter"],correct:2,exp:"The implementation is the code that actually performs what the interface promises."},
{q:"The functions which will give exact result when same arguments are passed are called",options:["Impure functions","Partial Functions","Dynamic Functions","Pure functions"],correct:3,exp:"Pure functions always return the same output for the same input with no side effects."},
{q:"The functions which cause side effects to the arguments passed are called",options:["Impure functions","Partial Functions","Dynamic Functions","Pure functions"],correct:0,exp:"Impure functions can modify their arguments or external state."}
];

const CH2_DATA_ABSTRACTION = [
{q:"Which of the following functions that build the abstract data type?",options:["Constructors","Destructors","recursive","Nested"],correct:0,exp:"Constructors build/create values of an abstract data type."},
{q:"Which of the following functions that retrieve information from the data type?",options:["Constructors","Selectors","recursive","Nested"],correct:1,exp:"Selectors extract information already stored in a data type."},
{q:"The data structure which is a mutable ordered sequence of elements is called",options:["Built in","List","Tuple","Derived data"],correct:1,exp:"A list is a mutable, ordered collection of elements in Python."},
{q:"A sequence of immutable objects is called",options:["Built in","List","Tuple","Derived data"],correct:2,exp:"A tuple is an ordered sequence whose elements cannot be changed once created."},
{q:"The data type whose representation is known are called",options:["Built in datatype","Derived datatype","Concrete datatype","Abstract datatype"],correct:2,exp:"A concrete datatype has a representation that is fully known and visible."},
{q:"The data type whose representation is unknown are called",options:["Built in datatype","Derived datatype","Concrete datatype","Abstract datatype"],correct:3,exp:"An abstract datatype hides its internal representation from the user."},
{q:"Which of the following is a compound structure?",options:["Pair","Triplet","single","quadrat"],correct:0,exp:"A pair bundles two values together, making it a compound structure."},
{q:"Bundling two values together into one can be considered as",options:["Pair","Triplet","single","quadrat"],correct:0,exp:"Combining two values into one unit is exactly what a pair does."},
{q:"Which of the following allow to name the various parts of a multi-item object?",options:["Tuples","Lists","Classes","quadrats"],correct:2,exp:"Classes let you name and access the different attributes of an object."},
{q:"Which of the following is constructed by placing expressions within square brackets?",options:["Tuples","Lists","Classes","quadrats"],correct:1,exp:"Lists in Python are written using square brackets, e.g. [1,2,3]."}
];

const CH3_SCOPING = [
{q:"Which of the following refers to the visibility of variables in one part of a program to another part of the same program?",options:["Scope", "Memory", "Address", "Accessibility"],correct:0,exp:"Scope determines where in a program a variable name is visible/usable."},
{q:"The process of binding a variable name with an object is called",options:["Scope", "Mapping", "late binding", "early binding"],correct:1,exp:"Mapping links a variable name to the object it refers to."},
{q:"Which of the following is used in programming languages to map the variable and object?",options:["::", ":=", "=", "=="],correct:2,exp:"The assignment operator '=' binds a variable name to an object."},
{q:"Containers for mapping names of variables to objects is called",options:["Scope", "Mapping", "Binding", "Namespaces"],correct:3,exp:"A namespace is a container holding the mapping of names to objects."},
{q:"Which scope refers to variables defined in current function?",options:["Local Scope", "Global scope", "Module scope", "Function Scope"],correct:0,exp:"Variables defined inside the current function belong to its local scope."},
{q:"The process of subdividing a computer program into separate sub-programs is called",options:["Procedural Programming", "Modular programming", "Event Driven Programming", "Object oriented Programming"],correct:1,exp:"Modular programming breaks a program into smaller, independent modules."},
{q:"Which of the following security technique regulates who can use resources in a computing environment?",options:["Password", "Authentication", "Access control", "Certification"],correct:2,exp:"Access control decides who is permitted to use which resources."},
{q:"Which of the following members of a class can be handled only from within the class?",options:["Public members", "Protected members", "Secured members", "Private members"],correct:3,exp:"Private members are accessible only inside the class that defines them."},
{q:"Which members are accessible from outside the class?",options:["Public members", "Protected members", "Secured members", "Private members"],correct:0,exp:"Public members can be accessed from anywhere, including outside the class."},
{q:"The members that are accessible from within the class and are also available to its subclasses is called",options:["Public members", "Protected members", "Secured members", "Private members"],correct:1,exp:"Protected members are visible within the class and its subclasses."}
];

const CH4_ALGORITHMIC_STRATEGIES = [
{q:"The word that comes from the name of Persian mathematician Abu Ja'far Mohammed ibn-i Musa al-Khowarizmi is called?",options:["Flowchart", "Flow", "Algorithm", "Syntax"],correct:2,exp:"The term 'algorithm' is derived from al-Khwarizmi's name."},
{q:"From the following sorting algorithms, which algorithm needs the minimum number of swaps?",options:["Bubble sort", "Quick sort", "Merge sort", "Selection sort"],correct:3,exp:"Selection sort performs at most n-1 swaps, fewer than bubble sort typically."},
{q:"Two main measures for the efficiency of an algorithm are",options:["Processor and memory", "Complexity and capacity", "Time and space", "Data and space"],correct:2,exp:"Efficiency is judged mainly by time complexity and space complexity."},
{q:"The algorithm that yields expected output for a valid input is called as",options:["Algorithmic solution", "Algorithmic outcomes", "Algorithmic problem", "Algorithmic coding"],correct:0,exp:"An algorithmic solution produces the correct expected output for valid input."},
{q:"Which of the following is used to describe the worst case of an algorithm?",options:["Big A", "Big S", "Big W", "Big O"],correct:3,exp:"Big O notation describes the worst-case running time."},
{q:"Big \u03a9 is the reverse of",options:["Big O", "Big \u03b8", "Big A", "Big S"],correct:0,exp:"Big Omega represents the best case, the reverse notion of Big O's worst case."},
{q:"Binary search is also called as",options:["Linear search", "Sequential search", "Random search", "Half-interval search"],correct:3,exp:"Binary search repeatedly halves the search interval, hence 'half-interval search'."},
{q:"The \u0398 notation in asymptotic evaluation represents",options:["Base case", "Average case", "Worst case", "NULL case"],correct:1,exp:"Theta notation gives a tight bound representing the average case."},
{q:"If a problem can be broken into subproblems which are reused several times, the problem possesses which property?",options:["Overlapping subproblems", "Optimal substructure", "Memoization", "Greedy"],correct:0,exp:"Reused subproblems are a hallmark of the overlapping subproblems property."},
{q:"In dynamic programming, the technique of storing the previously calculated values is called?",options:["Saving value property", "Storing value property", "Memoization", "Mapping"],correct:2,exp:"Memoization stores previously computed results to avoid recomputation."}
];

const CH5_PYTHON_VAR_OPS = [
{q:"Who developed Python?",options:["Ritche", "Guido Van Rossum", "Bill Gates", "Sunder Pitchai"],correct:1,exp:"Python was created by Guido van Rossum."},
{q:"The Python prompt that indicates the interpreter is ready to accept instructions is",options:[">>>", "<<<", "#", "<<"],correct:0,exp:"The standard Python interactive prompt is >>>."},
{q:"Which of the following shortcut is used to create a new Python program?",options:["Ctrl + C", "Ctrl + F", "Ctrl + B", "Ctrl + N"],correct:3,exp:"Ctrl+N opens a new file in IDLE."},
{q:"Which of the following character is used to give comments in a Python program?",options:["#", "&", "@", "$"],correct:0,exp:"The hash symbol '#' begins a single-line comment in Python."},
{q:"This symbol is used to print more than one item on a single line.",options:["Semicolon (;)", "Dollar ($)", "comma (,)", "Colon (:)"],correct:2,exp:"A comma separates multiple items passed to print()."},
{q:"Which of the following is not a token?",options:["Interpreter", "Identifiers", "Keyword", "Operators"],correct:0,exp:"Interpreter is a program, not a lexical token of the language."},
{q:"Which of the following is not a keyword in Python?",options:["break", "while", "continue", "operators"],correct:3,exp:"'operators' is not a reserved keyword in Python."},
{q:"Which operator is also called a Comparative operator?",options:["Arithmetic", "Relational", "Logical", "Assignment"],correct:1,exp:"Relational operators compare two values, hence 'comparative operators'."},
{q:"Which of the following is not a logical operator?",options:["and", "or", "not", "Assignment"],correct:3,exp:"Assignment (=) is not a logical operator; and/or/not are."},
{q:"Which operator is also called a Conditional operator?",options:["Ternary", "Relational", "Logical", "Assignment"],correct:0,exp:"The ternary operator (x if cond else y) is Python's conditional operator."}
];

const CH6_CONTROL_STRUCTURES = [
{q:"How many important control structures are there in Python?",options:["3", "4", "5", "6"],correct:0,exp:"Python has three main control structures: sequence, selection, and repetition."},
{q:"elif can be considered to be an abbreviation of",options:["nested if", "if..else", "else if", "if..elif"],correct:2,exp:"'elif' is short for 'else if'."},
{q:"What plays a vital role in Python programming?",options:["Statements", "Control", "Structure", "Indentation"],correct:3,exp:"Indentation defines code blocks in Python instead of braces."},
{q:"Which statement is generally used as a placeholder?",options:["continue", "break", "pass", "goto"],correct:2,exp:"'pass' does nothing and is used where a statement is syntactically required."},
{q:"The condition in the if statement should be in the form of",options:["Arithmetic or Relational expression", "Arithmetic or Logical expression", "Relational or Logical expression", "Arithmetic"],correct:2,exp:"An if-condition must evaluate to True/False using relational or logical expressions."},
{q:"Which is the most comfortable loop in Python?",options:["do..while", "while", "for", "if..elif"],correct:2,exp:"The 'for' loop is considered the most convenient looping construct in Python."},
{q:"What is the output of: i=1; while True: if i%3==0: break; print(i,end=''); i+=1",options:["12", "123", "1234", "124"],correct:0,exp:"i prints 1 and 2, then when i becomes 3, the loop breaks before printing it."},
{q:"What is the output of: T=1; while T: print(True) ; break",options:["False", "True", "0", "1"],correct:1,exp:"Since T=1 is truthy, the loop runs once and prints True before breaking."},
{q:"Which of these is not a jump statement?",options:["for", "pass", "continue", "break"],correct:0,exp:"'for' is a looping construct, not a jump statement."},
{q:"Which punctuation should be used after the if condition (before else)?",options:[";", ":", "::", "!"],correct:1,exp:"A colon ':' follows the condition to begin the indented block."}
];

const CH7_PYTHON_FUNCTIONS = [
{q:"A named block of code designed to do one specific job is called as",options:["Loop", "Branching", "Function", "Block"],correct:2,exp:"A function is a named, reusable block written for one specific task."},
{q:"A function which calls itself is called as",options:["Built-in", "Recursion", "Lambda", "return"],correct:1,exp:"A recursive function is one that calls itself."},
{q:"Which function is called an anonymous un-named function?",options:["Lambda", "Recursion", "Function", "define"],correct:0,exp:"A lambda function has no name and is defined inline."},
{q:"Which of the following keyword is used to begin the function block?",options:["define", "for", "finally", "def"],correct:3,exp:"The 'def' keyword starts a function definition in Python."},
{q:"Which of the following keyword is used to exit a function block?",options:["define", "return", "finally", "def"],correct:1,exp:"'return' exits a function and optionally sends back a value."},
{q:"While defining a function which symbol is used?",options:["; (semicolon)", ". (dot)", ": (colon)", "$ (dollar)"],correct:2,exp:"A colon follows the function header before the indented body."},
{q:"In which arguments is the correct positional order passed to a function?",options:["Required", "Keyword", "Default", "Variable-length"],correct:0,exp:"Required (positional) arguments must be passed in the exact order defined."},
{q:"Choose the correct statement(s): (I) In Python you don't mention specific data types while defining a function. (II) Python keywords can be used as function names.",options:["I is correct and II is wrong", "Both are correct", "I is wrong and II is correct", "Both are wrong"],correct:0,exp:"Python is dynamically typed (I is true); keywords cannot be used as function names (II is false)."},
{q:"Which condition correctly checks a leap year in: if _ : print(x, \"is a leap year\")",options:["x%2=0", "x%4==0", "x/4=0", "x%4=0"],correct:1,exp:"A valid boolean condition needs the equality operator '==', as in x%4==0."},
{q:"Which keyword is used to define the function testpython(): ?",options:["define", "pass", "def", "while"],correct:2,exp:"Functions are defined using the 'def' keyword."}
];

const CH8_STRINGS = [
{q:"str1=\"TamilNadu\"; print(str1[::-1]) outputs",options:["Tamilnadu", "Tmlau", "udanlimaT", "udaNlimaT"],correct:3,exp:"Slicing with step -1 reverses the string exactly, preserving the capital N: 'udaNlimaT'."},
{q:"str1 = \"Chennai Schools\"; str1[7] = \"-\" results in",options:["Chennai-Schools", "Chenna-School", "Type error", "Chennai"],correct:2,exp:"Strings are immutable in Python, so item assignment raises a TypeError."},
{q:"Which operator is used for concatenation of strings?",options:["+", "&", "*", "="],correct:0,exp:"The '+' operator joins (concatenates) two strings."},
{q:"Defining strings within triple quotes allows creating:",options:["Single line Strings", "Multiline Strings", "Double line Strings", "Multiple Strings"],correct:1,exp:"Triple quotes let a string span multiple lines."},
{q:"Strings in Python are:",options:["Changeable", "Mutable", "Immutable", "flexible"],correct:2,exp:"Once created, a Python string's characters cannot be changed \u2014 it is immutable."},
{q:"Which of the following is the slicing operator?",options:["{ }", "[ ]", "< >", "( )"],correct:1,exp:"Square brackets are used to slice sequences like strings and lists."},
{q:"What is stride?",options:["index value of slide operation", "first argument of slice operation", "second argument of slice operation", "third argument of slice operation"],correct:3,exp:"Stride is the step size, the third argument in a slice like s[start:stop:step]."},
{q:"Which formatting character prints exponential notation in upper case?",options:["%e", "%E", "%g", "%n"],correct:1,exp:"%E formats a number in exponential notation with an uppercase 'E'."},
{q:"Which of the following is used as placeholders/replacement fields with the format() function?",options:["{ }", "< >", "++", "^^"],correct:0,exp:"Curly braces {} act as placeholders replaced by format()."},
{q:"The subscript (index) of a string may be:",options:["Positive", "Negative", "Both (A) and (B)", "Either (A) or (B)"],correct:3,exp:"A string index can be either positive (from start) or negative (from end)."}
];

const CH9_LISTS_TUPLES_SETS_DICT = [
{q:"Pick the odd one out among collection data types:",options:["List", "Tuple", "Dictionary", "Loop"],correct:3,exp:"A loop is a control structure, not a collection data type."},
{q:"list1=[2,4,6,8,10]; print(list1[-2]) results in",options:["10", "8", "4", "6"],correct:1,exp:"Negative index -2 counts from the end, giving the second-last element, 8."},
{q:"Which function is used to count the number of elements in a list?",options:["count()", "find()", "len()", "index()"],correct:2,exp:"len() returns the number of elements in a list."},
{q:"If List=[10,20,30,40,50] then List[2]=35 will result in",options:["[35,10,20,30,40,50]", "[10,20,30,40,50,35]", "[10,20,35,40,50]", "[10,35,30,40,50]"],correct:2,exp:"Index 2 (the third element, 30) is replaced by 35, giving [10,20,35,40,50]."},
{q:"If List=[17,23,41,10] then List.append(32) will result in",options:["[32,17,23,41,10]", "[17,23,41,10,32]", "[10,17,23,32,41]", "[41,32,23,17,10]"],correct:1,exp:"append() adds the new element 32 at the end of the list."},
{q:"Which Python function can add more than one element to an existing list?",options:["append()", "append_more()", "extend()", "more()"],correct:2,exp:"extend() adds all elements of another iterable to the list."},
{q:"What is the result of: S=[x**2 for x in range(5)]; print(S)",options:["[0,1,2,4,5]", "[0,1,4,9,16]", "[0,1,4,9,16,25]", "[1,4,9,16,25]"],correct:1,exp:"Squares of 0-4 give [0,1,4,9,16]."},
{q:"What is the use of the type() function in Python?",options:["To create a Tuple", "To know the type of an element in a tuple", "To know the data type of a Python object", "To create a list"],correct:2,exp:"type() reveals the data type of any given Python object."},
{q:"Which statement is NOT correct?",options:["A list is mutable", "A tuple is immutable", "The append() function is used to add an element", "The extend() function is used in a tuple to add elements in a list"],correct:3,exp:"extend() works on mutable sequences like lists, not on immutable tuples."},
{q:"setA={3,6,9}, setB={1,3,9}. What is the result of print(setA|setB)?",options:["{3,6,9,1,3,9}", "{3,9}", "{1}", "{1,3,6,9}"],correct:3,exp:"The '|' operator gives the union of the two sets, all unique elements combined."},
{q:"Which set operation includes elements in either set but not those common to both?",options:["Symmetric difference", "Difference", "Intersection", "Union"],correct:0,exp:"Symmetric difference returns elements exclusive to each set, excluding common ones."},
{q:"The keys in a Python dictionary are specified by",options:["=", ";", "+", ":"],correct:3,exp:"A colon ':' separates each key from its value in a dictionary."}
];

const CH10_PYTHON_CLASSES = [
{q:"Which of the following are the key features of an Object Oriented Programming language?",options:["Constructor and Classes", "Constructor and Object", "Classes and Objects", "Constructor and Destructor"],correct:2,exp:"Classes and Objects are the core building blocks of OOP."},
{q:"Functions defined inside a class are called:",options:["Functions", "Module", "Methods", "section"],correct:2,exp:"Functions defined within a class are referred to as methods."},
{q:"Class members are accessed through which operator?",options:["&", ".", "#", "%"],correct:1,exp:"The dot '.' operator accesses attributes and methods of a class instance."},
{q:"Which method is automatically executed when an object is created?",options:["__object__()", "__del__()", "__func__()", "__init__()"],correct:3,exp:"__init__() runs automatically as the constructor when an object is created."},
{q:"A private class variable is prefixed with",options:["__ (double underscore)", "&&", "##", "**"],correct:0,exp:"A double underscore prefix marks a class variable as private."},
{q:"Which method is used as a destructor?",options:["__init__()", "__dest__()", "__rem__()", "__del__()"],correct:3,exp:"__del__() is the destructor method, called when an object is deleted."},
{q:"Which class declaration is correct?",options:["class class_name", "class class_name<>", "class class_name:", "class class_name[ ]"],correct:2,exp:"A class header ends with a colon: 'class class_name:'."},
{q:"What is the output of this Student class program that assigns self.name = name and prints self.name for S=Student(\"Tamil\")?",options:["Error", "Tamil", "name", "self"],correct:1,exp:"The constructor stores the passed value, so printing self.name shows 'Tamil'."},
{q:"Which of the following is the private class variable?",options:["__num", "##num", "$$num", "&&num"],correct:0,exp:"__num, using the double-underscore prefix, denotes a private variable."},
{q:"The process of creating an object is called as:",options:["Constructor", "Destructor", "Initialize", "Instantiation"],correct:3,exp:"Creating an object from a class is called instantiation."}
];

const CH11_DATABASE_CONCEPTS = [
{q:"What is the acronym of DBMS?",options:["DataBase Management Symbol", "Database Managing System", "DataBase Management System", "DataBasic Management System"],correct:2,exp:"DBMS stands for DataBase Management System."},
{q:"A table is known as",options:["tuple", "attribute", "relation", "entity"],correct:2,exp:"In relational database terminology, a table is called a relation."},
{q:"Which database model represents a parent-child relationship?",options:["Relational", "Network", "Hierarchical", "Object"],correct:2,exp:"The hierarchical model organizes data in a tree-like parent-child structure."},
{q:"The relational database model was first proposed by",options:["E F Codd", "E E Codd", "E F Cadd", "E F Codder"],correct:0,exp:"E. F. Codd introduced the relational database model."},
{q:"What type of relationship does the hierarchical model represent?",options:["one-to-one", "one-to-many", "many-to-one", "many-to-many"],correct:1,exp:"Hierarchical models represent one-to-many parent-child links."},
{q:"Who is called the Father of Relational Database?",options:["Chris Date", "Hugh Darween", "Edgar Frank Codd", "Edgar Frank Cadd"],correct:2,exp:"Edgar Frank Codd is credited as the father of the relational database."},
{q:"Which of the following is an RDBMS?",options:["Dbase", "Foxpro", "Microsoft Access", "SQLite"],correct:3,exp:"SQLite is a relational database management system."},
{q:"What symbol is used for the SELECT statement in relational algebra?",options:["\u03c3", "\u03a0", "X", "\u03a9"],correct:0,exp:"The sigma (\u03c3) symbol represents the SELECT (selection) operation."},
{q:"A tuple is also known as",options:["table", "row", "attribute", "field"],correct:1,exp:"A tuple in a relation corresponds to a single row of data."},
{q:"Who developed the ER model?",options:["Chen", "EF Codd", "Chend", "Chand"],correct:0,exp:"Peter Chen developed the Entity-Relationship (ER) model."}
];

const CH12_SQL = [
{q:"Which commands provide definitions for creating table structure, deleting relations, and modifying relation schemas?",options:["DDL", "DML", "DCL", "DQL"],correct:0,exp:"Data Definition Language (DDL) defines and modifies database structures."},
{q:"Which command lets you change the structure of a table?",options:["SELECT", "ORDER BY", "MODIFY", "ALTER"],correct:3,exp:"ALTER TABLE modifies the structure of an existing table."},
{q:"The command to delete a table is",options:["DROP", "DELETE", "DELETE ALL", "ALTER TABLE"],correct:0,exp:"DROP TABLE removes the entire table and its structure."},
{q:"Queries can be generated using",options:["SELECT", "ORDER BY", "MODIFY", "ALTER"],correct:0,exp:"SELECT is used to write queries that retrieve data."},
{q:"The clause used to sort data in a database is",options:["SORT BY", "ORDER BY", "GROUP BY", "SELECT"],correct:1,exp:"ORDER BY sorts the result set of a query."}
];

const CH13_PYTHON_CSV = [
{q:"A CSV file is also known as a \u2026.",options:["Flat File", "3D File", "String File", "Random File"],correct:0,exp:"A CSV file is a plain, flat text file of comma-separated values."},
{q:"The expansion of CRLF is",options:["Control Return and Line Feed", "Carriage Return and Form Feed", "Control Router and Line Feed", "Carriage Return and Line Feed"],correct:3,exp:"CRLF stands for Carriage Return and Line Feed."},
{q:"Which module is provided by Python to perform operations on CSV files?",options:["py", "xls", "csv", "os"],correct:2,exp:"Python's built-in 'csv' module handles reading/writing CSV files."},
{q:"Which mode is used when dealing with non-text files like image or exe files?",options:["Text mode", "Binary mode", "xls mode", "csv mode 5"],correct:1,exp:"Binary mode is used for non-text files such as images or executables."},
{q:"The command used to skip a row in a CSV file is",options:["next()", "skip()", "omit()", "bounce()"],correct:0,exp:"next() advances the reader past a row, effectively skipping it, e.g. the header."},
{q:"Which string terminates lines produced by the writer() method of the csv module?",options:["Line Terminator", "Enter key", "Form feed", "Data Terminator"],correct:0,exp:"The 'lineterminator' string ends each line written by csv.writer()."},
{q:"Given city.csv has 'chennai,mylapore' and 'mumbai,andheri', reading with next(d) then looping and printing rows outputs",options:["chennai,mylapore", "mumbai,andheri", "chennai\nmumbai", "chennai,mylapore\nmumbai,andheri"],correct:1,exp:"next(d) skips the first row, so only the second row 'mumbai,andheri' is printed."},
{q:"Which of the following creates an object which maps data to a dictionary?",options:["listreader()", "reader()", "tuplereader()", "DictReader()"],correct:3,exp:"csv.DictReader() maps each row of a CSV file to a dictionary."},
{q:"Making changes to the data of an existing file or adding more data is called",options:["Editing", "Appending", "Modification", "Alteration"],correct:2,exp:"Changing or adding data to an existing file is termed modification."},
{q:"Given D = [['Exam'],['Quarterly'],['Halfyearly']] written with lineterminator='\\n', the file test.csv will contain",options:["Exam Quarterly Halfyearly (one line)", "Exam Quarterly Halfyearly (spaced)", "E, Q, H on separate lines", "Exam,\\nQuarterly,\\nHalfyearly (each on its own line)"],correct:3,exp:"Each single-item row is written on its own line, so the file has 'Exam,', 'Quarterly,', 'Halfyearly,' on separate lines."}
];

const CH14_IMPORTING_CPP = [
{q:"Which of the following is not a scripting language?",options:["JavaScript", "PHP", "Perl", "HTML"],correct:3,exp:"HTML is a markup language, not a scripting language."},
{q:"Importing a C++ program into a Python program is called",options:["wrapping", "Downloading", "Interconnecting", "Parsing"],correct:0,exp:"This process of interfacing C++ code into Python is called wrapping."},
{q:"The expansion of API is",options:["Application Programming Interpreter", "Application Programming Interface", "Application Performing Interface", "Application Programming Interlink"],correct:1,exp:"API stands for Application Programming Interface."},
{q:"A framework for interfacing Python and C++ is",options:["Ctypes", "SWIG", "Cython", "Boost"],correct:3,exp:"Boost (Boost.Python) is a framework used to interface Python with C++."},
{q:"Which of the following is a software design technique to split code into separate parts?",options:["Object oriented Programming", "Modular programming", "Low Level Programming", "Procedure oriented Programming"],correct:1,exp:"Modular programming splits code into separate, manageable parts."},
{q:"The module which allows interfacing with the Windows operating system is",options:["OS module", "sys module", "csv module", "getopt module"],correct:0,exp:"The 'os' module provides functions to interact with the operating system."},
{q:"getopt() will return an empty array if there is no error in splitting strings to",options:["argv variable", "opt variable", "args variable", "ifile variable"],correct:2,exp:"When there is no leftover, the args variable returned is empty."},
{q:"In: if __name__=='__main__': main(sys.argv[1:]) \u2014 identify the function call statement.",options:["main(sys.argv[1:])", "__name__", "__main__", "argv"],correct:0,exp:"main(sys.argv[1:]) is the actual statement that calls the function."},
{q:"Which of the following can be used for processing text, numbers, images, and scientific data?",options:["HTML", "C", "C++", "PYTHON"],correct:3,exp:"Python is widely used for text, numeric, image, and scientific data processing."},
{q:"What does __name__ contain?",options:["c++ filename", "main() name", "python filename", "os module name"],correct:2,exp:"__name__ holds the name of the current Python module/file."}
];

const CH15_DATA_MANIPULATION_SQL = [
{q:"Which of the following is an organized collection of data?",options:["Database", "DBMS", "Information", "Records"],correct:0,exp:"A database is an organized collection of related data."},
{q:"SQLite falls under which database system?",options:["Flat file database system", "Relational Database system", "Hierarchical database system", "Object oriented Database system"],correct:1,exp:"SQLite is a lightweight relational database system."},
{q:"Which of the following is a control structure used to traverse and fetch records of the database?",options:["Pointer", "Key", "Cursor", "Insertion point"],correct:2,exp:"A cursor is used to traverse and fetch rows from a query result."},
{q:"Changes made in the values of a record should be saved by the command",options:["Save", "Save As", "Commit", "Oblige"],correct:2,exp:"COMMIT permanently saves changes made to the database."},
{q:"Which of the following executes an SQL command to perform an action?",options:["execute()", "key()", "cursor()", "run()"],correct:0,exp:"execute() runs the given SQL command."},
{q:"Which function retrieves the average of a selected column of rows in a table?",options:["Add()", "SUM()", "AVG()", "AVERAGE()"],correct:2,exp:"AVG() computes the average value of a numeric column."},
{q:"The function that returns the largest value of a selected column is",options:["MAX()", "LARGE()", "HIGH()", "MAXIMUM()"],correct:0,exp:"MAX() returns the largest value in a selected column."},
{q:"Which of the following is called the master table?",options:["sqlite_master", "sql_master", "main_master", "master_main"],correct:0,exp:"sqlite_master is SQLite's built-in master/catalog table."},
{q:"The most commonly used statement in SQL is",options:["cursor", "select", "execute", "commit"],correct:1,exp:"SELECT is the most frequently used SQL statement for retrieving data."},
{q:"Which of the following clause avoids duplicates?",options:["Distinct", "Remove", "Where", "GroupBy"],correct:0,exp:"DISTINCT filters out duplicate rows from the query result."}
];

const CH16_DATA_VISUALIZATION = [
{q:"Which is a Python package used for 2D graphics?",options:["matplotlib.pyplot", "matplotlib.pip", "matplotlib.numpy", "matplotlib.plt"],correct:0,exp:"matplotlib.pyplot is the module used to create 2D plots/graphics."},
{q:"Identify the package manager for Python packages/modules.",options:["Matplotlib", "PIP", "plt.show()", "python package"],correct:1,exp:"PIP is the standard package manager for installing Python packages."},
{q:"'pip --version' at the command prompt is used to",options:["Check if PIP is Installed", "Install PIP", "Download a Package", "Check PIP version"],correct:3,exp:"pip --version displays the currently installed PIP version."},
{q:"'pip list' at the command prompt is used to",options:["List installed packages", "list command", "Install PIP", "packages installed"],correct:0,exp:"pip list shows all packages currently installed."},
{q:"In 'python -m pip install -U pip', what does '-U' represent?",options:["downloading pip to the latest version", "upgrading pip to the latest version", "removing pip", "upgrading matplotlib to the latest version"],correct:1,exp:"-U (upgrade) updates pip itself to its latest version."},
{q:"Which code plots points (1,4),(2,5),(3,1) as a line chart?",options:["plt.plot([1,2,3],[4,5,1]); plt.show()", "plt.plot([1,2],[4,5]); plt.show()", "plt.plot([2,3],[5,1]); plt.show()", "plt.plot([1,3],[4,1]); plt.show()"],correct:0,exp:"The x-list [1,2,3] paired with y-list [4,5,1] plots exactly the three points shown."},
{q:"Which key is used to run the module in IDLE?",options:["F6", "F4", "F3", "F5"],correct:3,exp:"F5 runs the currently open module in Python IDLE."},
{q:"Identify the right type of chart: it visualizes a trend over time intervals, drawn chronologically.",options:["Line chart", "Bar chart", "Pie chart", "Scatter plot"],correct:0,exp:"A line chart is the standard way to show trends over time."},
{q:"Statement A: plt.pie() creates a pie chart with Matplotlib. Statement B: 'autopct' displays percentage values using Python string formatting. Which is correct?",options:["Statement A is correct", "Statement B is correct", "Both the statements are correct", "Both the statements are wrong"],correct:2,exp:"Both statements are accurate descriptions of Matplotlib's pie chart function."}
];

const CH1_FUNCTION_ADD = [
{q:"The syntax to define a function begins with",options:["fun", "func", "let", "rec"],correct:2,exp:"This chapter's generic function notation uses 'let' to begin a function definition."},
{q:"Which of the following key indicates that the function is a recursive function?",options:["rec", "recursive", "recur", "recu"],correct:0,exp:"'rec' is the keyword used to mark a recursive function definition."},
{q:"All functions are ______ definitions.",options:["static", "data type", "dynamic", "return"],correct:0,exp:"Functions are treated as static definitions in this notation."},
{q:"A function definition which calls itself is called",options:["main function", "self-function", "function definition", "recursive function"],correct:3,exp:"A function that calls itself is a recursive function."},
{q:"Which of the following do not have any side effects?",options:["User defined functions", "Pure functions", "Impure functions", "Assigned functions"],correct:1,exp:"Pure functions never cause side effects \u2014 same input always gives the same output."},
{q:"Which of the following function is an impure function?",options:["strlen()", "sin()", "random()", "gcd()"],correct:2,exp:"random() gives a different result each call, so it's impure."},
{q:"An instance created for the class is",options:["Function", "Variables", "Objects", "Constructors"],correct:2,exp:"An instantiated class is called an object."}
];

const CH2_DATA_ABSTRACTION_ADD = [
{q:"_______ provides modularity.",options:["Abstraction", "Constructor", "Recursion", "Structures"],correct:0,exp:"Abstraction lets you hide details and build programs in independent modules."},
{q:"Splitting a program into many modules is called",options:["Control Flow", "Looping", "Abstraction", "Modularity"],correct:3,exp:"Breaking a program into modules is called modularity."},
{q:"Which of the following are the representations for \u201cAbstract Data Types\u201d?",options:["Object", "Classes", "Functions", "Inheritance"],correct:1,exp:"Classes are used to represent abstract data types."},
{q:"Which of the following is a compound structure?",options:["Pairs", "Triplet", "Single", "Quadrat"],correct:0,exp:"A pair is the basic compound structure combining two values."},
{q:"How many ways are used to access the list element?",options:["3", "2", "5", "4"],correct:1,exp:"List elements can be accessed in 2 ways."},
{q:"The expansion of ADT is",options:["Built-in datatype", "Derived datatype", "Concrete datatype", "Abstract Data Type"],correct:3,exp:"ADT stands for Abstract Data Type."},
{q:"The expansion of CDT is",options:["Built-in datatype", "Derived datatype", "Concrete Data Type", "Abstract Data Type"],correct:2,exp:"CDT stands for Concrete Data Type."},
{q:"To facilitate data abstraction, you will need to create ______ types of functions.",options:["3", "2", "5", "4"],correct:1,exp:"Data abstraction needs 2 types of functions: constructors and selectors."},
{q:"Which of the following creates List expressions?",options:["( )", "[ ]", "< >", "{ }"],correct:1,exp:"Square brackets [ ] create list expressions in Python."},
{q:"Which of the following constructs Tuples expressions?",options:["( )", "[ ]", "< >", "{ }"],correct:0,exp:"Parentheses ( ) construct tuple expressions."},
{q:"We are using here a powerful strategy for designing programs:",options:["Abstraction", "Wishful thinking", "Constructors", "Pairs"],correct:1,exp:"Wishful thinking is a design strategy where you assume helper functions exist before writing them."},
{q:"List is constructed by placing expressions within square brackets separated by",options:["Period(.)", "Colon(:)", "Semicolon(;)", "Comma(,)"],correct:3,exp:"List elements are separated using commas."},
{q:"Identify the correct list usage from the following: i. LIST[10,20] ii. LIST(10,20) iii. LIST[(0,10),(1,20)] iv. LIST{10,20}",options:["i Only", "i, ii Only", "i, iii Only", "i, ii, iii, iv"],correct:2,exp:"Only list syntax using square brackets (i and iii) is valid."},
{q:"Which of the following is used to represent multi-part objects where each part is named?",options:["Class", "Function", "Structure", "Object"],correct:0,exp:"Classes let you name and access the different parts of a multi-item object."}
];

const CH3_SCOPING_ADD = [
{q:"The duration for which a variable is alive is called its",options:["Scope time", "end time", "life time", "variable time"],correct:2,exp:"The period a variable remains alive is its lifetime."},
{q:"Scope refers to the visibility of",options:["variables", "parameters", "functions", "all of these"],correct:3,exp:"Scope applies to variables, parameters, and functions alike."},
{q:"Which are composed of one or more independently developed modules?",options:["Access control", "Encapsulation", "Programs", "Data types"],correct:2,exp:"Programs are composed of independently developed modules."},
{q:"It is a fundamental concept in security that minimizes risk to the object.",options:["Access control", "Encapsulation", "Inheritance", "Data types"],correct:0,exp:"Access control is the security concept that minimizes risk to objects/resources."},
{q:"In terms of hierarchy, the scope with highest priority is",options:["Local", "Enclosed", "Global", "Built-in"],correct:3,exp:"Built-in scope sits at the top of the lookup hierarchy in this notation."},
{q:"In terms of hierarchy, the scope with lowest priority is",options:["Local", "Enclosed", "Global", "Built-in"],correct:0,exp:"Local scope has the lowest (first-checked) priority."},
{q:"Always, a function will first look up for a variable name in its",options:["local scope", "Enclosed scope", "Global scope", "Built-in scope"],correct:0,exp:"Python's LEGB rule checks local scope first."},
{q:"Which contain instructions, processing logic, and data?",options:["Scope", "Object", "Modules", "Interface"],correct:2,exp:"Modules contain instructions, processing logic, and data."},
{q:"Which of the following can be separately compiled and stored in a library?",options:["Programs", "Scope", "Namespace", "Modules"],correct:3,exp:"Modules can be compiled separately and stored in a library."},
{q:"Which of the following members of a class are denied access from the outside of class?",options:["private", "public", "protected", "All of these"],correct:0,exp:"Private members cannot be accessed from outside the class."},
{q:"The members that are accessible from outside the class is",options:["private", "public", "protected", "All of these"],correct:1,exp:"Public members are accessible from outside the class."},
{q:"The arrangement of private instance variables and public methods ensures the principle of",options:["Data Encapsulation", "Inheritance", "Polymorphism", "All of these"],correct:0,exp:"This arrangement is the core idea of data encapsulation."},
{q:"The members accessible from within the class and are also available to its sub-classes is",options:["private", "public", "protected", "All of these"],correct:2,exp:"Protected members are visible within the class and its subclasses."},
{q:"The symbol prefixed with the variable to indicate protected and private access specifiers is",options:["Single underscore", "Double underscore", "(a) or (b)", "Backslash"],correct:2,exp:"A single underscore marks protected; a double underscore marks private."}
];

const CH4_ALGORITHMIC_STRATEGIES_ADD = [
{q:"A finite set of instructions to accomplish a particular task is called",options:["Flow chart", "Algorithm", "Pseudo code", "Walkthrough"],correct:1,exp:"A finite, well-defined set of instructions is an algorithm."},
{q:"The way of defining an algorithm is called",options:["Algorithmic procedure", "Algorithmic definition", "Algorithmic function", "Algorithmic strategy"],correct:3,exp:"The general approach used to define an algorithm is called an algorithmic strategy."},
{q:"An algorithm that yields expected output for a valid input is called",options:["Problem solving", "Derivations", "Algorithmic solution", "None of the above"],correct:2,exp:"This is the definition of an algorithmic solution."},
{q:"The efficiency of which state can be expressed as O(n)?",options:["Average case", "Best case", "Worst case", "NULL case"],correct:1,exp:"Per this textbook's classification, O(n) here is attributed to the best case."},
{q:"The efficiency of __ state can be expressed as O(1)?",options:["Average case", "Best case", "Worst case", "NULL case"],correct:0,exp:"Per this textbook's classification, O(1) here is attributed to the average case."},
{q:"Linear search is also called as",options:["Continuous search", "Ordered search", "Binary search", "Sequential search"],correct:3,exp:"Linear search is also known as sequential search."},
{q:"Half \u2013 interval search algorithm is also called as",options:["Linear search", "Binary search", "Continuous search", "Ordered search"],correct:1,exp:"Half-interval search is another name for binary search."}
];

const CH5_PYTHON_VAR_OPS_ADD = [
{q:"The Python language was developed by Guido van Rossum of the National Research Institute of Mathematical and Computer Science (CWI) in which country?",options:["Philippines", "Saudi Arabia", "Netherland", "Australia"],correct:2,exp:"CWI is located in the Netherlands."},
{q:"The algorithm uses the \u2018Divide and Conquer\u2019 technique is",options:["Insertion sort", "Bubble sort", "Linear search", "Binary search"],correct:3,exp:"Binary search repeatedly divides the search space, a divide-and-conquer technique."},
{q:"Python was released in the year",options:["1990", "1991", "1992", "1993"],correct:1,exp:"Python was first released in 1991."},
{q:"In how many ways python programs can be written?",options:["1", "2", "3", "4"],correct:1,exp:"Python programs can be written in 2 ways (interactive mode and script mode)."},
{q:"All data values in Python are",options:["class", "object", "data type", "function"],correct:1,exp:"Every data value in Python is an object."},
{q:"Python files are by default saved with extension",options:[".pyth", ".python", ".pyt", ".py"],correct:3,exp:"Python source files use the .py extension."},
{q:"Expand : IDLE",options:["Integrated Device Learning Editor", "Internal Development Loading Environment", "Integrated Development Learning Environment", "Internal Drive Loaded Environment"],correct:2,exp:"IDLE stands for Integrated Development Learning Environment."},
{q:"Which command is used to execute python script?",options:["Run \u2192 Run Module", "File \u2192 Run Module", "Shell \u2192 RunModule", "Terminal \u2192 RunModule"],correct:0,exp:"Run > Run Module executes the current script in IDLE."},
{q:"To run the Python script by pressing the key",options:["F2", "F5", "F7", "F10"],correct:1,exp:"F5 runs the current script in IDLE."},
{q:"input ( ) accepts all data as ____ but not as numbers.",options:["digits", "strings", "character", "None"],correct:1,exp:"input() always returns the entered data as a string."},
{q:"The function used to convert string data as integer explicitly is",options:["int()", "integer()", "num()", "digit()"],correct:0,exp:"int() explicitly converts a string to an integer."},
{q:"In Python which of the following is used to indicate blocks of codes for class, function or body of the loops and block of selection command?",options:["Spaces", "Tabs", "Both a) and b)", "Empty Line"],correct:2,exp:"Python allows either spaces or tabs (consistently) to indicate blocks."},
{q:"Which separation is necessary between tokens?",options:["Whitespace", "dot", "tab", "All of these"],correct:0,exp:"Whitespace is required to separate tokens in Python."},
{q:"It is an invalid identifier.",options:["12Name", "name", "totalmark", "num"],correct:0,exp:"Identifiers cannot start with a digit, so 12Name is invalid."},
{q:"Which operator is called a comparative operator?",options:["=", "==", "+=", "//"],correct:1,exp:"== is the equality/comparison operator."},
{q:"Which operator is called assignment operator?",options:["=", "==", "**", "//"],correct:0,exp:"= is the assignment operator."},
{q:"What is the output for the following code? >>> 5 + 50 * 10",options:["550", "55", "505", "15"],correct:2,exp:"Multiplication happens before addition: 50*10=500, plus 5 = 505."},
{q:"Octal literals are preceded with",options:["0x", "0o", "0h", "0i"],correct:1,exp:"Octal literals in Python are prefixed with 0o."},
{q:"What is the output of the following code? a =100  b=10  print(a/b)",options:["10", "10.0", "10.5", "3"],correct:1,exp:"The / operator always returns a float: 100/10 = 10.0."},
{q:"The output for the following line is  print(\u201c\\\u201d Python \\\u201d\u201d)",options:["Python", "\u2018Python\u2019", "\u201cPython\u201d", "\u201c\u2019 Python\u201d\u2019"],correct:2,exp:"The escaped quotes print literal double quotes around Python."},
{q:"What is the output for the following code? >>> x = 10 >>> y = 20 >>> print(\u201cThe Sum is : \u201c,x+y)",options:["30", "the sum is 30", "The Sum is 30", "The Sum is : 30"],correct:3,exp:"print joins the string and the sum with a space: 'The Sum is : 30'."},
{q:"What is the output of the following code? a=100 b=30 c=a//b print(c)",options:["10", "10.0", "10.5", "3"],correct:3,exp:"// is floor division: 100//30 = 3."},
{q:"What is the output for the following code? >>> a=97 >>> b=35 >>> a>b or a==b",options:["True", "False", "0", "1"],correct:0,exp:"97>35 is True, and 'or' short-circuits to True."},
{q:"What is the output for the following code? >>> a=97 >>> b=35 >>> not (a>b and a==b)",options:["True", "False", "0", "1"],correct:0,exp:"a==b is False, so the 'and' is False, and 'not False' is True."},
{q:"What is the output for the following code? a, b = 30, 20 min = a if a < b else b print(min)",options:["20", "30", "True", "False"],correct:0,exp:"Since 30 is not less than 20, the else branch runs and min = b = 20."},
{q:"What is the output of the following code? x = 1 + 3.14j print(x.imag)",options:["1+3.14j", "1", "3.14", "3.14j"],correct:2,exp:".imag returns just the imaginary component as a float: 3.14."}
];

const CH6_CONTROL_STRUCTURES_ADD = [
{q:"A program statement that causes a jump of control from one part of the program to another is called",options:["statements", "Control statements", "Blocks", "Scope"],correct:1,exp:"A jump-of-control statement is called a control statement."},
{q:"Which of the following is not an alternative or branching statement in Python?",options:["simple if", "if..else", "if..elif..else", "while"],correct:3,exp:"while is a loop, not a branching statement."},
{q:"Which of the following terminates the loop containing it?",options:["break", "continue", "pass", "jump"],correct:0,exp:"break exits (terminates) the loop it is in."},
{q:"The statement which is used to skip the remaining part of the loop and start with next iteration is",options:["break", "continue", "pass", "jump"],correct:1,exp:"continue skips to the next iteration of the loop."},
{q:"Which of the following is a null statement in Python?",options:["break", "continue", "pass", "null"],correct:2,exp:"pass is Python's null (do-nothing) statement."},
{q:"The statement used as a placeholder is",options:["break", "continue", "pass", "null"],correct:2,exp:"pass acts as a placeholder where a statement is syntactically required."},
{q:"What is the output for the following code? i = 10 while (i<=15): print(i,end='\\t') i+=2",options:["10 11 12 13 14 15", "11 13 15", "10 12 14", "10 12 14 15"],correct:2,exp:"Starting at 10 and stepping by 2 while <=15 gives 10, 12, 14."},
{q:"What is the stop value for the following statement? range(30)",options:["0", "1", "30", "29"],correct:3,exp:"range(30) stops at 29 (30 is excluded)."},
{q:"What is the start value for the following statement? range(20)",options:["0", "1", "20", "19"],correct:0,exp:"range(20) starts at 0 by default."},
{q:"What is the output for the following code? i = 10 while (i<=15): print(i,end='\\t') i+=1 else: print(i)",options:["10 11 12 13 14 15 16", "11 13 15 16", "10 12 14 16", "10 12 14 15 16"],correct:0,exp:"The loop prints 10-15, then the else clause runs once the loop condition fails, printing 16."},
{q:"What is the output for the following code? for i in range(2,10,2): print(i,end=' ')",options:["2 4 6 8 10", "2 4 6 8", "2 4 6", "1 2 4 6 8"],correct:1,exp:"range(2,10,2) gives 2,4,6,8 (10 excluded)."},
{q:"What is the output for the following code? for word in \"Computer Science\": if word==\"e\": break print(word, end='')",options:["Computr Scinc", "Compute", "Comput", "Computer Scinc"],correct:2,exp:"The loop breaks the first time it hits 'e', so only 'Comput' prints."},
{q:"What is the output for the following code? for word in \"Computer Science\": if word==\"e\": continue print(word, end='')",options:["Computr Scinc", "Compute", "Comput", "Computer Scinc"],correct:0,exp:"continue skips printing each 'e' but continues the loop, giving 'Computr Scinc'."},
{q:"What is the output for the following code? i=1 while True: if i%5==0: break print(i,end=' ') i+=1",options:["1 2", "1 2 3", "1 2 3 4 5", "1 2 3 4"],correct:3,exp:"The loop breaks right when i becomes 5, so it prints 1 2 3 4."}
];

const CH7_PYTHON_FUNCTIONS_ADD = [
{q:"It avoids repetition and makes high degree of code reusing.",options:["Function", "Loop", "Branching", "Jumping"],correct:0,exp:"Functions avoid repetition by making code reusable."},
{q:"Basically, we can divide functions into _____ types.",options:["1", "2", "3", "4"],correct:3,exp:"Functions in Python are broadly divided into 4 types."},
{q:"How many types of arguments are used by functions in Python?",options:["1", "2", "3", "4"],correct:3,exp:"Python supports 4 types of function arguments."},
{q:"Which of the following statement indicates end of the function?",options:["Function prototype", "Function name", "end", "return"],correct:3,exp:"return marks the end of a function's execution."},
{q:"The variables used in the function definition are called",options:["Parameters", "Arguments", "Identifiers", "Constants"],correct:0,exp:"Variables listed in a function definition are parameters."},
{q:"The values we pass to the function parameters are called",options:["Parameters", "Arguments", "Identifiers", "Constants"],correct:1,exp:"Values passed into a function call are arguments."},
{q:"Which of the following allows you to put arguments in improper order?",options:["Keyword arguments", "Variable\u2013length argument", "Default argument", "Required argument"],correct:0,exp:"Keyword arguments let you pass values out of positional order by naming them."},
{q:"An argument that takes a default value if no value is provided in the function call is",options:["Keyword arguments", "Variable\u2013length argument", "Default argument", "Required argument"],correct:2,exp:"A default argument uses a preset value when none is supplied."},
{q:"The symbol used to define arguments in Variable \u2013 length argument is",options:["#", "*", "$", ":"],correct:1,exp:"The * symbol marks a variable-length (*args) argument."},
{q:"The following code is an example for  def sample(b,c,a): print(\u201cWelcome\u201d) return  sample(a,b,c)",options:["Keyword arguments", "Variable\u2013length argument", "Default argument", "Required argument"],correct:0,exp:"Passing arguments by name (a,b,c) regardless of position is a keyword-argument call."},
{q:"What is the output of the following code? def loc(): y = \u201cLocal\u201d  loc() print(y)",options:["Local", "y", "y = \u201cLocal\u201d", "Error"],correct:3,exp:"y is local to loc() and doesn't exist outside it, causing an Error."},
{q:"What is the output of the following code? def hello(): return  print(hello())",options:["hello \u2013 Python", "Hello \u2013 Python", "None", "hello"],correct:2,exp:"hello() returns nothing (None), and print displays that None."},
{q:"What is the output of the following code: def hello(): print(\u201chello \u2013 Python\u201d) return  print(hello())",options:["hello \u2013 Python then None", "Hello \u2013 Python then None", "None then hello \u2013 Python", "None then python"],correct:0,exp:"The function first prints 'hello \u2013 Python', then print(hello()) prints None since it returns nothing."},
{q:"What is the output of the following code? def add(a,b=3,c): return a+b+c print(add(5,10,15))",options:["30", "23", "10", "Error"],correct:3,exp:"A non-default argument (c) cannot follow a default argument (b) in a definition, so this raises an Error."},
{q:"What is the output of the following code? def add(a,b=3,c=2): return a+b+c print(add(5,10,15))",options:["30", "23", "10", "Error"],correct:0,exp:"add(5,10,15) maps a=5,b=10,c=15, so 5+10+15=30."},
{q:"What is the output of the following code? Sum=lambda a1,a2:a1+a2 print(Sum(20,40)) print(Sum(-20,40))",options:["60 then -60", "20 then -20", "240 then 20", "60 then 20"],correct:3,exp:"20+40=60, and -20+40=20."},
{q:"What is the output of the following code? c=1 def add(): c = c + 2 print(c) add()",options:["1", "3", "2", "Error"],correct:3,exp:"c is local inside add() and referenced before assignment, causing an Error."},
{q:"Default recursive calls in Python is",options:["1000", "2000", "1100", "2200"],correct:0,exp:"Python's default recursion limit is 1000."},
{q:"In Python, anonymous functions are defined using the keyword,",options:["def", "rec", "lambda", "let"],correct:2,exp:"Anonymous functions in Python use the lambda keyword."},
{q:"Which of the following keyword is necessary to modify the value of global variable inside the function?",options:["glob", "global", "glopal", "public"],correct:1,exp:"The 'global' keyword lets a function modify a global variable."},
{q:"What is the output of the following code? x = 0 def add(): global x  x = x + 5 print(x) add() print(x)",options:["5 then 10", "10 then 10", "5 then 5", "Error"],correct:2,exp:"global x makes both prints show the updated value: 5 then 5."},
{q:"What is the output of the following code? x = -18.3 print(round(x))",options:["18", "-18", "-18.5", "-19"],correct:1,exp:"round() rounds -18.3 to the nearest integer, -18."},
{q:"What is the output of the following code? x = 5 def loc(): x = 10 print(x) loc() print(x)",options:["5 then 10", "10 then 10", "5 then 5", "10 then 5"],correct:3,exp:"loc() has its own local x=10; the outer x=5 is unaffected: prints 10 then 5."},
{q:"What is the output of the following statement? eval(\u201825*2-5*4\u2019)",options:["-300", "180", "30", "-450"],correct:2,exp:"eval computes 25*2 - 5*4 = 50 - 20 = 30."}
];

const CH8_STRINGS_ADD = [
{q:"Which of the following is used to handle an array of characters?",options:["Word", "Character", "String", "Letters"],correct:2,exp:"A string handles an array/sequence of characters."},
{q:"Index values are otherwise called as",options:["Size", "Length", "Superscript", "Subscript"],correct:3,exp:"Index values are also called subscripts."},
{q:"The positive subscript of a string always starts from",options:["0", "1", "2", "3"],correct:0,exp:"Positive indexing starts at 0."},
{q:"The negative subscript of a string starts from",options:["0", "1", "-1", "3"],correct:2,exp:"Negative indexing starts at -1 (the last character)."},
{q:"The operator used to append a new string with an existing string is",options:["+", "+=", "++", "*"],correct:1,exp:"+= appends and updates a string with new content."},
{q:"The operator used to display a string in multiple number of times is",options:["+", "&", "*", "++"],correct:2,exp:"The * operator repeats a string multiple times."},
{q:"The string formatting operator is",options:["%", "+=", "++", "<>"],correct:0,exp:"% is Python's classic string formatting operator."},
{q:"The function which allows you to change all occurrences of a particular character in a string is",options:["modify()", "change()", "replace()", "update()"],correct:2,exp:"replace() substitutes all occurrences of a character/substring."},
{q:"Which of the following function returns the number of characters in a string?",options:["len(str)", "str.len()", "length(str)", "str.length()"],correct:0,exp:"len(str) returns the number of characters in a string."}
];

const CH9_LISTS_TUPLES_SETS_DICT_ADD = [
{q:"Which of the following is not a \u201csequence data type\u201d?",options:["List", "Tuples", "Set", "String"],correct:2,exp:"Set is unordered, so it is not a sequence data type."},
{q:"It is an ordered collection of values enclosed within square brackets [ ].",options:["Tuples", "Set", "List", "Dictionary"],correct:2,exp:"A list is an ordered collection written with square brackets."},
{q:"Which of the following consists of several values separated by comma and enclosed within parentheses?",options:["Tuples", "Set", "List", "Dictionary"],correct:0,exp:"A tuple is written as comma-separated values inside parentheses."},
{q:"Which of the following is a mutable and an unordered collection of elements without duplicates?",options:["List", "Tuple", "Set", "Dictionary"],correct:2,exp:"A set is mutable, unordered, and disallows duplicates."},
{q:"Which type stores a key along with its element?",options:["List", "Tuple", "Set", "Dictionary"],correct:3,exp:"A dictionary stores each element with an associated key."},
{q:"Which of the following is the correct way of creating list? I. Marks = [10,20,30,40] II. Fruits=[\u201cApple\u201d,\u201dOrange\u201d,\u201dMango\u201d,\u201dBanana\u201d] III. Mylist = [] IV. Data = [\u201cWelcome\u201d, 3.14,10,[5,10]]",options:["I, II Only", "I, II, III Only", "All are wrong", "All are correct"],correct:3,exp:"All four are valid ways to create a list in Python."},
{q:"What is the output for the following code? Marks = [10,23,41,75] print(Marks[-3])",options:["10", "23", "41", "75"],correct:1,exp:"Index -3 counts 3 from the end: 23."},
{q:"What is the output for the following code? List = [10,20,30,[40,50,60],70] print(len(List))",options:["7", "6", "5", "3"],correct:2,exp:"The nested list counts as one element, giving a total length of 5."},
{q:"Which of the following represents A={10,20,30 }?",options:["List", "Tuple", "Dictionary", "Set"],correct:3,exp:"Curly braces with plain values represent a set."},
{q:"What is the output for the following code? li = list(range(2,11,2)) print(li)",options:["[1,3,5,7,9]", "[2,4,6,8,10]", "[2,4,6,8]", "[1,2,3,4,5,6,7,8,9,10]"],correct:1,exp:"range(2,11,2) gives 2,4,6,8,10 (11 excluded)."},
{q:"What is the output for the following code? S=[x**2 for x in range(1,11)] print(S)",options:["[1,2,...,10]", "[1,2,...,11]", "[1,4,9,16,25,36,49,64,81,100]", "[2,4,6,8,10]"],correct:2,exp:"This list comprehension squares each number from 1 to 10."},
{q:"What is the output for the following code? mylist=[36,12,12] x=mylist.index(12) print(x)",options:["0", "1", "-1", "2"],correct:0,exp:"index() returns the position of the first match, which is index 1... but here index(12) in [36,12,12] returns 1, matching option b."},
{q:"Which of the following represents A={roll:101,age:25,name:'ABC' }?",options:["List", "Tuple", "Dictionary", "Set"],correct:2,exp:"Key-value pairs in curly braces represent a dictionary."}
];

const CH10_PYTHON_CLASSES_ADD = [
{q:"Which of the following is not an object-oriented programming language?",options:["C", "C++", "Python", "Java"],correct:0,exp:"C is a procedural language, not object-oriented."},
{q:"The key features of Object-Oriented Programming are",options:["Classes", "Objects", "a) and b)", "Structures"],correct:2,exp:"Classes and Objects together are the key features of OOP."},
{q:"Which one is referred as instance of a class?",options:["Class", "Object", "Methods", "Members"],correct:1,exp:"An object is an instance of a class."},
{q:"In Python, by default the variables which are defined inside the class is",options:["Private", "Public", "Protected", "Hidden"],correct:1,exp:"By default, class variables in Python are public."},
{q:"Any class member can be accessed by using object with a ____ operator.",options:["Semicolon(;)", "Hash(#)", "Colon(:)", "Dot(.)"],correct:3,exp:"The dot (.) operator accesses class members through an object."},
{q:"Which of the following will act as a constructor?",options:["_ _init", "_ _self_ _", "_ _del_ _", "_ _init_ _"],correct:3,exp:"__init__ is Python's constructor method."},
{q:"Which of the following is used to initialize the class variables?",options:["Class", "Object", "Constructor", "Destructor"],correct:2,exp:"The constructor initializes class variables."},
{q:"In Python, a class is defined by using the keyword",options:["this", "self", "class", "def"],correct:2,exp:"The 'class' keyword defines a class in Python."},
{q:"In Python, every class has a unique name followed by",options:["Semicolon(;)", "Period(.)", "Colon(:)", "None"],correct:2,exp:"A class header ends with a colon."},
{q:"The class method must have the first parameter named as",options:["this", "self", "class", "def"],correct:1,exp:"Instance methods must take 'self' as their first parameter."},
{q:"A variable prefixed with a double underscore becomes",options:["Private", "Public", "Protected", "Hidden"],correct:0,exp:"A double-underscore prefix makes a variable private."},
{q:"Which of the following variable can be accessed only within the class?",options:["Private", "Public", "Protected", "Hidden"],correct:0,exp:"Private variables are accessible only within their own class."},
{q:"A variable accessed anywhere in the program is",options:["Private", "Public", "Protected", "Hidden"],correct:1,exp:"Public variables can be accessed from anywhere in the program."},
{q:"The statements defined inside the class must be properly",options:["indented", "left space", "placed a colon", "All of these"],correct:0,exp:"Python relies on consistent indentation to define class bodies."},
{q:"It gets executed automatically when an object exits from the scope.",options:["Class", "Object", "Constructor", "Destructor"],correct:3,exp:"The destructor runs automatically when an object goes out of scope."}
];

const CH11_DATABASE_CONCEPTS_ADD = [
{q:"Which are raw facts stored in a computer?",options:["Tables", "Database", "Information", "Data"],correct:3,exp:"Raw, unprocessed facts are called data."},
{q:"Which of the following gives a meaningful information about the data?",options:["Information", "Database", "DBMS", "Tables"],correct:0,exp:"Processed, meaningful data is called information."},
{q:"How many major components are there in DBMS?",options:["3", "5", "7", "4"],correct:1,exp:"DBMS has 5 major components."},
{q:"A row is also known as",options:["Attribute", "Tuple", "Relation", "Data"],correct:1,exp:"A row in a table is also called a tuple."},
{q:"A column is known as",options:["Attribute", "Tuple", "Relation", "Data"],correct:0,exp:"A column in a table is also called an attribute."},
{q:"Hierarchical model was developed by",options:["Windows", "IBM", "Wipro", "Apple"],correct:1,exp:"The hierarchical model was developed by IBM."},
{q:"The entire collection of related data in one table is referred as",options:["Relation", "Table", "File", "All of these"],correct:3,exp:"Relation, table, and file are all used to refer to this collection."},
{q:"This model is mainly used in IBM Main Frame computers.",options:["Hierarchical Model", "Object Model", "Entity Relationship Model", "Relational Model"],correct:0,exp:"The hierarchical model was mainly used on IBM mainframes."},
{q:"The relational database model was first proposed by E.F.Codd in",options:["1960", "1970", "1980", "1990"],correct:1,exp:"E. F. Codd proposed the relational model in 1970."},
{q:"ER Model was developed by Chen in",options:["1966", "1970", "1972", "1976"],correct:3,exp:"Peter Chen developed the ER model in 1976."},
{q:"In ER Model, the entities are represented by",options:["Rectangle", "Ellipse", "Diamond", "Circle"],correct:0,exp:"Entities are represented as rectangles in ER diagrams."},
{q:"In ER Model, the attributes are represented by",options:["Rectangle", "Ellipse", "Diamond", "Circle"],correct:1,exp:"Attributes are represented as ellipses in ER diagrams."},
{q:"In ER Model, ________ represents the relationship in ER diagrams.",options:["Rectangle", "Ellipse", "Diamond", "Circle"],correct:2,exp:"Relationships are represented as diamonds in ER diagrams."},
{q:"RDBMS Stands for",options:["Rotational Database Management System", "Real Database Management System", "Relational Database Management System", "Round Database Management System"],correct:2,exp:"RDBMS stands for Relational Database Management System."},
{q:"In which of the following model, data is represented as a simple treelike structure?",options:["Hierarchical Model", "Object Model", "Network Model", "Relational"],correct:0,exp:"The hierarchical model represents data as a tree structure."},
{q:"Database Normalization was first proposed by",options:["Dr. Edgar F Codd", "Dr. Edgar E Codd", "Chen", "E F Chen"],correct:0,exp:"Dr. Edgar F. Codd first proposed database normalization."},
{q:"In which of the following relationship one row in a table is linked with only one row in another table?",options:["One-to-One", "One-to-Many", "Many-to-One", "Many-to-Many"],correct:0,exp:"A one-to-one relationship links exactly one row to one row."},
{q:"A student can have only one exam number is an example of",options:["One-to-One Relationship", "One-to-Many Relationship", "Many-to-One Relationship", "Many-to-Many Relationship"],correct:0,exp:"Each student having a single unique exam number is a one-to-one relationship."},
{q:"Many books in a Library are issued to many students is an example for",options:["One-to-One Relationship", "One-to-Many Relationship", "Many-to-One Relationship", "Many-to-Many Relationship"],correct:3,exp:"Many books to many students is a many-to-many relationship."},
{q:"The symbol used for Cartesian product is",options:["\u03c0", "\u03b1", "X", "*"],correct:2,exp:"The Cartesian product in relational algebra uses the symbol X."},
{q:"The symbol used for PROJECT is",options:["\u03c0", "\u03a0", "X", "\u03c3"],correct:1,exp:"PROJECT is represented by the symbol \u03a0 (capital Pi)."}
];

const CH12_SQL_ADD = [
{q:"SQL stands for",options:["Structured Question Language", "Structured Query Language", "Standard Query Language", "Standard Question Language"],correct:1,exp:"SQL stands for Structured Query Language."},
{q:"The original version of SQL was developed at",options:["ORACLE Corporation", "IBM\u2019s Research Centre", "Microsoft Corporation", "Google"],correct:1,exp:"SQL was originally developed at IBM's research centre."},
{q:"SQL was originally called as",options:["SQLite", "MySQL", "Sequel", "RSQL"],correct:2,exp:"SQL was originally called SEQUEL."},
{q:"The latest version of SQL was released in",options:["2018", "2004", "2006", "2008"],correct:3,exp:"This edition lists 2008 as the latest SQL release."},
{q:"A condition applicable on a field or set of fields is",options:["Commands", "Clauses", "Constraint", "Keywords"],correct:2,exp:"A rule applied to a field is called a constraint."},
{q:"EDML stands for",options:["Embedded Data Manipulation Language", "Essential Data Manipulation Language", "Embedded Data Monitoring Language", "Embedded Data Manipulation Learning"],correct:0,exp:"EDML stands for Embedded Data Manipulation Language."},
{q:"Which constraint may use relational and logical operators for condition?",options:["Check", "Unique", "Limit", "Assign"],correct:0,exp:"The CHECK constraint can use relational/logical operators."},
{q:"The constraint used to assign a default value for the field in table is",options:["Assign", "Default", "Set", "Reset"],correct:1,exp:"The DEFAULT constraint assigns a default value."},
{q:"Which keyword will display every row of the table without considering duplicate entries?",options:["DISTINCT", "ALL", "DUPLICATE", "IN"],correct:1,exp:"ALL displays every row, including duplicates, without filtering."},
{q:"Which command used to delete all the rows but it does not free the space containing the table?",options:["DELETE", "ERASE", "TRUNCATE", "DROP"],correct:0,exp:"DELETE removes rows but doesn't free the table's storage space."},
{q:"Which command used to delete all the rows from the table, the structure remains and the space is freed?",options:["DELETE", "ERASE", "TRUNCATE", "DROP"],correct:2,exp:"TRUNCATE removes all rows and frees the space, keeping the table structure."},
{q:"Which keyword is used to sort the data in descending order?",options:["ASC", "DSC", "DESC", "DASC"],correct:2,exp:"DESC sorts data in descending order."}
];

const CH13_PYTHON_CSV_ADD = [
{q:"Expansion of CSV",options:["Common Separated Values", "Colon Separated Values", "Condition Separated Values", "Comma Separated Values"],correct:3,exp:"CSV stands for Comma Separated Values."},
{q:"Files saved in ________ cannot be opened or edited by text editors.",options:["CSV", "EXCEL", "PYTHON", "C++"],correct:1,exp:"Excel's binary/proprietary format can't be opened by plain text editors."},
{q:"If the fields of data in your CSV file contain commas, you can protect them by enclosing those data fields in ________",options:["slash (/)", "double-quote(\u201c)", "colon (:)", "semi-colon (;)"],correct:1,exp:"Fields containing commas are enclosed in double quotes to protect them."},
{q:"In Python, if no mode is specified the default mode _______ is used",options:["a", "w", "rt", "b"],correct:2,exp:"The default file mode in Python is 'rt' (read text)."},
{q:"Which file mode is used to open for appending at the end of the file without truncating it?",options:["a", "w", "rt", "b"],correct:0,exp:"Mode 'a' appends to a file without truncating it."},
{q:"Which file mode is used to open in binary mode?",options:["a", "w", "rt", "b"],correct:3,exp:"Mode 'b' opens a file in binary mode."},
{q:"Which file mode is used to Open a file for updating (reading and writing)?",options:["a", "w", "rt", "+"],correct:3,exp:"The '+' mode opens a file for both reading and writing."},
{q:"Which method will free up the resources that were tied with the file?",options:["remove()", "delete()", "release()", "close()"],correct:3,exp:"close() releases the resources associated with an open file."},
{q:"A class of CSV module which helps to define parameters for reading and writing CSV is",options:["reader()", "dialect", "writer()", "close()"],correct:1,exp:"The 'dialect' class defines formatting parameters for CSV reading/writing."},
{q:"The parameter used to remove whitespaces after the delimiter is",options:["removespace", "delspace", "skipinitialspace", "delimiter"],correct:2,exp:"skipinitialspace removes whitespace immediately after the delimiter."},
{q:"Which of the following method takes 1-dimensional data (one row) to write in a file?",options:["write()", "writerow()", "writer()", "writerows()"],correct:1,exp:"writerow() writes a single row of data."},
{q:"Which of the following method takes 2-dimensional data (multiple rows) to write in a file?",options:["write()", "writerow()", "writer()", "writerows()"],correct:3,exp:"writerows() writes multiple rows of data at once."},
{q:"The default value for Line terminator is",options:["\\n", "\\r", "\\l", "\\n or \\r"],correct:3,exp:"The csv module's default line terminator combines both \\r and \\n."}
];

const CH14_IMPORTING_CPP_ADD = [
{q:"In which language data type is not required while declaring variable?",options:["Python", "java", "C++", "All of these"],correct:0,exp:"Python is dynamically typed, so data types aren't declared explicitly."},
{q:"A framework for interfacing C and C++ is",options:["Ctypes", "SWIG", "Cython", "Boost"],correct:1,exp:"SWIG is a framework used to interface C and C++."},
{q:"Expansion of MinGW is",options:["Minimalist Graphics for Windows", "Minimalist GNU for Windows", "Minimum Graphics for Windows", "Minimum GNU for Windows"],correct:1,exp:"MinGW stands for Minimalist GNU for Windows."},
{q:"Expansion of SWIG is",options:["Simplified Wrapper Information Generator", "Software Wrapper Interface Generator", "Software Wrapper Information Generator", "Simplified Wrapper Interface Generator"],correct:3,exp:"SWIG stands for Simplified Wrapper Interface Generator."},
{q:"It is not an interface of C language?",options:["Ctypes", "PythonC API", "Boost", "Cython"],correct:2,exp:"Boost is a C++ library, not a C-language interface."},
{q:"Which of the following is a scripting language?",options:["HTML", "Ruby", "JAVA", "C++"],correct:1,exp:"Ruby is a scripting language."},
{q:"To clear the screen in command window use",options:["clear", "clrscr", "cls", "clean"],correct:2,exp:"'cls' clears the Windows command prompt screen."},
{q:"Which keyword is used to import the definitions inside a module to another module?",options:["import", "getopt", "sys", "os"],correct:0,exp:"The 'import' keyword brings definitions from one module into another."},
{q:"Which of the following is not a module in Python?",options:["sys", "getopt", "argv", "os"],correct:2,exp:"argv is an attribute of the sys module, not a module itself."},
{q:"The list of command-line arguments passes to the Python program is",options:["sys", "getopt", "argv", "sys.argv"],correct:2,exp:"The underlying list object holding command-line arguments is called argv."},
{q:"A module of Python helps you to parse(split) command-line options and arguments is",options:["OS", "getopt", "argv", "sys"],correct:1,exp:"The getopt module parses command-line options and arguments."},
{q:"A special variable by default stores the name of the file is",options:["__main__", "__name__", "__sys__", "__getopt__"],correct:1,exp:"__name__ stores the name of the current module/file."}
];

const CH15_DATA_MANIPULATION_SQL_ADD = [
{q:"Which method that returns the next number of rows (n) of the result set?",options:["fetchall()", "fetchone()", "fetchmany()", "count()"],correct:2,exp:"fetchmany() returns the next set of n rows from a query result."}
];

const CH16_DATA_VISUALIZATION_ADD = [
{q:"The graphical representation of information and data is",options:["Data Chart", "Data Visualization", "Data graph", "Data Monitor"],correct:1,exp:"Presenting information and data graphically is called data visualization."},
{q:"The representation of information in a graphic format is",options:["Dashboard", "Infographics", "Information graphics", "Box Plot"],correct:1,exp:"Infographics represent information in a graphic format."},
{q:"A collection of resources assembled to create a single unified visual display is",options:["Dashboard", "Infographics", "Information graphics", "Box Plot"],correct:0,exp:"A dashboard unifies multiple resources into a single visual display."},
{q:"A type of plot that shows the data as a collection of point is",options:["Box plot", "Line plot", "Scatter plot", "pyplot"],correct:2,exp:"A scatter plot displays data as individual points."},
{q:"The method inside the file to display your plot is",options:["plot.show()", "plt.show()", "plot.open()", "plt.open()"],correct:1,exp:"plt.show() displays the current Matplotlib plot."},
{q:"Which chart shows the relationship between a numerical variable and a categorical variable?",options:["Bar chart", "Line chart", "Pie chart", "Histogram"],correct:0,exp:"A bar chart relates a categorical variable to a numeric one."},
{q:"Which of the following represents the frequency distribution of continuous variables?",options:["Bar chart", "Line chart", "Pie chart", "Histogram"],correct:3,exp:"A histogram shows the frequency distribution of continuous data."},
{q:"This cross-looking button allows you to click it, and then click and drag your graph around.",options:["Home button", "Pan Axis", "Configure Subplots button", "Zoom button"],correct:1,exp:"The Pan Axis (cross-shaped) button lets you click-drag to move the plot view."},
{q:"This button allows you to configure various spacing options with your figure and plot.",options:["Home button", "Pan Axis", "Configure Subplots button", "Zoom button"],correct:2,exp:"The Configure Subplots button adjusts spacing options for the figure."},
{q:"______ and _______ are the two ways to display data in the form of a diagram.",options:["Bar Graph", "Histogram", "a) and b)", "Dashboard"],correct:2,exp:"Bar graphs and histograms are the two diagram-based ways mentioned."}
];

const CHAPTERS_CS = [
  {id:1, name:"Function", icon:"ƒ(x)", questions:CH1_FUNCTION, additionalQuestions:CH1_FUNCTION_ADD},
  {id:2, name:"Data Abstraction", icon:"◈", questions:CH2_DATA_ABSTRACTION, additionalQuestions:CH2_DATA_ABSTRACTION_ADD},
  {id:3, name:"Scoping", icon:"▢", questions:CH3_SCOPING, additionalQuestions:CH3_SCOPING_ADD},
  {id:4, name:"Algorithmic Strategies", icon:"⚙", questions:CH4_ALGORITHMIC_STRATEGIES, additionalQuestions:CH4_ALGORITHMIC_STRATEGIES_ADD},
  {id:5, name:"Python – Variables and Operators", icon:"🐍", questions:CH5_PYTHON_VAR_OPS, additionalQuestions:CH5_PYTHON_VAR_OPS_ADD},
  {id:6, name:"Control Structures", icon:"⇄", questions:CH6_CONTROL_STRUCTURES, additionalQuestions:CH6_CONTROL_STRUCTURES_ADD},
  {id:7, name:"Python Functions", icon:"ƒ", questions:CH7_PYTHON_FUNCTIONS, additionalQuestions:CH7_PYTHON_FUNCTIONS_ADD},
  {id:8, name:"Strings and String Manipulation", icon:"Aa", questions:CH8_STRINGS, additionalQuestions:CH8_STRINGS_ADD},
  {id:9, name:"Lists, Tuples, Sets and Dictionary", icon:"[ ]", questions:CH9_LISTS_TUPLES_SETS_DICT, additionalQuestions:CH9_LISTS_TUPLES_SETS_DICT_ADD},
  {id:10, name:"Python Classes and Objects", icon:"⬢", questions:CH10_PYTHON_CLASSES, additionalQuestions:CH10_PYTHON_CLASSES_ADD},
  {id:11, name:"Database Concepts", icon:"🗄", questions:CH11_DATABASE_CONCEPTS, additionalQuestions:CH11_DATABASE_CONCEPTS_ADD},
  {id:12, name:"Structured Query Language (SQL)", icon:"SQL", questions:CH12_SQL, additionalQuestions:CH12_SQL_ADD},
  {id:13, name:"Python and CSV Files", icon:"CSV", questions:CH13_PYTHON_CSV, additionalQuestions:CH13_PYTHON_CSV_ADD},
  {id:14, name:"Importing C++ Programs in Python", icon:"C++", questions:CH14_IMPORTING_CPP, additionalQuestions:CH14_IMPORTING_CPP_ADD},
  {id:15, name:"Data Manipulation through SQL", icon:"⚙", questions:CH15_DATA_MANIPULATION_SQL, additionalQuestions:CH15_DATA_MANIPULATION_SQL_ADD},
  {id:16, name:"Data Visualization using Python", icon:"📊", questions:CH16_DATA_VISUALIZATION, additionalQuestions:CH16_DATA_VISUALIZATION_ADD}
];

/* ================= COMPUTER APPLICATIONS QUESTION BANK (12th Std, Book Back 1 Mark PDF) ================= */
const CA1_MULTIMEDIA = [
{q:"What is multimedia?",options:["a type of computer hardware","a type of computer software","a type of computer network","the use of multiple forms of media to communicate information"],correct:3},
{q:"________ has five major components like text, images, sound, video and animation.",options:["Multimedia","Master Page","Master item","Multi-word"],correct:0},
{q:"What is a raster image?",options:["a type of image made up of pixels","a type of image made up of geometric shapes","a type of image made up of text","a type of image made up of sound waves"],correct:0},
{q:"What is a vector image?",options:["a type of image made of pixels","a type of image made up of geometric shapes","a type of image made up of text","a type of image made up of sound waves"],correct:1},
{q:"Which of the following is a raster image file format?",options:["JPEG","EPS","CDR","SVG"],correct:0},
{q:"Which of the following is a vector image file format?",options:["PSD","JPEG","EPS","BMP"],correct:2},
{q:"RTF (Rich Text Format) file format was introduced by __________",options:["TCS","Microsoft","Apple Inc.","IBM"],correct:1},
{q:"The expansion of JPEG is _____________",options:["Joint Photographic Experts Group","Joint Photo Experts Group","Join Photon Experts Group","Joint Photographic expressGroup"],correct:0},
{q:"AIFF file format was developed by _______",options:["TCS","Microsoft","Apple Inc.","IBM"],correct:2},
{q:"Which of the following is an audio file format?",options:["MP3","AVI","MPEG","PNG"],correct:0},
];

const CA2_DTP_PAGEMAKER = [
{q:"DTP stands for ______________",options:["Desktop Publishing","Desktop Publication","Doctor To Patient","Desktop Printer"],correct:0},
{q:"____________ is a DTP software.",options:["Lotus 1-2-3","PageMaker","Maya","Flash"],correct:1},
{q:"Which menu contains the New option?",options:["File menu","Edit menu","Layout menu","Type menu"],correct:0},
{q:"In PageMaker Window, the area outside of the dark border is referred to as _________.",options:["page","pasteboard","blackboard","dashboard"],correct:1},
{q:"Shortcut to close a document in PageMaker is ______________",options:["Ctrl + A","Ctrl + B","Ctrl + C","Ctrl + W"],correct:3},
{q:"A __________ tool is used for magnifying the particular portion of the area.",options:["Text tool","Line tool","Zoom tool","Hand tool"],correct:2},
{q:"_________ tool is used for drawing boxes.",options:["Line","Ellipse","Rectangle","Text"],correct:2},
{q:"Place option is present in _____________ menu.",options:["File","Edit","Layout","Window"],correct:0},
{q:"To select an entire document using the keyboard, press ___________",options:["Ctrl + A","Ctrl + B","Ctrl + C","Ctrl + D"],correct:0},
{q:"Character formatting consists of which of the following text properties?",options:["Bold","Italic","Underline","All of these"],correct:3},
{q:"Which tool lets you edit text?",options:["Text tool","Type tool","Crop tool","Hand tool"],correct:0},
{q:"Shortcut to print a document in PageMaker is _______",options:["Ctrl + A","Ctrl + P","Ctrl + C","Ctrl + V"],correct:1},
];

const CA3_DATABASE_MYSQL = [
{q:"Which language is used to request information from a Database?",options:["Relational","Structural","Query","Compiler"],correct:2},
{q:"The ---------- diagram gives a logical structure of the database graphically?",options:["Entity-Relationship","Entity","Architectural Representation","Database"],correct:0},
{q:"An entity set that does not have enough attributes to form primary key is known as",options:["Strong entity set","Weak entity set","Identity set","Owner set"],correct:1},
{q:"---------- Command is used to delete a database.",options:["Delete database database_name","Delete database_name","drop database database_name","drop database_name"],correct:2},
{q:"MySQL belongs to which category of DBMS?",options:["Object Oriented","Hierarchical","Relational","Network"],correct:2},
{q:"MySQL is freely available and is open source.",options:["True","False"],correct:0},
{q:"---------- represents a \"tuple\" in a relational database?",options:["Table","Row","Column","Object"],correct:1},
{q:"Communication is established with MySQL using",options:["SQL","Network calls","Java","API's"],correct:0},
{q:"Which is the MySQL instance responsible for data processing?",options:["MySQL Client","MySQL Server","SQL","Server Daemon Program"],correct:1},
{q:"The structure representing the organizational view of entire database is known as -------- in MySQL database.",options:["Schema","View","Instance","Table"],correct:0},
];

const CA4_PHP_BASICS = [
{q:"The expansion of PHP is _________",options:["PHP: Hypertext Preprocessor","Personal Hypertext Preprocessor","Pretext Home page","Preprocessor Home Page"],correct:0},
{q:"What is the extension of PHP file?",options:[".html",".xml",".php",".ph"],correct:2},
{q:"The PHP script should start with _________",options:["<?php","<php","<php?","<:?"],correct:0},
{q:"How many data types does PHP support?",options:["18","28","8","38"],correct:2},
{q:"Every variable name in PHP must begin with a _________ symbol.",options:["#","//","$","<"],correct:2},
{q:"_________ in PHP are case -- sensitive.",options:["variable names","keywords","Variable names and keywords","None of the above"],correct:0},
{q:"The assignment operator is ___________",options:["=","==","===","!="],correct:0},
{q:"_________ operators perform an action to compare two values.",options:["arithmetic","comparison","increment","logical"],correct:1},
{q:"Which operator is called \"identical\"?",options:["=","==","===","<>"],correct:2},
{q:"_________ is a data type which contains decimal numbers.",options:["Integer","Float","Boolean","NULL"],correct:1},
];

const CA5_PHP_FUNCTIONS_ARRAYS = [
{q:"A_________ is a block of code that performs a specific task.",options:["parameter","function","class","label"],correct:1},
{q:"Pre-defined functions are also called _________.",options:["user-defined functions","recursive functions","built-in functions","lambda functions"],correct:2},
{q:"Which one of the following is the right way of defining a function in PHP?",options:["function functionname() { // code to be executed }","function() {}","def myFunction():","None of the above"],correct:0},
{q:"A user-defined function in PHP starts with the keyword _________.",options:["function","def","defined","funct"],correct:0},
{q:"Which of the following is a correct way to call a function in PHP?",options:["functionName();","call functionName;","execute functionName;","run functionName();"],correct:0},
{q:"What is an array in PHP?",options:["An array is a special data type.","It can hold many values under a single variable name.","An array element can be any type of data.","All of the above"],correct:3},
{q:"How many types of arrays are there in PHP?",options:["2","3","4","5"],correct:1},
{q:"What is the index of the first element in an indexed array in PHP?",options:["0","1","2","3"],correct:0},
{q:"What is the index of the third element in an indexed array in PHP with 5 elements?",options:["2","3","4","5"],correct:0},
{q:"How do you create an indexed array in PHP?",options:["By enclosing a comma-separated list of values in square brackets","By using the array() function","By enclosing a comma-separated list of values in curly braces","Both A and B"],correct:3},
{q:"How do you access the elements of an indexed array in PHP?",options:["By using the array index in square brackets","By using the array key in square brackets","By using the array index in curly braces","By using the array key in curly braces"],correct:0},
];

const CA6_PHP_CONDITIONALS = [
{q:"Which of the following is NOT a type of conditional statement in PHP?",options:["if","if ... else","if ... elseif ... else","while"],correct:3},
{q:"What type of statement is the if...else statement?",options:["Conditional statement","Looping","Input statement","Output statement"],correct:0},
{q:"What is the simplest conditional statement in PHP?",options:["if-else statement","if statement","switch statement","if-elseif-else statement"],correct:1},
{q:"How does the if statement work in PHP?",options:["A block of code is executed if a certain condition is true.","A block of code is executed if a certain condition is false.","A block of code is executed if multiple conditions are true.","A block of code is executed if multiple conditions are false."],correct:0},
{q:"What happens if the condition in an \"if\" statement is false?",options:["The code inside the curly braces is executed.","The code inside the curly braces is skipped.","The program terminates.","None of the above"],correct:1},
{q:"What is the syntax for an if-else statement in PHP?",options:["if(condition) { //True-block; }","if(condition) { //True-block; } else { //False-block; }","if-else(condition) { //True-block; } else { //False-block; }","if-elseif(condition) { //True-block; } else { //False-block; }"],correct:1},
{q:"Which of the following is used to specify multiple conditions in an if ... elseif ... else statement?",options:["AND","OR","case","elseif"],correct:3},
{q:"Which of the following is used to specify multiple conditions in a switch statement?",options:["AND","OR","case","if"],correct:2},
{q:"What happens if none of the case values match the expression in a switch statement?",options:["The default case block is executed","The program terminates","The nearest case block is executed","The first case block is executed"],correct:0},
{q:"Which of the following is used to terminate the switch statement?",options:["return","continue","goto","break"],correct:3},
];

const CA7_PHP_LOOPS = [
{q:"Which of the following is NOT a type of loop statement in PHP?",options:["for","if ... else","while","do ... while"],correct:1},
{q:"What type of loop is \"for loop\" in PHP?",options:["Entry-Check Loop","Exit-Check Loop","Counter Loop","Iteration Loop"],correct:2},
{q:"What is the syntax for for loop in PHP?",options:["for(initialization; condition; increment) { // code}","foreach(initialization; condition; decrement) { // code}","while(condition)","do{...}while(condition)"],correct:0},
{q:"What are the three parts of the for loop syntax in PHP?",options:["initialization, condition, increment","initialization, code block, condition","code block, condition, increment","condition, initialization, code block"],correct:0},
{q:"When is the 'initialization' part of a for loop executed?",options:["Before each iteration","After each iteration","Only once at the beginning of the loop","Only once at the end of the loop"],correct:2},
{q:"What is the purpose of the 'increment' part of a for loop?",options:["To initialize variables","To update variables","To check the condition","To execute the code block"],correct:1},
{q:"What type of loop is \"while loop\" in PHP?",options:["Entry-Check Loop","Exit-Check Loop","Counter Loop","Iteration Loop"],correct:0},
{q:"What type of loop is \"do...while loop\" in PHP?",options:["Entry-Check Loop","Exit-Check Loop","Counter Loop","Iteration Loop"],correct:1},
{q:"Which looping structure should be used to iterate over elements of an array in PHP?",options:["for loop","while loop","do...while loop","foreach loop"],correct:3},
{q:"What is the output of the following code? $array = array(1, 2, 3, 4, 5); foreach ($array as $value) { echo $value; }",options:["1 2 3 4 5","5 4 3 2 1","1 1 1 1 1","None of the above"],correct:0},
];

const CA8_HTML_FORMS_VALIDATION = [
{q:"What are HTML forms used for?",options:["To collect input from users","To create server-side programming language","To create a database","To send emails"],correct:0},
{q:"Which of the following is NOT a form control available in HTML forms?",options:["Text inputs","Buttons","Checkboxes","Cropping Tool"],correct:3},
{q:"Which tag is used to create an HTML form?",options:["form","input","textarea","select"],correct:0},
{q:"What form control allows the user to select multiple values?",options:["text inputs","buttons","checkboxes","radio buttons"],correct:2},
{q:"What form control allows the user to select only one value at a time?",options:["text inputs","buttons","checkboxes","radio buttons"],correct:3},
{q:"What is the purpose of validation in PHP?",options:["To check the input data submitted by the user from the client machine","To display data to users","To store data on the server","To send data to the client"],correct:0},
{q:"How many types of validation are available in PHP?",options:["One","Two","Three","Four"],correct:1},
];

const CA9_PHP_FILES_MYSQLI = [
{q:"Which PHP function can be used to open a file?",options:["fopen()","fread()","fclose()","fwrite()"],correct:0},
{q:"What PHP function can be used to read a file?",options:["fopen()","fread()","fclose()","fwrite()"],correct:1},
{q:"What PHP function can be used to close a file?",options:["fopen()","fread()","fclose()","fwrite()"],correct:2},
{q:"Which is the correct function to execute the SQL queries in PHP ?",options:["mysqli_query(\"Connection Object\",\"SQL Query\")","query(\"Connection Object\",\"SQL Query\")","mysql_query(\"Connection Object\",\"SQL Query\")","mysql_query(\"SQL Query\")"],correct:0},
{q:"Which is the correct function Closing Connection in PHP ?",options:["mysqli_close(\"Connection Object\");","close(\"Connection Object\");","mysql_close(\"Connection Object\");","mysqli_close(\"Database Object\");"],correct:0},
{q:"Which is the correct function to establish Connection in PHP ?",options:["mysqli_connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");","connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");","mysql_connect(\"Server Name \",\"User Name\",\"Password\",\"DB Name\");","mysqli_connect (\"Database Object\");"],correct:0},
{q:"Which is the not a correct MySQL Function in PHP ?",options:["Mysqli_connect() Function","Mysqli_close() Function","mysqli_select_data() Function","mysqli_affected_rows() Function"],correct:2},
{q:"How many parameter are required for MYSQLi connect function in PHP ?",options:["2","3","4","5"],correct:2},
{q:"How many parameter are required for MYSQLi query function in PHP ?",options:["2","3","4","5"],correct:0},
{q:"How many parameter are required for MYSQLi Close function in PHP ?",options:["1","2","3","5"],correct:0},
{q:"Which version of PHP supports MySQLi fuctions ?",options:["Version 2.0","Version 3.0","Version 4.0","Version 5.0"],correct:3},
];

const CA10_NETWORKING = [
{q:"A set of computers connecting together is called as ----------",options:["Network","Server","Hub","Node"],correct:0},
{q:"Many discussions in an online forum leads to personal attacks and is called",options:["Hackers","Virus","Online war","Flame war"],correct:3},
{q:"Wi-Fi is short name for",options:["Wireless Fidelity","Wired fidelity","Wired fiber optic","Wireless fiber optic"],correct:0},
{q:"Which among them was challenging to the business people on computer networking",options:["Hacking","Viruses","Both a & b","none of this above"],correct:2},
{q:"Which one of the following is not the social media",options:["Gmail","Facebook","twitter","Linkedin"],correct:0},
{q:"In mobile network, land areas for network coverage was distributed as",options:["Firmware","cells","Range","Service"],correct:1},
{q:"Which one of the following are harmful to computer?",options:["Bloggers","Browser","Hackers","twitter"],correct:2},
{q:"Which of the following system securely share business's information with suppliers, vendors, partners and customers.",options:["Extranet","Intranet","arpanet","arcnet"],correct:0},
{q:"Match the following and choose the correct answer i. HTTP -The core protocol of the World Wide Web. ii. FTP- enables a client to send and receive complete files from a server. iii. SMTP - Provide e-mail services. iv. DNS- Refer to other host computers by using names rather than numbers.",options:["i, ii, iii, iv","ii, iii, iv, i","iii, iv, i, ii","iv, iii, ii, i"],correct:0},
{q:"Communication over ------------------is be made up of voice, data, images and text messages.",options:["Social media","mobile network","whatsapp","software"],correct:1},
{q:"Wi-Fi stands for---------------------",options:["Wireless Fidelity","wired fidelity","wired optic fibre","wireless optic fibre"],correct:0},
{q:"A TCP/IP network with access restricted to members of an organization",options:["LAN","MAN","WAN","Intranet"],correct:3},
{q:"RFID stands for --------------",options:["Radio Free identification","real Frequency identity","Radio Frequency indicators","Radio Frequency Identification."],correct:3},
{q:"It guarantees the sending of data is successful and which checks error on operation at OSI layer is--------------",options:["Application layer","Network layer","Transport Layer","Physical layer"],correct:2},
{q:"Which one of the following will secure data on transmissions",options:["HTTPS","HTTP","FTP","SMTP"],correct:0},
{q:"----------- provides e-mail service",options:["DNS","TCP","FTP","SMTP"],correct:3},
{q:"------------- refer to other host computers by using names rather than numbers.",options:["DNS","TCP","FTP","SMTP"],correct:0},
];

const CA11_INTERNET_DNS = [
{q:"Which of the following is used to maintain all the directories of domain names?",options:["Domain name system","Domain name space","Name space","IP address"],correct:1},
{q:"Which of the following notation is used to denote IPv4 addresses?",options:["Binary","Dotted-decimal","Hexadecimal","a and b"],correct:1},
{q:"How many bits are used in the IPv6 addresses?",options:["32","64","128","16"],correct:2},
{q:"Expansion of URL is",options:["Uniform Resource Location","Universal Resource Location","Uniform Resource Locator","Universal Resource Locator"],correct:2},
{q:"How many types are available in URL?",options:["2","3","4","5"],correct:0},
{q:"Maximum characters used in the label of a node?",options:["255","128","63","32"],correct:2},
{q:"In the domain name, the sequence of labels is separated by",options:["semicolon (;)","dot (.)","colon (:)","NULL"],correct:1},
{q:"Which of the following initiates the mapping of domain name to IP address?",options:["Zone","Domain","Resolver","Name servers"],correct:2},
{q:"Which is the contiguous area up to which the server has access?",options:["Zone","Domain","Resolver","Name servers"],correct:0},
{q:"Root Name servers are maintained by",options:["IANA","ICANN","WHOIS","DNS"],correct:0},
{q:"ARPANET stands for",options:["American Research Project Agency Network","Advanced Research Project Area Network","Advanced Research Project Agency Network","American Research Programs And Network"],correct:2},
{q:"WWW was invented by",options:["Tim Berners Lee","Charles Babbage","Blaise Pascal","John Napier"],correct:0},
{q:"Which cable is used in cable TV?",options:["UTP cable","Fibre optics","Coaxial cable","USB cable"],correct:2},
{q:"Expansion of UTP is",options:["Uninterrupted Twisted Pair","Uninterrupted Twisted Protocol","Unshielded Twisted Pair","Universal Twisted Protocol"],correct:2},
{q:"Which medium is used in the optical fiber cables to transmit data?",options:["Microwave","infra red","light","sound"],correct:2},
{q:"Which of the following is a small peripheral device with a sim slot to connect the computers to Internet?",options:["USB","Dongles","Memory card","Mobiles"],correct:1},
{q:"Which connector is used in the Ethernet cables?",options:["RJ11","RJ21","RJ61","RJ45"],correct:3},
{q:"Which of the following connector is called as champ connector?",options:["RJ11","RJ21","RJ61","RJ45"],correct:1},
{q:"How many pins are used in RJ45 cables?",options:["8","6","50","25"],correct:0},
{q:"Which wiring standard is used for connecting two computers directly?",options:["straight Through wiring","Cross Over wiring","Rollover wiring","None"],correct:1},
];

const CA12_NETWORK_SIM_OPENSOURCE = [
{q:"If the source code of a software is freely accessible by the public, then it is known as",options:["freeware","Firmware","Open source","Public source"],correct:2},
{q:"Which of the following is a software program that replicates the functioning of a computer network?",options:["Network software","Network simulation","Network testing","Network calculator"],correct:1},
{q:"Which of the following can document every incident that happened in the simulation and are used for examination?",options:["Net Exam","Network hardware","Trace file","Net document"],correct:2},
{q:"Which is an example of network simulator?",options:["simulator","TCL","Ns2","C++"],correct:2},
{q:"Choose the Correct Pair from the following to build NS2",options:["UNIX & TCL","UNIX & a. C++","C++ & OTcl","C++ & NS2"],correct:2},
{q:"Which of the following is not a network simulation software?",options:["Ns2","OPNET","SSFNet","C++"],correct:3},
{q:"Which of the following is a open source network monitoring software?",options:["C++","OPNET","Open NMS","OMNet++"],correct:2},
{q:"Open NMS was released in .....................",options:["1999","2000","2003","2004"],correct:1},
];

const CA13_ECOMMERCE_INTRO = [
{q:"A company involved in E-Business if",options:["it has many branches across the world.","it conduct business electronically over the Internet.","it sells commodities to a foreign country.","it has many employees."],correct:1},
{q:"Which of the following is not a tangible good?",options:["Mobile Phone","Mobile Apps","Medicine","Flower bouquet"],correct:1},
{q:"SME stands for",options:["Small and medium sized enterprises","Simple and medium enterprises","Sound messaging enterprises","Short messaging enterprises"],correct:0},
{q:"The dotcom phenomenon deals with ________",options:["Textile industries","Mobile phone companies","Internet based companies","All the above"],correct:2},
{q:"Which of the following is not correctly matched",options:["The First Wave of Electronic Commerce: 1985 -1990","The Second Wave of Electronic Commerce: 2004 -- 2009","The Third Wave of Electronic Commerce: 2010 -- Present","Dotcom burst: 2000 -- 2002"],correct:1},
{q:"Assertion (A): The websites of first wave dotcom companies were only in English. Reason (R): The dotcom companies of first wave are mostly American companies.",options:["Both (A) and (R) are correct and (R) is the correct explanation of (A)","Both (A) and (R) are correct, but (R) is not the correct explanation of (A)","(A) is true and (R) is false","(A) is false and (R) is true"],correct:0},
{q:"Off-shoring means",options:["Work outsourced to a branch of its own company","Work outsourced to new employees","Work outsourced to a third party locally","Work outsourced to a third party outside its own country"],correct:3},
{q:"G2G systems are classified into",options:["Internal facing and External facing","Internet and Extranet","First wave and Second wave","Left facing and Right facing"],correct:0},
{q:"____ host the e-books on their websites.",options:["Bulk-buying websites","Community websites","Digital publishing websites","Licensing websites"],correct:2},
{q:"Which of the following is a characteristics of E-Commerce",options:["Products can be inspected physically before purchase.","Goods are delivered instantly.","Resource focus supply side","Scope of business is global."],correct:3},
];

const CA14_EPAYMENT = [
{q:"Based on the monetary value e payment system can be classified into",options:["Mirco and Macro","Micro and Nano","Maximum and Minimum","Maximum and Macro"],correct:0},
{q:"______ refers to a payment made from one bank account to another bank account using eletronic methods.",options:["Electronic payment","Direct payment","Indirect payment","None of the above"],correct:0},
{q:"Assertion (A): Macro electronic payment systems support higher value payments. Reason (R): Expensive cryptographic operations are included in macro payments",options:["Both (A) and (R) are correct and (R) is the correct explanation of (A)","Both (A) and (R) are correct, but (R) is not the correct explanation of (A)","(A) is true and (R) is false","(A) is false and (R) is true"],correct:0},
{q:"Which of the following is correctly matched",options:["Credit Cards - pay before","Debit Cards - pay now","Stored Value Card - pay later","Smart card -- pay anytime"],correct:3},
{q:"ECS stands for",options:["Electronic Clearing Services","Electronic Cloning Services","Electronic Clearing Station","Electronic Cloning Station"],correct:0},
{q:"Which of the following is a online payment system for small payments.",options:["Card based payment","Micro electronic payment","Macro electronic payment","Credit card payment"],correct:1},
{q:"Which of the following is true about Virtual payment address (VPA)",options:["Customers can use their e-mail id as VPA","VPA does not includes numbers","VPA is a unique ID","Multiple bank accounts cannot have single VPA"],correct:2},
{q:"Pick the odd one in the credit card transaction",options:["card holder","merchant","marketing manager","acquirer"],correct:2},
{q:"Which of the following is true about debit card i. debit cards cannot be used in ATMs ii. debit cards cannot be used in online transactions iii. debit cards do not need bank accounts iv. debit cards and credit cards are identical in physical properties",options:["i, ii, iii","ii, iii, iv","iii alone","iv alone"],correct:3},
{q:"Match the following List A List B A1) First Digit B1) Account number A2) 9th to 15th Digit B2) MII Code A3) First 6 Digits B3) BIN Code A4) Last Digit B4) Check digit A1 A2 A3 A4",options:["B4 B3 B2 B1","B2 B1 B3 B4","B2 B3 B4 B1","B2 B4 B3 B1"],correct:1},
];

const CA15_ECOMMERCE_SECURITY = [
{q:"In E-Commerce, when a stolen credit card is used to make a purchase it is termed as",options:["Friendly fraud","Clean fraud","Triangulation fraud","Cyber squatting"],correct:1},
{q:"Which of the following is not a security element involved in E-Commerce?",options:["Authenticity","Confidentiality","Fishing","Privacy"],correct:2},
{q:"Asymmetric encryption use ___________ keys for encryption and decryption",options:["Same","Different","Positive","Negative"],correct:1},
{q:"The security authentication technology includes i) Digital Signatures ii) Digital Currency iii) Digital Image iv) Digital Certificates",options:["i & iv","ii & iii","i, ii & iii","all the above"],correct:0},
{q:"PGP stands for",options:["Pretty Good Privacy","Pretty Good Person","Private Good Privacy","Private Good Person"],correct:0},
{q:"_____ protocol is used for securing credit cards transactions via the Internet",options:["Secure Electronic Transaction (SET)","Credit Card Verification","Symmetric Key Encryption","Public Key Encryption"],correct:0},
{q:"Secure Electronic Transaction (SET) was developed in",options:["1999","1996","1969","1997"],correct:1},
{q:"The websites secured by Secure Socket Layer protocols can be identified using",options:["html://","http://","htmls://","https://"],correct:3},
{q:"______ is the process of converting plain text into meaningless cipher text",options:["Encryption","Decryption","Digital certificate","Digital signature"],correct:0},
{q:"Which of the following is true about Ransomware",options:["Ransomware is not a subset of malware","Ransomware deletes the file instantly","Typopiracy is a form of ransomware","Hackers demand ransom from the victim"],correct:3},
];

const CA16_EDI = [
{q:"EDI stands for",options:["Electronic Details Information","Electronic Data Information","Electronic Data Interchange","Electronic Details Interchange"],correct:2},
{q:"Which of the following is an internationally recognized standard format for EDI?",options:["TSLFACT","SETFACT","FTPFACT","EDIFACT"],correct:3},
{q:"Which is the first industry-specific EDI standard?",options:["TDCC","VISA","Master","ANSI"],correct:0},
{q:"Which of the following is a type of EDI?",options:["Direct EDI","Indirect EDI","Collective EDI","Unique EDI"],correct:0},
{q:"Who is called as the father of EDI?",options:["Charles Babbage","Ed Guilbert","Pascal","None of the above"],correct:1},
];

const CHAPTERS_CA = [
  {id:501, name:"Multimedia", icon:"🎬", questions:CA1_MULTIMEDIA, additionalQuestions:[]},
  {id:502, name:"Desktop Publishing – PageMaker", icon:"🖨️", questions:CA2_DTP_PAGEMAKER, additionalQuestions:[]},
  {id:503, name:"Database Concepts & MySQL", icon:"🗄", questions:CA3_DATABASE_MYSQL, additionalQuestions:[]},
  {id:504, name:"PHP Basics", icon:"🐘", questions:CA4_PHP_BASICS, additionalQuestions:[]},
  {id:505, name:"PHP Functions & Arrays", icon:"ƒ()", questions:CA5_PHP_FUNCTIONS_ARRAYS, additionalQuestions:[]},
  {id:506, name:"PHP Control Structures – Conditionals", icon:"⚖️", questions:CA6_PHP_CONDITIONALS, additionalQuestions:[]},
  {id:507, name:"PHP Control Structures – Loops", icon:"🔁", questions:CA7_PHP_LOOPS, additionalQuestions:[]},
  {id:508, name:"HTML Forms & PHP Validation", icon:"📝", questions:CA8_HTML_FORMS_VALIDATION, additionalQuestions:[]},
  {id:509, name:"PHP File Handling & MySQLi", icon:"📁", questions:CA9_PHP_FILES_MYSQLI, additionalQuestions:[]},
  {id:510, name:"Networking Concepts", icon:"🌐", questions:CA10_NETWORKING, additionalQuestions:[]},
  {id:511, name:"Internet & Domain Name System", icon:"🔗", questions:CA11_INTERNET_DNS, additionalQuestions:[]},
  {id:512, name:"Network Simulation & Open Source", icon:"🧪", questions:CA12_NETWORK_SIM_OPENSOURCE, additionalQuestions:[]},
  {id:513, name:"Introduction to E-Commerce", icon:"🛒", questions:CA13_ECOMMERCE_INTRO, additionalQuestions:[]},
  {id:514, name:"E-Payment Systems", icon:"💳", questions:CA14_EPAYMENT, additionalQuestions:[]},
  {id:515, name:"E-Commerce Security", icon:"🔒", questions:CA15_ECOMMERCE_SECURITY, additionalQuestions:[]},
  {id:516, name:"Electronic Data Interchange (EDI)", icon:"🔄", questions:CA16_EDI, additionalQuestions:[]}
];

/* ================= MATHS QUESTION BANK (12th Std, Book Back 1 Mark PDF) ================= */
const MU1_MATRICES = [
{q:"If |adj(adj A)| = |A|⁹, then the order of the square matrix A is",options:["3","4","2","5"],correct:1},
{q:"If A is a 3×3 non-singular matrix such that AAᵀ = AᵀA and B = A⁻¹Aᵀ, then BBᵀ =",options:["A","B","I₃","Bᵀ"],correct:2},
{q:"If A = [3,5;1,2], B = adj A and C = 3A, then |adj B| / |C| =",options:["1/3","1/9","1/4","1"],correct:1},
{q:"If A[1,-2;1,4] = [6,0;0,6], then A =",options:["[1,-2;1,4]","[1,2;-1,4]","[4,2;-1,1]","[4,-1;2,1]"],correct:2},
{q:"If A = [7,3;4,2], then 9I₂ - A =",options:["A⁻¹","A⁻¹/2","3A⁻¹","2A⁻¹"],correct:3},
{q:"If A = [2,0;1,5] and B = [1,4;2,0], then |adj(AB)| =",options:["-40","-80","-60","-20"],correct:1},
{q:"If P = [1,x,0;1,3,0;2,4,-2] is the adjoint of a 3×3 matrix A and |A| = 4, then x is",options:["15","12","14","11"],correct:3},
{q:"If A = [3,1,-1;2,-2,0;1,2,-1] and A⁻¹ = [a11,a12,a13;a21,a22,a23;a31,a32,a33], then the value of a23 is",options:["0","-2","-3","-1"],correct:3},
{q:"If A, B and C are invertible matrices of some order, then which one of the following is NOT true?",options:["adj A = |A| A⁻¹","adj (AB) = (adj A)(adj B)","det A⁻¹ = (det A)⁻¹","(ABC)⁻¹ = C⁻¹B⁻¹A⁻¹"],correct:1},
{q:"If (AB)⁻¹ = [12,-17;-19,27] and A⁻¹ = [1,-1;-2,3], then B⁻¹ =",options:["[2,-5;-3,8]","[8,5;3,2]","[3,1;2,1]","[8,-5;-3,2]"],correct:0},
{q:"If AᵀA⁻¹ is symmetric, then A² =",options:["A⁻¹","(Aᵀ)²","Aᵀ","(A⁻¹)²"],correct:1},
{q:"If A is a non-singular matrix such that A⁻¹ = [5,3;-2,-1], then (Aᵀ)⁻¹ =",options:["[-5,3;2,1]","[5,3;-2,-1]","[-1,-3;2,5]","[5,-2;3,-1]"],correct:3},
{q:"If A = [3/5,4/5;x,3/5] and Aᵀ = A⁻¹, then the value of x is",options:["-4/5","-3/5","3/5","-4/5 (again)"],correct:0},
{q:"If A = [1,tan(θ/2);-tan(θ/2),1] and AB = I₂, then B =",options:["cos²(θ/2)·A","cos²(θ/2)·Aᵀ","(cos 2θ)·I","sin²(θ/2)·A"],correct:1},
{q:"If A = [cosθ,sinθ;-sinθ,cosθ] and A(adj A) = [k,0;0,k], then k =",options:["0","sinθ","cosθ","1"],correct:3},
{q:"If A = [2,3;5,-2] is such that A⁻¹ = λA, then λ is",options:["17","14","19","21"],correct:2},
{q:"If adj A = [2,3;4,-1] and adj B = [1,-2;-3,1], then adj(AB) is",options:["[-7,-1;7,-9]","[-6,5;-2,-10]","[-7,7;-1,-9]","[-6,-2;5,-10]"],correct:1},
{q:"The rank of the matrix formed by rows (1,2),(2,4),(-1,-2),(3,4),(6,8),(-3,-4) is",options:["1","2","4","3"],correct:0},
{q:"If xᵃyᵇ = eᵐ, xᶜyᵈ = eⁿ, with Δ1=|m,b;n,d|, Δ2=|a,m;c,n|, Δ3=|a,b;c,d|, then x and y are respectively",options:["e^(Δ1/Δ2), e^(Δ3/Δ1)","log(Δ1/Δ3), log(Δ2/Δ3)","log(Δ2/Δ1), log(Δ3/Δ1)","e^(Δ1/Δ3), e^(Δ2/Δ3)"],correct:3},
{q:"Which of the following is/are correct? (i) Adjoint of a symmetric matrix is also symmetric. (ii) Adjoint of a diagonal matrix is also diagonal. (iii) adj(λA) = λⁿ·adj(A). (iv) A(adj A) = (adj A)A = |A|I",options:["Only (i)","(ii) and (iii)","(iii) and (iv)","(i), (ii) and (iv)"],correct:3},
{q:"If ρ(A) = ρ([A|B]), then the system AX = B of linear equations is",options:["consistent and has a unique solution","consistent","consistent and has infinitely many solutions","inconsistent"],correct:1},
{q:"If θ ≠ 0 and the system x + (sinθ)y - (cosθ)z = 0, (cosθ)x - y + z = 0, (sinθ)x + y - z = 0 has a non-trivial solution, then θ is",options:["2π/3","3π/4","5π/6","π/4"],correct:3},
{q:"The augmented matrix of a linear system is [1,2,7;0,1,λ+3;0,0,λ-7,μ+5]. The system has infinitely many solutions if",options:["λ=7, μ≠-5","λ=-7, μ=5","λ≠7, μ≠-5","λ=7, μ=-5"],correct:3},
{q:"Let A = [2,-1,1;-1,2,-1;1,-1,2] and 4B = [3,1,-1;1,3,x;-1,1,3]. If B is the inverse of A, then the value of x is",options:["2","4","3","1"],correct:3},
{q:"If A = [3,-3,4;2,-3,4;0,-1,1], then adj(adj A) is",options:["[3,-3,4;2,-3,4;0,-1,1]","[6,-6,8;4,-6,8;0,-2,2]","[-3,3,-4;-2,3,-4;0,1,-1]","[3,-3,4;0,-1,1;2,-3,4]"],correct:0}
];

const MU2_COMPLEX = [
{q:"iⁿ + iⁿ⁺¹ + iⁿ⁺² + iⁿ⁺³ is",options:["0","1","-1","i"],correct:0},
{q:"The value of Σ(n=1 to 13) (iⁿ + iⁿ⁻¹) is",options:["1+i","i","1","0"],correct:0},
{q:"The area of the triangle formed by the complex numbers z, iz, and z+iz in the Argand diagram is",options:["(1/2)|z|²","|z|²","(3/2)|z|²","2|z|²"],correct:0},
{q:"The conjugate of a complex number is 1/(i-2). Then the complex number is",options:["1/(i+2)","-1/(i+2)","-1/(i-2)","1/(i-2)"],correct:1},
{q:"If z = (√3+i)³(3i+4)²/(8+6i)², then |z| is equal to",options:["0","1","2","3"],correct:2},
{q:"If z is a non-zero complex number such that 2iz² = z̄, then |z| is",options:["1/2","1","2","3"],correct:0},
{q:"If |z-2+i| ≤ 2, then the greatest value of |z| is",options:["√3 - 2","√3 + 2","√5 - 2","√5 + 2"],correct:3},
{q:"If |z - 3/z| = 2, then the least value of |z| is",options:["1","2","3","5"],correct:0},
{q:"If |z| = 1, then the value of (1+z)/(1-z) is",options:["z","z̄","1/z","1"],correct:0},
{q:"The solution of the equation |z| - z = 1 + 2i is",options:["3/2 - 2i","-3/2 + 2i","2 - 3/2 i","2 + 3/2 i"],correct:0},
{q:"If |z₁|=1, |z₂|=2, |z₃|=3 and |9z₁z₂ + 4z₁z₃ + z₂z₃| = 12, then the value of |z₁+z₂+z₃| is",options:["1","2","3","4"],correct:1},
{q:"If z is a complex number such that z ∈ C\\R and z + 1/z ∈ R, then |z| is",options:["0","1","2","3"],correct:1},
{q:"z₁, z₂, z₃ are complex numbers such that z₁+z₂+z₃=0 and |z₁|=|z₂|=|z₃|=1, then z₁²+z₂²+z₃² is",options:["3","2","1","0"],correct:3},
{q:"If (z-1)/(z+1) is purely imaginary, then |z| is",options:["1/2","1","2","3"],correct:1},
{q:"If z = x+iy is a complex number such that |z+2| = |z-2|, then the locus of z is",options:["real axis","imaginary axis","ellipse","circle"],correct:1},
{q:"The principal argument of 3/(-1+i) is",options:["-5π/6","-2π/3","-3π/4","-π/2"],correct:2},
{q:"The principal argument of (sin40° + i cos40°)⁵ is",options:["-110°","-70°","70°","110°"],correct:0},
{q:"If (1+i)(1+2i)(1+3i)...(1+ni) = x+iy, then 2·5·10·...·(1+n²) is",options:["1","i","x²+y²","1+n²"],correct:2},
{q:"If ω≠1 is a cube root of unity and (1+ω)⁷ = A+Bω, then (A,B) equals",options:["(1,0)","(-1,1)","(0,1)","(1,1)"],correct:3},
{q:"The principal argument of (1+i√3)²/(4i(1-i√3)) is",options:["2π/3","π/6","5π/6","π/2"],correct:3},
{q:"If ω≠1 is a cube root of unity, α and β are roots of x²+x+1=0, then α²⁰²⁰+β²⁰²⁰ is",options:["-2","-1","1","2"],correct:1},
{q:"The product of all four values of (cos π/3 + i sin π/3)^(3/4) is",options:["-2","-1","1","2"],correct:2},
{q:"If ω≠1 is a cube root of unity and |1,1,1; 1,-ω²-1,ω²; 1,ω²,ω⁷| = 3k, then k is equal to",options:["1","-1","√3 i","-√3 i"],correct:3},
{q:"The value of ((1+√3i)/(1-√3i))¹⁰ is",options:["cis(2π/3)","cis(4π/3)","-cis(2π/3)","-cis(4π/3)"],correct:0},
{q:"If ω = cis(2π/3), then the number of distinct roots of |z+1,ω,ω²; ω,z+ω²,1; ω²,1,z+ω| = 0 is",options:["1","2","3","4"],correct:0}
];

const MU3_EQUATIONS = [
{q:"A zero of x³ + 64 is",options:["0","4","4i","-4"],correct:3},
{q:"If f and g are polynomials of degrees m and n respectively, and h(x) = (f∘g)(x), then the degree of h is",options:["mn","m+n","mⁿ","nᵐ"],correct:0},
{q:"A polynomial equation in x of degree n always has",options:["n distinct roots","n real roots","n complex roots","at most one root"],correct:2},
{q:"If α, β and γ are the zeros of x³+px²+qx+r, then Σ(1/α) is",options:["-q/r","-p/r","q/r","-q/p"],correct:0},
{q:"According to the rational root theorem, which number is not a possible rational zero of 4x⁷+2x⁴-10x³-5?",options:["-1","5/4","4/5","5"],correct:2},
{q:"The polynomial x³-kx²+9x has three real zeros if and only if k satisfies",options:["|k|≤6","k=0","|k|>6","|k|≥6"],correct:3},
{q:"The number of real numbers in [0,2π] satisfying sin⁴x - 2sin²x + 1 = 0 is",options:["2","4","1","∞"],correct:0},
{q:"x³+12x²+10ax+1999 definitely has a positive zero if and only if",options:["a≥0","a>0","a<0","a≤0"],correct:2},
{q:"The polynomial x³+2x+3 has",options:["one negative and two imaginary zeros","one positive and two imaginary zeros","three real zeros","no zeros"],correct:0},
{q:"The number of positive zeros of the polynomial Σ(r=0 to n) ⁿCᵣ(-1)ʳxʳ is",options:["0","n","<n","r"],correct:1}
];
const MU4_INVERSE_TRIG = [
{q:"The value of sin⁻¹(cos x), 0 ≤ x ≤ π is",options:["π - x","x - π/2","π/2 - x","x - π"],correct:2},
{q:"If sin⁻¹x + sin⁻¹y = 2π/3, then cos⁻¹x + cos⁻¹y is equal to",options:["2π/3","π/3","π/6","π"],correct:1},
{q:"sin⁻¹(3/5) - cos⁻¹(12/13) + sec⁻¹(5/3) - cosec⁻¹(13/12) is equal to",options:["2π","π","0","tan⁻¹(12/65)"],correct:2},
{q:"If sin⁻¹x = 2sin⁻¹α has a solution, then",options:["|α| ≤ 1/√2","|α| ≥ 1/√2","|α| < 1/√2","|α| > 1/√2"],correct:0},
{q:"sin⁻¹(cos x) = π/2 - x is valid for",options:["-π ≤ x ≤ 0","0 ≤ x ≤ π","-π/2 ≤ x ≤ π/2","-π/4 ≤ x ≤ 3π/4"],correct:1},
{q:"If sin⁻¹x + sin⁻¹y + sin⁻¹z = 3π/2, the value of (x²⁰¹⁷+y²⁰¹⁸+z²⁰¹⁹) - 9/(x¹⁰¹+y¹⁰¹+z¹⁰¹) is",options:["0","1","2","3"],correct:0},
{q:"If cot⁻¹x = 2π/5 for some x∈R, the value of tan⁻¹x is",options:["-π/10","π/5","π/10","-π/5"],correct:2},
{q:"The domain of f(x) = sin⁻¹(√(x-1)) is",options:["[1,2]","[-1,1]","[0,1]","[-1,0]"],correct:0},
{q:"If x = 1/5, the value of cos(cos⁻¹x + 2sin⁻¹x) is",options:["-√(24)/25","√(24)/25","1/5","-1/5"],correct:3},
{q:"tan⁻¹(1/4) + tan⁻¹(2/9) is equal to",options:["(1/2)cos⁻¹(3/5)","(1/2)sin⁻¹(3/5)","(1/2)tan⁻¹(3/5)","tan⁻¹(1/2)"],correct:3},
{q:"If f(x) = sin⁻¹(x²-3), then x belongs to",options:["[-1,1]","[√2,2]","[-2,-√2]∪[√2,2]","[-2,-√2]"],correct:2},
{q:"If cot⁻¹2 and cot⁻¹3 are two angles of a triangle, then the third angle is",options:["π/4","3π/4","π/6","π/3"],correct:1},
{q:"sin⁻¹(tan(π/4)) - sin⁻¹(√(3/x)) = π/6. Then x is a root of the equation",options:["x²-x-6=0","x²-x-12=0","x²+x-12=0","x²+x-6=0"],correct:1},
{q:"sin⁻¹(2cos²x-1) + cos⁻¹(1-2sin²x) =",options:["π/2","π/3","π/4","π/6"],correct:0},
{q:"If cot⁻¹(√(sinα)) + tan⁻¹(√(sinα)) = u, then cos 2u is equal to",options:["tan²α","0","-1","tan 2α"],correct:2},
{q:"If |x|≤1, then 2tan⁻¹x - sin⁻¹(2x/(1+x²)) is equal to",options:["tan⁻¹x","sin⁻¹x","0","π"],correct:2},
{q:"The equation tan⁻¹x - cot⁻¹x = tan⁻¹(1/√3) has",options:["no solution","unique solution","two solutions","infinite solutions"],correct:1},
{q:"If sin⁻¹x + cot⁻¹(1/2) = π/2, then x is equal to",options:["1/2","1/√5","2/√5","√3/2"],correct:1},
{q:"If sin⁻¹(x/4) + cosec⁻¹(4/x) = π/2, then the value of x is",options:["4","5","2","3"],correct:3},
{q:"sin(tan⁻¹x), |x|<1 is equal to",options:["x/√(1-x²)","1/√(1-x²)","1/√(1+x²)","x/√(1+x²)"],correct:3}
];

const MU5_ANALYTICAL_GEOMETRY = [
{q:"The equation of the circle passing through (1,5) and (4,1) and touching the y-axis is x²+y²-5x-6y+9+λ(4x+3y-19)=0 where λ is equal to",options:["0, 40/9","0","40/9","-40/9"],correct:0},
{q:"The eccentricity of the hyperbola whose latus rectum is 8 and conjugate axis is half the distance between the foci is",options:["4/3","4/√3","2/√3","3/2"],correct:2},
{q:"The circle x²+y²=4x+8y+5 intersects the line 3x-4y=m at two distinct points if",options:["15<m<65","35<m<85","-85<m<-35","-35<m<35"],correct:3},
{q:"The length of the diameter of the circle which touches the x-axis at (1,0) and passes through (2,3) is",options:["6/5","5/3","10/3","3/5"],correct:2},
{q:"The radius of the circle 3x²+by²+4bx-6by+b²=0 is",options:["1","3","√10","√11"],correct:2},
{q:"The centre of the circle inscribed in a square formed by x²-8x-12=0 and y²-14y+45=0 is",options:["(4,7)","(7,4)","(9,4)","(4,9)"],correct:0},
{q:"The equation of the normal to the circle x²+y²-2x-2y+1=0 which is parallel to the line 2x+4y=3 is",options:["x+2y=3","x+2y+3=0","2x+4y+3=0","x-2y+3=0"],correct:0},
{q:"If P(x,y) is any point on 16x²+25y²=400 with foci F1(3,0) and F2(-3,0), then PF1+PF2 is",options:["8","6","10","12"],correct:2},
{q:"The radius of the circle passing through (6,2), two of whose diameters are x+y=6 and x+2y=4, is",options:["10","2√5","6","4"],correct:1},
{q:"The area of the quadrilateral formed with the foci of x²/a²-y²/b²=1 and x²/a²-y²/b²=-1 is",options:["4(a²+b²)","2(a²+b²)","a²+b²","(1/2)(a²+b²)"],correct:1},
{q:"If the normals of the parabola y²=4x drawn at the end points of its latus rectum are tangents to the circle (x-3)²+(y+2)²=r², the value of r² is",options:["2","3","1","4"],correct:0},
{q:"If x+y=k is a normal to the parabola y²=12x, then the value of k is",options:["3","-1","1","9"],correct:3},
{q:"The ellipse E1: x²/9+y²/4=1 is inscribed in a rectangle R with sides parallel to the axes. E2 passes through (0,4) and circumscribes R. The eccentricity of E2 is",options:["√2/2","√3/2","1/2","3/4"],correct:2},
{q:"Tangents are drawn to x²/9-y²/4=1 parallel to 2x-y=1. One point of contact is",options:["(9/(2√2), -1/√2)","(-9/(2√2), 1/√2)","(9/(2√2), 1/√2)","(3√3, -2√2)"],correct:2},
{q:"The equation of the circle passing through the foci of x²/16+y²/9=1 with centre at (0,3) is",options:["x²+y²-6y-7=0","x²+y²-6y+7=0","x²+y²-6y-5=0","x²+y²-6y+5=0"],correct:0},
{q:"Let C be the circle centred at (1,1), radius 1. T is centred at (0,y) through the origin and touches C externally. The radius of T is",options:["√3/√2","√3/2","1/2","1/4"],correct:3},
{q:"An ellipse has eccentricity 3/5 with distance between foci = 6. The area of the quadrilateral formed by the major and minor axes as diagonals is",options:["8","32","80","40"],correct:3},
{q:"Area of the greatest rectangle inscribed in the ellipse x²/a²+y²/b²=1 is",options:["2ab","ab","√(ab)","a/b"],correct:0},
{q:"An ellipse has OB as semi-minor axis, F,F' as foci, angle FBF' is a right angle. The eccentricity is",options:["1/√2","1/2","1/4","1/√3"],correct:0},
{q:"The eccentricity of the ellipse (x-3)²+(y-4)² = y²/9 is",options:["√3/2","1/3","1/(3√2)","1/√3"],correct:1},
{q:"If two tangents from a point P to y²=4x are at right angles, the locus of P is",options:["2x+1=0","x=-1","2x-1=0","x=1"],correct:1},
{q:"The circle passing through (1,-2) and touching the x-axis at (3,0) passes through the point",options:["(-5,2)","(2,-5)","(5,-2)","(-2,5)"],correct:2},
{q:"The locus of a point whose distance from (-2,0) is (2/3) times its distance from the line x=-9/2 is",options:["a parabola","a hyperbola","an ellipse","a circle"],correct:2},
{q:"The values of m for which y=mx+2√5 touches 16x²-9y²=144 are roots of x²-(a+b)x-4=0. The value of (a+b) is",options:["2","4","0","-2"],correct:2},
{q:"If one end of a diameter of x²+y²-8x-4y+c=0 is (11,2), the other end is",options:["(-5,2)","(-3,2)","(5,-2)","(-2,5)"],correct:1}
];

const MU6_VECTOR_ALGEBRA = [
{q:"If a⃗ and b⃗ are parallel vectors, then [a⃗, b⃗, c⃗] is equal to",options:["2","-1","1","0"],correct:3},
{q:"If a vector α⃗ lies in the plane of β⃗ and γ⃗, then",options:["[α⃗,β⃗,γ⃗]=1","[α⃗,β⃗,γ⃗]=-1","[α⃗,β⃗,γ⃗]=0","[α⃗,β⃗,γ⃗]=2"],correct:2},
{q:"If a⃗·b⃗ = b⃗·c⃗ = c⃗·a⃗ = 0, then the value of [a⃗,b⃗,c⃗] is",options:["|a⃗||b⃗||c⃗|","(1/3)|a⃗||b⃗||c⃗|","1","-1"],correct:0},
{q:"If a⃗,b⃗,c⃗ are unit vectors such that a⃗ is perpendicular to b⃗ and parallel to c⃗, then a⃗×(b⃗×c⃗) is equal to",options:["a⃗","b⃗","c⃗","0⃗"],correct:1},
{q:"If [a⃗,b⃗,c⃗]=1, then the value of [a⃗·(b⃗×c⃗)]/[(c⃗×a⃗)·b⃗] + [b⃗·(c⃗×a⃗)]/[(a⃗×b⃗)·c⃗] + [c⃗·(a⃗×b⃗)]/[(c⃗×b⃗)·a⃗] is",options:["1","-1","2","3"],correct:0},
{q:"The volume of the parallelepiped with edges î+ĵ, î+2ĵ, î+ĵ+πk̂ is",options:["π/2","π/3","π","π/4"],correct:2},
{q:"If a⃗ and b⃗ are unit vectors such that [a⃗,b⃗,a⃗×b⃗] = 1/4, the angle between a⃗ and b⃗ is",options:["π/6","π/4","π/3","π/2"],correct:0},
{q:"If a⃗=î+ĵ+k̂, b⃗=î+ĵ, c⃗=î, and (a⃗×b⃗)×c⃗ = λa⃗+μb⃗, then λ+μ is",options:["0","1","6","3"],correct:0},
{q:"If a⃗,b⃗,c⃗ are non-coplanar with [a⃗,b⃗,c⃗]=3, then {[a⃗×b⃗, b⃗×c⃗, c⃗×a⃗]}² is equal to",options:["81","9","27","18"],correct:0},
{q:"If a⃗,b⃗,c⃗ are non-coplanar unit vectors with a⃗×(b⃗×c⃗) = (b⃗+c⃗)/√2, the angle between a⃗ and b⃗ is",options:["π/2","3π/4","π/4","π"],correct:1},
{q:"If the volume of the parallelepiped with a⃗×b⃗, b⃗×c⃗, c⃗×a⃗ as coterminous edges is 8, the volume of the parallelepiped with (a⃗×b⃗)×(b⃗×c⃗), (b⃗×c⃗)×(c⃗×a⃗), (c⃗×a⃗)×(a⃗×b⃗) as edges is",options:["8 cubic units","512 cubic units","64 cubic units","24 cubic units"],correct:2},
{q:"Vectors a⃗,b⃗,c⃗,d⃗ satisfy (a⃗×b⃗)×(c⃗×d⃗)=0⃗. P1, P2 are planes of a⃗,b⃗ and c⃗,d⃗ respectively. The angle between P1 and P2 is",options:["0°","45°","60°","90°"],correct:0},
{q:"If a⃗×(b⃗×c⃗) = (a⃗×b⃗)×c⃗, with b⃗·c⃗≠0 and a⃗·b⃗≠0, then a⃗ and c⃗ are",options:["perpendicular","parallel","inclined at π/3","inclined at π/6"],correct:1},
{q:"If a⃗=2î+3ĵ-k̂, b⃗=î+2ĵ-5k̂, c⃗=3î+5ĵ-k̂, a vector perpendicular to a⃗ and lying in the plane of b⃗,c⃗ is",options:["-17î-21ĵ-97k̂","17î+21ĵ-123k̂","-17î-21ĵ+97k̂","-17î-21ĵ-97k̂ (dup)"],correct:3},
{q:"The angle between the lines (x-2)/3 = (y+1)/-2, z=2 and (x-1)/1 = (2y+3)/3 = (z+5)/2 is",options:["π/6","π/4","π/3","π/2"],correct:3},
{q:"If the line (x-2)/3 = (y-1)/-5 = (z+2)/2 lies in the plane x+3y-αz+β=0, then (α,β) is",options:["(-5,5)","(-6,7)","(5,-5)","(6,-7)"],correct:1},
{q:"The angle between the line r⃗ = (î+2ĵ-3k̂)+t(2î+ĵ-2k̂) and the plane r⃗·(î+ĵ)+4=0 is",options:["0°","30°","45°","90°"],correct:2},
{q:"The point where the line r⃗ = (6î-ĵ-3k̂)+t(-î+4k̂) meets the plane r⃗·(î+ĵ-k̂)=3 is",options:["(2,1,0)","(7,-1,-7)","(1,2,-6)","(5,-1,1)"],correct:3},
{q:"Distance from the origin to the plane 3x-6y+2z+7=0 is",options:["0","1","2","3"],correct:1},
{q:"The distance between the planes x+2y+3z+7=0 and 2x+4y+6z+7=0 is",options:["√7/(2√2)","7/2","√7/2","7/(2√2)"],correct:0},
{q:"If the direction cosines of a line are 1/c, 1/c, 1/c, then",options:["c=±3","c=±√3","c>0","0<c≤1"],correct:1},
{q:"The vector equation r⃗ = (î-2ĵ-k̂)+t(6ĵ-k̂) represents a straight line passing through the points",options:["(0,6,-1) and (1,-2,-1)","(0,6,-1) and (-1,-4,-2)","(1,-2,-1) and (1,4,-2)","(1,-2,-1) and (0,-6,1)"],correct:2},
{q:"If the distance of (1,1,1) from the origin is half its distance from the plane x+y+z+k=0, then the values of k are",options:["±3","±6","-3,9","3,-9"],correct:3},
{q:"If the planes r⃗·(2î-ĵ+k̂)=3 and r⃗·(4î+ĵ-μk̂)=5 are parallel, then λ and μ are",options:["1/2,-2","-1/2,2","-1/2,-2","1/2,2"],correct:2},
{q:"If the length of the perpendicular from the origin to the plane 2x+3y+λz=1, λ>0 is 1/5, then the value of λ is",options:["2√3","3√2","0","1"],correct:0}
];
const MU7_DIFF_CALCULUS = [
{q:"The volume of a sphere is increasing at the rate of 3 cm³/sec. The rate of change of its radius when radius is 1/2 cm is",options:["3 cm/s","2 cm/s","1 cm/s","1/2 cm/s"],correct:0},
{q:"A balloon rises straight up at 10 m/s. An observer is 40 m away from the launch spot. The rate of change of the angle of elevation (rad/s) when the balloon is 30 m up is",options:["3/25","4/25","1/5","1/3"],correct:1},
{q:"The position of a particle is s(t)=3t²-2t-8. The time at which the particle is at rest is",options:["t=0","t=1/3","t=1","t=3"],correct:1},
{q:"A stone thrown up vertically has height x=80t-16t². The stone reaches maximum height at t =",options:["2","2.5","3","3.5"],correct:1},
{q:"The point on the curve 6y=x³+2 at which the y-coordinate changes 8 times as fast as the x-coordinate is",options:["(4,11)","(4,-11)","(-4,11)","(-4,-11)"],correct:0},
{q:"The abscissa of the point on f(x)=√(8-2x) where the slope of the tangent is -0.25 is",options:["-8","-4","-2","0"],correct:1},
{q:"The slope of the line normal to f(x)=2cos4x at x=π/12 is",options:["-4√3","-4","√3/12","4√3"],correct:2},
{q:"The tangent to the curve y²-xy+9=0 is vertical when",options:["y=0","y=±√3","y=1/2","y=±3"],correct:3},
{q:"Angle between y²=x and x²=y at the origin is",options:["tan⁻¹(3/4)","tan⁻¹(4/3)","π/2","π/4"],correct:2},
{q:"The value of lim(x→0) (cot x - 1/x) is",options:["0","1","2","∞"],correct:0},
{q:"The function sin⁴x+cos⁴x is increasing in the interval",options:["[5π/8, 3π/4]","[π/2, 5π/8]","[π/4, π/2]","[0, π/4]"],correct:2},
{q:"The number given by Rolle's theorem for f(x)=x³-3x², x∈[0,3] is",options:["1","√2","3/2","2"],correct:3},
{q:"The number given by the Mean Value Theorem for f(x)=1/x, x∈[1,9] is",options:["2","2.5","3","3.5"],correct:2},
{q:"The minimum value of |3-x|+9 is",options:["0","3","6","9"],correct:3},
{q:"The maximum slope of the tangent to y=eˣsinx, x∈[0,2π] is at",options:["x=π/4","x=π/2","x=π","x=3π/2"],correct:1},
{q:"The maximum value of x²e⁻²ˣ, x>0 is",options:["1/e","1/(2e)","1/e²","4/e⁴"],correct:2},
{q:"One of the closest points on x²-y²=4 to the point (6,0) is",options:["(2,0)","(√5,1)","(3,√5)","(√13,-√3)"],correct:2},
{q:"The maximum value of the product of two positive numbers whose sum of squares is 200 is",options:["100","25√7","28","24√14"],correct:0},
{q:"The curve y=ax⁴+bx² with ab>0",options:["has no horizontal tangent","is concave up","is concave down","has no points of inflection"],correct:3},
{q:"The point of inflection of y=(x-1)³ is",options:["(0,0)","(0,1)","(1,0)","(1,1)"],correct:2}
];

const MU8_DIFFERENTIALS = [
{q:"A circular template has radius 10 cm with error 0.02 cm. The percentage error in the area is",options:["0.2%","0.4%","0.04%","0.08%"],correct:1},
{q:"The percentage error of the fifth root of 31 is approximately how many times the percentage error in 31?",options:["1/31","1/5","5","31"],correct:1},
{q:"If u(x,y) = e^(x²+y²), then ∂u/∂x is equal to",options:["e^(x²+y²)","2xu","x²u","y²u"],correct:1},
{q:"If v(x,y) = log(eˣ+eʸ), then ∂v/∂x + ∂v/∂y is equal to",options:["eˣ+eʸ","1/(eˣ+eʸ)","2","1"],correct:3},
{q:"If w(x,y) = xʸ, x>0, then ∂w/∂x is equal to",options:["xʸ log x","y log x","y·xʸ⁻¹","x log y"],correct:2},
{q:"If f(x,y) = eˣʸ, then ∂²f/∂x∂y is equal to",options:["xy·eˣʸ","(1+xy)eˣʸ","(1+y)eˣʸ","(1+x)eˣʸ"],correct:1},
{q:"If the side of a cube is measured as 4 cm with error 0.1 cm, then the error in computed volume is",options:["0.4 cu.cm","0.45 cu.cm","2 cu.cm","4.8 cu.cm"],correct:3},
{q:"The change in the surface area S=6x² of a cube when the edge varies from x₀ to x₀+dx is",options:["12x₀+dx","12x₀·dx","6x₀·dx","6x₀+dx"],correct:1},
{q:"The approximate change in volume V of a cube of side x, caused by increasing the side by 1%, is",options:["0.3x·dx m³","0.03x m³","0.03x² m³","0.03x³ m³"],correct:3},
{q:"If g(x,y)=3x²-5y+2y², x(t)=eᵗ and y(t)=cos t, then dg/dt is equal to",options:["6e²ᵗ+5sint-4cost·sint","6e²ᵗ-5sint+4cost·sint","3e²ᵗ+5sint+4cost·sint","3e²ᵗ-5sint+4cost·sint"],correct:1},
{q:"If f(x) = x/(x+1), then its differential is given by",options:["-1/(x+1)² dx","1/(x+1)² dx","1/(x+1) dx","-1/(x+1) dx"],correct:1},
{q:"If u(x,y) = x²+3xy+y-2019, then ∂u/∂x at (4,-5) is equal to",options:["-4","-3","-7","13"],correct:2},
{q:"Linear approximation for g(x)=cos x at x=π/2 is",options:["x+π/2","-x+π/2","x-π/2","-x-π/2"],correct:1},
{q:"If w(x,y,z) = x²(y-z)+y²(z-x)+z²(x-y), then ∂w/∂x + ∂w/∂y + ∂w/∂z is",options:["xy+yz+zx","x(y+z)","y(z+x)","0"],correct:3},
{q:"If f(x,y,z) = xy+yz+zx, then fₓ - f_z is equal to",options:["z-x","y-z","x-z","y-x"],correct:0}
];

const MU9_INTEGRATION = [
{q:"The value of ∫(0 to 2/3) dx/√(4-9x²) is",options:["π/6","π/2","π/4","π"],correct:0},
{q:"The value of ∫(-1 to 2) |x| dx is",options:["1/2","3/2","5/2","7/2"],correct:2},
{q:"For any value of n∈Z, ∫(0 to π) e^(cos²x) cos³[(2n+1)x] dx is",options:["π/2","π","0","2"],correct:2},
{q:"The value of ∫(-π/2 to π/2) cos3x·cosx dx is",options:["3/2","1/2","0","2/3"],correct:3},
{q:"The value of ∫(-4 to 4) [tan⁻¹(x²/(x⁴+1)) + tan⁻¹((x⁴+1)/x²)] dx is",options:["π","2π","3π","4π"],correct:3},
{q:"The value of ∫(-π/4 to π/4) (2x⁷-3x⁵+7x³-x+1)/cos²x dx is",options:["4","3","2","0"],correct:2},
{q:"If f(x) = ∫(0 to x) t·cos t dt, then df/dx is",options:["cosx - x sinx","sinx + x cosx","x cosx","x sinx"],correct:2},
{q:"The area between y²=4x and its latus rectum is",options:["2/3","4/3","8/3","5/3"],correct:2},
{q:"The value of ∫(0 to 1) x(1-x)⁹⁹ dx is",options:["1/11000","1/10100","1/10010","1/1001"],correct:1},
{q:"The value of ∫(0 to 1) dx/(1+5^cosx) is",options:["π/2","π","3π/2","2π"],correct:0},
{q:"If Γ(n+2)/Γ(n) = 90, then n is",options:["10","5","8","9"],correct:3},
{q:"The value of ∫(0 to π/6) cos³3x dx is",options:["2/3","2/9","1/9","1/3"],correct:1},
{q:"The value of ∫(0 to π) sin⁴x dx is",options:["3π/10","3π/8","3π/4","3π/2"],correct:1},
{q:"The value of ∫(0 to ∞) e⁻³ˣx² dx is",options:["7/27","5/27","4/27","2/27"],correct:3},
{q:"The value of a such that ∫(0 to a) 1/(4+x²) dx = π/8 is",options:["4","1","3","2"],correct:3},
{q:"The volume of the solid of revolution of the region bounded by y²=x(a-x) about the x-axis is",options:["πa³","πa³/4","πa³/5","πa³/6"],correct:3},
{q:"If f(x)=∫(1 to x) e^(sinu)/u du, x>1, and ∫(1 to 3) e^(sinx²)/x dx = (1/2)[f(a)-f(1)], one possible value of a is",options:["3","6","9","5"],correct:0},
{q:"The value of ∫(0 to 1) (sin⁻¹x)² dx is",options:["π²/4 - 1","π²/4 + 2","π²/4 + 1","π²/4 - 2"],correct:3},
{q:"The value of ∫(0 to a) √(a²-x²) dx is",options:["πa³/16","3πa⁴/16","3πa²/8","3πa⁴/8"],correct:1},
{q:"If ∫(0 to x) f(t)dt = x + ∫(x to 1) t·f(t)dt, then the value of f(1) is",options:["1/2","2","1","3/4"],correct:0}
];
const MU10_ODE = [
{q:"The order and degree of d²y/dx² + (dy/dx)^(1/3) + x^(1/4) = 0 are respectively",options:["2, 3","3, 3","2, 6","2, 4"],correct:0},
{q:"The differential equation representing the family y = A cos(x+B), where A, B are parameters, is",options:["d²y/dx² - y = 0","d²y/dx² + y = 0","d²y/dx² = 0","d²x/dy² = 0"],correct:1},
{q:"The order and degree of √(sin x)(dx+dy) = √(cos x)(dx-dy) is",options:["1, 2","2, 2","1, 1","2, 1"],correct:2},
{q:"The order of the differential equation of all circles with centre (h,k) and radius a is",options:["2","3","4","1"],correct:1},
{q:"The differential equation of the family y = Aeˣ + Be⁻ˣ, where A, B are arbitrary constants, is",options:["d²y/dx² + y = 0","d²y/dx² - y = 0","dy/dx + y = 0","dy/dx - y = 0"],correct:1},
{q:"The general solution of dy/dx = y/x is",options:["xy = k","y = k log x","y = kx","log y = kx"],correct:2},
{q:"The solution of the differential equation 2x(dy/dx) - y = 3 represents",options:["straight lines","circles","parabolas","ellipses"],correct:2},
{q:"The solution of dy/dx + p(x)y = 0 is",options:["y = ce^(∫p dx)","y = ce^(-∫p dx)","x = ce^(-∫p dy)","x = ce^(∫p dy)"],correct:1},
{q:"The integrating factor of dy/dx + y = (1+y)/λ is",options:["x/e^λ","e^λ/x","λeˣ","eˣ"],correct:1},
{q:"The integrating factor of dy/dx + P(x)y = Q(x) is x. Then P(x) is",options:["x","x²/2","1/x","1/x²"],correct:2},
{q:"The degree of the differential equation y(x) = 1 + dy/dx + (1/1.2)(dy/dx)² + (1/1.2.3)(dy/dx)³ + ... is",options:["2","3","1","4"],correct:2},
{q:"If p and q are the order and degree of y(dy/dx) + x³(d²y/dx²) + xy = cos x, then",options:["p<q","p=q","p>q","p exists and q does not"],correct:2},
{q:"The solution of the differential equation dy/dx + 1/√(1-x²) = 0 is",options:["y + sin⁻¹x = c","x + sin⁻¹y = 0","y² + 2sin⁻¹x = C","x² + 2sin⁻¹y = 0"],correct:0},
{q:"The solution of the differential equation dy/dx = 2xy is",options:["y = Ce^(x²)","y = 2x²+C","y = Ce^(-x²)+C","y = x²+C"],correct:0},
{q:"The general solution of log(dy/dx) = x+y is",options:["eˣ+eʸ = C","eˣ+e⁻ʸ = C","e⁻ˣ+eʸ = C","e⁻ˣ+e⁻ʸ = C"],correct:1},
{q:"The solution of dy/dx = 2^(y-x) is",options:["2ˣ+2ʸ = C","2ˣ-2ʸ = C","(1/2)ˣ - (1/2)ʸ = C","x+y = C"],correct:2},
{q:"The solution of dy/dx = y/x + φ(y/x)/φ'(y/x) is",options:["x·φ(y/x) = k","φ(y/x) = kx","y·φ(y/x) = k","φ(y/x) = ky"],correct:1},
{q:"If sin x is the integrating factor of dy/dx + Py = Q, then P is",options:["log sin x","cos x","tan x","cot x"],correct:3},
{q:"The number of arbitrary constants in the general solutions of order n and n+1 are respectively",options:["n-1, n","n, n+1","n+1, n+2","n+1, n"],correct:1},
{q:"The number of arbitrary constants in the particular solution of a third order differential equation is",options:["3","2","1","0"],correct:3},
{q:"Integrating factor of dy/dx = (x+y+1)/(x+1) is",options:["1/(x+1)","x+1","1/√(x+1)","√(x+1)"],correct:0},
{q:"The population P in any year t is such that the rate of increase is proportional to the population. Then",options:["P = Ce^(kt)","P = Ce^(-kt)","P = Ckt","P = C"],correct:0},
{q:"P is the amount of a substance remaining after time t. If the rate of evaporation is proportional to the amount remaining, then",options:["P = Ce^(kt)","P = Ce^(-kt)","P = Ckt","Pt = C"],correct:1},
{q:"If the solution of dy/dx = (ax+3)/(2y+f) represents a circle, then the value of a is",options:["2","-2","1","-1"],correct:1},
{q:"The slope at any point of a curve y=f(x) is dy/dx = 3x² and it passes through (-1,1). The equation of the curve is",options:["y = x³+2","y = 3x²+4","y = 3x³+4","y = x³+5"],correct:0}
];

const MU11_PROBABILITY = [
{q:"Let X have pdf f(x) = 2/x³ for x≥1 and 0 for x<1. Which statement is correct?",options:["both mean and variance exist","mean exists but variance does not","both mean and variance do not exist","variance exists but mean does not"],correct:1},
{q:"A rod of length 2l is broken at random into two pieces, with the shorter piece's pdf f(x)=1/l for 0<x<l and 0 for l≤x<2l. The mean and variance of the shorter piece are respectively",options:["l/2, l²/3","l/2, l²/6","l, l²/12","l/2, l²/12"],correct:3},
{q:"In a die-toss game, a 6 wins ₹36, otherwise the player loses ₹k² for the face k∈{1,2,3,4,5}. The expected amount to win, in ₹, is",options:["19/6","-19/6","3/2","-3/2"],correct:1},
{q:"A six-sided die (1-6) and a four-sided die (1-4) are rolled and the sum X is found. The number of elements in the inverse image of 7 is",options:["1","2","3","4"],correct:3},
{q:"A binomial random variable X has n=25, p=0.8. The standard deviation of X is",options:["6","4","3","2"],correct:3},
{q:"X is the difference between the number of heads and tails when a coin is tossed n times. The possible values of X are",options:["i+2n, i=0,...n","2i-n, i=0,...n","n-i, i=0,...n","2i+2n, i=0,...n"],correct:1},
{q:"If f(x)=1/12 for a<x<b is a pdf of a continuous random variable X, which cannot be the value of a and b?",options:["0 and 12","5 and 17","7 and 19","16 and 24"],correct:2},
{q:"Four buses carry 42,36,34,48 students (160 total). A student is picked at random: X = size of their bus. A driver is picked at random: Y = size of their bus. E(X) and E(Y) are respectively",options:["50, 40","40, 50","40.75, 40","41, 41"],correct:2},
{q:"Two coins land heads with probabilities 0.6 and 0.5 (independent). If X is total heads, E(X) is",options:["0.11","1.1","11","1"],correct:1},
{q:"On a 3-choice, 5-question multiple choice exam, the probability of 4 or more correct just by guessing is",options:["11/243","3/8","1/243","5/243"],correct:0},
{q:"If P(X=0)=1-P(X=1) and E(X)=3Var(X), then P(X=0) is",options:["2/3","2/5","1/5","1/3"],correct:3},
{q:"A binomial X has expected value 6 and variance 2.4. P(X=5) is",options:["¹⁰C₅(3/5)⁶(2/5)⁴","¹⁰C₅(3/5)¹⁰","¹⁰C₅(3/5)⁴(2/5)⁶","¹⁰C₅(3/5)⁵(2/5)⁵"],correct:3},
{q:"X has pdf f(x)=ax+b for 0<x<1 (0 otherwise) and E(X)=7/12. Then a and b are respectively",options:["1 and 1/2","1/2 and 1","2 and 1","1 and 2"],correct:0},
{q:"X takes values 0,1,2 with P(X=i)=k·P(X=i-1) for i=1,2 and P(X=0)=1/7. The value of k is",options:["1","2","3","4"],correct:1},
{q:"Which is a discrete random variable? I. Cars crossing a signal in a day. II. Customers in a queue at a moment. III. Time to complete a phone call.",options:["I and II","II only","III only","II and III"],correct:0},
{q:"If f(x)=2x for 0≤x≤a (0 otherwise) is a pdf, the value of a is",options:["1","2","3","4"],correct:0},
{q:"A random variable has f(x)=k, 2k, 3k, 4k, 5k for x=-2,-1,0,1,2. Then E(X) is",options:["1/15","1/10","1/3","2/3"],correct:3},
{q:"X has a Bernoulli distribution with mean 0.4. The variance of (2X-3) is",options:["0.24","0.48","0.6","0.96"],correct:3},
{q:"In 6 trials, X is binomial with 9P(X=4)=P(X=2). The probability of success is",options:["0.125","0.25","0.375","0.75"],correct:1},
{q:"A salesperson sells to 1 in 20 customers. The probability of selling to exactly 2 of the next 3 customers is",options:["57/20³","57/20²","19³/20³","57/20"],correct:0}
];

const MU12_DISCRETE_MATH = [
{q:"A binary operation on a set S is a function from",options:["S → S","(S×S) → S","S → (S×S)","(S×S) → (S×S)"],correct:1},
{q:"Subtraction is not a binary operation in",options:["R","Z","N","Q"],correct:2},
{q:"Which one of the following is a binary operation on N?",options:["Subtraction","Multiplication","Division","All the above"],correct:1},
{q:"In R, '*' is defined as follows. Which is NOT a binary operation on R?",options:["a∗b = min(a,b)","a∗b = max(a,b)","a∗b = a","a∗b = aᵇ"],correct:3},
{q:"The operation a∗b = ab/7 is not a binary operation on",options:["Q⁺","Z","R","C"],correct:1},
{q:"In Q, define a⊙b = a+b+ab. For what value of y is 3⊙(y⊙5) = 7?",options:["y = 2/3","y = -2/3","y = -3/2","y = 4"],correct:1},
{q:"If a∗b = √(a²+b²) on the reals, then * is",options:["commutative but not associative","associative but not commutative","both commutative and associative","neither commutative nor associative"],correct:2},
{q:"Which statement has truth value T?",options:["sin x is an even function","Every square matrix is non-singular","The product of a complex number and its conjugate is purely imaginary","√5 is an irrational number"],correct:3},
{q:"Which statement has truth value F?",options:["Chennai is in India or √2 is an integer","Chennai is in India or √2 is an irrational number","Chennai is in China or √2 is an integer","Chennai is in China or √2 is an irrational number"],correct:2},
{q:"If a compound statement involves 3 simple statements, the number of rows in the truth table is",options:["9","8","6","3"],correct:1},
{q:"Which is the inverse of the statement (p∨q) → (p∧q)?",options:["(p∧q) → (p∨q)","¬(p∨q) → (p∧q)","(¬p∨¬q) → (¬p∧¬q)","(¬p∧¬q) → (¬p∨¬q)"],correct:3},
{q:"Which is the contrapositive of (p∨q) → r?",options:["¬r → (¬p∧¬q)","¬r → (p∨q)","r → (p∧q)","p → (q∨r)"],correct:0},
{q:"The truth table of (p∧q)∨¬q is given as (a),(b),(c),(d) for TT,TF,FT,FF. Which one is true?",options:["T,T,T,T","T,F,T,T","T,T,F,T","T,F,F,F"],correct:2},
{q:"In the last column of the truth table for ¬(p∨¬q), the number of outcomes with truth value F are",options:["1","2","3","4"],correct:2},
{q:"Which is incorrect? For any two propositions p,q:",options:["¬(p∨q) ≡ ¬p∧¬q","¬(p∧q) ≡ ¬p∨¬q","¬(p∨q) ≡ ¬p∨¬q","¬(¬p) ≡ p"],correct:2},
{q:"Which is correct for the truth value of (p∧q)→¬p, for rows TT,TF,FT,FF?",options:["T,T,T,T","F,T,T,T","F,F,T,T","T,T,T,F"],correct:1},
{q:"The dual of ¬(p∨q) ∨ [p∨(p∧¬r)] is",options:["¬(p∧q) ∧ [p∨(p∧¬r)]","(p∧q) ∧ [p∧(p∨¬r)]","¬(p∧q) ∧ [p∧(p∧r)]","¬(p∧q) ∧ [p∧(p∨¬r)]"],correct:3},
{q:"The proposition p∧(¬p∨q) is",options:["a tautology","a contradiction","logically equivalent to p∧q","logically equivalent to p∨q"],correct:2},
{q:"Truth values of: (a) 4+2=5 and 6+3=9 (b) 3+2=5 and 6+1=7 (c) 4+5=9 and 1+2=4 (d) 3+2=5 and 4+7=11",options:["F,T,F,T","T,F,T,F","T,T,F,F","F,F,T,T"],correct:0},
{q:"Which one is NOT true?",options:["Negation of a negation of a statement is the statement itself.","If the last column of the truth table contains only T, it is a tautology.","If the last column contains only F, it is a contradiction.","If p and q are any two statements, then p↔q is a tautology."],correct:3}
];


const CHAPTERS_MATHS = [
  {id:101, name:"Applications of Matrices and Determinants", icon:"⎡⎤", questions:MU1_MATRICES, additionalQuestions:[]},
  {id:102, name:"Complex Numbers", icon:"ℂ", questions:MU2_COMPLEX, additionalQuestions:[]},
  {id:103, name:"Theory of Equations", icon:"x³", questions:MU3_EQUATIONS, additionalQuestions:[]},
  {id:104, name:"Inverse Trigonometric Functions", icon:"sin⁻¹", questions:MU4_INVERSE_TRIG, additionalQuestions:[]},
  {id:105, name:"Two Dimensional Analytical Geometry – II", icon:"◐", questions:MU5_ANALYTICAL_GEOMETRY, additionalQuestions:[]},
  {id:106, name:"Applications of Vector Algebra", icon:"a⃗", questions:MU6_VECTOR_ALGEBRA, additionalQuestions:[]},
  {id:107, name:"Applications of Differential Calculus", icon:"dy/dx", questions:MU7_DIFF_CALCULUS, additionalQuestions:[]},
  {id:108, name:"Differentials and Partial Derivatives", icon:"∂", questions:MU8_DIFFERENTIALS, additionalQuestions:[]},
  {id:109, name:"Applications of Integration", icon:"∫", questions:MU9_INTEGRATION, additionalQuestions:[]},
  {id:110, name:"Ordinary Differential Equations", icon:"ODE", questions:MU10_ODE, additionalQuestions:[]},
  {id:111, name:"Probability Distributions", icon:"P(X)", questions:MU11_PROBABILITY, additionalQuestions:[]},
  {id:112, name:"Discrete Mathematics", icon:"p∧q", questions:MU12_DISCRETE_MATH, additionalQuestions:[]}
];

/* ================= PHYSICS QUESTION BANK (12th Std, Book Back 1 Mark PDF) ================= */
const PH1_ELECTROSTATICS = [
{q:"Two identical point charges of magnitude -q are fixed as shown, with a third charge +q placed midway between them at P. If +q is displaced a small distance from P in the indicated directions, in which direction(s) will +q be stable?",options:["A1 and A2","B1 and B2","both directions","No stable direction"],correct:1},
{q:"Which charge configuration produces a uniform electric field?",options:["point charge","uniformly charged infinite line","uniformly charged infinite plane","uniformly charged spherical shell"],correct:2},
{q:"What is the ratio of charges q1/q2 for a field line pattern where 11 field lines are linked with q1 and 25 with q2?",options:["1/5","25/11","5","11/25"],correct:3},
{q:"An electric dipole is placed at an alignment angle of 30° with an electric field of 2×10⁵ N C⁻¹. It experiences a torque of 8 N m. If the dipole length is 1 cm, the charge on the dipole is",options:["4 mC","8 mC","5 mC","7 mC"],correct:1},
{q:"Four Gaussian surfaces are given with charges inside each. Rank the electric flux through each surface in increasing order.",options:["D < C < B < A","A < B = C < D","C < A = B < D","D > C > B > A"],correct:0},
{q:"The total electric flux for a closed surface kept inside water (with charge q enclosed) is",options:["80q/ε0","q/40ε0","q/80ε0","q/160ε0"],correct:2},
{q:"Two identical conducting balls with positive charges q1 and q2, separated by distance r, are made to touch each other and then separated to the same distance. The force between them will be",options:["less than before","same as before","more than before","zero"],correct:2},
{q:"Rank the electrostatic potential energies for the given systems of charges (1: Q,-Q sep. by r; 2: -Q,-Q sep. by r; 3: -Q,-2Q sep. by r; 4: Q,-2Q sep. by 2r) in increasing order.",options:["1 = 4 < 2 < 3","2 = 4 < 3 < 1","2 = 3 < 1 < 4","3 < 1 < 2 < 4"],correct:0},
{q:"An electric field E⃗ = 10x î exists in a region of space. The potential difference V = V0 - VA, where V0 is the potential at the origin and VA is the potential at x = 2 m, is",options:["10 V","-20 V","+20 V","-10 V"],correct:2},
{q:"A thin conducting spherical shell of radius R has charge Q uniformly distributed on its surface. The correct plot for the electrostatic potential due to this shell is",options:["Plot (a)","Plot (b)","Plot (c)","Plot (d)"],correct:1},
{q:"Two points A and B are maintained at potentials of 7 V and -4 V respectively. The work done in moving 50 electrons from A to B is",options:["8.80 × 10⁻¹⁷ J","-8.80 × 10⁻¹⁷ J","4.40 × 10⁻¹⁷ J","5.80 × 10⁻¹⁷ J"],correct:0},
{q:"If the voltage applied on a capacitor is increased from V to 2V, choose the correct conclusion.",options:["Q remains the same, C is doubled","Q is doubled, C is doubled","C remains same, Q doubled","Both Q and C remain same"],correct:2},
{q:"A parallel plate capacitor stores charge Q at voltage V. If the area and the distance between the plates are each doubled, which quantity will change?",options:["Capacitance","Charge","Voltage","Energy density"],correct:3},
{q:"Three capacitors are connected in a triangle. The equivalent capacitance between two of its points (each side having 1μF and 2μF capacitors as shown) is",options:["1 μF","2 μF","3 μF","1/4 μF"],correct:1},
{q:"Two metallic spheres of radii 1 cm and 3 cm are given charges of -1×10⁻² C and 5×10⁻² C respectively. If connected by a conducting wire, the final charge on the bigger sphere is",options:["3 × 10⁻² C","4 × 10⁻² C","1 × 10⁻² C","2 × 10⁻² C"],correct:0}
];

const PH2_CURRENT_ELECTRICITY = [
{q:"A current-versus-voltage graph of an unknown conductor gives ΔV=4 at ΔI=2. The resistance of this conductor is",options:["2 ohm","4 ohm","8 ohm","1 ohm"],correct:0},
{q:"A wire of resistance 2 ohms per metre is bent to form a circle of radius 1 m. The equivalent resistance between its two diametrically opposite points, A and B, is",options:["π Ω","π/2 Ω","2π Ω","π/4 Ω"],correct:0},
{q:"A toaster operating at 240 V has a resistance of 120 Ω. Its power is",options:["400 W","2 W","480 W","240 W"],correct:2},
{q:"A carbon resistor of (47 ± 4.7) kΩ is to be marked with colour rings. The colour code sequence will be",options:["Yellow – Green – Violet – Gold","Yellow – Violet – Orange – Silver","Violet – Yellow – Orange – Silver","Green – Orange – Violet – Gold"],correct:1},
{q:"What is the value of resistance of a resistor with colour bands Brown-Black-Yellow-Gold?",options:["100 kΩ","10 kΩ","1 kΩ","1000 kΩ"],correct:0},
{q:"Two wires A and B with circular cross section are made of the same material with equal lengths. If RA = 3RB, the ratio of radius of wire A to that of B is",options:["3","√3","1/√3","1/3"],correct:2},
{q:"A wire connected to a 230 V supply has power dissipation P1. If the wire is cut into two equal pieces and connected in parallel to the same supply, the power dissipation is P2. The ratio P2/P1 is",options:["1","2","3","4"],correct:3},
{q:"In India electricity is supplied at 220 V; in the USA at 110 V. If the resistance of a 60W bulb for use in India is R, the resistance of a 60W bulb for use in the USA will be",options:["R","2R","R/4","R/4 (matched to explanation)"],correct:3},
{q:"A building has 15 bulbs of 40W, 5 bulbs of 100W, 5 fans of 80W and 1 heater of 1kW, with mains voltage 220V. The maximum capacity of the main fuse of the building will be",options:["14 A","8 A","10 A","12 A"],correct:3},
{q:"There is a current of 1.0 A in a circuit with resistors 3Ω, 2.5Ω and P connected in series across 9V. What is the resistance of P?",options:["1.5 Ω","2.5 Ω","3.5 Ω","4.5 Ω"],correct:2},
{q:"What is the current drawn out from the battery, if three 15Ω equal resistors are connected in parallel across a 5V source?",options:["1 A","2 A","3 A","4 A"],correct:0},
{q:"The temperature coefficient of resistance of a wire is 0.00125 per °C. At 20°C its resistance is 1 Ω. The resistance of the wire will be 2 Ω at",options:["800 °C","700 °C","850 °C","820 °C"],correct:3},
{q:"The internal resistance of a 2.1 V cell which gives a current of 0.2 A through a resistance of 10 Ω is",options:["0.2 Ω","0.5 Ω","0.8 Ω","1.0 Ω"],correct:1},
{q:"A piece of copper and another of germanium are cooled from room temperature to 80 K. The resistance of",options:["each of them increases","each of them decreases","copper increases and germanium decreases","copper decreases and germanium increases"],correct:3},
{q:"In Joule's heating law, when R and t are constant, if H is taken along the y axis and I² along the x axis, the graph is",options:["straight line","parabola","circle","ellipse"],correct:0}
];

const PH3_MAGNETISM = [
{q:"The magnetic field at the centre O of a current loop made of two straight wires (X, Z) and a semicircular arc (Y), with current flowing clockwise, is",options:["μ0I/4r, into the page","μ0I/4r, out of the page","μ0I/2r, into the page","μ0I/2r, out of the page"],correct:0},
{q:"An electron moves in a straight line inside a charged parallel plate capacitor of uniform charge density σ. The time taken by the electron to cross the capacitor undeflected when the plates are under a constant magnetic field of induction B is",options:["ε0(e l B)/σ","ε0(l B)/(σ l)","ε0(l B)/(e σ)","ε0(l B)/σ"],correct:3},
{q:"A particle having mass m and charge q is accelerated through a potential difference V. Find the force experienced when it is kept under a perpendicular magnetic field B.",options:["√(2q³BV/m)","√(q³B²V/2m)","√(2q³B²V/m)","√(2q³BV/m³)"],correct:2},
{q:"A circular coil of radius 5 cm and 50 turns carries a current of 3 ampere. The magnetic dipole moment of the coil is nearly",options:["1.0 A m²","1.2 A m²","0.5 A m²","0.8 A m²"],correct:1},
{q:"A thin insulated wire forms a plane spiral of N = 100 tight turns carrying a current I = 8 mA. The radii of the inside and outside turns are a = 50 mm and b = 100 mm. The magnetic induction at the centre of the spiral is",options:["5 μT","7 μT","8 μT","10 μT"],correct:1},
{q:"Three wires of equal length are bent into a circle, a semi-circle, and a square. Placed in a uniform magnetic field with the same current, which loop configuration will experience the greatest torque?",options:["Circle","Semi-circle","Square","All of them"],correct:0},
{q:"Two identical coils, each with N turns and radius R, are placed coaxially at a distance R. If I is the current in each in the same direction, the magnetic field at a point P at distance R/2 from the centre of each coil is",options:["8Nμ0I/√5R","8Nμ0I/(5^(3/2)R)","8Nμ0I/5R","4Nμ0I/√5R"],correct:1},
{q:"A wire of length l carrying a current I along the Y direction is kept in a magnetic field B⃗ = (β/√3)(î+ĵ+k̂)T. The magnitude of Lorentz force acting on the wire is",options:["√(2/3) Ilβ","√(1/3) Ilβ","√2 Ilβ","√(1/2) Ilβ"],correct:0},
{q:"A bar magnet of length l and magnetic moment pm is bent into the form of an arc. The new magnetic dipole moment will be",options:["pm","(3/π)pm","(2/π)pm","pm/2"],correct:1},
{q:"A non-conducting charged ring carrying a charge of q, mass m and radius r is rotated about its axis with constant angular speed ω. Find the ratio of its magnetic moment to angular momentum.",options:["q/m","2q/m","q/2m","q/4m"],correct:2},
{q:"The BH curve for a ferromagnetic material is shown; the material is placed inside a long solenoid with 1000 turns/cm. The current needed to demagnetize the ferromagnet completely is",options:["1.00 mA","1.25 mA","1.50 mA","1.75 mA"],correct:2},
{q:"Two short bar magnets have magnetic moments 1.20 Am² and 1.00 Am² respectively, kept parallel on a table with north poles pointing south, separated by 20.0 cm on a common magnetic equator. If the horizontal component of Earth's field is 3.6×10⁻⁵ Wb m⁻², the resultant horizontal magnetic induction at the midpoint is",options:["3.60 × 10⁻⁵ Wb m⁻²","3.5 × 10⁻⁵ Wb m⁻²","2.56 × 10⁻⁴ Wb m⁻²","2.2 × 10⁻⁴ Wb m⁻²"],correct:2},
{q:"The vertical component of Earth's magnetic field at a place is equal to the horizontal component. What is the value of the angle of dip at this place?",options:["30°","45°","60°","90°"],correct:1},
{q:"A flat dielectric disc of radius R carries an excess charge with surface charge density σ, and rotates about a perpendicular axis with angular velocity ω. Find the magnitude of the torque on the disc if placed in a uniform magnetic field B directed perpendicular to the axis of rotation.",options:["(1/4)σωπR","(1/4)σωπBR²","(1/4)σωπBR³","(1/4)σωπBR⁴"],correct:3},
{q:"The potential energy of a magnetic dipole with dipole moment pm = (-0.5î + 0.4ĵ) Am² kept in a uniform magnetic field B = 0.2î T is",options:["-0.1 J","-0.8 J","0.1 J","0.8 J"],correct:2}
];
const PH4_EMI_AC = [
{q:"An electron moves on a straight line path XY, with a coil abcd adjacent to its path. What will be the direction of current, if any, induced in the coil?",options:["The current will reverse direction as the electron goes past the coil","No current will be induced","abcd","adcb"],correct:0},
{q:"A thin semi-circular conducting ring (PQR) of radius r is falling with its plane vertical in a horizontal magnetic field B. The potential difference developed across the ring when its speed is v is",options:["Zero","Bvπr²/2, P at higher potential","πrBv, R at higher potential","2rBv, R at higher potential"],correct:3},
{q:"The flux linked with a coil at any instant t is given by φB = 10t² - 50t + 250. The induced emf at t = 3 s is",options:["-190 V","-10 V","10 V","190 V"],correct:1},
{q:"When the current changes from +2A to -2A in 0.05 s, an emf of 8 V is induced in a coil. The co-efficient of self-induction of the coil is",options:["0.2 H","0.4 H","0.8 H","0.1 H"],correct:3},
{q:"The current i in a coil varies with time as a trapezoidal ramp (rising linearly, then constant, then falling). The variation of induced emf with time would be",options:["Graph (a) — step-like, constant segments","Graph (b)","Graph (c)","Graph (d)"],correct:0},
{q:"A circular coil with a cross-sectional area of 4 cm² has 10 turns, placed at the centre of a long solenoid with 15 turns/cm and cross-sectional area 10 cm². What is their mutual inductance?",options:["7.54 μH","8.54 μH","9.54 μH","10.54 μH"],correct:0},
{q:"In a transformer, the number of turns in the primary and secondary are 410 and 1230 respectively. If the current in the primary is 6A, that in the secondary coil is",options:["2 A","18 A","12 A","1 A"],correct:0},
{q:"A step-down transformer reduces the supply voltage from 220 V to 11 V and increases the current from 6 A to 100 A. Its efficiency is",options:["1.2","0.83","0.12","0.9"],correct:1},
{q:"In an RLC series circuit with an AC source, when L is removed the phase difference between voltage and current is π/3. If C is removed instead, the phase difference is again π/3. The power factor of the circuit is",options:["1/2","1/√2","1","√3/2"],correct:2},
{q:"In a series RL circuit, the resistance and inductive reactance are the same. The phase difference between voltage and current is",options:["π/4","π/2","π/6","zero"],correct:0},
{q:"In a series resonant RLC circuit, the voltage across the 100 Ω resistor is 40 V. The resonant frequency ω is 250 rad/s. If C is 4 μF, the voltage across L is",options:["600 V","4000 V","400 V","1 V"],correct:2},
{q:"An inductor 20 mH, a capacitor 50 μF and a resistor 40 Ω are connected in series across a source of emf V = 10 sin 340t. The power loss in the AC circuit is",options:["0.76 W","0.89 W","0.46 W","0.67 W"],correct:2},
{q:"The instantaneous values of alternating current and voltage in a circuit are i = (1/√2)sin(100πt), v = (1/√2)sin(100πt + π/3). The average power in watts consumed in the circuit is",options:["1/4","√3/4","1/2","1/8"],correct:3},
{q:"In an oscillating LC circuit, the maximum charge on the capacitor is Q. The charge on the capacitor when the energy is stored equally between the electric and magnetic fields is",options:["Q/2","Q/√3","Q/√2","Q"],correct:2},
{q:"A (20/π²)H inductor is connected to a capacitor of capacitance C. The value of C to impart maximum power at 50 Hz is",options:["50 μF","0.5 μF","500 μF","5 μF"],correct:3}
];

const PH5_EM_WAVES = [
{q:"The dimension of 1/(μ0ε0) is",options:["[L T⁻¹]","[L² T⁻²]","[L⁻¹ T]","[L⁻² T²]"],correct:1},
{q:"If the amplitude of the magnetic field is 3 × 10⁻⁶ T, the amplitude of the electric field for the electromagnetic wave is",options:["100 V m⁻¹","300 V m⁻¹","600 V m⁻¹","900 V m⁻¹"],correct:3},
{q:"Which of the following electromagnetic radiations is used for viewing objects through fog?",options:["microwave","gamma rays","X-rays","infrared"],correct:3},
{q:"Which of the following is false for electromagnetic waves?",options:["transverse","non-mechanical waves","longitudinal","produced by accelerating charges"],correct:2},
{q:"Consider an oscillator with a charged particle oscillating about its mean position with a frequency of 300 MHz. The wavelength of electromagnetic waves produced is",options:["1 m","10 m","100 m","1000 m"],correct:0},
{q:"The electric and magnetic fields associated with an electromagnetic wave propagating along the negative X axis can be represented by",options:["E=E0î and B=B0k̂","E=E0k̂ and B=B0ĵ","E=E0î and B=B0ĵ","E=E0ĵ and B=B0î"],correct:1},
{q:"In an electromagnetic wave travelling in free space, the rms value of the electric field is 3 V m⁻¹. The peak value of the magnetic field is",options:["1.414 × 10⁻⁸ T","1.0 × 10⁻⁸ T","2.828 × 10⁻⁸ T","2.0 × 10⁻⁸ T"],correct:0},
{q:"An e.m. wave propagates with velocity v⃗ = vî. If the oscillating electric field of this wave is along the +y axis, the direction of the oscillating magnetic field is along",options:["-y direction","-x direction","+z direction","-z direction"],correct:2},
{q:"If the magnetic monopole exists, then which of Maxwell's equations needs to be modified?",options:["∮E⃗·dA⃗ = Qenclosed/ε0","∮B⃗·dA⃗ = 0","∮B⃗·dl⃗ = μ0ic + μ0ε0 d/dt∮E⃗·dA⃗","∮E⃗·dl⃗ = -d/dt∮φB"],correct:1},
{q:"Fraunhofer lines are an example of ……. spectrum.",options:["line emission","line absorption","band emission","band absorption"],correct:1},
{q:"Which of the following is an electromagnetic wave?",options:["α-rays","β-rays","γ-rays","all of them"],correct:2},
{q:"Which one of these is used to produce a propagating electromagnetic wave?",options:["an accelerating charge","a charge moving with constant velocity","a stationary charge","an uncharged particle"],correct:0},
{q:"If E = E0 Sin[10⁶x - ωt] is the electric field of a plane electromagnetic wave, the value of ω is",options:["0.3 × 10⁻¹⁴ rad s⁻¹","3 × 10⁻¹⁴ rad s⁻¹","0.3 × 10¹⁴ rad s⁻¹","3 × 10¹⁴ rad s⁻¹"],correct:3},
{q:"Which of the following is NOT true for electromagnetic waves?",options:["it transports energy","it transports momentum","it transports angular momentum","in vacuum, it travels with different speeds which depend on their frequency"],correct:3},
{q:"The electric and magnetic fields of an electromagnetic wave are",options:["in phase and perpendicular to each other","out of phase and not perpendicular to each other","in phase and not perpendicular to each other","out of phase and perpendicular to each other"],correct:0}
];

const PH6_RAY_OPTICS = [
{q:"The speed of light in an isotropic medium depends on",options:["its intensity","its wavelength","the nature of propagation","the motion of the source w.r.t medium"],correct:1},
{q:"A rod of length 10 cm lies along the principal axis of a concave mirror of focal length 10 cm, with its end closer to the pole 20 cm away from the mirror. The length of the image is",options:["2.5 cm","5 cm","10 cm","15 cm"],correct:1},
{q:"An object is placed in front of a convex mirror of focal length f. The maximum and minimum distance of the object from the mirror such that the image formed is real and magnified is",options:["2f and ∞","c and ∞","f and O","None of these"],correct:3},
{q:"For light incident from air on a slab of refractive index 2, the maximum possible angle of refraction is",options:["30°","45°","60°","90°"],correct:0},
{q:"If the velocity and wavelength of light in air are va and λa, and in water are vw and λw, then the refractive index of water is",options:["vw/va","va/vw","λw/λa","vaλa/(vwλw)"],correct:1},
{q:"Stars twinkle due to",options:["reflection","total internal reflection","refraction","polarisation"],correct:2},
{q:"When a biconvex lens of glass with refractive index 1.47 is dipped in a liquid, it acts as a plane sheet of glass. This implies that the liquid must have a refractive index",options:["less than one","less than that of glass","greater than that of glass","equal to that of glass"],correct:3},
{q:"The radius of curvature of the curved surface of a thin planoconvex lens is 10 cm, refractive index 1.5. If the plane surface is silvered, the focal length will be",options:["5 cm","10 cm","15 cm","20 cm"],correct:3},
{q:"An air bubble in a glass slab of refractive index 1.5 is 5 cm deep viewed from one surface and 3 cm deep viewed from the opposite face. The thickness of the slab is",options:["8 cm","10 cm","12 cm","16 cm"],correct:2},
{q:"A ray of light travelling in a transparent medium of refractive index n falls on a surface separating the medium from air at an angle of incidence of 45°. The ray can undergo total internal reflection for which of the following n?",options:["n = 1.25","n = 1.33","n = 1.4","n = 1.5"],correct:3}
];
const PH7_WAVE_OPTICS = [
{q:"A plane glass is placed over various coloured letters (violet, green, yellow, red). The letter which appears to be raised more is",options:["red","yellow","green","violet"],correct:3},
{q:"Two point white dots are 1 mm apart on a black paper, viewed by an eye of pupil diameter 3 mm. The maximum distance at which these dots can be resolved by the eye is (λ = 500 nm)",options:["1 m","5 m","3 m","6 m"],correct:1},
{q:"In a Young's double-slit experiment, the slit separation is doubled. To maintain the same fringe spacing on the screen, the screen-to-slit distance D must be changed to",options:["2D","D/2","√2 D","D/√2"],correct:0},
{q:"Two coherent monochromatic light beams of intensities I and 4I are superposed. The maximum and minimum possible intensities in the resulting beam are",options:["5I and I","5I and 3I","9I and I","9I and 3I"],correct:2},
{q:"When light is incident on a soap film of thickness 5×10⁻⁵ cm, the wavelength of light reflected maximum in the visible region is 5320 Å. The refractive index of the film is",options:["1.22","1.33","1.51","1.83"],correct:1},
{q:"The first diffraction minimum due to a single slit of width 1.0×10⁻⁵ cm is at 30°. The wavelength of light used is",options:["400 Å","500 Å","600 Å","700 Å"],correct:1},
{q:"A ray of light strikes a glass plate at an angle of 60°. If the reflected and refracted rays are perpendicular to each other, the refractive index of the glass is",options:["√3","3/2","√(3/2)","2"],correct:0},
{q:"One of Young's double slits is covered with a glass plate. The position of the central maximum will",options:["get shifted downwards","get shifted upwards","remain the same","data insufficient to conclude"],correct:1},
{q:"Light transmitted by a Nicol prism is",options:["partially polarised","unpolarised","plane polarised","elliptically polarised"],correct:2},
{q:"The transverse nature of light is shown in",options:["interference","diffraction","scattering","polarisation"],correct:3}
];

const PH8_DUAL_NATURE = [
{q:"The wavelength λe of an electron and λp of a photon of the same energy E are related by",options:["λp ∝ λe","λp ∝ √λe","λp ∝ 1/√λe","λp ∝ λe²"],correct:3},
{q:"In an electron microscope, electrons are accelerated by 14 kV. If the voltage is changed to 224 kV, the de Broglie wavelength of the electrons would",options:["increase by 2 times","decrease by 2 times","decrease by 4 times","increase by 4 times"],correct:2},
{q:"A wave associated with a moving particle of mass 3 × 10⁻⁶ g has the same wavelength as an electron moving at 6 × 10⁶ m s⁻¹. The velocity of the particle is",options:["1.82 × 10⁻¹⁸ m s⁻¹","9 × 10⁻² m s⁻¹","3 × 10⁻³¹ m s⁻¹","1.82 × 10⁻¹⁵ m s⁻¹"],correct:3},
{q:"When a metallic surface illuminated with wavelength λ has stopping potential V, and with wavelength 2λ has stopping potential V/4, the threshold wavelength for the surface is",options:["4λ","5λ","5λ/2","3λ"],correct:3},
{q:"If light of wavelength 330 nm is incident on a metal with work function 3.55 eV, electrons are emitted. The wavelength of the wave associated with the emitted electron is",options:["< 2.75 × 10⁻⁹ m","≥ 2.75 × 10⁻⁹ m","≤ 2.75 × 10⁻¹² m","< 2.5 × 10⁻¹⁰ m"],correct:0},
{q:"A photoelectric surface illuminated successively by wavelength λ and λ/2 gives a maximum kinetic energy in the second case 3 times that of the first case. The work function of the material is",options:["hc/λ","2hc/λ","hc/3λ","hc/2λ"],correct:3},
{q:"In photoelectric emission, a radiation whose frequency is 4 times the threshold frequency of a metal is incident on it. The maximum possible velocity of the emitted electron will be",options:["√(hν0/m)","√(6hν0/m)","2√(hν0/m)","√(hν0/2m)"],correct:1},
{q:"Two radiations with photon energies 0.9 eV and 3.3 eV fall successively on a metallic surface with work function 0.6 eV. The ratio of maximum speeds of emitted electrons in the two cases will be",options:["1:4","1:3","1:1","1:9"],correct:1},
{q:"A light source of wavelength 520 nm emits 1.04 × 10¹⁵ photons per second, while a second source of 460 nm produces 1.38 × 10¹⁵ photons per second. The ratio of power of the second source to the first is",options:["1.00","1.02","1.5","0.98"],correct:2},
{q:"If the mean wavelength of light from the sun is 550 nm and its mean power is 3.8 × 10²⁶ W, the average number of photons received by the human eye per second from sunlight is of the order of",options:["10⁴⁵","10⁴²","10⁵⁴","10⁵¹"],correct:0},
{q:"The threshold wavelength for a metal surface whose photoelectric work function is 3.313 eV is",options:["4125 Å","3750 Å","6000 Å","20625 Å"],correct:1},
{q:"A light of wavelength 500 nm is incident on a sensitive metal plate of photoelectric work function 1.235 eV. The kinetic energy of the photoelectrons emitted is",options:["0.58 eV","2.48 eV","1.24 eV","1.16 eV"],correct:2},
{q:"Photons of wavelength λ are incident on a metal. The most energetic electrons ejected are bent into a circular arc of radius R by a perpendicular magnetic field B. The work function of the metal is",options:["hc/λ - me + e²B²R²/2me","hc/λ + 2me[eBR/2me]²","hc/λ - mec² - e²B²R²/2me","hc/λ - 2me[eBR/2me]²"],correct:3},
{q:"The work functions for metals A, B and C are 1.92 eV, 2.0 eV and 5.0 eV respectively. The metal(s) which will emit photoelectrons for radiation of wavelength 4100 Å is/are",options:["A only","both A and B","all these metals","none"],correct:1},
{q:"Emission of electrons by the absorption of heat energy is called ……… emission.",options:["photoelectric","field","thermionic","secondary"],correct:2}
];

const PH9_ATOMIC_NUCLEAR = [
{q:"Suppose an alpha particle accelerated by a potential of V volt collides with a nucleus of atomic number Z. The distance of closest approach of the alpha particle is",options:["14.4 (Z/V) Å","14.4 (V/Z) Å","1.44 (Z/V) Å","1.44 (Z/V) Å (alt.)"],correct:0},
{q:"In a hydrogen atom, the electron revolving in the fourth orbit has angular momentum equal to",options:["h","h/π","4h/π","2h/π"],correct:3},
{q:"The atomic number of a H-like atom with ionization potential 122.4 V for n=1 is",options:["1","2","3","4"],correct:2},
{q:"The ratio of radius between the first three orbits of a hydrogen atom is",options:["1:2:3","2:4:6","1:4:9","1:3:5"],correct:2},
{q:"The charge of cathode ray particles is",options:["positive","negative","neutral","not defined"],correct:1},
{q:"In J.J. Thomson's e/m experiment, a beam of electrons is replaced by muons (same charge as electrons but 208 times the mass). The no-deflection condition is achieved only if",options:["B is increased by 208 times","B is decreased by 208 times","B is increased by 14.4 times","B is decreased by 14.4 times"],correct:2},
{q:"The ratio of the wavelengths of radiation emitted for the transition from n=2 to n=1 in Li++, He+ and H is",options:["1: 2: 3","1: 4: 9","3:2:1","4: 9: 36"],correct:3},
{q:"The electric potential of an electron is given by V = V0 ln(r/r0), where r0 is a constant. If the Bohr atom model is valid, the variation of the radius of the nth orbit rn with the principal quantum number n is",options:["rn ∝ 1/n","rn ∝ n","rn ∝ 1/n²","rn ∝ n²"],correct:1},
{q:"If the nuclear radius of ²⁷Al is 3.6 Fermi, the approximate nuclear radius of ⁶⁴Cu in Fermi is",options:["2.4","1.2","4.8","3.6"],correct:2},
{q:"The nucleus is approximately spherical in shape. The surface area of a nucleus with mass number A varies as",options:["A^(2/3)","A^(4/3)","A^(1/3)","A^(5/3)"],correct:0},
{q:"The mass of a ⁷Li nucleus is 0.042 u less than the sum of masses of its nucleons. The binding energy per nucleon of ⁷Li is",options:["4 MeV","5.6 MeV","3.9 MeV","23 MeV"],correct:1},
{q:"Mp and Mn denote the masses of the proton and neutron. A nucleus of binding energy B contains Z protons and N neutrons. The mass M(N,Z) of the nucleus is given by (c = speed of light)",options:["M(N,Z) = NMn + ZMp - Bc²","M(N,Z) = NMn + ZMp + Bc²","M(N,Z) = NMn + ZMp - B/c²","M(N,Z) = NMn + ZMp + B/c²"],correct:2},
{q:"A radioactive nucleus (initial mass number A, atomic number Z) emits two α-particles and 2 positrons. The ratio of the number of neutrons to protons in the final nucleus will be",options:["(A-Z-4)/(Z-2)","(A-Z-2)/(Z-6)","(A-Z-4)/(Z-6)","(A-Z-12)/(Z-4)"],correct:1},
{q:"The half-life of radioactive element A is the same as the mean life of element B. Initially both have the same number of atoms. Then",options:["A and B have the same decay rate initially","A and B decay at the same rate always","B will decay at a faster rate than A","A will decay at a faster rate than B"],correct:2},
{q:"A radioactive element has N0 nuclei at t=0. The number of nuclei remaining after half of a half-life (t = T½/2) is",options:["N0/2","N0/√2","N0/4","N0/8"],correct:1}
];
const PH10_ELECTRONICS = [
{q:"The barrier potential of a silicon diode is approximately",options:["0.7 V","0.3 V","2.0 V","2.2 V"],correct:0},
{q:"Doping a semiconductor results in",options:["a decrease in mobile charge carriers","a change in chemical properties","a change in the crystal structure","the breaking of the covalent bond"],correct:2},
{q:"In an unbiased p-n junction, the majority charge carriers (holes) in the p-region diffuse into the n-region because of",options:["the potential difference across the p-n junction","the higher hole concentration in the p-region than in the n-region","the attraction of free electrons of the n-region","the higher concentration of electrons in the n-region than in the p-region"],correct:1},
{q:"If a positive half-wave rectified voltage is fed to a load resistor, for which part of a cycle will there be current flow through the load?",options:["0°–90°","90°–180°","0°–180°","0°–360°"],correct:2},
{q:"The zener diode is primarily used as a",options:["Rectifier","Amplifier","Oscillator","Voltage regulator"],correct:3},
{q:"The principle on which a solar cell operates is",options:["Diffusion","Recombination","Photovoltaic action","Carrier flow"],correct:2},
{q:"The light emitted in an LED is due to",options:["Recombination of charge carriers","Reflection of light due to lens action","Amplification of light falling at the junction","Large current capacity"],correct:0},
{q:"The barrier potential of a p-n junction depends on i) type of semiconductor material ii) amount of doping iii) temperature. Which one of the following is correct?",options:["(i) and (ii) only","(ii) only","(ii) and (iii) only","(i) (ii) and (iii)"],correct:3},
{q:"To obtain sustained oscillation in an oscillator,",options:["Feedback should be positive","Feedback factor must be unity","Phase shift must be 0 or 2π","All the above"],correct:3},
{q:"If the input to the NOT gate is A = 1011, its output is",options:["0100","1000","1100","0011"],correct:0},
{q:"Which one of the following represents a forward-biased diode?",options:["Configuration (a) — 0V at P, -2V at N","Configuration (b)","Configuration (c)","Configuration (d)"],correct:0},
{q:"The given electrical network of gates is equivalent to",options:["AND gate","OR gate","NOR gate","NOT gate"],correct:2},
{q:"The output of a given logic circuit is 1 when the input ABC is",options:["101","100","110","010"],correct:0},
{q:"The variation of frequency of the carrier wave with respect to the amplitude of the modulating signal is called",options:["Amplitude modulation","Frequency modulation","Phase modulation","Pulse width modulation"],correct:1},
{q:"The frequency range of 3 MHz to 30 MHz is used for",options:["Ground wave propagation","Space wave propagation","Sky wave propagation","Satellite communication"],correct:2}
];

const PH11_RECENT_DEVELOPMENTS = [
{q:"The particle size of ZnO material is 30 nm. Based on the dimension, it is classified as",options:["Bulk material","Nanomaterial","Soft material","Magnetic material"],correct:1},
{q:"Which one of the following is a natural nanomaterial?",options:["Peacock feather","Peacock beak","Grain of sand","Skin of the whale"],correct:0},
{q:"The blueprint for making ultra durable synthetic material is mimicked from",options:["Lotus leaf","Morpho butterfly","Parrot fish","Peacock feather"],correct:2},
{q:"The method of making nanomaterial by assembling atoms is called",options:["Top down approach","Bottom up approach","Cross down approach","Diagonal approach"],correct:1},
{q:"\"Ski wax\" is an application of a nano product in the field of",options:["Medicine","Textile","Sports","Automotive industry"],correct:2},
{q:"The materials used in Robotics are",options:["Aluminium and silver","Silver and gold","Copper and gold","Steel and aluminum"],correct:3},
{q:"The alloys used for muscle wires in Robots are",options:["Shape memory alloys","Gold copper alloys","Gold silver alloys","Two dimensional alloys"],correct:0},
{q:"The technology used for stopping the brain from processing pain is",options:["Precision medicine","Wireless brain sensor","Virtual reality","Radiology"],correct:2},
{q:"The particle which gives mass to protons and neutrons is",options:["Higgs particle","Einstein particle","Nanoparticle","Bulk particle"],correct:0},
{q:"The gravitational waves were theoretically proposed by",options:["Conrad Rontgen","Marie Curie","Albert Einstein","Edward Purcell"],correct:2}
];


/* ================= CHEMISTRY QUESTION BANK (12th Std, Book Back 1 Mark PDF) — FULL SET ================= */
const CH1_METALLURGY = [
{q:"Bauxite has the composition",options:["Al_{2}O_{3}","Al_{2}O_{3}.nH_{2}O","Fe_{2}O_{3}.2H_{2}O","None of these"],correct:1},
{q:"Roasting of sulphide ore gives the gas (A). (A) is a colourless gas. Aqueous solution of (A) is acidic. The gas (A) is",options:["CO_{2}","SO_{3}","SO_{2}","H_{2}S"],correct:2},
{q:"Which one of the following reactions represents calcination?",options:["2Zn + O_{2} → 2ZnO","2ZnS + 3O_{2} → 2ZnO + 2SO_{2}","MgCO_{3} → MgO + CO_{2}","Both (a) and (c)"],correct:2},
{q:"The metal oxide which cannot be reduced to metal by carbon is",options:["PbO","Al_{2}O_{3}","ZnO","FeO"],correct:1},
{q:"Which of the metal is extracted by the Hall-Heroult process?",options:["Al","Ni","Cu","Zn"],correct:0},
{q:"Which of the following statements, about the advantage of roasting of sulphide ore before reduction, is not true?",options:["ΔG^{0}_{f} of sulphide is greater than those for CS_{2} and H_{2}S","ΔG^{0}_{r} is negative for roasting of sulphide ore to oxide","Roasting of the sulphide to its oxide is thermodynamically feasible","Carbon and hydrogen are suitable reducing agents for metal sulphides"],correct:3},
{q:"Match the process in Column-I with its use in Column-II — A: Cyanide process, B: Froth floatation process, C: Electrolytic reduction, D: Zone refining; (i) Ultrapure Ge, (ii) Dressing of ZnS, (iii) Extraction of Al, (iv) Extraction of Au, (v) Purification of Ni. Choose the correct match.",options:["A-i, B-ii, C-iii, D-iv","A-iii, B-iv, C-v, D-i","A-iv, B-ii, C-iii, D-i","A-ii, B-iii, C-i, D-v"],correct:2},
{q:"Wolframite ore is separated from tinstone by the process of",options:["Smelting","Calcination","Roasting","Electromagnetic separation"],correct:3},
{q:"Which one of the following is not feasible?",options:["Zn_{(s)} + Cu^{2+}_{(aq)} → Cu_{(s)} + Zn^{2+}_{(aq)}","Cu_{(s)} + Zn^{2+}_{(aq)} → Zn_{(s)} + Cu^{2+}_{(aq)}","Cu_{(s)} + 2Ag^{+}_{(aq)} → 2Ag_{(s)} + Cu^{2+}_{(aq)}","Fe_{(s)} + Cu^{2+}_{(aq)} → Cu_{(s)} + Fe^{2+}_{(aq)}"],correct:1},
{q:"Electrochemical process is used to extract",options:["Iron","Lead","Sodium","Silver"],correct:2},
{q:"Flux is a substance which is used to convert",options:["Mineral into silicate","Infusible impurities to soluble impurities","Soluble impurities to infusible impurities","All of these"],correct:1},
{q:"Which one of the following ores is best concentrated by the froth-floatation method?",options:["Magnetite","Hematite","Galena","Cassiterite"],correct:2},
{q:"In the extraction of aluminium from alumina by electrolysis, cryolite is added to",options:["Lower the melting point of alumina","Remove impurities from alumina","Decrease the electrical conductivity","Increase the rate of reduction"],correct:0},
{q:"Zinc is obtained from ZnO by",options:["Carbon reduction","Reduction using silver","Electrochemical process","Acid leaching"],correct:0},
{q:"Extraction of gold and silver involves leaching with cyanide ion. Silver is later recovered by",options:["Distillation","Zone refining","Displacement with zinc","Liquation"],correct:2},
{q:"Considering the Ellingham diagram, which of the following metals can be used to reduce alumina?",options:["Fe","Cu","Mg","Zn"],correct:2},
{q:"The following set of reactions are used in refining Zirconium: Zr (impure) + 2I_{2} —523K→ ZrI_{4}, ZrI_{4} —1800K→ Zr(pure) + 2I_{2}. This method is known as",options:["Liquation","Van Arkel process","Zone refining","Mond's process"],correct:1},
{q:"Which of the following is used for concentrating ore in metallurgy?",options:["Leaching","Roasting","Froth floatation","Both leaching and froth floatation"],correct:3},
{q:"This incorrect statement among the following is",options:["Nickel is refined by Mond's process","Titanium is refined by Van Arkel's process","Zinc blende is concentrated by froth floatation","In the metallurgy of gold, the metal is leached with dilute sodium chloride solution"],correct:3},
{q:"In the electrolytic refining of copper, which one of the following is used as the anode?",options:["Pure copper","Impure copper","Carbon rod","Platinum electrode"],correct:1},
{q:"Which of the following plots gives the Ellingham diagram?",options:["ΔS vs T","ΔG^{0} vs T","ΔG^{0} vs 1/T","ΔG^{0} vs T^{2}"],correct:1},
{q:"In the Ellingham diagram, for the formation of carbon monoxide",options:["ΔS^{0}/ΔT is negative","ΔG^{0}/ΔT is positive","ΔG^{0}/ΔT is negative","Initially ΔG^{0}/ΔT is positive, after 700°C it is negative"],correct:2},
{q:"Which of the following reductions is not thermodynamically feasible?",options:["Cr_{2}O_{3} + 2Al → Al_{2}O_{3} + 2Cr","Al_{2}O_{3} + 2Cr → Cr_{2}O_{3} + 2Al","3TiO_{2} + 4Al → 2Al_{2}O_{3} + 3Ti","None of these"],correct:1},
{q:"Which of the following is not true with respect to the Ellingham diagram?",options:["Free energy changes follow a straight line; deviation occurs when there is a phase change","The graph for the formation of CO_{2} is a straight line almost parallel to the free energy axis","Negative slope of CO shows that it becomes more stable with increase in temperature","Positive slope of metal oxides shows that their stabilities decrease with increase in temperature"],correct:1}
];
const CH2_PBLOCK1 = [
{q:"An aqueous solution of borax is",options:["Neutral","Acidic","Basic","Amphoteric"],correct:2},
{q:"Boric acid is an acid because its molecule",options:["Contains a replaceable H^{+} ion","Gives up a proton","Combines with a proton to form a water molecule","Accepts OH^{-} from water, releasing a proton"],correct:3},
{q:"Which among the following is not a borane?",options:["B_{2}H_{6}","B_{3}H_{6}","B_{4}H_{10}","None of these"],correct:1},
{q:"Which of the following metals has the largest abundance in the earth's crust?",options:["Aluminium","Calcium","Magnesium","Sodium"],correct:0},
{q:"In diborane, the number of electrons that accounts for the banana bonds is",options:["Six","Two","Four","Three"],correct:2},
{q:"The element that does not show catenation among the following p-block elements is",options:["Carbon","Silicon","Lead","Germanium"],correct:2},
{q:"Carbon atoms in fullerene with formula C_{60} have",options:["sp^{3} hybridised","sp hybridised","sp^{2} hybridised","Partially sp^{2} and partially sp^{3} hybridised"],correct:2},
{q:"Oxidation state of carbon in its hydrides (e.g. CH_{4}) is",options:["+4","-4","+3","+2"],correct:0},
{q:"The basic structural unit of silicates is",options:["(SiO_{3})^{2-}","(SiO_{4})^{2-}","(SiO)^{-}","(SiO_{4})^{4-}"],correct:3},
{q:"The repeating unit in a linear silicone polymer, built from R_{2}SiCl_{2}, is best represented as",options:["-SiO_{2}-","-[Si(R)_{2}-O]_{n}-","-SiO(OR)-","-Si(R)-O-O-"],correct:1},
{q:"Which of these is not a monomer for a high molecular mass silicone polymer?",options:["Me_{3}SiCl","PhSiCl_{3}","MeSiCl_{3}","Me_{2}SiCl_{2}"],correct:0},
{q:"Which of the following is not sp^{2} hybridised?",options:["Graphite","Graphene","Fullerene","Dry ice"],correct:3},
{q:"The geometry in which carbon atoms in diamond are bonded to each other is",options:["Tetrahedral","Hexagonal","Octahedral","None of these"],correct:0},
{q:"Which of the following statements is not correct?",options:["Beryl is a cyclic silicate","Mg_{2}SiO_{4} is an orthosilicate","SiO_{4}^{4-} is the basic structural unit of silicates","Feldspar is not an aluminosilicate"],correct:3},
{q:"Match items in Column I with Column II — A: Borazole, B: Boric acid, C: Quartz, D: Borax; (1) B(OH)_{3}, (2) B_{3}N_{3}H_{6}, (3) Na_{2}[B_{4}O_{5}(OH)_{4}].8H_{2}O, (4) SiO_{2}. Choose the correct match.",options:["A-2, B-1, C-4, D-3","A-1, B-2, C-3, D-4","A-3, B-4, C-1, D-2","A-4, B-3, C-2, D-1"],correct:0},
{q:"Duralumin is an alloy of",options:["Cu, Mn","Cu, Al, Mg","Al, Mn","Al, Cu, Mn, Mg"],correct:3},
{q:"The compound that is used in nuclear reactors as protective shields and control rods is",options:["Metal borides","Metal oxides","Metal carbonates","Metal carbide"],correct:0},
{q:"The stability of the +1 oxidation state increases in the sequence",options:["Al < Ga < In < Tl","Tl > In < Ga < Al","In < Tl < Ga < Al","Ga < In < Al < Tl"],correct:0}
];
const CH3_PBLOCK2 = [
{q:"In which of the following is NH_{3} not used?",options:["Nessler's reagent","Reagent for the analysis of IV group basic radical","Reagent for the analysis of III group basic radical","Tollen's reagent"],correct:0},
{q:"Which is true regarding nitrogen?",options:["Least electronegative element","Has low ionisation enthalpy than oxygen","d-orbitals available","Ability to form pπ-pπ bonds with itself"],correct:3},
{q:"An element belongs to group 15 and 3rd period of the periodic table. Its electronic configuration would be",options:["1s^{2} 2s^{2} 2p^{4}","1s^{2} 2s^{2} 2p^{3}","1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{2}","1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{3}"],correct:3},
{q:"Solid (A) reacts with strong aqueous NaOH liberating a foul smelling gas (B) which spontaneously burns in air giving smoky rings. A and B are respectively",options:["P_{4}(red) and PH_{3}","P_{4}(white) and PH_{3}","S_{8} and H_{2}S","P_{4}(white) and H_{2}S"],correct:1},
{q:"In the brown ring test, the brown colour of the ring is due to",options:["A mixture of NO and NO_{2}","Nitroso ferrous sulphate","Ferrous nitrate","Ferric nitrate"],correct:1},
{q:"On hydrolysis, PCl_{3} gives",options:["H_{3}PO_{3}","PH_{3}","H_{3}PO_{4}","POCl_{3}"],correct:0},
{q:"P_{4}O_{6} reacts with cold water to give",options:["H_{3}PO_{3}","H_{4}P_{2}O_{7}","HPO_{3}","H_{3}PO_{4}"],correct:0},
{q:"The basicity of pyrophosphorous acid (H_{4}P_{2}O_{5}) is",options:["4","2","3","5"],correct:1},
{q:"The molarity of a given orthophosphoric acid (H_{3}PO_{4}) solution is 2M. Its normality is",options:["6N","4N","2N","None of these"],correct:0},
{q:"Assertion: The bond dissociation energy of fluorine is greater than that of chlorine gas. Reason: Chlorine has more electronic repulsion than fluorine.",options:["Both assertion and reason are true and reason is the correct explanation of assertion","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:3},
{q:"Among the following, which is the strongest oxidizing agent?",options:["Cl_{2}","F_{2}","Br_{2}","I_{2}"],correct:1},
{q:"The correct order of the thermal stability of hydrogen halides is",options:["HI > HBr > HCl > HF","HF > HCl > HBr > HI","HCl > HF > HBr > HI","HI > HCl > HF > HBr"],correct:1},
{q:"Which one of the following compounds is not formed?",options:["XeOF_{4}","XeO_{3}","XeF_{2}","NeF_{2}"],correct:3},
{q:"Most easily liquefiable noble gas is",options:["Ar","Ne","He","Kr"],correct:2},
{q:"XeF_{6} on complete hydrolysis produces",options:["XeOF_{4}","XeO_{2}F_{2}","XeO_{3}","XeO_{2}"],correct:2},
{q:"On oxidation with iodine, sulphite ion is transformed to",options:["S_{4}O_{6}^{2-}","S_{2}O_{6}^{2-}","SO_{4}^{2-}","SO_{3}^{2-}"],correct:2},
{q:"Which of the following is the strongest acid among all?",options:["HI","HF","HBr","HCl"],correct:0},
{q:"Which one of the following orders is correct for the bond dissociation enthalpy of halogen molecules?",options:["Br_{2} > I_{2} > F_{2} > Cl_{2}","F_{2} > Cl_{2} > Br_{2} > I_{2}","I_{2} > Br_{2} > Cl_{2} > F_{2}","Cl_{2} > Br_{2} > F_{2} > I_{2}"],correct:3},
{q:"Among the following, the correct order of acidity is",options:["HClO_{2} < HClO < HClO_{3} < HClO_{4}","HClO_{4} < HClO_{2} < HClO < HClO_{3}","HClO_{3} < HClO_{4} < HClO_{2} < HClO","HClO < HClO_{2} < HClO_{3} < HClO_{4}"],correct:3},
{q:"When copper is heated with concentrated HNO_{3} it produces",options:["Cu(NO_{3})_{2}, NO and NO_{2}","Cu(NO_{3})_{2} and N_{2}O","Cu(NO_{3})_{2} and NO_{2}","Cu(NO_{3})_{2} and NO"],correct:2}
];
const CH4_TRANSITION = [
{q:"Sc (Z = 21) is a transition element but Zinc (Z = 30) is not, because",options:["Both Sc^{3+} and Zn^{2+} ions are colourless and form white compounds","In case of Sc, 3d orbitals are partially filled but in Zn these are completely filled","The last electron is assumed to be added to the 4s level in case of zinc","Both Sc and Zn do not exhibit variable oxidation states"],correct:1},
{q:"Which of the following d-block elements has a half filled penultimate d sub-shell as well as a half filled valence sub-shell?",options:["Cr","Pd","Pt","None of these"],correct:0},
{q:"Among the transition metals of the 3d series, the one that has the highest negative M^{2+}/M electrode potential is",options:["Ti","Cu","Mn","Zn"],correct:0},
{q:"Which one of the following ions has the same number of unpaired electrons as present in V^{3+}?",options:["Ti^{3+}","Fe^{3+}","Ni^{2+}","Cr^{3+}"],correct:2},
{q:"The magnetic moment of the Mn^{2+} ion is",options:["5.92 BM","2.80 BM","8.95 BM","3.90 BM"],correct:0},
{q:"The catalytic behaviour of transition metals and their compounds is ascribed mainly due to",options:["Their magnetic behaviour","Their unfilled d orbitals","Their ability to adopt variable oxidation states","Their chemical reactivity"],correct:2},
{q:"The correct order of increasing oxidizing power in the series VO_{2}^{+}, Cr_{2}O_{7}^{2-}, MnO_{4}^{-} is",options:["VO_{2}^{+} < Cr_{2}O_{7}^{2-} < MnO_{4}^{-}","Cr_{2}O_{7}^{2-} < VO_{2}^{+} < MnO_{4}^{-}","Cr_{2}O_{7}^{2-} < MnO_{4}^{-} < VO_{2}^{+}","MnO_{4}^{-} < Cr_{2}O_{7}^{2-} < VO_{2}^{+}"],correct:0},
{q:"In acid medium, potassium permanganate oxidizes oxalic acid to",options:["Oxalate","Carbon dioxide","Acetate","Acetic acid"],correct:1},
{q:"Which of the following statements is not true?",options:["On passing H_{2}S through acidified K_{2}Cr_{2}O_{7} solution, a milky colour is observed","Na_{2}Cr_{2}O_{7} is preferred over K_{2}Cr_{2}O_{7} in volumetric analysis","K_{2}Cr_{2}O_{7} solution in acidic medium is orange in colour","K_{2}Cr_{2}O_{7} solution becomes yellow on increasing the pH beyond 7"],correct:1},
{q:"Permanganate ion changes to ........... in acidic medium",options:["MnO_{4}^{2-}","Mn^{2+}","Mn^{3+}","MnO_{2}"],correct:1},
{q:"How many moles of I_{2} are liberated when 1 mole of potassium dichromate reacts with excess potassium iodide?",options:["1","2","3","4"],correct:2},
{q:"The number of moles of acidified KMnO_{4} required to oxidize 1 mole of ferrous oxalate (FeC_{2}O_{4}) is",options:["5","3","0.6","1.5"],correct:2},
{q:"Which one of the following statements related to lanthanons is incorrect?",options:["Europium shows a +2 oxidation state","The basicity decreases as the ionic radius decreases from Pr to Lu","All the lanthanons are much more reactive than aluminium","Ce^{4+} solutions are widely used as oxidising agents in volumetric analysis"],correct:2},
{q:"Which of the following lanthanoid ions is diamagnetic?",options:["Eu^{2+}","Yb^{2+}","Ce^{2+}","Sm^{2+}"],correct:1},
{q:"Which of the following oxidation states is most common among the lanthanoids?",options:["4","2","5","3"],correct:3},
{q:"Assertion: Ce^{4+} is used as an oxidizing agent in volumetric analysis. Reason: Ce^{4+} has the tendency of attaining the +3 oxidation state.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:0},
{q:"The most common oxidation state of actinoids is",options:["+2","+3","+4","+6"],correct:1},
{q:"The actinoid elements which show the highest oxidation state of +7 are",options:["Np, Pu, Am","U, Fm, Th","U, Th, Md","Es, No, Lr"],correct:0},
{q:"Which one of the following is not correct?",options:["La(OH)_{3} is less basic than Lu(OH)_{3}","In the lanthanoid series, the ionic radius of Ln^{3+} ions decreases","La is actually an element of the transition metal series rather than the lanthanide series","Atomic radii of Zr and Hf are the same because of lanthanide contraction"],correct:0}
];
const CH5_COORDINATION = [
{q:"The sum of the primary valency and secondary valency of the metal M in the complex [M(en)_{2}(Ox)]Cl is",options:["3","6","-3","9"],correct:3},
{q:"An excess of silver nitrate is added to 100 mL of a 0.01 M solution of pentaaquachloridochromium(III) chloride, [Cr(H_{2}O)_{5}Cl]Cl_{2}. The number of moles of AgCl precipitated would be",options:["0.02","0.002","0.01","0.2"],correct:1},
{q:"A complex has the molecular formula MSO_{4}Cl.6H_{2}O. Its aqueous solution gives a white precipitate with barium chloride solution, and no precipitate with silver nitrate solution. If the secondary valency of the metal is six, which one of the following correctly represents the complex?",options:["[M(H_{2}O)_{4}Cl]SO_{4}.2H_{2}O","[M(H_{2}O)_{6}]SO_{4}Cl","[M(H_{2}O)_{5}Cl]SO_{4}.H_{2}O","[M(H_{2}O)_{3}Cl]SO_{4}.3H_{2}O"],correct:2},
{q:"Oxidation state of iron and the charge on the ligand NO in [Fe(H_{2}O)_{5}NO]SO_{4} are",options:["+2 and 0 respectively","+3 and 0 respectively","+3 and -1 respectively","+1 and +1 respectively"],correct:3},
{q:"As per IUPAC guidelines, the name of the complex [Co(en)_{2}(ONO)Cl]Cl is",options:["Chlorobisethylenediaminenitritocobalt(III) chloride","Chlorobis(ethane-1,2-diamine)nitro-κO-cobaltate(III) chloride","Chloridobis(ethane-1,2-diammine)nitrito-κO-cobalt(II) chloride","Chloridobis(ethane-1,2-diamine)nitrito-κO-cobalt(III) chloride"],correct:3},
{q:"IUPAC name of the complex K_{3}[Al(C_{2}O_{4})_{3}] is",options:["Potassium trioxalatoaluminium(III)","Potassium trioxalatoaluminate(II)","Potassium trisoxalatoaluminate(III)","Potassium trioxalatoaluminate(III)"],correct:3},
{q:"A magnetic moment of 1.73 BM will be shown by one among the following",options:["TiCl_{4}","[CoCl_{4}]^{2-}","[Cu(NH_{3})_{4}]^{2+}","[Ni(CN)_{4}]^{2-}"],correct:2},
{q:"Crystal field stabilization energy for a high spin d^{5} octahedral complex is",options:["-0.6Δ_{0}","0","2(P-Δ_{0})","2(P+Δ_{0})"],correct:1},
{q:"In which of the following coordination entities will the magnitude of Δ_{0} be maximum?",options:["[Co(CN)_{6}]^{3-}","[Co(C_{2}O_{4})_{3}]^{3-}","[Co(H_{2}O)_{6}]^{3+}","[Co(NH_{3})_{6}]^{3+}"],correct:0},
{q:"Which one of the following will give a pair of enantiomorphs?",options:["[Cr(NH_{3})_{6}][Co(CN)_{6}]","[Co(en)_{2}Cl_{2}]Cl","[Pt(NH_{3})_{4}][PtCl_{4}]","[Co(NH_{3})_{4}Cl_{2}]NO_{2}"],correct:1},
{q:"Which type of isomerism is exhibited by [Pt(NH_{3})_{2}Cl_{2}]?",options:["Coordination isomerism","Linkage isomerism","Optical isomerism","Geometrical isomerism"],correct:3},
{q:"How many geometrical isomers are possible for [Pt(Py)(NH_{3})(Br)(Cl)]?",options:["3","4","0","15"],correct:0},
{q:"Which one of the following pairs represents linkage isomers?",options:["[Cu(NH_{3})_{4}][PtCl_{4}] and [Pt(NH_{3})_{4}][CuCl_{4}]","[Co(NH_{3})_{5}(NO_{2})]SO_{4} and [Co(NH_{3})_{5}(ONO)]SO_{4}","[Co(NH_{3})_{4}(NCS)_{2}]Cl and [Co(NH_{3})_{4}(SCN)_{2}]Cl","Both (b) and (c)"],correct:2},
{q:"Which kind of isomerism is possible for the complex [Co(NH_{3})_{4}Br_{2}]Cl?",options:["Geometrical and ionization","Geometrical and optical","Optical and ionization","Geometrical only"],correct:0},
{q:"Which one of the following complexes is not expected to exhibit isomerism?",options:["[Ni(NH_{3})_{4}(H_{2}O)_{2}]^{2+}","[Pt(NH_{3})_{2}Cl_{2}]","[Co(NH_{3})_{5}SO_{4}]Cl","[Fe(en)_{3}]^{3+}"],correct:3},
{q:"A complex in which the oxidation number of the metal is zero is",options:["K_{4}[Fe(CN)_{6}]","[Fe(CN)_{3}(NH_{3})_{3}]","[Fe(CO)_{5}]","Both (b) and (c)"],correct:2},
{q:"The formula of tris(ethane-1,2-diamine)iron(II) phosphate is",options:["[Fe(CH_{3}-CH(NH_{2})_{2})_{3}](PO_{4})_{3}","[Fe(en)_{3}](PO_{4})_{2}","[Fe(en)_{3}]_{2}(PO_{4})_{3}","[Fe(en)_{3}]_{3}(PO_{4})_{2}"],correct:3},
{q:"Which of the following is paramagnetic in nature?",options:["[Zn(NH_{3})_{4}]^{2+}","[Co(NH_{3})_{6}]^{3+}","[Ni(H_{2}O)_{6}]^{2+}","[Ni(CN)_{4}]^{2-}"],correct:2},
{q:"Fac-mer isomerism is shown by",options:["[Co(en)_{3}]^{3+}","[Co(NH_{3})_{4}Cl_{2}]^{+}","[Co(NH_{3})_{3}Cl_{3}]","[Co(NH_{3})_{5}Cl]SO_{4}"],correct:2},
{q:"Which of the following statements is correct?",options:["Square planar complexes are more stable than octahedral complexes","The spin only magnetic moment of [CuCl_{4}]^{2-} is 1.732 BM and it has a square planar structure","The crystal field splitting energy (Δ_{0}) of [FeF_{6}]^{4-} is higher than that of [Fe(CN)_{6}]^{4-}","The crystal field stabilization energy of [V(H_{2}O)_{6}]^{2+} is higher than the crystal field stabilization of [Ti(H_{2}O)_{6}]^{2+}"],correct:3}
];
const CH6_SOLIDSTATE = [
{q:"Graphite and diamond are",options:["Covalent and molecular crystals","Ionic and covalent crystals","Both covalent crystals","Both molecular crystals"],correct:2},
{q:"An ionic compound A_{x}B_{y} crystallizes in an fcc-type crystal structure with B ions at the centre of each face and A ions occupying the centre of the cube. The correct formula of A_{x}B_{y} is",options:["AB","AB_{3}","A_{3}B","A_{8}B_{6}"],correct:1},
{q:"The ratio of close packed atoms to tetrahedral holes in cubic close packing is",options:["1:1","1:2","2:1","1:4"],correct:1},
{q:"Solid CO_{2} is an example of",options:["Covalent solid","Metallic solid","Molecular solid","Ionic solid"],correct:2},
{q:"Assertion: Monoclinic sulphur is an example of a monoclinic crystal system. Reason: For a monoclinic system, a ≠ b ≠ c and α = γ = 90°, β ≠ 90°.",options:["Both assertion and reason are true and reason is the correct explanation of assertion","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:0},
{q:"In calcium fluoride, having the fluorite structure, the coordination numbers of the Ca^{2+} ion and F^{-} ion are",options:["4 and 2","6 and 6","8 and 4","4 and 8"],correct:2},
{q:"The number of unit cells in 8 g of an element X (atomic mass 40) which crystallizes in a bcc pattern is (N_{A} is the Avogadro number)",options:["6.023 × 10^{23}","6.023 × 10^{22}","60.23 × 10^{23}","0.6023 × 10^{22}"],correct:1},
{q:"In a solid, atom M occupies a ccp lattice and 1/3 of the tetrahedral voids are occupied by atom N. The formula of the solid formed by M and N is",options:["MN","M_{3}N","MN_{3}","M_{3}N_{2}"],correct:3},
{q:"The ionic radii of A^{+} and B^{-} are 0.98 × 10^{-10} m and 1.81 × 10^{-10} m. The coordination number of each ion in AB is",options:["8","2","6","4"],correct:2},
{q:"CsCl has a bcc arrangement; its unit cell edge length is 400 pm. Its inter-atomic (nearest neighbour) distance is",options:["400 pm","800 pm","3 × 100 pm","(√3/2) × 400 pm"],correct:3},
{q:"A solid compound XY has the NaCl structure. If the radius of the cation is 100 pm, the radius of the anion will be",options:["100/0.414 pm","0.732 × 100 pm","100 × 0.414 pm","0.414 pm"],correct:0},
{q:"The vacant space in a bcc lattice unit cell is",options:["48%","23%","32%","26%"],correct:2},
{q:"The radius of an atom is 300 pm. If it crystallizes in a face-centred cubic lattice, the length of the edge of the unit cell is",options:["488.5 pm","848.5 pm","884.5 pm","484.5 pm"],correct:1},
{q:"The fraction of the total volume occupied by the atoms in a simple cubic lattice is",options:["π/4","π/6","π/4√2","π/3√2"],correct:1},
{q:"The yellow colour in an NaCl crystal is due to",options:["Excitation of electrons in F centres","Reflection of light from Cl^{-} ions on the surface","Refraction of light from Na^{+} ions","All of the above"],correct:0},
{q:"If 'a' stands for the edge length of the cubic system (sc, bcc, and fcc), the ratio of the radii of spheres in these systems will respectively be",options:["a/2 : a : 2a","1/2 a : √3 a : 2a","a/2 : √3a/4 : a/(2√2)","1/2 a : √3 a : 1/2 a"],correct:2},
{q:"If 'a' is the length of the side of the cube, the distance between the body-centred atom and a corner atom in the cube will be",options:["(2/3)a","(4/3)a","(3/4)a","(√3/2)a"],correct:3},
{q:"Potassium has a bcc structure with a nearest neighbour distance of 4.52 Å. Its atomic weight is 39. Its density will be",options:["915 kg m^{-3}","2142 kg m^{-3}","452 kg m^{-3}","390 kg m^{-3}"],correct:0},
{q:"Schottky defect in a crystal is observed when",options:["An unequal number of cations and anions are missing from the lattice","An equal number of cations and anions are missing from the lattice","An ion leaves its normal site and occupies an interstitial site","No ion is missing from its lattice"],correct:1},
{q:"The cation leaves its normal position in the crystal and moves to some interstitial position; this defect in the crystal is known as",options:["Schottky defect","F centre","Frenkel defect","Non-stoichiometric defect"],correct:2},
{q:"Assertion: Due to Frenkel defect, the density of the crystalline solid decreases. Reason: In Frenkel defect, the cation and anion leave the crystal.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:3},
{q:"The crystal with a metal deficiency defect is",options:["NaCl","FeO","ZnO","KCl"],correct:1},
{q:"A two-dimensional solid pattern is formed by two different atoms X and Y. The black and white squares represent atoms X and Y respectively. The simplest formula for the compound based on the unit cell is",options:["XY_{8}","X_{4}Y_{9}","XY_{2}","XY_{4}"],correct:0}
];
const CH7_KINETICS = [
{q:"For a first order reaction A → B, the rate constant is x min^{-1}. If the initial concentration of A is 0.01M, the concentration of A after one hour is given by the expression",options:["0.01e^{-x}","1×10^{-2}(1-e^{-60x})","(1×10^{-2})e^{-60x}","None of these"],correct:2},
{q:"A zero order reaction X → Product, with an initial concentration 0.02 M, has a half life of 10 min. If one starts with a concentration of 0.04 M, then the half life is",options:["10 s","5 min","20 min","Cannot be predicted using the given information"],correct:2},
{q:"Among graphs showing the variation of the rate constant with temperature (T) for a reaction, the one that exhibits Arrhenius behaviour over the entire temperature range is the one where",options:["ln k vs T is a straight line with positive slope","ln k vs 1/T is a straight line with negative slope","k vs T is a straight line through the origin","k is independent of T"],correct:1},
{q:"For a first order reaction A → product with initial concentration x mol L^{-1}, the half life period is 2.5 hours. For the same reaction with initial concentration x/2 mol L^{-1}, the half life is",options:["(2.5×2) hours","2.5/2 hours","2.5 hours","Without knowing the rate constant, t_{1/2} cannot be determined"],correct:2},
{q:"For the reaction 2NH_{3} → N_{2} + 3H_{2}, if -d[NH_{3}]/dt = k_{1}[NH_{3}], d[N_{2}]/dt = k_{2}[NH_{3}], d[H_{2}]/dt = k_{3}[NH_{3}], then the relation between k_{1}, k_{2} and k_{3} is",options:["k_{1} = k_{2} = k_{3}","k_{1} = 3k_{2} = 2k_{3}","1.5k_{1} = 3k_{2} = k_{3}","2k_{1} = k_{2} = 3k_{3}"],correct:2},
{q:"The decomposition of phosphine (PH_{3}) on tungsten at low pressure is a first order reaction. It is because",options:["The rate is proportional to the surface coverage","The rate is inversely proportional to the surface coverage","The rate is independent of the surface coverage","The rate of decomposition is slow"],correct:0},
{q:"For a reaction Rate = k[acetone]^{3/2}, the unit of the rate constant and the rate of reaction respectively is",options:["(mol L^{-1}s^{-1}), mol^{-1/2}L^{1/2}s^{-1}","mol^{-1/2}L^{1/2}s^{-1}, (mol L^{-1}s^{-1})","mol^{1/2}L^{1/2}s^{-1}, (mol L^{-1}s^{-1})","(mol L s^{-1}), mol^{1/2}L^{1/2}s"],correct:1},
{q:"The addition of a catalyst during a chemical reaction alters which of the following quantities?",options:["Enthalpy","Activation energy","Entropy","Internal energy"],correct:1},
{q:"Consider the statements: (i) increase in concentration of the reactant increases the rate of a zero order reaction; (ii) rate constant k equals the collision frequency A if E_{a} = 0; (iii) k equals the collision frequency A even when E_{a} ≠ 0; (iv) a plot of ln(k) vs T is a straight line; (v) a plot of ln(k) vs 1/T is a straight line with a positive slope. The correct statement(s) is/are",options:["(ii) only","(ii) and (iv)","(ii) and (v)","(i), (ii) and (v)"],correct:0},
{q:"In a reversible reaction, the enthalpy change and the activation energy in the forward direction are respectively -x kJ mol^{-1} and y kJ mol^{-1}. Therefore, the energy of activation in the backward direction is",options:["(y-x) kJ mol^{-1}","(x+y) J mol^{-1}","(x-y) kJ mol^{-1}","(x+y) × 10^{3} J mol^{-1}"],correct:3},
{q:"What is the activation energy for a reaction if its rate doubles when the temperature is raised from 200 K to 400 K? (R = 8.314 J K^{-1} mol^{-1})",options:["234.65 kJ mol^{-1}","434.65 kJ mol^{-1}","434.65 J mol^{-1}","334.65 J mol^{-1}"],correct:2},
{q:"A reaction follows first order kinetics. The rate constant at a particular temperature is 2.303 × 10^{-2} hour^{-1}. The initial concentration of cyclopropane is 0.25 M. What will be the concentration of cyclopropane after 1806 minutes? (log 2 = 0.3010)",options:["0.125 M","0.215 M","0.25 × 2.303 M","0.05 M"],correct:0},
{q:"For a first order reaction, the rate constant is 6.909 min^{-1}. The time taken for 75% conversion in minutes is",options:["(3/2)log2","(2/3)log2","(3/4)log2","(4/3)log2"],correct:1},
{q:"In a first order reaction X → Y, if k is the rate constant and the initial concentration of the reactant X is 0.1 M, then the half life is",options:["log2/k","0.693/(0.1)k","ln2/k","None of these"],correct:2},
{q:"Predict the rate law of the reaction 2A + B → C + 3D from the data: [A]=0.1,[B]=0.1→rate x; [A]=0.2,[B]=0.1→rate 2x; [A]=0.1,[B]=0.2→rate 4x; [A]=0.2,[B]=0.2→rate 8x",options:["rate = k[A]^{2}[B]","rate = k[A][B]^{2}","rate = k[A][B]","rate = k[A]^{1/2}[B]^{3/2}"],correct:1},
{q:"Assertion: The rate of reaction doubles when the concentration of the reactant is doubled if it is a first order reaction. Reason: The rate constant also doubles.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:2},
{q:"The rate constant of a reaction is 5.8 × 10^{-2} s^{-1}. The order of the reaction is",options:["First order","Zero order","Second order","Third order"],correct:0},
{q:"For the reaction N_{2}O_{5}(g) → 2NO_{2}(g) + (1/2)O_{2}(g), the rate of disappearance of N_{2}O_{5} is 6.5 × 10^{-2} mol L^{-1}s^{-1}. The rates of formation of NO_{2} and O_{2} respectively are",options:["3.5 × 10^{-2} mol L^{-1}s^{-1} and 1.3 × 10^{-2} mol L^{-1}s^{-1}","1.3 × 10^{-2} mol L^{-1}s^{-1} and 3.25 × 10^{-2} mol L^{-1}s^{-1}","1.3 × 10^{-1} mol L^{-1}s^{-1} and 3.25 × 10^{-2} mol L^{-1}s^{-1}","None of these"],correct:2},
{q:"During the decomposition of H_{2}O_{2} to give dioxygen, 48 g O_{2} is formed per minute at a certain point of time. The rate of formation of water at this point is",options:["0.75 mol min^{-1}","1.5 mol min^{-1}","2.25 mol min^{-1}","3.0 mol min^{-1}"],correct:3},
{q:"If the initial concentration of the reactant is doubled, the time for half reaction is also doubled. Then the order of the reaction is",options:["Zero","One","Fraction","None"],correct:0},
{q:"In a homogeneous reaction A → B + C + D, the initial pressure was P_{0} and after time t it was P. The expression for the rate constant in terms of P_{0}, P and t is",options:["k = (2.303/t)log(2P_{0}/(3P_{0}-P))","k = (2.303/t)log(2P_{0}/(P_{0}-P))","k = (2.303/t)log((3P-P_{0})/2P_{0})","k = (2.303/t)log(2P_{0}/(3P_{0}-2P))"],correct:0},
{q:"If 75% of a first order reaction was completed in 60 minutes, 50% of the same reaction under the same conditions would be completed in",options:["20 minutes","30 minutes","35 minutes","75 minutes"],correct:1},
{q:"The half-life period of a radioactive element is 140 days. After 560 days, 1 g of the element will be reduced to",options:["1/2 g","1/4 g","1/8 g","1/16 g"],correct:3},
{q:"The correct difference between first and second order reactions is that",options:["A first order reaction can be catalysed; a second order reaction cannot be catalysed","The half life of a first order reaction does not depend on [A_{0}]; the half life of a second order reaction does depend on [A_{0}]","The rate of a first order reaction does not depend on reactant concentrations, but the rate of a second order reaction does","The rate of a first order reaction depends on reactant concentrations; the rate of a second order reaction does not"],correct:1},
{q:"After 2 hours, a radioactive substance becomes 1/16th of its original amount. The half-life (in minutes) is",options:["60 minutes","120 minutes","30 minutes","15 minutes"],correct:2}
];
const CH8_IONIC = [
{q:"Concentration of the Ag^{+} ions in a saturated solution of Ag_{2}C_{2}O_{4} is 2.24 × 10^{-4} mol L^{-1}. The solubility product of Ag_{2}C_{2}O_{4} is",options:["2.42 × 10^{-8} mol^{3}L^{-3}","2.66 × 10^{-12} mol^{3}L^{-3}","4.5 × 10^{-11} mol^{3}L^{-3}","5.619 × 10^{-12} mol^{3}L^{-3}"],correct:3},
{q:"Four solutions were prepared by mixing different volumes of HCl and NaOH: (i) 60 mL of M/10 HCl + 40 mL of M/10 NaOH; (ii) 55 mL of M/10 HCl + 45 mL of M/10 NaOH; (iii) 75 mL of M/5 HCl + 25 mL of M/5 NaOH; (iv) 100 mL of M/10 HCl + 100 mL of M/10 NaOH. The pH of which one of these will be equal to 1?",options:["(iv)","(i)","(ii)","(iii)"],correct:3},
{q:"The solubility of BaSO_{4} in water is 2.42 × 10^{-3} g L^{-1} at 298K (molar mass of BaSO_{4} = 233 g mol^{-1}). The value of its solubility product (K_{sp}) will be",options:["1.08 × 10^{-14} mol^{2}L^{-2}","1.08 × 10^{-12} mol^{2}L^{-2}","1.08 × 10^{-10} mol^{2}L^{-2}","1.08 × 10^{-8} mol^{2}L^{-2}"],correct:2},
{q:"pH of a saturated solution of Ca(OH)_{2} is 9. The solubility product (K_{sp}) of Ca(OH)_{2} is",options:["0.5 × 10^{-15}","0.25 × 10^{-10}","0.125 × 10^{-15}","0.5 × 10^{-10}"],correct:0},
{q:"Conjugate bases for the Bronsted acids H_{2}O and HF are",options:["OH^{-} and H_{2}F^{+}, respectively","H_{3}O^{+} and F^{-}, respectively","OH^{-} and F^{-}, respectively","H_{3}O^{+} and H_{2}F^{-}, respectively"],correct:2},
{q:"Which will make a basic buffer?",options:["50 mL of 0.1M HCl + 25 mL of 0.1M CH_{3}COOH","100 mL of 0.1M CH_{3}COOH + 100 mL of 0.1M NH_{4}OH","100 mL of 0.1M HCl + 200 mL of 0.1M NH_{4}OH","100 mL of 0.1M HCl + 100 mL of 0.1M NaOH"],correct:2},
{q:"Which of the following fluoro-compounds is most likely to behave as a Lewis base?",options:["BF_{3}","PF_{3}","CF_{4}","SiF_{4}"],correct:1},
{q:"Which of these is not likely to act as a Lewis base?",options:["BF_{3}","PF_{3}","CO","F^{-}"],correct:0},
{q:"The aqueous solutions of sodium formate, anilinium chloride and potassium cyanide are respectively",options:["Acidic, acidic, basic","Basic, acidic, basic","Basic, neutral, basic","None of these"],correct:1},
{q:"The percentage of pyridine (C_{5}H_{5}N) that forms the pyridinium ion (C_{5}H_{5}NH^{+}) in a 0.10 M aqueous pyridine solution (K_{b} for C_{5}H_{5}N = 1.7 × 10^{-9}) is",options:["0.006%","0.013%","0.77%","1.6%"],correct:1},
{q:"Equal volumes of three acid solutions of pH 1, 2 and 3 are mixed in a vessel. What will be the H^{+} ion concentration in the mixture?",options:["3.7 × 10^{-2}","10^{-6}","0.111","None of these"],correct:0},
{q:"The solubility of AgCl(s) with solubility product 1.6 × 10^{-10} in 0.1M NaCl solution would be",options:["1.26 × 10^{-5} M","1.6 × 10^{-9} M","1.6 × 10^{-11} M","Zero"],correct:1},
{q:"If the solubility product of lead iodide is 3.2 × 10^{-8}, its solubility will be",options:["2 × 10^{-3} M","4 × 10^{-4} M","1.6 × 10^{-5} M","1.8 × 10^{-5} M"],correct:0},
{q:"MY and NY_{3} are insoluble salts and have the same K_{sp} value of 6.2 × 10^{-13} at room temperature. Which statement is true regarding MY and NY_{3}?",options:["The salts MY and NY_{3} are more soluble in 0.5M KY than in pure water","The addition of the salt KY to a suspension of MY and NY_{3} will have no effect on their solubilities","The molar solubilities of MY and NY_{3} in water are identical","The molar solubility of MY in water is less than that of NY_{3}"],correct:3},
{q:"What is the pH of the resulting solution when equal volumes of 0.1M NaOH and 0.01M HCl are mixed?",options:["2.0","3","7.0","12.65"],correct:3},
{q:"The dissociation constant of a weak acid is 1 × 10^{-3}. To prepare a buffer solution with pH = 4, the [acid]/[salt] ratio should be",options:["4:3","3:4","10:1","1:10"],correct:3},
{q:"The pH of a 10^{-5} M KOH solution will be",options:["9","5","19","None of these"],correct:0},
{q:"H_{2}PO_{4}^{-} is the conjugate base of",options:["PO_{4}^{3-}","P_{2}O_{5}","H_{3}PO_{4}","HPO_{4}^{2-}"],correct:2},
{q:"Which of the following can act as a Lowry-Bronsted acid as well as base?",options:["HCl","SO_{4}^{2-}","HPO_{4}^{2-}","Br^{-}"],correct:2},
{q:"The pH of an aqueous solution is zero. The solution is",options:["Slightly acidic","Strongly acidic","Neutral","Basic"],correct:1},
{q:"The hydrogen ion concentration of a buffer solution consisting of a weak acid and its salt is given by",options:["[H^{+}] = K_{a}[acid]/[salt]","[H^{+}] = K_{a}[salt]/[acid]","[H^{+}] = K_{a}·[acid]·[salt]","[H^{+}] = K_{a}/([acid][salt])"],correct:0},
{q:"Which of the following relations is correct for the degree of hydrolysis (h) of ammonium acetate?",options:["h = K_{w}/C","h = K_{a}/K_{b}","h = √(K_{w}/(K_{a}K_{b}))","h = K_{a}K_{b}/K_{w}"],correct:2},
{q:"Dissociation constant of NH_{4}OH is 1.8 × 10^{-5}. The hydrolysis constant of NH_{4}Cl would be",options:["1.8 × 10^{-19}","5.55 × 10^{-10}","5.55 × 10^{-5}","1.80 × 10^{-5}"],correct:1}
];
const CH9_ELECTROCHEM = [
{q:"The number of electrons that have a total charge of 9650 coulombs is",options:["6.22 × 10^{23}","6.022 × 10^{24}","6.022 × 10^{22}","6.022 × 10^{-34}"],correct:2},
{q:"Consider the half-cell reactions: Mn^{2+} + 2e^{-} → Mn, E° = -1.18V; Mn^{2+} → Mn^{3+} + e^{-}, E° = -1.51V. The E° for the reaction 3Mn^{2+} → Mn + 2Mn^{3+}, and the possibility of the forward reaction, are respectively",options:["2.69 V and spontaneous","-2.69 V and non-spontaneous","0.33 V and spontaneous","4.18 V and non-spontaneous"],correct:1},
{q:"A button cell used in watches works on: Zn(s) + Ag_{2}O(s) + H_{2}O(l) → 2Ag(s) + Zn^{2+}(aq) + 2OH^{-}(aq), E°_{ox} = 0.76V; Ag_{2}O(s) + H_{2}O(l) + 2e^{-} → 2Ag(s) + 2OH^{-}(aq), E°_{red} = 0.34V. The cell potential will be",options:["0.84 V","1.34 V","1.10 V","0.42 V"],correct:2},
{q:"The molar conductivity of a 0.5 mol dm^{-3} solution of AgNO_{3} with an electrolytic conductivity of 5.76 × 10^{-3} S cm^{-1} at 298 K is",options:["2.88 S cm^{2}mol^{-1}","11.52 S cm^{2}mol^{-1}","0.086 S cm^{2}mol^{-1}","28.8 S cm^{2}mol^{-1}"],correct:1},
{q:"Given the molar conductances at infinite dilution: KCl = 149.9, KNO_{3} = 145.0, HCl = 426.2, NaOAc = 91.0, NaCl = 126.5 (S cm^{2}mol^{-1}). Calculate Λ°(HOAc) using these values.",options:["517.2","552.7","390.7","217.5"],correct:2},
{q:"Faraday's constant is defined as",options:["Charge carried by 1 electron","Charge carried by one mole of electrons","Charge required to deposit one mole of substance","Charge carried by 6.22 × 10^{10} electrons"],correct:1},
{q:"How many faradays of electricity are required for the reaction MnO_{4}^{-} → Mn^{2+} to occur?",options:["5F","3F","1F","7F"],correct:0},
{q:"A current strength of 3.86 A was passed through molten calcium oxide for 41 minutes 40 seconds. The mass of calcium deposited at the cathode is (atomic mass of Ca = 40 g/mol, 1F = 96500 C)",options:["4 g","2 g","8 g","6 g"],correct:1},
{q:"During the electrolysis of molten sodium chloride, the time required to produce 0.1 mole of chlorine gas using a current of 3A is",options:["55 minutes","107.2 minutes","220 minutes","330 minutes"],correct:1},
{q:"The number of electrons delivered at the cathode during electrolysis by a current of 1 A in 60 seconds is (charge of electron = 1.6 × 10^{-19} C)",options:["6.22 × 10^{23}","6.022 × 10^{20}","3.75 × 10^{20}","7.48 × 10^{23}"],correct:2},
{q:"Which of the following electrolytic solutions has the least specific conductance?",options:["2N","0.002N","0.02N","0.2N"],correct:1},
{q:"While charging a lead storage battery",options:["PbSO_{4} on the cathode is reduced to Pb","PbSO_{4} on the anode is oxidised to PbO_{2}","PbSO_{4} on the anode is reduced to Pb","PbSO_{4} on the cathode is oxidised to Pb"],correct:2},
{q:"Among the following cells: (I) Leclanche cell (II) Nickel-Cadmium cell (III) Lead storage battery (IV) Mercury cell — the primary cells are",options:["I and IV","I and III","III and IV","II and III"],correct:0},
{q:"Zinc can be coated on iron to produce galvanized iron but the reverse is not possible. It is because",options:["Zinc is lighter than iron","Zinc has a lower melting point than iron","Zinc has a lower negative electrode potential than iron","Zinc has a higher negative electrode potential than iron"],correct:3},
{q:"Assertion: Pure iron when heated in dry air is converted into a layer of rust. Reason: Rust has the composition Fe_{3}O_{4}.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:3},
{q:"In the H_{2}-O_{2} fuel cell, the reaction that occurs at the cathode is",options:["O_{2}(g) + 2H_{2}O(l) + 4e^{-} → 4OH^{-}(aq)","H^{+}(aq) + OH^{-}(aq) → H_{2}O(l)","2H_{2}(g) + O_{2}(g) → 2H_{2}O(g)","H^{+}(aq) + e^{-} → 1/2 H_{2}(g)"],correct:0},
{q:"The equivalent conductance of an M/36 solution of a weak monobasic acid is 6 mho cm^{2}equivalent^{-1}, and at infinite dilution it is 400 mho cm^{2}equivalent^{-1}. The dissociation constant of this acid is",options:["1.25 × 10^{-6}","6.25 × 10^{-6}","1.25 × 10^{-4}","6.25 × 10^{-5}"],correct:1},
{q:"A conductivity cell was calibrated with a 0.01M, 1:1 electrolytic solution (specific conductance = 1.25 × 10^{-3} S cm^{-1}) and the measured resistance was 800 Ω at 25°C. The cell constant is",options:["10^{-1} cm^{-1}","10^{1} cm^{-1}","1 cm^{-1}","5.7 × 10^{-12}"],correct:2},
{q:"The conductivity of a saturated solution of a sparingly soluble salt AB (1:1 electrolyte) at 298 K is 1.85 × 10^{-5} S m^{-1}. Given Λ°_{m}(AB) = 14 × 10^{-3} S m^{2}mol^{-1}, the solubility product of AB at 298 K is",options:["5.7 × 10^{-12}","1.32 × 10^{-12}","7.5 × 10^{-12}","1.74 × 10^{-12}"],correct:3},
{q:"In the electrochemical cell Zn | ZnSO_{4}(0.01M) || CuSO_{4}(1.0M) | Cu, the emf is E_{1}. When the concentration of ZnSO_{4} is changed to 1.0M and CuSO_{4} to 0.01M, the emf changes to E_{2}. The relationship between E_{1} and E_{2} is",options:["E_{1} < E_{2}","E_{1} > E_{2}","E_{2} ≥ E_{1}","E_{1} = E_{2}"],correct:1},
{q:"Consider the change in oxidation state of bromine corresponding to different emf values (BrO_{4}^{-} → BrO_{3}^{-} → HBrO → Br_{2} → Br^{-}). The species undergoing disproportionation is",options:["Br_{2}","BrO_{4}^{-}","BrO_{3}^{-}","HBrO"],correct:3},
{q:"For the cell reaction 2Fe^{3+}(aq) + 2I^{-}(aq) → 2Fe^{2+}(aq) + I_{2}(aq), E°_{cell} = 0.24 V at 298 K. The standard Gibbs energy (ΔG°) of the cell reaction is",options:["-46.32 kJ mol^{-1}","-23.16 kJ mol^{-1}","46.32 kJ mol^{-1}","23.16 kJ mol^{-1}"],correct:0},
{q:"A certain current liberated 0.504 g of hydrogen in 2 hours. How many grams of copper can be liberated by the same current flowing for the same time through copper sulphate solution?",options:["31.75","15.8","7.5","63.5"],correct:1},
{q:"A gas X at 1 atm is bubbled through a solution containing a mixture of 1M Y^{-} and 1M Z^{-} at 25°C. If the reduction potential of Z > Y > X, then",options:["Y will oxidize X and not Z","Y will oxidize Z and not X","Y will oxidize both X and Z","Y will reduce both X and Z"],correct:0},
{q:"For the cell reaction A + 2B^{+} → A^{2+} + 2B; given A^{2+} + 2e^{-} → A, E° = +0.34 V and log_{10}K = 15.6 at 300 K for the cell reaction, find E° for B^{+} + e^{-} → B.",options:["0.80","1.26","-0.54","-10.94"],correct:0}
];
const CH10_SURFACE = [
{q:"For a Freundlich isotherm, a graph of log(x/m) is plotted against log p. The slope and y-axis intercept respectively correspond to",options:["1/n, k","log(1/n), k","1/n, log k","log(1/n), log k"],correct:2},
{q:"Which of the following is incorrect for physisorption?",options:["Reversible","Increases with increase in temperature","Low heat of adsorption","Increases with increase in surface area"],correct:1},
{q:"Which one of the following characteristics is associated with adsorption?",options:["ΔG and ΔH are negative but ΔS is positive","ΔG and ΔS are negative but ΔH is positive","ΔG is negative but ΔH and ΔS are positive","ΔG, ΔH and ΔS are all negative"],correct:3},
{q:"Fog is a colloidal solution of",options:["Solid in gas","Gas in gas","Liquid in gas","Gas in liquid"],correct:2},
{q:"Assertion: The coagulation power of Al^{3+} is more than Na^{+}. Reason: The greater the valency of the flocculating ion added, the greater its power to cause precipitation.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:0},
{q:"To stop bleeding from an injury, ferric chloride can be applied. Which comment about this is justified?",options:["It is not true; ferric chloride is a poison","It is true; Fe^{3+} ions coagulate blood, which is a negatively charged sol","It is not true; ferric chloride is ionic and gets into the blood stream","It is true; coagulation happens due to a negatively charged sol with Cl^{-}"],correct:1},
{q:"Hair cream is a/an",options:["Gel","Emulsion","Solid sol","Sol"],correct:1},
{q:"Which one of the following is correctly matched?",options:["Emulsion - Smoke","Gel - Butter","Foam - Mist","Whipped cream - Sol"],correct:1},
{q:"The most effective electrolyte for the coagulation of an As_{2}S_{3} sol is",options:["NaCl","Ba(NO_{3})_{2}","K_{3}[Fe(CN)_{6}]","Al_{2}(SO_{4})_{3}"],correct:3},
{q:"Which one of the following is not a surfactant?",options:["CH_{3}(CH_{2})_{15}N^{+}(CH_{3})_{3}Br^{-}","CH_{3}(CH_{2})_{15}NH_{2}","CH_{3}(CH_{2})_{16}CH_{2}OSO_{3}^{-}Na^{+}","OHC(CH_{2})_{14}CH_{2}COO^{-}Na^{+}"],correct:1},
{q:"The phenomenon observed when a beam of light is passed through a colloidal solution is",options:["Cataphoresis","Electrophoresis","Coagulation","Tyndall effect"],correct:3},
{q:"In an electrical field, the particles of a colloidal system move towards the cathode. The coagulation of the same sol is studied using K_{2}SO_{4}(i), Na_{3}PO_{4}(ii), K_{4}[Fe(CN)_{6}](iii) and NaCl(iv). Their coagulating power order should be",options:["II > I > IV > III","III > II > I > IV","I > II > III > IV","None of these"],correct:1},
{q:"Collodion is a 4% solution of which one of the following compounds in an alcohol-ether mixture?",options:["Nitroglycerine","Cellulose acetate","Glycol dinitrate","Nitrocellulose"],correct:3},
{q:"Which one of the following is an example of homogeneous catalysis?",options:["Manufacture of ammonia by Haber's process","Manufacture of sulphuric acid by the contact process","Hydrogenation of oil","Hydrolysis of sucrose in the presence of dilute HCl"],correct:3},
{q:"Match the following: (A) V_{2}O_{5}, (B) Ziegler-Natta catalyst, (C) Peroxide, (D) Finely divided Fe — with the process they catalyse: (i) High density polyethylene, (ii) Polymerisation to PAN, (iii) NH_{3} synthesis, (iv) H_{2}SO_{4} manufacture (contact process). Choose the correct match.",options:["A-iv, B-i, C-ii, D-iii","A-i, B-ii, C-iv, D-iii","A-ii, B-iii, C-iv, D-i","A-iii, B-iv, C-ii, D-i"],correct:0},
{q:"The coagulation values (in millimoles per litre) of electrolytes used for the coagulation of As_{2}S_{3} are: NaCl = 52, BaCl_{2} = 0.69, MgSO_{4} = 0.22. The correct order of their coagulating power is",options:["MgSO_{4} > BaCl_{2} > NaCl","NaCl > BaCl_{2} > MgSO_{4}","NaCl > MgSO_{4} > BaCl_{2}","BaCl_{2} > MgSO_{4} > NaCl"],correct:0},
{q:"Adsorption of a gas on a solid metal surface is spontaneous and exothermic; then",options:["ΔH increases","ΔS increases","ΔG increases","ΔS decreases"],correct:3},
{q:"If x is the amount of adsorbate and m is the amount of adsorbent, which of the following relations is not related to the adsorption process?",options:["x/m = f(P) at constant T","x/m = f(T) at constant P","P = f(T) at constant x/m","x/m = PT"],correct:3},
{q:"On which of the following properties does the coagulating power of an ion depend?",options:["Both the magnitude and sign of the charge on the ion","Size of the ion alone","The magnitude of the charge on the ion alone","The sign of charge on the ion alone"],correct:0},
{q:"Match the following: (A) Pure nitrogen, (B) Haber process, (C) Contact process, (D) Deacon's process — with: (i) Sodium/Barium azide, (ii) Sulphuric acid, (iii) Ammonia, (iv) Chlorine. Choose the correct option.",options:["A-i, B-ii, C-iii, D-iv","A-ii, B-iv, C-i, D-iii","A-iii, B-iv, C-ii, D-i","A-iv, B-iii, C-ii, D-i"],correct:3}
];
const CH11_HYDROXY = [
{q:"An alcohol X gives a blue colour in the Victor Meyer's test. 3.7 g of X, when treated with metallic sodium, liberates 560 mL of hydrogen at 273 K and 1 atm pressure. What is the possible structure of X?",options:["CH_{3}CH(OH)CH_{2}CH_{3}","CH_{3}CH(OH)CH_{3}","(CH_{3})_{3}C-OH","CH_{3}CH_{2}CH(OH)CH_{2}CH_{3}"],correct:0},
{q:"Which of the following compounds on reaction with methyl magnesium bromide will give a tertiary alcohol?",options:["Benzaldehyde","Propanoic acid","Methyl propanoate","Acetaldehyde"],correct:2},
{q:"1-Pentene is treated with (i) B_{2}H_{6} (ii) H_{2}O_{2}/OH^{-}. The anti-Markovnikov product X is",options:["CH_{3}CH_{2}CH_{2}CH_{2}CH_{2}OH","CH_{3}CH_{2}CH_{2}CH(OH)CH_{3}","CH_{3}CH_{2}CH(OH)CH_{2}CH_{3}","(CH_{3})_{2}CHCH_{2}CH_{2}OH"],correct:0},
{q:"In the reaction sequence: Ethane → (Cl_{2}) → A → (H_{2}O) → ethane-1,2-diol, A and the second reagent respectively are",options:["Chloroethane and NaOH","Ethanol and H_{2}SO_{4}","2-chloroethan-1-ol and NaHCO_{3}","Ethanol and H_{2}O"],correct:2},
{q:"Which one of the following is the strongest acid among the substituted phenols?",options:["2-nitrophenol","4-chlorophenol","4-nitrophenol","3-nitrophenol"],correct:2},
{q:"Benzyl alcohol (C_{6}H_{5}CH_{2}OH) on treatment with concentrated H_{2}SO_{4} predominantly gives",options:["Toluene via an unstable carbocation","A stabilized benzylic carbocation leading to substitution/elimination products","Benzoic acid","Benzaldehyde"],correct:1},
{q:"Carbolic acid is",options:["Phenol","Picric acid","Benzoic acid","Phenylacetic acid"],correct:0},
{q:"Which one of the following will react with phenol to give salicylaldehyde after hydrolysis?",options:["Dichloromethane","Trichloroethane","Trichloromethane (CHCl_{3}/NaOH)","CO_{2}"],correct:2},
{q:"(CH_{3})_{3}C-CH(OH)-CH_{3}, on treatment with concentrated H_{2}SO_{4}, gives the major product X, which is",options:["(CH_{3})_{3}C-CH=CH_{2}","(CH_{3})_{2}C=C(CH_{3})_{2}","CH_{2}=C(CH_{3})CH_{2}CH_{2}CH_{3}","CH_{2}=C(CH_{3})CH(CH_{3})CH_{3}"],correct:1},
{q:"The correct IUPAC name of the compound H_{3}C-CH(CH_{3})-CH(CH_{3})-CH(Cl)-CH_{2}OH is",options:["4-chloro-2,3-dimethylpentan-1-ol","2,3-dimethyl-4-chloropentan-1-ol","2,3,4-trimethyl-4-chlorobutan-1-ol","4-chloro-2,3,4-trimethylpentan-1-ol"],correct:0},
{q:"Assertion: Phenol is more acidic than ethanol. Reason: The phenoxide ion is resonance stabilized.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:0},
{q:"In the reaction sequence ethanol → (PCl_{5}) → chloroethane (X) → (alc. KOH) → ethene (Y) → (H_{2}SO_{4}/H_{2}O) → Z, the final product Z is",options:["Ethane","Ethoxyethane","Ethyl bisulphite","Ethanol"],correct:3},
{q:"The reaction: cyclic alcohol + NaOH → sodium alkoxide, then + CH_{3}I → methyl ether, can be classified as",options:["Dehydration","Williamson alcohol synthesis","Williamson ether synthesis","Dehydrogenation of alcohol"],correct:2},
{q:"Isopropylbenzene (cumene) on air oxidation in the presence of dilute acid gives",options:["C_{6}H_{5}COOH","C_{6}H_{5}COCH_{3}","C_{6}H_{5}COC_{6}H_{5}","C_{6}H_{5}OH"],correct:3},
{q:"Assertion: Phenol is more reactive than benzene towards electrophilic substitution. Reason: In phenol, the intermediate arenium ion is more stabilized by resonance.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:0},
{q:"HOCH_{2}CH_{2}OH on heating with periodic acid (HIO_{4}) gives",options:["Methanoic acid","Glyoxal (OHC-CHO)","Methanal (HCHO)","CO_{2}"],correct:2},
{q:"Which of the following compounds can be used as antifreeze in automobile radiators?",options:["Methanol","Ethanol","Neopentyl alcohol","Ethane-1,2-diol"],correct:3},
{q:"The reaction of an alcohol with NaOH followed by CH_{3}I to give the corresponding methyl ether is an example of",options:["Wurtz reaction","A cyclic addition reaction","Williamson ether synthesis","Kolbe's reaction"],correct:2},
{q:"One mole of an organic compound (A) with the formula C_{3}H_{8}O reacts completely with two moles of HI to form X and Y. When Y is boiled with aqueous alkali it forms Z, which answers the iodoform test. The compound (A) is",options:["Propan-2-ol","Propan-1-ol","Ethoxyethane","Methoxyethane"],correct:3},
{q:"Among the following ethers, which one will produce methyl alcohol on treatment with hot HI?",options:["(CH_{3})_{3}C-O-CH_{3}","(CH_{3})_{2}CH-CH_{2}-O-CH_{3}","CH_{3}(CH_{2})_{2}-O-CH_{3}","CH_{3}CH_{2}CH(CH_{3})-O-CH_{3}"],correct:0},
{q:"Williamson synthesis of preparing dimethyl ether is a/an",options:["SN1 reaction","SN2 reaction","Electrophilic addition","Electrophilic substitution"],correct:1},
{q:"On reacting with neutral ferric chloride, phenol gives",options:["Red colour","Violet colour","Dark green colour","No colouration"],correct:1}
];
const CH12_CARBONYL = [
{q:"Cyclohex-2-en-1-one is treated with H_{2} gas (1 atm), Pd/C in ethanol. The correct structure of the product A formed is",options:["Cyclohexanol","Cyclohexanone","Cyclohexene","Phenol"],correct:1},
{q:"The formation of cyanohydrin from acetone is an example of",options:["Nucleophilic substitution","Electrophilic substitution","Electrophilic addition","Nucleophilic addition"],correct:3},
{q:"Reaction of acetone with one of the following reagents involves nucleophilic addition followed by elimination of water. The reagent is",options:["Grignard reagent","Sn/HCl","Hydrazine in the presence of a slightly acidic solution","Hydrocyanic acid"],correct:2},
{q:"HC≡CH is treated with dilute H_{2}SO_{4}/HgSO_{4} to give product X (Kucherov reaction). Product X will not give",options:["Tollens' test","Victor Meyer test","Iodoform test","Fehling's test"],correct:1},
{q:"CH_{2}=CH_{2} is treated with (i) O_{3} (ii) Zn/H_{2}O to give X, which is then treated with NH_{3} to give Y. Y is",options:["Formaldehyde","Diacetone ammonia","Hexamethylenetetramine","An oxime"],correct:2},
{q:"Predict the product Z in the sequence: ethanoic acid → (PCl_{5}) → X → (anhydrous AlCl_{3}, C_{6}H_{6}) → Y → (i) CH_{3}MgBr (ii) H_{3}O^{+} → Z.",options:["(CH_{3})_{2}C(OH)C_{6}H_{5}","CH_{3}CH(OH)C_{6}H_{5}","CH_{3}CH(OH)CH_{2}CH_{3}","C_{6}H_{5}CH_{2}OH"],correct:0},
{q:"Assertion: 2,2-dimethylpropanoic acid does not give the HVZ reaction. Reason: 2,2-dimethylpropanoic acid does not have an α-hydrogen atom.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:0},
{q:"Which of the following represents the correct order of acidity in haloacetic acids?",options:["FCH_{2}COOH > CH_{3}COOH > BrCH_{2}COOH > ClCH_{2}COOH","FCH_{2}COOH > ClCH_{2}COOH > BrCH_{2}COOH > CH_{3}COOH","CH_{3}COOH > ClCH_{2}COOH > FCH_{2}COOH > BrCH_{2}COOH","ClCH_{2}COOH > CH_{3}COOH > BrCH_{2}COOH > ICH_{2}COOH"],correct:1},
{q:"Benzoic acid is treated with (i) NH_{3} (ii) NaOBr to give A, then with NaNO_{2}/HCl to give C. C is",options:["Anilinium chloride","o-Nitroaniline","Benzene diazonium chloride","m-Nitrobenzoic acid"],correct:2},
{q:"Ethanoic acid on reaction with P/Br_{2} gives 2-bromoethanoic acid. This reaction is called",options:["Finkelstein reaction","Haloform reaction","Hell-Volhard-Zelinsky reaction","None of these"],correct:2},
{q:"CH_{3}Br is treated with (A) KCN, then (B) H_{3}O^{+}, then (C) PCl_{5}. Product (C) is",options:["Acetyl chloride","Chloroacetic acid","α-chlorocyanoethanoic acid","None of these"],correct:0},
{q:"Which one of the following reduces Tollens' reagent?",options:["Formic acid","Acetic acid","Benzophenone","None of these"],correct:0},
{q:"Bromobenzene is treated with (i) Mg, ether to give A, then (ii) CO_{2} followed by H_{3}O^{+} to give B. B is",options:["Phenol","Benzoic acid","Benzaldehyde","Acetophenone"],correct:1},
{q:"The IUPAC name of CH_{2}=CH-CH_{2}-COOH is",options:["But-3-enoic acid","But-1-ene-4-oic acid","But-2-ene-1-oic acid","But-3-ene-1-oic acid"],correct:0},
{q:"Identify the product formed when a ketone is treated with N_{2}H_{4}/C_{2}H_{5}ONa (Wolff-Kishner conditions)",options:["The corresponding alcohol","The corresponding amine","The corresponding carboxylic acid","The corresponding methylene (CH_{2}) compound"],correct:3},
{q:"In which case is a chiral carbon not generated by reaction with HCN?",options:["Acetone (a symmetric ketone)","Butan-2-one","Phenyl methyl ketone","Benzaldehyde"],correct:0},
{q:"Assertion: p-N,N-dimethylaminobenzaldehyde undergoes benzoin condensation. Reason: The aldehydic (-CHO) group is meta directing.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:1},
{q:"Which one of the following reactions is an example of a disproportionation reaction?",options:["Aldol condensation","Cannizzaro reaction","Benzoin condensation","None of these"],correct:1},
{q:"Which one of the following undergoes reaction with 50% sodium hydroxide solution to give the corresponding alcohol and acid?",options:["Phenylmethanal","Ethanal","Ethanol","Methanol"],correct:0},
{q:"The reagent used to distinguish between acetaldehyde and benzaldehyde is",options:["Tollens' reagent","Fehling's solution","2,4-dinitrophenylhydrazine","Semicarbazide"],correct:1},
{q:"Phenylmethanal is reacted with concentrated NaOH to give two products X and Y (Cannizzaro reaction). X reacts with metallic sodium to liberate hydrogen. X and Y are",options:["Sodium benzoate and phenol","Sodium benzoate and phenylmethanol","Phenylmethanol and sodium benzoate","None of these"],correct:2},
{q:"In which of the following reactions is a new carbon-carbon bond not formed?",options:["Aldol condensation","Friedel-Crafts reaction","Kolbe's reaction","Wolff-Kishner reduction"],correct:3},
{q:"An alkene A, on reaction with O_{3} and Zn/H_{2}O, gives propanone and ethanal in equimolar ratio (A is 2-methylbut-2-ene). Addition of HCl to A gives B as the major (Markovnikov) product. The structure of B is",options:["ClCH_{2}CH_{2}CH(CH_{3})CH_{2}Cl","CH_{3}CH_{2}CH(Cl)CH_{3}","CH_{3}CH_{2}C(Cl)(CH_{3})_{2}","CH_{3}CH(Cl)CH(CH_{3})_{2}"],correct:2},
{q:"Carboxylic acids have higher boiling points than aldehydes, ketones and even alcohols of comparable molecular mass. It is due to their",options:["More extensive association via van der Waals forces","Formation of a carboxylate ion","Formation of intramolecular H-bonding","Formation of intermolecular H-bonding"],correct:3}
];
const CH13_NITROGEN = [
{q:"Which of the following reagents can be used to convert nitrobenzene to aniline?",options:["Sn/HCl","Zn-Hg/NaOH","LiAlH_{4}","All of these"],correct:0},
{q:"The method by which aniline cannot be prepared is",options:["Degradation of benzamide with Br_{2}/NaOH","Potassium salt of phthalimide treated with chlorobenzene followed by hydrolysis","Hydrolysis of phenylcyanide with acidic solution","Reduction of nitrobenzene by Sn/HCl"],correct:1},
{q:"Which one of the following will not undergo the Hofmann bromamide reaction?",options:["CH_{3}CONHCH_{3}","CH_{3}CH_{2}CONH_{2}","CH_{3}CONH_{2}","C_{6}H_{5}CONH_{2}"],correct:0},
{q:"Assertion: Acetamide on reaction with KOH and bromine gives acetic acid. Reason: Bromine catalyses the hydrolysis of acetamide.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:3},
{q:"In the sequence CH_{3}CH_{2}Br → (aq. NaOH, Δ) A → (KMnO_{4}/H^{+}, Δ) B → (NH_{3}, Δ) C → (Br_{2}/NaOH, Δ) D, D is",options:["Bromomethane","α-bromo sodium acetate","Methanamine","Acetamide"],correct:2},
{q:"Which one of the following nitro compounds does not react with nitrous acid?",options:["CH_{3}-CH_{2}-CH_{2}-NO_{2}","(CH_{3})_{2}CH-CH_{2}NO_{2}","(CH_{3})_{3}C-NO_{2}","CH_{3}-CH(NO_{2})-OCH_{3}"],correct:2},
{q:"Aniline plus benzoyl chloride in the presence of NaOH gives C_{6}H_{5}-NH-COC_{6}H_{5}. This reaction is known as",options:["Friedel-Crafts reaction","HVZ reaction","Schotten-Baumann reaction","None of these"],correct:2},
{q:"The product formed by the reaction of an aldehyde with a primary amine is",options:["Carboxylic acid","Aromatic acid","Schiff's base","Ketone"],correct:2},
{q:"Which of the following reactions is not correct?",options:["CH_{3}CH_{2}NH_{2} + HNO_{2} → CH_{3}CH_{2}OH + N_{2}","(CH_{3})_{2}NH + NaNO_{2}/HCl → (CH_{3})_{2}N-N=O","CH_{3}CONH_{2} + Br_{2}/NaOH → CH_{3}NH_{2}","Aniline + (CH_{3}CO)_{2}O → acetanilide"],correct:1},
{q:"When aniline reacts with acetic anhydride the product formed is",options:["o-aminoacetophenone","m-aminoacetophenone","p-aminoacetophenone","Acetanilide"],correct:3},
{q:"The order of basic strength for methyl-substituted amines in aqueous solution is",options:["N(CH_{3})_{3} > N(CH_{3})_{2}H > N(CH_{3})H_{2} > NH_{3}","N(CH_{3})H_{2} > N(CH_{3})_{2}H > N(CH_{3})_{3} > NH_{3}","NH_{3} > N(CH_{3})H_{2} > N(CH_{3})_{2}H > N(CH_{3})_{3}","N(CH_{3})_{2}H > N(CH_{3})H_{2} > N(CH_{3})_{3} > NH_{3}"],correct:3},
{q:"Benzene diazonium chloride is converted to benzene using reagent A. A is",options:["H_{3}PO_{2} and H_{2}O","H^{+}/H_{2}O","HgSO_{4}/H_{2}SO_{4}","Cu_{2}Cl_{2}"],correct:0},
{q:"In the sequence C_{6}H_{5}NO_{2} → (Fe/HCl) A → (NaNO_{2}/HCl, 273K) B → (H_{2}O, Δ) C, C is",options:["C_{6}H_{5}-OH","C_{6}H_{5}-CH_{2}OH","C_{6}H_{5}-CHO","C_{6}H_{5}NH_{2}"],correct:0},
{q:"Nitrobenzene on reaction with concentrated HNO_{3}/H_{2}SO_{4} at 80-100°C forms which one of the following products?",options:["1,4-dinitrobenzene","2,4,6-trinitrobenzene","1,2-dinitrobenzene","1,3-dinitrobenzene"],correct:3},
{q:"C_{5}H_{13}N reacts with HNO_{2} to give an optically active compound. The compound is",options:["Pentan-1-amine","Pentan-2-amine","N,N-dimethylpropan-2-amine","N-methylbutan-2-amine"],correct:1},
{q:"Secondary nitroalkanes react with nitrous acid to form",options:["A red solution","A blue solution","A green solution","A yellow solution"],correct:1},
{q:"Which of the following amines does not undergo acetylation?",options:["t-butylamine","Ethylamine","Diethylamine","Triethylamine"],correct:3},
{q:"Which one of the following is most basic?",options:["2,4-dichloroaniline","2,4-dimethylaniline","2,4-dinitroaniline","2,4-dibromoaniline"],correct:1},
{q:"When p-nitrosonitrobenzene-type dinitro compound is reduced with Sn/HCl, the pair of compounds formed are",options:["Ethanol, hydroxylamine hydrochloride","Ethanol, ammonium hydroxide","Ethanol, NH_{4}OH","C_{3}H_{5}NH_{2}, H_{2}O"],correct:0},
{q:"The IUPAC name for the amine (CH_{3})_{2}N-C(CH_{3})(C_{2}H_{5})-CH_{2}CH_{3} is",options:["3-Dimethylamino-3-methylpentane","3-(N,N-triethyl)-3-aminopentane","3-N,N-trimethylpentanamine","3-(N,N-dimethylamino)-3-methylpentane"],correct:3},
{q:"Benzonitrile (C_{6}H_{5}CN) is treated with CH_{3}MgBr followed by H_{3}O^{+} to give product P. P is",options:["Benzylamine","Acetophenone (C_{6}H_{5}COCH_{3})","Benzoic acid","Phenylacetamide"],correct:1},
{q:"The ammonium salt of benzoic acid is heated strongly with P_{2}O_{5}, the product is reduced, then treated with NaNO_{2}/HCl at low temperature. The final compound formed is",options:["Benzene diazonium chloride","Benzyl alcohol","Phenol","Nitrosobenzene"],correct:1},
{q:"Ethanamine reacts with CHCl_{3}/KOH to form an isocyanide Y. Hydrolysis of Y with HCl gives back X along with methanoic acid. X is",options:["Ethanamine","Ethanol","Acetamide","Ethanenitrile"],correct:0},
{q:"Among the following, the reaction that proceeds through electrophilic substitution is",options:["Benzene diazonium chloride + AlCl_{3} giving a hydrocarbon and N_{2} loss","Benzene + Cl_{2} with AlCl_{3} giving chlorobenzene and HCl","Cyclohexane + Cl_{2} under UV light giving a substituted product","Ethanol + HCl on heating giving chloroethane and water"],correct:1},
{q:"Phthalic acid reacts with aniline on strong heating to give the major product, which is",options:["N-phenylbenzamide","N-phenylphthalimide","Aniline hydrochloride salt of phthalic acid","Phthalic anhydride"],correct:1}
];
const CH14_BIOMOLECULES = [
{q:"Which one of the following rotates the plane of polarized light towards the left?",options:["D(+) Glucose","L(+) Glucose","D(-) Fructose","D(+) Galactose"],correct:2},
{q:"The correct corresponding order of names of four aldoses with a given Fischer configuration is",options:["L-Erythrose, L-Threose, L-Erythrose, D-Threose","D-Threose, L-Erythrose, L-Threose, L-Erythrose","L-Erythrose, L-Threose, D-Erythrose, D-Threose","D-Erythrose, D-Threose, L-Erythrose, L-Threose"],correct:3},
{q:"Which one given below is a non-reducing sugar?",options:["Glucose","Sucrose","Maltose","Lactose"],correct:1},
{q:"Glucose is treated with (i) HCN, (ii) hydrolysis, (iii) HI + heat, to give compound A. A is",options:["Heptanoic acid","2-Iodohexane","Heptane","Heptanol"],correct:0},
{q:"Assertion: A solution of sucrose in water is dextrorotatory, but on hydrolysis in the presence of a little hydrochloric acid, it becomes laevorotatory. Reason: Sucrose hydrolysis gives unequal amounts of glucose and fructose, causing a change in the sign of rotation.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:0},
{q:"The central dogma of molecular genetics states that genetic information flows from",options:["Amino acids, Protein, DNA","DNA, Carbohydrates, Protein","DNA, RNA, Proteins","DNA, RNA, Carbohydrates"],correct:2},
{q:"In a protein, various amino acids are linked together by a",options:["Peptide bond","Dative bond","α-Glycosidic bond","β-Glycosidic bond"],correct:0},
{q:"Among the following, the achiral amino acid is",options:["2-ethylalanine","2-methylglycine","2-hydroxymethylserine","Tryptophan"],correct:2},
{q:"The correct statement regarding RNA and DNA respectively is",options:["The sugar in RNA is arabinose, in DNA is ribose","The sugar in RNA is 2-deoxyribose, in DNA is arabinose","The sugar in RNA is arabinose, in DNA is 2-deoxyribose","The sugar in RNA is ribose, in DNA is 2-deoxyribose"],correct:3},
{q:"In aqueous solution, amino acids mostly exist as",options:["NH_{2}-CH(R)-COOH","NH_{2}-CH(R)-COO^{-}","H_{3}N^{+}-CH(R)-COOH","H_{3}N^{+}-CH(R)-COO^{-}"],correct:3},
{q:"Which one of the following is not produced by the body?",options:["DNA","Enzymes","Hormones","Vitamins"],correct:3},
{q:"The number of sp^{2} and sp^{3} hybridised carbons in (open-chain) fructose are respectively",options:["1 and 4","4 and 2","5 and 1","1 and 5"],correct:3},
{q:"Vitamin B_{2} is also known as",options:["Riboflavin","Thiamine","Nicotinamide","Pyridoxine"],correct:0},
{q:"The pyrimidine bases present in DNA are",options:["Cytosine and Adenine","Cytosine and Guanine","Cytosine and Thymine","Cytosine and Uracil"],correct:2},
{q:"For L-serine, the pKa of the α-carboxyl group is about 2.13 and that of the α-ammonium group is about 9.05. The isoelectric point (pI) of serine is approximately",options:["2.13","5.59","9.05","11.18"],correct:1},
{q:"The secondary structure of a protein refers to",options:["The fixed configuration of the polypeptide backbone","Hydrophobic interaction","The sequence of α-amino acids","The α-helical backbone"],correct:3},
{q:"Which of the following vitamins is water soluble?",options:["Vitamin E","Vitamin K","Vitamin A","Vitamin B"],correct:3},
{q:"Complete hydrolysis of cellulose gives",options:["L-Glucose","D-Fructose","D-Ribose","D-Glucose"],correct:3},
{q:"Which of the following statements is correct?",options:["Ovalbumin is a simple food reserve in egg-white","Blood proteins thrombin and fibrinogen are involved in blood clotting","Denaturation makes protein more active","Insulin maintains the sugar level in the human body"],correct:1},
{q:"Glucose is an aldose. Which one of the following reactions is not expected with glucose?",options:["It does not form an oxime","It does not react with Grignard reagent","It does not form osazones","It does not reduce Tollens' reagent"],correct:1},
{q:"If one strand of DNA has the sequence 'ATGCTTGA', then the sequence of the complementary strand would be",options:["TACGAACT","TCCGAACT","TACGTACT","TACGCAGT"],correct:0},
{q:"Insulin, a hormone, is chemically a",options:["Fat","Steroid","Protein","Carbohydrate"],correct:2},
{q:"α-D(+)-Glucose and β-D(+)-Glucose are",options:["Epimers","Anomers","Enantiomers","Conformational isomers"],correct:1},
{q:"Which of the following are epimers?",options:["D(+)-Glucose and D(+)-Galactose","D(+)-Glucose and D(+)-Mannose","Neither (a) nor (b)","Both (a) and (b)"],correct:3},
{q:"Which of the following amino acids is achiral?",options:["Alanine","Leucine","Proline","Glycine"],correct:3}
];
const CH15_EVERYDAY = [
{q:"Which of the following is an analgesic?",options:["Streptomycin","Chloromycetin","Aspirin","Penicillin"],correct:2},
{q:"Antiseptics and disinfectants either kill or prevent the growth of microorganisms. Which statement is not true?",options:["Dilute solutions of boric acid and hydrogen peroxide are strong antiseptics","Disinfectants harm living tissues","A 0.2% solution of phenol is an antiseptic while a 1% solution acts as a disinfectant","Chlorine and iodine are used as strong disinfectants"],correct:0},
{q:"Drugs that bind to the receptor site and inhibit its natural function are called",options:["Antagonists","Agonists","Enzymes","Molecular targets"],correct:0},
{q:"Aspirin is a/an",options:["Acetylsalicylic acid","Benzoylsalicylic acid","Chlorobenzoic acid","Anthranilic acid"],correct:0},
{q:"Which one of the following repeating units represents the nylon 6,6 polymer?",options:["-[NH-(CH_{2})_{6}-NH_{2}]_{n}-","-[NH_{2}-(CH_{2})_{6}-NH_{2}]_{n}-","-[HN-(CH_{2})_{6}-COOH]_{n}-","-[OC-(CH_{2})_{4}-CO-NH-(CH_{2})_{6}-NH]_{n}-"],correct:3},
{q:"Natural rubber has",options:["Alternate cis- and trans-configuration","Random cis- and trans-configuration","All cis-configuration","All trans-configuration"],correct:2},
{q:"Nylon is an example of",options:["Polyamide","Polythene","Polyester","Polysaccharide"],correct:0},
{q:"Terylene is an example of",options:["Polyamide","Polythene","Polyester","Polysaccharide"],correct:2},
{q:"Which is the monomer of neoprene?",options:["CH_{2}=C(Cl)-CH=CH_{2}","CH_{2}=CH-C≡CH","CH_{2}=CH-CH=CH_{2}","CH_{2}=C(CH_{3})-CH=CH_{2}"],correct:0},
{q:"Which one of the following is a bio-degradable polymer?",options:["HDPE","PVC","Nylon 6","PHBV"],correct:3},
{q:"Non-stick cookware generally has a coating of a polymer whose monomer is",options:["Ethene","Prop-2-enenitrile","Chloroethene","1,1,2,2-tetrafluoroethene"],correct:3},
{q:"Assertion: 2-methylbuta-1,3-diene (isoprene) is the monomer of natural rubber. Reason: Natural rubber is formed through anionic addition polymerisation.",options:["Both assertion and reason are true and reason is the correct explanation","Both assertion and reason are true but reason is not the correct explanation","Assertion is true but reason is false","Both assertion and reason are false"],correct:2},
{q:"Which of the following is a co-polymer?",options:["Orlon","PVC","Teflon","PHBV"],correct:3},
{q:"The polymer used in making blankets (artificial wool) is",options:["Polystyrene","PAN","Polyester","Polythene"],correct:1},
{q:"Regarding cross-linked or network polymers, which of the following statements is incorrect?",options:["Examples are Bakelite and melamine","They are formed from bi- and tri-functional monomers","They contain covalent bonds between various linear polymer chains","They contain weak covalent bonds in their polymer chain"],correct:3}
];

const CHAPTERS_CHEMISTRY = [
  {id:301, name:"Metallurgy", icon:"⛏️", questions:CH1_METALLURGY, additionalQuestions:[]},
  {id:302, name:"p-Block Elements - I", icon:"🧊", questions:CH2_PBLOCK1, additionalQuestions:[]},
  {id:303, name:"p-Block Elements - II", icon:"🧪", questions:CH3_PBLOCK2, additionalQuestions:[]},
  {id:304, name:"Transition and Inner Transition Elements", icon:"🔶", questions:CH4_TRANSITION, additionalQuestions:[]},
  {id:305, name:"Coordination Chemistry", icon:"🔗", questions:CH5_COORDINATION, additionalQuestions:[]},
  {id:306, name:"Solid State", icon:"🧱", questions:CH6_SOLIDSTATE, additionalQuestions:[]},
  {id:307, name:"Chemical Kinetics", icon:"⏱️", questions:CH7_KINETICS, additionalQuestions:[]},
  {id:308, name:"Ionic Equilibrium", icon:"⚖️", questions:CH8_IONIC, additionalQuestions:[]},
  {id:309, name:"Electro Chemistry", icon:"🔋", questions:CH9_ELECTROCHEM, additionalQuestions:[]},
  {id:310, name:"Surface Chemistry", icon:"🌫️", questions:CH10_SURFACE, additionalQuestions:[]},
  {id:311, name:"Hydroxy Compounds and Ethers", icon:"🧫", questions:CH11_HYDROXY, additionalQuestions:[]},
  {id:312, name:"Carbonyl Compounds and Carboxylic Acids", icon:"🍶", questions:CH12_CARBONYL, additionalQuestions:[]},
  {id:313, name:"Organic Nitrogen Compounds", icon:"💊", questions:CH13_NITROGEN, additionalQuestions:[]},
  {id:314, name:"Biomolecules", icon:"🧬", questions:CH14_BIOMOLECULES, additionalQuestions:[]},
  {id:315, name:"Chemistry in Everyday Life", icon:"🧴", questions:CH15_EVERYDAY, additionalQuestions:[]}
];

const CHAPTERS_PHYSICS = [
  {id:201, name:"Electrostatics", icon:"⚡", questions:PH1_ELECTROSTATICS, additionalQuestions:[]},
  {id:202, name:"Current Electricity", icon:"I", questions:PH2_CURRENT_ELECTRICITY, additionalQuestions:[]},
  {id:203, name:"Magnetism and Magnetic Effects of Electric Current", icon:"🧲", questions:PH3_MAGNETISM, additionalQuestions:[]},
  {id:204, name:"Electromagnetic Induction and Alternating Current", icon:"∿", questions:PH4_EMI_AC, additionalQuestions:[]},
  {id:205, name:"Electromagnetic Waves", icon:"📡", questions:PH5_EM_WAVES, additionalQuestions:[]},
  {id:206, name:"Ray Optics", icon:"🔍", questions:PH6_RAY_OPTICS, additionalQuestions:[]},
  {id:207, name:"Wave Optics", icon:"〜", questions:PH7_WAVE_OPTICS, additionalQuestions:[]},
  {id:208, name:"Dual Nature of Radiation and Matter", icon:"e⁻", questions:PH8_DUAL_NATURE, additionalQuestions:[]},
  {id:209, name:"Atomic and Nuclear Physics", icon:"⚛️", questions:PH9_ATOMIC_NUCLEAR, additionalQuestions:[]},
  {id:210, name:"Electronics and Communication", icon:"💻", questions:PH10_ELECTRONICS, additionalQuestions:[]},
  {id:211, name:"Recent Developments in Physics", icon:"🔬", questions:PH11_RECENT_DEVELOPMENTS, additionalQuestions:[]}
];

/* ================= BIOLOGY QUESTION BANK (12th Std, Book Back 1 Mark PDF - Botany & Zoology) ================= */
const BIO_B_ASEXUALANDSEXUALREPRODUC = [
{q:"Choose the correct statement from the following",options:["Gametes are involved in asexual reproduction","Bacteria reproduce asexually by budding","Conidia formation is a method of sexual reproduction","Yeast reproduce by budding"],correct:3},
{q:"An eminent Indian embryologist is",options:["S.R.Kashyap","P.Maheswari","M.S. Swaminathan","K.C.Mehta"],correct:1},
{q:"Identify the correctly matched pair",options:["Tuber - Allium cepa","Sucker - Pistia","Rhizome - Musa","Stolon - Zingiber"],correct:2},
{q:"Pollen tube was discovered by",options:["J.G.Kolreuter","G.B.Amici","E.Strasburger","E.Hanning"],correct:1},
{q:"Size of pollen grain in Myosotis",options:["10 micrometer","20 micrometer","200 micrometer","2000 micrometer"],correct:0},
{q:"First cell of male gametophyte in angiosperm is",options:["Microspore","megaspore","Nucleus","Primary Endosperm Nucleus"],correct:0},
{q:"Match the following I) External fertilization i) pollen grain II) Androecium ii) anther wall III) Male gametophyte iii) algae IV) Primary parietal layer iv) stamens",options:["I-iv;II-i;III-ii;IV-iii","I-iii;II-iv;III-i;IV-ii","I-iii;II-iv;III-ii,IV-I","I-iii;II-i;III-iv;IV-ii"],correct:1},
{q:"Arrange the layers of anther wall from locus to periphery",options:["Epidermis,middle layers, tapetum, endothecium","Tapetum, middle layers, epidermis, endothecium","Endothecium, epidermis, middle layers, tapetum","Tapetum, middle layers endothecium epidermis"],correct:3},
{q:"Identify the incorrect pair",options:["sporopollenin - exine of pollen grain","tapetum - nutritive tissue for developing microspores","Nucellus - nutritive tissue for developing embryo","obturator - directs the pollen tube into micropyle"],correct:2},
{q:"Assertion : Sporopollenin preserves pollen in fossil deposits Reason : Sporopollenin is resistant to physical and biological decomposition",options:["assertion is true; reason is false","assertion is false; reason is true","Both Assertion and reason are not true","Both Assertion and reason are true."],correct:3},
{q:"Choose the correct statement(s) about tenuinucellate ovule",options:["Sporogenous cell is hypodermal","Ovules have fairly large nucellus","sporogenous cell is epidermal","ovules have single layer of nucellus tissue"],correct:0},
{q:"Which of the following represent megagametophyte",options:["Ovule","Embryo sac","Nucellus","Endosperm"],correct:1},
{q:"In Haplopappus gracilis, number of chromosomes in cells of nucellus is 4. What will be the chromosome number in Primary endosperm cell?",options:["8","12","6","2"],correct:1},
{q:"Transmitting tissue is found in",options:["Micropylar region of ovule","Pollen tube wall","Stylar region of gynoecium","Integument"],correct:2},
{q:"The scar left by funiculus in the seed is",options:["tegmen","radicle","epicotyl","hilum"],correct:3},
{q:"A Plant called X possesses small flower with reduced perianth and versatile anther. The probable agent for pollination would be",options:["water","air","butterflies","beetles"],correct:1},
{q:"Consider the following statement(s) i) In Protandrous flowers pistil matures earlier ii) In Protogynous flowers pistil matures earlier iii) Herkogamy is noticed in unisexual flowers iv) Distyly is present in Primula",options:["i and ii are correct","ii and iv are correct","ii and iii are correct","i and iv are correct"],correct:1},
{q:"Coelorhiza is found in",options:["Paddy","Bean","Pea","Tridax"],correct:0},
{q:"Parthenocarpic fruits lack",options:["Endocarp","Epicarp","Mesocarp","seed"],correct:3},
{q:"In majority of plants pollen is liberated at",options:["1 celled stage","2 celled stage","3 celled stage","4 celled stage"],correct:1},
];

const BIO_B_CLASSICALGENETICS = [
{q:"Extra nuclear inheritance is a consequence of presence of genes in",options:["Mitrochondria and chloroplasts","Endoplasmic reticulum and mitrochondria","Ribosomes and chloroplast","Lysososmes and ribosomes"],correct:0},
{q:"In order to find out the different types of gametes produced by a pea plant having the genotype AaBb, it should be crossed to a plant with the genotype",options:["aaBB","AaBB","AABB","aabb"],correct:3},
{q:"How many different kinds of gametes will be produced by a plant having the genotype AABbCC?",options:["Three","Four","Nine","Two"],correct:1},
{q:"Which one of the following is an example of polygenic inheritance?",options:["Flower colour in Mirabilis Jalapa","Production of male honey bee","Pod shape in garden pea","Skin Colour in humans"],correct:3},
{q:"In Mendel's experiments with garden pea, round seed shape (RR) was dominant over wrinkled seeds (rr), yellow cotyledon (YY) was dominant over green cotyledon (yy). What are the expected phenotypesin the F generation of the cross RRYY x rryy?",options:["Only round seeds with green cotyledons","Only wrinkled seeds with yellow cotyledons","Only wrinkled seeds with green cotyledons","Round seeds with yellow cotyledons an wrinkled seeds with yellow cotyledons"],correct:3},
{q:"Test cross involves",options:["Crossing between two genotypes with recessive trait","Crossing between two F hybrids","Crossing the F hybrid with a double recessive genotype","Crossing between two genotypes with dominant trait"],correct:2},
{q:"In pea plants, yellow seeds are dominant to green. If a heterozygous yellow seed pant is crossed with a green seeded plant, what ratio of yellow and green seeded plants would you expect in F1 generation?",options:["9:1","1:3","3:1","50:50"],correct:3},
{q:"The genotype of a plant showing the dominant phenotype can be determined by",options:["Back cross","Test cross","Dihybrid corss","Pedigree analysis"],correct:1},
{q:"Select the correct statement from the ones given below with respect to dihydrid cross",options:["Tightly linked genes on the same chromosomes show very few combinations","Tightly linked genes on the same chromosomes show higher combinations","Genes far apart on the same chromosomes show very few recombinations","Genes loosely linked on the same chromosomes show similar recombinations as the tightly linked ones"],correct:0},
{q:"Which Mendelian idea is depicted by a cross in which the F generation resembles both the parents",options:["Incomplete dominance","Law of dominance","Inheritance of one gene","Co-dominance"],correct:3},
{q:"Fruit colour in squash is an example of",options:["Recessive epistatsis","Dominant epistasis","Complementary genes","Inhibitory genes"],correct:1},
{q:"In his classic experiments on Pea plants, Mendel did not use",options:["Flowering position","Seed colour","Pod length","Seed shape"],correct:2},
{q:"The epistatic effect, in which the dihybrid cross 9:3:3:1 between AaBb Aabb is modified as",options:["Dominance of one allele on another allele of both loci","Interaction between two alleles of different loci","Dominance of one allele to another alleles of same loci","Interaction between two alleles of some loci"],correct:1},
{q:"In a test cross involving F dihybrid flies, more parental type offspring were produced than the recombination type offspring. This indicates",options:["The two genes are located on two different chromosomes","Chromosomes failed to separate during meiosis","The two genes are linked and present on the some chromosome","Both of the characters are controlled by more than one gene"],correct:2},
{q:"The genes controlling the seven pea characters studied by Mendel are known to be located on how many different chromosomes?",options:["Seven","Six","Five","Four"],correct:0},
{q:"Which of the following explains how progeny can posses the combinations of traits that none of the parent possessed?",options:["Law of segregation","Chromosome theory","Law of independent assortment","Polygenic inheritance"],correct:2},
{q:"\"Gametes are never hybrid\". This is a statement of",options:["Law of dominance","Law of independent assortment","Law of segregation","Law of random fertilization"],correct:2},
{q:"Gene which suppresses other genes activity but does not lie on the same locus is called as",options:["Epistatic","Supplement only","Hypostatic","Codominant"],correct:0},
{q:"Pure tall plants are crossed with pure dwarf plants. In the F1 generation, all plants were tall. These tall plants of F generation were selfed and the ratio of tall to dwarf plants obtained was 3:1. This is called",options:["Dominance","Inheritance","Codominance","Heredity"],correct:0},
{q:"The dominant epistatis ratio is",options:["9:3:3:1","12:3:1","9:3:4","9:6:1"],correct:1},
{q:"Select the period for Mendel's hybridization experiments",options:["1856 - 1863","1850 - 1870","1857 - 1869","1870 - 1877"],correct:0},
{q:"Among the following characters which one was not considered by Mendel in his experimentation pea?",options:["Stem - Tall or dwarf","Trichomal glandular or non-glandular","Seed - Green or yellow","Pod - Inflated or constricted"],correct:1},
];

const BIO_B_CHROMOSOMALBASISOFINHERI = [
{q:"An allohexaploidy contains",options:["Six different genomes","Six copies of three different genomes","Two copies of three different genomes","Six copies of one genome"],correct:2},
{q:"The A and B genes are 10 cM apart on a chromosome. If an AB/ab heterozygote is testcrossed to ab/ab, how many of each progeny class would you expect out of 100 total progeny?",options:["25 AB, 25 ab, 25 Ab, 25 aB","10 AB, 10 ab","45 AB, 45 ab","45 AB, 45 ab, 5 Ab, 5aB"],correct:3},
{q:"Match list I with list II List I List II A. A pair of chromosomes extra with diploid i) monosomy B. One chromosome extra to the diploid ii) tetrasomy C. One chromosome loses from diploid iii) trisomy D. Two individual chromosomes lose from diploid iv) double monosomy",options:["A-i, B-iii, C-ii, D-iv","A-ii, B-iii, C-iv, D-i","A-ii, B-iii, C-i, D-iv","A-iii, B-ii, C-i, D-iv"],correct:2},
{q:"Which of the following sentences are correct? 1. The offspring exhibit only parental combinations due to incomplete linkage 2. The linked genes exhibit some crossing over in complete linkage 3. The separation of two linked genes are possible in incomplete linkage 4. Crossing over is absent in complete linkage",options:["1 and 2","2 and 3","3 and 4","1 and 4"],correct:2},
{q:"Accurate mapping of genes can be done by three point test cross because increases",options:["Possibility of single cross over","Possibility of double cross over","Possibility of multiple cross over","Possibility of recombination frequency"],correct:1},
{q:"Due to incomplete linkage in maize, the ratio of parental and recombinants are",options:["50:50","7:1:1:7","4: 3.6","1:7:7:1"],correct:1},
{q:"Genes G S L H are located on same chromosome. The recombination percentage is between L and G is 15%, S and L is 50%, H and S are 20%. The correct order of genes is",options:["GHSL","SHGL","SGHL","HSLG"],correct:1},
{q:"The point mutation sequence for transition, transition, transversion and transversion in DNA are",options:["A to T, T to A, C to G and G to C","A to G, C to T, C to G and T to A","C to G, A to G, T to A and G to A","G to C, A to T, T to A and C to G"],correct:1},
{q:"If haploid number in a cell is 18. The double monosomic and trisomic number will be",options:["35 and 37","34 and 35","37 and 35","17 and 19"],correct:0},
{q:"Changing the codon AGC to AGA represents",options:["missense mutation","nonsense mutation","frameshift mutation","deletion mutation"],correct:0},
{q:"Assertion (A): Gamma rays are generally use to induce mutation in wheat varieties. Reason (R): Because they carry lower energy to non-ionize electrons from atom",options:["A is correct. R is correct explanation of A","A is correct. R is not correct explanation of A","A is correct. R is wrong explanation of A","A and R is wrong"],correct:2},
{q:"How many map units separate two alleles A and B if the recombination frequency is 0.09?",options:["900 cM","90 cM","9 cM","9 cM"],correct:2},
];

const BIO_B_PRINCIPLESANDPROCESSESOF = [
{q:"Restriction enzymes are",options:["Not always required in genetic engineering","Essential tools in genetic engineering","Nucleases that cleave DNA at specific sites","both b and c"],correct:3},
{q:"Plasmids are",options:["circular protein molecules","required by bacteria","tiny bacteria","confer resistance to antibiotics"],correct:3},
{q:"EcoRI cleaves DNA at",options:["AGGGTT","GTATATC","GAATTC","TATAGC"],correct:2},
{q:"Genetic engineering is",options:["making artificial genes.","hybridization of DNA of one organism to that of the others.","production of alcohol by using micro organisms.","making artificial limbs, diagnostic instruments such as ECG, EEG etc.,"],correct:1},
{q:"Consider the following statements: I. Recombinant DNA technology is popularly known as genetic engineering is a stream of biotechnology which deals with the manipulation of genetic materials by man invitro II. pBR322 is the first artificial cloning vector developed in 1977 by Boliver and Rodriguez from E.coli plasmid III. Restriction enzymes belongs to a class of enzymes called nucleases. Choose the correct option regarding above statements",options:["I & II","I & III","II & III","I,II & III"],correct:3},
{q:"The process of recombinant DNA technology has the following steps I. amplication of the gene II. Insertion of recombinant DNA into the host cells III. Cutting of DNA at specific location using restriction enzyme . IV. Isolation of genetic material (DNA) Pick out the correct sequence of step for recombinant DNA technology.",options:["II, III, IV, I","IV, II, III, I","I, II, III, IV","IV, III, I, II"],correct:3},
{q:"Which one of the following palindromic base sequence in DNA can be easily cut at about the middle by some particular restriction enzymes?",options:["5` CGTTCG 3` 3` ATCGTA 5`","5` GATATG 3` 3` CTACTA 5`","5` GAATTC 3` 3` CTTAAG 5`","5` CACGTA 3` 3` CTCAGT 5`"],correct:2},
{q:"pBR 322, BR stands for",options:["Plasmid Bacterial Recombination","Plasmid Bacterial Replication","Plasmid Boliver and Rodriguez","Plasmid Baltimore and Rodriguez"],correct:2},
{q:"Which of the following one is used as a Biosensors?",options:["Electrophoresis","Bioreactors","Vectors","Electroporation"],correct:1},
{q:"Match the following: Column A (1. Exonuclease, 2. Endonuclease, 3. Alkaline Phosphatase, 4. Ligase) with Column B (a. add or remove phosphate, b. binding the DNA fragments, c. cut the DNA at terminus, d. cut the DNA at middle)",options:["1-a, 2-b, 3-c, 4-d","1-c, 2-d, 3-b, 4-a","1-a, 2-c, 3-b, 4-d","1-c, 2-d, 3-a, 4-b"],correct:3},
{q:"Endonuclease b. binding the DNA fragments 3. Alkaline Phosphatase c. cut the DNA at terminus 4. Ligase d. cut the DNA at middle 1 2 3 4 A) a b c d B) c d b a C) a c b d D) c d a b 11. In which techniques Ethidium Bromide is used?",options:["Southern Blotting techniques","Western Blotting techniques","Polymerase Chain Reaction","Agrose Gel Electroporosis"],correct:3},
{q:"Assertion : Agrobacterium tumifaciens is popular in genetic engineering because this bacteriumis associated with the root nodules of all cereals and pulse crops Reason: A gene incorporated in the bacterial chromosomal genome gets atomatically transferred to the cross with which bacterium is associated.",options:["Both assertion and reason are true. But reason is correct explanation of assertion.","Both assertion and reason are true. But reason is not correct explanation of assertion.","Assertion is true, but reason is false.","Assertion is false, but reason is true. e) Both assertion and reason are false."],correct:3},
{q:"Which one of the following is not correct statement.",options:["Ti plasmid causes the bunchy top disease","Multiple cloning site is known as Polylinker","Non viral method transfection of Nucleic acid in cell","Polylactic acid is a kind of biodegradable and bioactive thermoplastic."],correct:0},
{q:"An analysis of chromosomal DNA using the southern hybridisation technique does not use",options:["Electrophoresis","Blotting","Autoradiography","Polymerase Chain Reaction"],correct:3},
{q:"An antibiotic gene in a vector usually helps in the selection of",options:["Competent cells","Transformed cells","Recombinant cells","None of the above"],correct:0},
{q:"Some of the characteristics of Bt cotton are",options:["Long fibre and resistant to aphids","Medium yield, long fibre and resistant to beetle pests","high yield and production of toxic protein crystals which kill dipteran pests.","High yield and resistant to ball worms"],correct:3},
];

const BIO_B_PLANTTISSUECULTURE = [
{q:"Totipotency refers to",options:["capacity to generate genetically identical plants .","capacity to generate a whole plant from any plant cell / explant.","capacity to generate hybrid protoplasts.","recovery of healthy plants from diseased plants."],correct:0},
{q:"Micro propagation involves",options:["vegetative multiplication of plants by using micro-organisms.","vegetative multiplication of plants by using small explants.","vegetative multiplication of plants by using microspores.","Non-vegetative multiplication of plants by using microspores and megaspores."],correct:1},
{q:"Match the following Column A Column B 1) Totipotency A) Reversion of mature cells into meristerm 2) Dedifferentiation B) Biochemical and structural changes of cells 3) Explant C) Properties of living cells develops into entire plant 4) Differentiation D) Selected plant tissue transferred to culture medium 1 2 3 4",options:["C A D B","A C B D","B A D C","D B C A"],correct:0},
{q:"The time duration for sterilization process by using autoclave is ______ minutes and the temperature is _______",options:["10 to 30 minutes and 125° C","15 to 30 minutes and 121° C","15 to 20 minutes and 125° C","10 to 20 minutes and 121° C"],correct:1},
{q:"Which of the following statement is correct",options:["Agar is not extracted from marine algae such as seaweeds.","Callus undergoes differentiation and produces somatic embryoids.","Surface sterilization of explants is done by using mercuric bromide","PH of the culture medium is 5.0 to 6.0"],correct:1},
{q:"Select the incorrect statement from given statement",options:["A tonic used for cardiac arrest is obtained from Digitalis purpuria","Medicine used to treat Rheumatic pain is extracted from Capsicum annum","An anti malarial drug is isolated from Cinchona officinalis.","Anti-cancinogenic property is not seen in Catharanthus roseus."],correct:3},
{q:"Virus free plants are developed from",options:["Organ culture","Meristem culture","Protoplast culture","Cell suspension culture"],correct:1},
{q:"The prevention of large scale loss of biological interity",options:["Biopatent","Bioethics","Biosafety","Biofuel"],correct:2},
{q:"Cryopreservation means it is a process to preserve plant cells, tissues or organs",options:["at very low temperature by using ether.","at very high temperature by using liquid nitrogen","at very low temperature of -196 by using liquid nitrogen","at very low temperature by using liquid nitrogen"],correct:2},
{q:"Solidifying agent used in plant tissue culture is",options:["Nicotinic acid","Cobaltous chloride","EDTA","Agar"],correct:3},
];

const BIO_B_PRINCIPLESOFECOLOGY = [
{q:"Arrange the correct sequence of ecological hierarchy starting from lower to higher level.",options:["Individual organism → Population Landscape → Ecosystem","Landscape → Ecosystem → Biome → Biosphere","community → Ecosystem → Landscape → Biome","Population → organism → Biome → Landscape"],correct:2},
{q:"Ecology is the study of an individual species is called i) Community ecology ii) Autecology iii) Species ecology iv) Synecology",options:["i only","ii only","i and iv only","ii and iii only"],correct:3},
{q:"A specific place in an ecosystem, where an organism lives and performs its functions is",options:["habitat","niche","landscape","biome"],correct:1},
{q:"Read the given statements and select the correct option. i) Hydrophytes possess aerenchyma to support themselves in water. ii) Seeds of Viscum are positively photoblastic as they germinate only in presence of light. iii) Hygroscopic water is the only soil water available to roots of plant growing in soil as it is present inside the micropores. iv) High temperature reduces use of water and solute absorption by roots.",options:["i, ii, and iii only","ii, iii and iv","ii and iii only","i and ii only"],correct:3},
{q:"Which of the given plant produces cardiac glycosides?",options:["Calotropis","Acacia","Nepenthes","Utricularia"],correct:0},
{q:"Read the given statements and select the correct option. i) Loamy soil is best suited for plant growth as it contains a mixture of silt, sand and clay. ii) The process of humification is slow in case of organic remains containing a large amount of lignin and cellulose. iii) Capillary water is the only water available to plant roots as it is present inside the micropores. iv) Leaves of shade plant have more total chlorophyll per reaction centre, low ratio of chl a and chl b are usually thinner leaves.",options:["i, ii and iii only","ii, iii and iv only","i, ii and iv only","ii and iii only"],correct:2},
{q:"Read the given statements and select the correct option. Statement A : Cattle do not graze on weeds of Calotropis. Statement B : Calotropis have thorns and spines, as defense against herbivores.",options:["Both statements A and B are incorrect.","Statement A is correct but statement B is incorrect.","Both statements A and B are correct but statement B is not the correct explanation of statement A.","Both statements A and B are correct and statement B is the correct explanation of statement A."],correct:1},
{q:"In soil water available for plants is",options:["gravitational water","chemically bound water","capillary water","hygroscopic water"],correct:2},
{q:"Read the following statements and fill up the blanks with correct option. i) Total soil water content in soil is called _________________ ii) Soil water not available to plants is called _________________ iii) Soil water available to plants is called _________________ (i) (ii) (iii)",options:["Holard Echard Chresard","Echard Holard Chresard","Chresard Echard Holard","Holard Chresard Echard"],correct:0},
{q:"Column I represent the size of the soil particles and Column II represents type of soil components. Which of the following is correct match for the Column I and Column IL Column - I Column - II I). 0.2 to 2.00 mm i) Slit soil II) Less than 0.002 mm ii) Clayey soil III) 0.002 to 0.02 mm iii) Sandy soil IV) 0.002 to 0.2 mm iv) Loamy soil I II III IV",options:["ii iii iv I","iv i iii Ii","iii ii i iv","None of these"],correct:2},
{q:"The plant of this group are adapted to live partly in water and partly above substratum and free from water",options:["Xerophytes","Mesophytes","Hydrophytes","Halophytes"],correct:3},
{q:"Ophrys an orchid resembling the female of an insect so as to able to get pollinated is due to phenomenon of",options:["Myrmecophily","Ecological equivalents","Mimicry","None of these"],correct:2},
{q:"A free living nitrogen fixing cyanobacterium which can also form symbiotic association with the water fern Azolla",options:["Nostoc","Anabaena","chlorella","Rhizobium"],correct:1},
{q:"Pedogenesis refers to",options:["Fossils","Water","Population","Soil"],correct:3},
{q:"Mycorrhiza promotes plant growth by",options:["Serving as a plant growth regulators","Absorbing inorganic ions from soil","Helping the plant in utilizing atmospheric nitrogen","Protecting the plant from infection"],correct:1},
{q:"Which of the following plant has a non-succulent xerophytic and thick leathery leaves with waxy coating",options:["Bryophyllum","Ruscus","Nerium","Calotropis"],correct:1},
{q:"In a fresh water environment like pond, rooted autotrophs are",options:["Nymphaea and typha","Ceratophyllum and Utricularia","Wolffia and pistia","Azolla and lemna"],correct:0},
{q:"Match the following and choose the correct combination from the options given below: Column I (Interaction) Column II (Examples) I. Mutualism i). Trichoderma and Penicillium II. Commensalism ii). Balanophora, Orobanche III. Parasitism iii). Orchids and Ferns IV. Predation iv). Lichen and Mycorrhiza V. Amensalism v). Nepenthes and Diaonaea I II III IV V",options:["i ii iii iv v","ii iii iv v i","iii iv v i ii","iv iii ii v i"],correct:3},
{q:"Strong, sharp spines that get attached to animal's feet are found in the fruits of",options:["Argemone","Ecballium","Heritier","Crossandra"],correct:1},
{q:"Sticky glands of Boerhaavia and Cleome support",options:["Anemochory","Zoochory","Autochory","Hydrochory"],correct:1},
{q:"Identify the A, B, C and D in the given table of interactions: Mutualism (species X: A, species Y: +); (species X: +, species Y: -); Competition (species X: -, species Y: C); D (species X: -, species Y: 0)",options:["A=(+), B=Parasitism, C=(-), D=Amensalism","A=(-), B=Mutualism, C=(+), D=Competition","A=(+), B=Competition, C=(0), D=Mutualism","A=(0), B=Amensalism, C=(+), D=Parasitism"],correct:0},
];

const BIO_B_ECOSYSTEM = [
{q:"Which of the following is not a abiotic component of the ecosystem?",options:["Bacteria","Humus","Organic compounds","Inorganic compounds"],correct:0},
{q:"Which of the following is / are not a natural ecosystem?",options:["Forest ecosystem","Rice field","Grassland ecosystem","Desert ecosystem"],correct:1},
{q:"Pond is a type of",options:["forest ecosystem","grassland ecosystem","marine ecosystem","fresh water ecosystem"],correct:3},
{q:"Pond ecosystem is",options:["not self sufficient and self regulating","partially self sufficient and self regulating","self sufficient and not self regulating","self sufficient and self regulating"],correct:3},
{q:"Profundal zone is predominated by heterotrophs in a pond ecosystem, because of",options:["with effective light penetration","no effective light penetration","complete absence of light","a and b"],correct:1},
{q:"Solar energy used by green plants for photosynthesis is only",options:["2 - 8%","2 - 10%","3 - 10%","2 - 9%"],correct:1},
{q:"Which of the following ecosystem has the highest primary productivity?",options:["Pond ecosystem","Lake ecosystem","Grassland ecosystem","Forest ecosystem"],correct:3},
{q:"Ecosystem consists of",options:["decomposers","producers","consumers","all of the above"],correct:3},
{q:"Which one is in descending order of a food chain",options:["Producers → Secondary consumers → Primary consumers → Tertiary consumers","Tertiary consumers → Primary consumers → Secondary consumers → Producers","Tertiary consumers → Secondary consumers → Primary consumers → Producers","Tertiary consumers → Producers → Primary consumers → Secondary consumers"],correct:2},
{q:"Significance of food web is / are",options:["it does not maintain stability in nature","it shows patterns of energy transfer","it explains species interaction","b and c"],correct:3},
{q:"The following diagram represents",options:["pyramid of number in a grassland ecosystem","pyramid of number in a pond ecosystem","pyramid of number in a forest ecosystem","pyramid of biomass in a pond ecosystem"],correct:2},
{q:"Which of the following is / are not the mechanism of decomposition",options:["Eluviation","Catabolism","Anabolism","Fragmentation"],correct:2},
{q:"Which of the following is not a sedimentary cycle",options:["Nitrogen cycle","Phosphorous cycle","Sulphur cycle","Calcium cycle"],correct:3},
{q:"Which of the following are not regulating services of ecosystem services i) Genetic resources ii) Recreation and aesthetic values iii) Invasion resistance iv) Climatic regulation",options:["i and iii","ii and iv","i and ii","i and iv"],correct:0},
];

const BIO_B_ENVIRONMENTALISSUES = [
{q:"Which of the following would most likely help to slow down the greenhouse effect.",options:["Converting tropical forests into grazing land for cattle.","Ensuring that all excess paper packaging is buried to ashes.","Redesigning landfill dumps to allow methane to be collected.","Promoting the use of private rather than public transport."],correct:2},
{q:"With respect to Eichhornia Statement A: It drains off oxygen from water and is seen growing in standing water. Statement B: It is an indigenous species of our country.",options:["Statement A is correct and Statement B is wrong.","Both Statements A and B are correct.","Statement A is correct and Statement B is wrong.","Both statements A and B are wrong."],correct:0},
{q:"Find the wrongly matched pair.",options:["Endemism - Species confined to a region and not found anywhere else.","Hotspots - Western ghats","Ex-situ Conservation - Zoological parks","Sacred groves - Saintri hills of Rajasthan e) Alien sp. of India - Water hyacinth"],correct:2},
{q:"Depletion of which gas in the atmosphere can lead to an increased incidence of skin cancer?",options:["Ammonia","Methane","Nitrous oxide","Ozone"],correct:3},
{q:"One green house gas contributes 14% of total global warming and another contributes 6%. These are respectively identified as",options:["N 0 and CO","CFCs and N 0 2 2 2","CH and CO","CH and CFCS 4 2 4"],correct:1},
{q:"One of the chief reasons among the following for the depletion in the number of species making endangered is",options:["over hunting and poaching","green house effect","competition and predation","habitat destruction"],correct:3},
{q:"Deforestation means",options:["growing plants and trees in an area where there is no forest","growing plants and trees in an area where the forest is removed","growing plants and trees in a pond","removal of plants and trees"],correct:3},
{q:"Deforestation does not lead to",options:["Quick nutrient cycling","soil erosion","alternation of local weather conditions","Destruction of natural habitat weather conditions"],correct:0},
{q:"The unit for measuring ozone thickness",options:["Joule","Kilos","Dobson","Watt"],correct:2},
{q:"People's movement for the protection of environment in Sirsi of Karnataka is",options:["Chipko movement","Amirtha Devi Bishwas movement","Appiko movement","None of the above"],correct:2},
{q:"The plants which are grown in silivpasture system are",options:["Sesbania and Acacia","Solenum and Crotalaria","Clitoria and Begonia","Teak and sandal"],correct:0},
];

const BIO_B_PLANTBREEDING = [
{q:"Assertion: Genetic variation provides the raw material for selection Reason: Genetic variations are differences in genotypes of the individuals.",options:["Assertion is right and reason is wrong.","Assertion is wrong and reason is right.","Both reason and assertion is right.","Both reason and assertion is wrong."],correct:2},
{q:"While studying the history of domestication of various cultivated plants _______ were recognized earlier",options:["Centres of origin","Centres of domestication","Centres of hybrid","Centres of variation"],correct:0},
{q:"Pick out the odd pair.",options:["Mass selection - Morphological characters","Purline selection - Repeated self pollination","Clonal selection - Sexually propagated","Natural selection - Involves nature"],correct:2},
{q:"Match Column I with Column II Column I Column II i) William S. Gaud I) Heterosis ii) Shull II) Mutation breeding iii) Cotton Mather III) Green revolution iv) Muller and Stadler IV) Natural hybridization",options:["i - I, ii - II, iii - III, iv - IV","i - III, ii - I, iii - IV, iv - II","i - IV, ii - II, iii - I, iv - IV","i - II, ii - IV, iii - III, iv - I"],correct:1},
{q:"The quickest method of plant breeding is",options:["Introduction","Selection","Hybridization","Mutation breeding"],correct:1},
{q:"Desired improved variety of economically useful crops are raised by",options:["Natural Selection","hybridization","mutation","biofertilisers"],correct:1},
{q:"Plants having similar genotypes produced by plant breeding are called",options:["clone","haploid","autopolyploid","genome"],correct:0},
{q:"Importing better varieties and plant environment is called",options:["cloning","heterosis","selection","introduction"],correct:0},
{q:"Dwarfing gene of wheat is",options:["pal 1","Atomita 1","Norin 10","pelita 2"],correct:2},
{q:"Crosses between the plants of the same variety are called",options:["interspecific","inter varietal","intra varietal","inter generic"],correct:2},
{q:"Progeny obtained as a result of repeat self pollination a cross pollinated crop to called",options:["pure line","pedigree line","inbreed line","heterosis"],correct:2},
{q:"Jaya and Ratna are the semi dwarf varieties of",options:["wheat","rice","cowpea","mustard"],correct:1},
{q:"Which one of the following are the species that are crossed to give sugarcane varieties with high sugar, high yield, thick stems and ability to grow in the sugarcane belt of North India?",options:["Saccharum robustum and Saccharum officinarum","Saccharum barberi and Saccharum officinarum","Saccharum sinense and Saccharum officinarum","Saccharum barberi and Saccharum robustum"],correct:1},
{q:"Match column I (crop) with column II (Corresponding disease resistant variety) and select the correct option from the given codes. Column I Column II I) Cowpea i) Himgiri II) Wheat ii) Pusa komal III) Chilli iii) Pusa Sadabahar IV) Brassica iv) Pusa Swarnim I II III IV",options:["iv iii ii i","ii i iii iv","ii iv i iii","i iii iv ii"],correct:1},
{q:"A wheat variety, Atlas 66 which has been used as a donor for improving cultivated wheat, which is rich in",options:["iron","carbohydrates","proteins","vitamins"],correct:2},
{q:"Which one of the following correct matches with its resistance to a disease?",options:["Pusa Komal - Bacterial blight","Pusa Sadabahar - White rust","Pusa Shubhra - Chilli mosaic virus","Brassica - Pusa swarnim"],correct:0},
{q:"Which of the following is incorrectly paired?",options:["Wheat - Himgiri","Milch breed - Sahiwal","Rice - Ratna","Pusa Komal - Brassica"],correct:3},
{q:"Match List I (Biofertilizer) with List II (Organisms): i) Free living N2 fixer, ii) Symbiotic N2 fixer, iii) P Solubilizing, iv) P Mobilizing — a) Aspergillus, b) Amanita, c) Anabaena azollae, d) Azotobacter",options:["i-c, ii-a, iii-b, iv-d","i-d, ii-c, iii-a, iv-b","i-a, ii-c, iii-b, iv-d","i-b, ii-a, iii-d, iv-c"],correct:1},
];

const BIO_B_ECONOMICALLYUSEFULPLANTS = [
{q:"Consider the following statements and choose the right option. i) Cereals are members of grass family. ii) Most of the food grains come from monocotyledon.",options:["(i) is correct and (ii) is wrong","Both (i) and (ii) are correct","(i) is wrong and (ii) is correct","Both (i) and (ii) are wrong"],correct:1},
{q:"Assertion: Vegetables are important part of healthy eating. Reason: Vegetables are succulent structures of plants with pleasant aroma and flavours.",options:["Assertion is correct, Reason is wrong","Assertion is wrong, Reason is correct","Both are correct and reason is the correct explanation for assertion.","Both are correct and reason is not the correct explanation for assertion."],correct:0},
{q:"Groundnut is native of _____________",options:["Philippines","India","North America","Brazil"],correct:3},
{q:"Statement A: Coffee contains caffeine Statement B: Drinking coffee enhances cancer",options:["A is correct, B is wrong","A and B - Both are correct","A is wrong, B is correct","A and B - Both are wrong"],correct:0},
{q:"Tectona grandis is coming under family",options:["Lamiaceae","Fabaceae","Dipterocaipaceae","Ebenaceae"],correct:0},
{q:"Tamarindus indica is indigenous to",options:["Tropical African region","South India, Sri Lanka","South America, Greece","India alone"],correct:0},
{q:"New world species of cotton",options:["Gossipium arboretum","G.herbaceum","Both a and b","G.barbadense"],correct:3},
{q:"Assertion: Turmeric fights various kinds of cancer Reason: Curcumin is an anti-oxidant present in turmeric",options:["Assertion is correct, Reason is wrong","Assertion is wrong, Reason is correct","Both are correct","Both are wrong"],correct:2},
{q:"Find out the correctly matched pair.",options:["Rubber Shorea robusta","Dye Lawsonia inermis","Timber Cyperus papyrus","Pulp Hevea brasiliensis"],correct:1},
{q:"Observe the following statements and pick out the right option from the following: Statement I - Perfumes are manufactured from essential oils. Statement II - Essential oils are formed at different parts of the plants.",options:["Statement I is correct","Statement II is correct","Both statements are correct","Both statements are wrong"],correct:2},
{q:"Observe the following statements and pick out the right option from the following: Statement I: The drug sources of Siddha include plants, animal parts, ores and minerals. Statement II: Minerals are used for preparing drugs with long shelf-life.",options:["Statement I is correct","Statement II is correct","Both statements are correct","Both statements are wrong"],correct:1},
{q:"The active principle trans-tetra hydro canabial is present in",options:["Opium","Curcuma","Marijuana","Andrographis"],correct:2},
{q:"Which one of the following matches is correct?",options:["Palmyra - Native of Brazil","Saccharun - Abundant in Kanyakumari","Steveocide - Natural sweetener","Palmyra sap - Fermented to give ethanol"],correct:2},
{q:"The only cereal that has originated and domesticated from the New world.",options:["Oryza sativa","Triticum asetumn","Triticum duram","Zea mays 12th Standard - BIO ZOOLOGY NEW BOOK"],correct:3},
];

const BIO_Z_REPRODUCTIONINORGANISMS = [
{q:"In which type of parthenogenesis are only males produced?",options:["Arrhenotoky","Thelytoky","Amphitoky","Both a and b"],correct:0},
{q:"Animals giving birth to young ones:",options:["Oviparous","Oviviviparous","Viviparous","Both a and b"],correct:2},
{q:"The mode of reproduction in bacteria is by",options:["Formation of gametes","Endospore formation","Conjugation","Zoospore formation"],correct:2},
{q:"In which mode of reproduction variations are seen",options:["Asexual","Parthenogenesis","Sexual","Both a and b"],correct:2},
{q:"Assertion: In bee society, all the members are diploid except drones. Reason: Drones are produced by parthenogenesis.",options:["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is not the correct explanation of A","A is true but R is false","Both A and R are false"],correct:0},
{q:"Assertion: Offsprings produced by asexual reproduction are genetically identical to the parent. Reason: Asexual reproduction involves only mitosis and no meiosis.",options:["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is not the correct explanation of A","A is true but R is false","Both A and R are false"],correct:0},
{q:"Assertion: Viviparous animals give better protection to their offsprings. Reason: They lay their eggs in the safe places of the environment.",options:["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is not the correct explanation of A","A is true but R is false","Both A and R are false"],correct:3},
];

const BIO_Z_HUMANREPRODUCTION = [
{q:"The mature sperms are stored in the",options:["Seminiferous tubules","Vas deferens","Epididymis","Seminal vesicle"],correct:2},
{q:"The male sex hormone testosterone is secreted from",options:["Sertoli cells","Leydig cell","Epididymis","Prostate gland"],correct:1},
{q:"The glandular accessory organ which produces the largest proportion of semen is",options:["Seminal vesicle","Bulbourethral gland","Prostate gland","Mucous gland"],correct:0},
{q:"The male homologue of the female clitoris is",options:["Scrotum","Penis","Urethra","Testis"],correct:1},
{q:"The site of embryo implantation is the",options:["Uterus","Peritoneal cavity","Vagina","Fallopian tube"],correct:0},
{q:"The foetal membrane that forms the basis of the umbilical cord is",options:["Allantois","Amnion","Chorion","Yolk sac"],correct:0},
{q:"The most important hormone in intiating and maintaining lactation after birth is",options:["Oestrogen","FSH","Prolactin","Oxytocin"],correct:2},
{q:"Mammalian egg is",options:["Mesolecithal and non cleidoic","Microlecithal and non cleidoic","Alecithal and non cleidoic","Alecithal and cleidoic"],correct:2},
{q:"The process which the sperm undergoes before penetrating the ovum is",options:["Spermiation","Cortical reaction","Spermiogenesis","Capacitation"],correct:3},
{q:"The milk secreted by the mammary glands soon after child birth is called",options:["Mucous","Colostrum","Lactose","Sucrose"],correct:1},
{q:"Colostrum is rich in",options:["Ig E","Ig A","Ig D","Ig M"],correct:1},
{q:"The Androgen Binding Protein (ABP) is produced by",options:["Leydig cells","Hypothalamus","Sertoli cells","Pituitary gland"],correct:2},
{q:"Which one of the following menstrual irregularities is correctly matched?",options:["Menorrhagia - excessive menstruation","Amenorrhoea - absence of menstruation","Dysmenorrhoea - irregularity of menstruation","Oligomenorrhoea - painful menstruation"],correct:1},
{q:"Find the wrongly matched pair",options:["Bleeding phase - fall in oestrogen and progesterone","Follicular phase - rise in oestrogen","Luteal phase - rise in FSH level","Ovulatory phase - LH surge"],correct:2},
{q:"A - In human male, testes are extra abdominal and lie in scrotal sacs. R - Scrotum acts as thermoregulator and keeps temperature lower by 2°C for normal sperm production.",options:["A and R are true, R is the correct explanation of A","A and R are true, R is not the correct explanation of A","A is true, R is false","Both A and R are false"],correct:0},
{q:"A - Ovulation is the release of ovum from the Graafian follicle. R - It occurs during the follicular phase of the menstrual cycle.",options:["A and R are true, R is the correct explanation of A","A and R are true, R is not the correct explanation of A","A is true, R is false","Both A and R are false"],correct:2},
{q:"A - Head of the sperm consists of acrosome and mitochondria. R - Acrosome contains spiral rows of mitochondria.",options:["A and R are true, R is the correct explanation of A","A and R are true, R is not the correct explanation of A","A is true, R is false","Both A and R are false"],correct:3},
];

const BIO_Z_REPRODUCTIVEHEALTH = [
{q:"Which of the following is correct regarding HIV, hepatitis B, gonorrhoea and trichomoniasis?",options:["Gonorrhoea is a STD whereas others are not.","Trichomoniasis is a viral disease whereas others are bacterial.","HIV is a pathogen whereas others are diseases.","Hepatitis B is eradicated completely whereas others are not."],correct:2},
{q:"Which one of the following groups includes sexually transmitted diseases caused by bacteria only?",options:["Syphilis, gonorrhoea and candidiasis","Syphilis, chlamydiasis and gonorrhoea","Syphilis, gonorrhoea and trichomoniasis","Syphilis, trichomoniasis and pediculosis"],correct:1},
{q:"Identify the correct statements from the following",options:["Chlamydiasis is a viral disease.","Gonorrhoea is caused by a spirochaete bacterium, Treponema palladium.","The incubation period for syphilis is 2 to 14 days in males and 7 to 21 days in females.","Both syphilis and gonorrhoea are easily cured with antibiotics."],correct:3},
{q:"A contraceptive pill prevents ovulation by",options:["blocking fallopian tube","inhibiting release of FSH and LH","stimulating release of FSH and LH","causing immediate degeneration of released ovum."],correct:1},
{q:"The approach which does not give the defined action of contraceptive is",options:["Hormonal contraceptive Prevents entry of sperms, prevent ovulation and fertilization","Vasectomy Prevents spermatogenesis","Barrier method Prevents fertilization","Intra uterine device Increases phagocytosis of sperms, suppresses sperm motility and fertilizing capacity of sperms"],correct:1},
{q:"Read the given statements and select the correct option. Statement 1: Diaphragms, cervical caps and vaults are made of rubber and are inserted into the female reproductive tract to cover the cervix before coitus. Statement 2: They are chemical barriers of conception and are reusable.",options:["Both statements 1 and 2 are correct and statement 2 is the correct explanation of statement 1.","Both statements 1 and 2 are correct but statement 2 is not the correct explanation of statement 1.","Statement 1 is correct but statement 2 is incorrect.","Both statements 1 and 2 are incorrect."],correct:2},
{q:"Match column I with column II and select the correct option from the codes given below. Column I Column II A. Copper releasing IUD (i) LNG-20 B. Hormone releasing (ii) Lippes loop IUD C. Non medicated IUD (iii) Saheli D. Mini pills (iv) Multiload-375",options:["A-(iv), B-(ii), C-(i), D-(iii)","A-(iv), B-(i), C-(iii), D-(ii)","A-(i), B-(iv), C-(ii), D-(iii)","A-(iv), B-(i), C-(ii), D-(iii)"],correct:3},
{q:"Select the incorrect action of hormonal contraceptive pills from the following",options:["Inhibition of spermatogenesis.","Inhibition of ovulation.","Changes in cervical mucus impairing its ability to allow passage and transport of sperms.","Alteration in uterine endometrium to make it unsuitable for implantation."],correct:0},
];

const BIO_Z_PRINCIPLESOFINHERITANCEA = [
{q:"Haemophilia is more common in males because it is a",options:["Recessive character carried by Y-chromosome","Dominant character carried by Y-chromosome","Dominant trait carried by X-chromosome","Recessive trait carried by X-chromosome"],correct:3},
{q:"ABO blood group in man is controlled by",options:["Multiple alleles","Lethal genes","Sex linked genes","Y-linked genes"],correct:0},
{q:"Three children of a family have blood groups A, AB and B. What could be the genotypes of their parents? IA IB IA IO IB IO",options:["and ii","and IB IB IA IA IA IA","and","and ii"],correct:1},
{q:"Which of the following is not correct?",options:["Three or more alleles of a trait in the population are called multiple alleles.","A normal gene undergoes mutations to form many alleles","Multiple alleles map at different loci of a chromosome","A diploid organism has only two alleles out of many in the population"],correct:2},
{q:"Which of the following phenotypes in the progeny are possible from the parental combination AxB?",options:["A and B only","A,B and AB only","AB only","A,B,AB and O"],correct:3},
{q:"Which of the following phenotypes is not possible in the progeny of the parental genotypic combination IAIO IAIB x ?",options:["AB","O","A","B"],correct:1},
{q:"Which of the following is true about Rh factor in the offspring of a parental combination DdXDd (both Rh positive)?",options:["All will be Rh-positive","Half will be Rh positive","About ¾ will be Rh negative","About one fourth will be Rh negative"],correct:3},
{q:"What can be the blood group of offspring when both parents have AB blood group?",options:["AB only","A, B and AB","A, B, AB and O","A and B only"],correct:1},
{q:"If the child's blood group is 'O' and father's blood group is 'A' and mother's blood group is 'B', the genotype of the parents will be",options:["IA IA and IB IO","IA IO and IB IO","IA IO and IO IO","IO IO and IB IB"],correct:1},
{q:"XO type of sex determination and XY type of sex determination are examples of",options:["Male heterogamety","Female heterogamety","Male homogamety","Both (b) and (c)"],correct:0},
{q:"In an accident there is great loss of blood and there is no time to analyse the blood group which blood can be safely transferred?",options:["'O' and Rh negative","'O' and Rh positive","'B' and Rh negative","'AB' and Rh positive"],correct:0},
{q:"Father of a child is colourblind and mother is carrier for colourblindness, the probability of the child being colourblind is",options:["25%","50%","100%","75%"],correct:1},
{q:"A marriage between a colourblind man and a normal woman produces",options:["All carrier daughters and normal sons","50% carrier daughters, 50% normal daughters","50% colourblind sons, 50% normal sons","All carrier offsprings"],correct:0},
{q:"Mangolism is a genetic disorder which is caused by the presence of an extra chromosome number",options:["20","21","4","23"],correct:1},
{q:"Klinefelters' syndrome is characterized by a karyotype of",options:["XYY","XO","XXX","XXY"],correct:3},
{q:"Females with Turners' syndrome have",options:["Small uterus","Rudimentary ovaries","Underdeveloped breasts","All of these"],correct:3},
{q:"Pataus' syndrome is also referred to as",options:["13-Trisomy","18-Trisormy","21-Trisormy","None of these"],correct:0},
{q:"Who is the founder of Modern Eugenics movement?",options:["Mendel","Darwin","Fransis Galton","Karl pearson"],correct:2},
{q:"Improvement of human race by encouraging the healthy persons to marry early and produce large number of children is called",options:["Positive eugenics","Negative eugenics","Positive euthenics","Positive euphenics"],correct:0},
{q:"The _______deals with the control of several inherited human diseases especially inborn errors of metabolism",options:["Euphenics","Eugenics","Euthenics","All of these"],correct:0},
{q:"\"Universal Donor\" and \"Universal Recipients\" blood group are _____and_______respectively",options:["AB, O","O, AB","A, B","B, A"],correct:1},
{q:"ZW-ZZ system of sex determination occurs in",options:["Fishes","Reptiles","Birds","All of these"],correct:3},
{q:"Co-dominant blood group is",options:["A","AB","B","O"],correct:1},
{q:"Which of the following is incorrect regarding ZW-ZZ type of sex determination?",options:["It occurs in birds and some reptiles","Females are homogametic and males are heterogametic","Male produce two types of gametes","It occurs in gypsy moth"],correct:1},
];

const BIO_Z_MOLECULARGENETICS = [
{q:"Hershey and Chase experiment with bacteriophage showed that",options:["Protein gets into the bacterial cells","DNA is the genetic material","DNA contains radioactive sulphur","Viruses undergo transformation"],correct:1},
{q:"DNA and RNA are similar with respect to",options:["Thymine as a nitrogen base","A single-stranded helix shape","Nucleotide containing sugars, nitrogen bases and phosphates","The same sequence of nucleotides for the amino acid phenyl alanine"],correct:2},
{q:"A mRNA molecule is produced by",options:["Replication","Transcription","Duplication","Translation"],correct:1},
{q:"The total number of nitrogenous bases in human genome is estimated to be about",options:["5 million","35000","35 million","1 billion"],correct:3},
{q:"E. coli cell grown on 15N medium are transferred to 14N medium and allowed to grow for two generations. DNA extracted from these cells is ultracentrifuged in a cesium chloride density gradient. What density distribution of DNA would you expect in this experiment?",options:["One high and one low density band.","One intermediate density band.","One high and one intermediate density band.","One low and one intermediate density band."],correct:3},
{q:"What is the basis for the difference in the synthesis of the leading and lagging strand of DNA molecules?",options:["Origin of replication occurs only at the 5' end of the molecules.","DNA ligase works only in the 3' → 5' direction.","DNA polymerase can join new nucleotides only to the 3' end of the growing stand.","Helicases and single-strand binding proteins that work at the 5' end."],correct:2},
{q:"Which of the following is the correct sequence of event with reference to the central dogma?",options:["Transcription, Translation, Replication","Transcription, Replication, Translation","Duplication, Translation, Transcription","Replication, Transcription, Translation"],correct:3},
{q:"Which of the following statements about DNA replication is not correct?",options:["Unwinding of DNA molecule occurs as hydrogen bonds break.","Replication occurs as each base is paired with another exactly like it.","Process is known as semi conservative replication because one old strand is conserved in the new molecule.","Complementary base pairs are held together with hydrogen bonds."],correct:1},
{q:"Which of the following statements is not true about DNA replication in eukaryotes?",options:["Replication begins at a single origin of replication.","Replication is bidirectional from the origins.","Replication occurs at about 1 million base pairs per minute.","There are numerous different bacterial chromosomes, with replication ocurring in each at the same time."],correct:3},
{q:"The first codon to be deciphered was __________ which codes for ________.",options:["AAA, proline","GGG, alanine","UUU, Phenylalanine","TTT, arginine"],correct:2},
{q:"Meselson and Stahl's experiment proved",options:["Transduction","Transformation","DNA is the genetic material","Semi-conservative nature of DNA replication"],correct:3},
{q:"When lactose is present in the culture medium:",options:["Transcription of lac y, lac z, lac a genes occurs.","Repressor is unable to bind to the operator.","Repressor is able to bind to the operator.","Both (a) and (b) are correct."],correct:3},
{q:"Ribosomes are composed of two subunits; the smaller subunit of a ribosome has a binding site for _________ and the larger subunit has two binding sites for two __________.",options:["mRNA and tRNA","tRNA and mRNA","rRNA and mRNA","DNA and RNA"],correct:0},
{q:"An operon is a:",options:["Protein that suppresses gene expression","Protein that accelerates gene expression","Cluster of structural genes with related function","Gene that switches other genes on or off"],correct:2},
];

const BIO_Z_EVOLUTION = [
{q:"The first life on earth originated",options:["in air","on land","in water","on mountain"],correct:2},
{q:"Who published the book \"Origin of species by Natural Selection\" in 1859?",options:["Charles Darwin","Lamarck","Weismann","Hugo de Vries"],correct:0},
{q:"Which of the following was the contribution of Hugo de Vries?",options:["Theory of mutation","Theory of natural Selection","Theory of inheritance of acquired characters","Germplasm theory"],correct:0},
{q:"The wings of birds and butterflies is an example of",options:["Adaptive radiation","convergent evolution","divergent evolution","variation"],correct:1},
{q:"The phenomenon of \" Industrial Melanism\" demonstrates",options:["Natural selection","induced mutation","reproductive isolation","geographical isolation"],correct:0},
{q:"Darwin's finches are an excellent example of",options:["connecting links","seasonal migration","adaptive radiation","parasitism"],correct:2},
{q:"Who proposed the Germplasm theory?",options:["Darwin","August Weismann","Lamarck","Alfred Wallace"],correct:1},
{q:"The age of fossils can be determined by",options:["electron microscope","weighing the fossils","carbon dating","analysis of bones"],correct:2},
{q:"Fossils are generally found in",options:["igneous rocks","metamorphic rocks","volcanic rocks","sedimentary rocks"],correct:3},
{q:"Evolutionary history of an organism is called",options:["ancestry","ontogeny","phylogeny","paleontology"],correct:2},
{q:"The golden age of reptiles was",options:["Mesozoic era","Cenozoic era","Paleozoic era","Proterozoic era"],correct:0},
{q:"Which period was called \"Age of fishes\"?",options:["Permian","Triassic","Devonian","Ordovician"],correct:2},
{q:"Modern man belongs to which period?",options:["Quaternary","Cretaceous","Silurian","Cambrian"],correct:0},
{q:"The Neanderthal man had the brain capacity of",options:["650 - 800cc","1200cc","900cc","1400cc"],correct:3},
];

const BIO_Z_HUMANHEALTHANDDISEASES = [
{q:"A 30 year old woman has bleedy diarrhoea for the past 14 hours, which one of the following organisms is likely to cause this illness?",options:["Streptococcus pyogens","Clostridium difficile","Shigella dysenteriae","Salmonella enteritidis"],correct:2},
{q:"Exo-erythrocytic schizogony of Plasmodium takes place in -------",options:["RBC","Leucocytes","Stomach","Liver"],correct:3},
{q:"The sporozoites of Plasmodium vivax are formed from ------------",options:["Gametocytes","Sporoblasts","Oocysts","Spores"],correct:2},
{q:"Amphetamines are stimulants of the CNS, whereas barbiturates are ----",options:["CNS stimulant","both a and b","hallucinogenic","CNS depressants"],correct:3},
{q:"Choose the correctly match pair.",options:["Amphetamines - Stimulant","LSD - Narcotic","Heroin - Psychotropic","Benzodiazepine - Pain killer"],correct:0},
{q:"The Athlete's foot disease in human is caused by-------",options:["Bacteria","Fungi","Virus","Protozoan"],correct:1},
{q:"Cirrhosis of liver is caused by chronic intake of ------",options:["Opium","Alcohol","Tobacco","Cocaine"],correct:1},
{q:"The sporozoite of the malarial parasite is present in ----",options:["saliva of infected female Anopheles mosquito.","RBC of human suffering from malaria.","Spleen of infected humans.","Gut of female Anopheles mosquito."],correct:0},
{q:"Paratope is an",options:["Antibody binding site on variable regions","Antibody binding site on heavy regions","Antigen binding site on variable regions","Antigen binding site on heavy regions"],correct:2},
{q:"Allergy involves",options:["IgE","IgG","lgA","IgM"],correct:0},
{q:"Spread of cancerous cells to distant sites is termed as",options:["Metastasis","Oncogenes","Proto-oncogenes","Malignant neoplasm"],correct:0},
{q:"AIDS virus has",options:["Single stranded RNA","Double stranded RNA","Single stranded DNA","Double stranded DNA"],correct:0},
{q:"B cells that produce and release large amounts of antibody are called",options:["Memory cells","Basophils","Plasma cells","killer cells"],correct:2},
];

const BIO_Z_MICROBESINHUMANWELFARE = [
{q:"Which of the following microorganism is used for production of citric acid in industries?",options:["Lactobacillus bulgaris","Penicillium citrinum","Aspergillus niger","Rhizopus nigricans"],correct:2},
{q:"Which of the following pair is correctly matched for the product produced by them?",options:["Acetobacter aceti - Antibiotics","Methanobacterium - Lactic acid","Penicilium notatum - Acetic acid","Saccharomyces cerevisiae - Ethanol"],correct:3},
{q:"The most common substrate used in distilleries for the production of ethanol is_________",options:["Soyameal","Groundgram","Molasses","Corn meal"],correct:2},
{q:"Cry toxins obtained from Bacillus thuringiensis are effective against for______",options:["Mosquitoes","Flies","Nematodes","Bollworms"],correct:3},
{q:"Cyclosporin - A is an immunosuppressive drug produced from _______",options:["Aspergillus niger","Manascus purpureus","Penicillium notatum","Trichoderma polysporum"],correct:3},
{q:"Which of the following bacteria is used extensively as a bio-pesticide?",options:["Bacillus thurigiensis","Bacillus subtilis","Lactobacillus acidophilus","Streptococcus lactis"],correct:0},
{q:"Which of the following is not involved in nitrogen fixation?",options:["Pseudomonas","Azotobacter","Anabaena","Nostac"],correct:0},
{q:"CO is not released during",options:["Alcoholic fermentation","Lactate fermentation","Aerobic respiration in animals","Aerobic respiration in plants"],correct:1},
{q:"The purpose of biological treatment of waste water is to _______",options:["Reduce BOD","Increase BOD","Reduce sedimentation","Increase sedimentation"],correct:0},
{q:"The gases produced in anaerobic sludge digesters are",options:["Methane, oxygen and hydrogen sulphide.","Hydrogen sulphide, methane and sulphur dioxide.","Hydrogen sulphide, nitrogen and methane.","Methane, hydrogen sulphide and CO ."],correct:3},
];

const BIO_Z_APPLICATIONSOFBIOTECHNOL = [
{q:"The first clinical gene therapy was done for the treatment of",options:["AIDS","Cancer","Cystic fibrosis","SCID"],correct:2},
{q:"Dolly, the sheep was obtained by a technique known as",options:["Cloning by gene transfer","Cloning without the help of gametes","Cloning by tissue culture of somatic cells","Cloning by nuclear transfer."],correct:3},
{q:"The genetic defect adenosine deaminase deficiency may be cured permanently by",options:["Enzyme replacement therapy","periodic infusion of genetically engineered lymphocytes having ADA cDNA","administering adenosine deaminase activators","introducing bone marrow cells producing ADA into embryo at an early stage of development."],correct:0},
{q:"How many amino acids are arranged in the two chains of Insulin?",options:["Chain A has 12 and Chain B has 13","Chain A has 21 and Chain B has 30 amino acids","Chain A has 20 and chain B has 30 amino acids","Chain A has 12 and chain B has 20 amino acids."],correct:1},
{q:"PCR proceeds in three distinct steps governed by temperature, they are in order of",options:["Denaturation, Annealing, Synthesis","Synthesis, Annealing, Denaturation","Annealing, Synthesis, Denaturation","Denaturation, Synthesis, Annealing"],correct:0},
{q:"Which one of the following statements is true regarding DNA polymerase used in PCR?",options:["It is used to ligate introduced DNA in recipient cells","It serves as a selectable marker","It is isolated from a Virus","It remains active at a high temperature."],correct:3},
{q:"ELISA is mainly used for",options:["Detection of mutations","Detection of pathogens","Selecting animals having desired traits","Selecting plants having desired traits"],correct:1},
{q:"Transgenic animals are those which have",options:["Foreign DNA in some of their cells","Foreign DNA in all their cells","Foreign RNA in some of their cells","Foreign RNA in all their cells"],correct:1},
{q:"Recombinant Factor VIII is produced in the ------- cells of the Chinese Hamster",options:["Liver cells","blood cells","ovarian cells","brain cells."],correct:2},
{q:"Vaccines that use components of a pathogenic organism rather than the whole organism are called",options:["Subunit recombinant vaccines","attenuated recombinant vaccines","DNA vaccines","conventional vaccines."],correct:0},
];

const BIO_Z_ORGANISMSANDPOPULATION = [
{q:"All populations in a given physical area are defined as",options:["Biome","Ecosystem","Territory","Biotic factors"],correct:0},
{q:"Organisms which can survive a wide range of temperatuer are called",options:["Ectotherms","Eurytherms","Endotherms","Stenotherms"],correct:1},
{q:"The interaction in nature, where one gets benefit on the expense of other is...",options:["Predation","Mutualism","Amensalism","Commensalism"],correct:3},
{q:"Predation and parasitism are which type of interactions?",options:["(+,+)","(+, O)","( -, -)","(+, -)"],correct:3},
{q:"Competition between species leads to",options:["Extinction","Mutation","Amensalism","Symbiosis"],correct:0},
{q:"Which of the following is an r-species",options:["Human","Insects","Rhinoceros","Whale"],correct:1},
{q:"Match the following and choose the correct combination from the options given below. Column I Column II A. Mutalism 1. Lion and deer B. Commensalism 2. Round worm and man C. Parasitism 3. Birds compete with squirrels for nuts D. Competition 4. Sea anemone on hermit crab E. Predation 5. Bernacles attached to Whales. Dispersal",options:["A- 4, B-5, C-2, D -3, E-1","A- 3, B-1, C-4, D - 2, E-5","A- 2, B-3, C-1, D - 5, E-4","A- 5, B-4, C-2, D - 3, E-1"],correct:0},
{q:"The figure given below is a diagrammatic representation of response of organisms to abiotic factors. What do A, B and C represent respectively. S.No. A B C",options:["Conformer Regulator Partial Regulator","Regulator Partial Regulator Conformer","Partial Regulator Regulator Conformer","Regulator Conformer Partial Regulator"],correct:0},
{q:"The relationship between sucker fish and shark is...........",options:["Competition","Commensalism","Predation","Parasitism."],correct:1},
{q:"What type of human population is represented by the following age pyramid?",options:["Vanishing population","Stable population","Declining population","Expanding population"],correct:1},
{q:"Which of the following is correct for r-selected species",options:["Large number of progeny with small size","large number of progeny with large size","small number of progeny with small size","small number of progeny with large size"],correct:0},
{q:"Animals that can move from fresh water to sea called as.....",options:["Stenothermal","Eurythermal","Catadromous","Anadromous"],correct:2},
{q:"Some organisms are able to maintain homeostasis by physical means ...",options:["Conform","Regulate","Migrate","Suspend."],correct:1},
];

const BIO_Z_BIODIVERSITYANDITSCONSER = [
{q:"Which of the following region has maximum biodiversity",options:["Taiga","Tropical forest","Temperate rain forest","Mangroves"],correct:1},
{q:"Conservation of biodiversity within their natural habitat is",options:["Insitu conservation","Exsitu conservation","In vivo conservation","In vitro conservation"],correct:0},
{q:"Which one of the following is not coming under insitu conservation",options:["Sanctuaries","Natural parks","Zoological park","Biosphere reserve"],correct:2},
{q:"Which of the following is considered a hotspots of biodiversity in India",options:["Western ghats","Indo-gangetic plain","Eastern Himalayas","A and C"],correct:3},
{q:"The organization which published the red list of species is",options:["WWF","IUCN","ZSI","UNEP"],correct:1},
{q:"Who introduced the term biodiversity?",options:["Edward Wilson","Walter Rosen","Norman Myers","Alice Norman"],correct:1},
{q:"Which of the following forests is known as the lungs of the planet earth?",options:["Tundra forest","Rain forest of north east India","Taiga forest","Amazon rain forest"],correct:1},
{q:"Which one of the following are at high risk extinction due to habitat destruction",options:["Mammals","Birds","Amphibians","Echinoderms"],correct:2},
{q:"Assertion: The Environmental conditions of the tropics are favourable for speciation and diversity of organisms. Reason: The climate seasons, temperature, humidity and photoperiod are more or less stable and congenial.",options:["Both Assertion and Reason are true and Reason explains Assertion correctly.","Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.","Assertion is true , but Reason is false.","Both Assertion and Reason are false."],correct:0},
];

const BIO_Z_ENVIRONMENTALISSUESZOOLO = [
{q:"Right to Clean Water is a fundamental right, under the Indian Constitution",options:["Article 12","Article 21","Article 31","Article 41"],correct:1},
{q:"With which of the following, the Agenda 21' of Rio Summit, 1992 is related to?",options:["Sustainable development","Combating the consequences of population","Mitigation norms of Green House Gases (GHGs) emission.","Technology transfer mechanism to developing countries for 'clean-energy' production."],correct:0},
{q:"Which among the following awards instituted by the Government of India for individuals or communities from rural areas that have shown extraordinary courage and dedication in protecting Wildlife?",options:["Indira Gandhi Paryavaran Puraskar","Medini Puruskar Yojana","Amrita Devi Bishnoi Award","Pitambar Pant National Award"],correct:2},
{q:"The 'thickness' of Stratospheric Ozone layer is measured in/on:",options:["Sieverts units","Dobson units","Melson units","Beaufort Scale"],correct:1},
{q:"Which among the following is the most abundant Green-House-Gas (GHG) in the earth's atmosphere?",options:["Carbon dioxide","Water Vapour","Sulphur Dioxide","Tropospheric Ozone"],correct:1},
{q:"As per 2017 statistics, the highest per capita emitter of Carbon dioxide in the world is",options:["USA","China","Qatar","Saudi Arabia"],correct:1},
{q:"The use of microorganism metabolism to remove pollutants such as oil spills in the water bodies is known as",options:["Biomagnification","Bioremediation","Biomethanation","Bioreduction"],correct:1},
{q:"The Ozone Day is observed every year on September 16 as on this day in 1987 the ___________was signed for launching efforts to arrest the depletion of the fragile ozone layer in the stratosphere that prevents the harmful ultra-violet rays of the sun from reaching the earth. Fill the correct word in blank.",options:["Montreal Protocol","Geneva Protocol","Kyoto Protocol","Nagoya Protocol"],correct:0},
{q:"Which among the following always decreases in a Food chain across tropic levels?",options:["Number","Accumulated chemicals","Energy","Force"],correct:2},
{q:"In the E-waste generated by the Mobile Phones, which among the following metal is most abundant?",options:["Copper","Silver","Palladium","Gold"],correct:0},
{q:"The Hydrochlorofluorocarbons (HCFCs) are the compounds which have the following molecules:",options:["Hydrogen","Carbon","Chlorine","Fluorine"],correct:2},
{q:"SMOG is derived from :",options:["Smoke","Fog","Both A and B","Only A"],correct:2},
{q:"Excess of fluoride in drinking water causes:",options:["Lung disease","Intestinal infection","Fluorosis","None of the above"],correct:2},
];

const CHAPTERS_BIOLOGY = [
  {id:601, name:"Botany: Asexual and Sexual Reproduction in Plants", icon:"🌱", questions:BIO_B_ASEXUALANDSEXUALREPRODUC, additionalQuestions:[]},
  {id:602, name:"Botany: Classical Genetics", icon:"🧬", questions:BIO_B_CLASSICALGENETICS, additionalQuestions:[]},
  {id:603, name:"Botany: Chromosomal Basis of Inheritance", icon:"🧬", questions:BIO_B_CHROMOSOMALBASISOFINHERI, additionalQuestions:[]},
  {id:604, name:"Botany: Principles and Processes of Biotechnology", icon:"🧪", questions:BIO_B_PRINCIPLESANDPROCESSESOF, additionalQuestions:[]},
  {id:605, name:"Botany: Plant Tissue Culture", icon:"🌿", questions:BIO_B_PLANTTISSUECULTURE, additionalQuestions:[]},
  {id:606, name:"Botany: Principles of Ecology", icon:"🌎", questions:BIO_B_PRINCIPLESOFECOLOGY, additionalQuestions:[]},
  {id:607, name:"Botany: Ecosystem", icon:"♻️", questions:BIO_B_ECOSYSTEM, additionalQuestions:[]},
  {id:608, name:"Botany: Environmental Issues", icon:"🌍", questions:BIO_B_ENVIRONMENTALISSUES, additionalQuestions:[]},
  {id:609, name:"Botany: Plant Breeding", icon:"🌾", questions:BIO_B_PLANTBREEDING, additionalQuestions:[]},
  {id:610, name:"Botany: Economically Useful Plants and Entrepreneurial Botany", icon:"💰", questions:BIO_B_ECONOMICALLYUSEFULPLANTS, additionalQuestions:[]},
  {id:611, name:"Zoology: Reproduction in Organisms", icon:"🐣", questions:BIO_Z_REPRODUCTIONINORGANISMS, additionalQuestions:[]},
  {id:612, name:"Zoology: Human Reproduction", icon:"👶", questions:BIO_Z_HUMANREPRODUCTION, additionalQuestions:[]},
  {id:613, name:"Zoology: Reproductive Health", icon:"❤️", questions:BIO_Z_REPRODUCTIVEHEALTH, additionalQuestions:[]},
  {id:614, name:"Zoology: Principles of Inheritance and Variation", icon:"🧬", questions:BIO_Z_PRINCIPLESOFINHERITANCEA, additionalQuestions:[]},
  {id:615, name:"Zoology: Molecular Genetics", icon:"🧫", questions:BIO_Z_MOLECULARGENETICS, additionalQuestions:[]},
  {id:616, name:"Zoology: Evolution", icon:"🦴", questions:BIO_Z_EVOLUTION, additionalQuestions:[]},
  {id:617, name:"Zoology: Human Health and Diseases", icon:"🩺", questions:BIO_Z_HUMANHEALTHANDDISEASES, additionalQuestions:[]},
  {id:618, name:"Zoology: Microbes in Human Welfare", icon:"🦠", questions:BIO_Z_MICROBESINHUMANWELFARE, additionalQuestions:[]},
  {id:619, name:"Zoology: Applications of Biotechnology", icon:"💉", questions:BIO_Z_APPLICATIONSOFBIOTECHNOL, additionalQuestions:[]},
  {id:620, name:"Zoology: Organisms and Population", icon:"🦓", questions:BIO_Z_ORGANISMSANDPOPULATION, additionalQuestions:[]},
  {id:621, name:"Zoology: Biodiversity and its Conservation", icon:"🐅", questions:BIO_Z_BIODIVERSITYANDITSCONSER, additionalQuestions:[]},
  {id:622, name:"Zoology: Environmental Issues (Zoology)", icon:"🌍", questions:BIO_Z_ENVIRONMENTALISSUESZOOLO, additionalQuestions:[]}
];

/* ================= COMMERCE QUESTION BANK (12th Std, Book Back 1 Mark PDF) ================= */
const COM1_PRINCIPLES_OF_MANAGEMENT = [
{q:"Management is what a _______ does?",options:["Manager", "Subordinate", "Supervisor", "Superior"],correct:0},
{q:"Management is an ________",options:["Art", "Science", "Art and Science", "Art or Science"],correct:2},
{q:"Scientific management is developed by",options:["Fayol", "Taylor", "Mayo", "Jacob"],correct:1},
{q:"Dividing the work into small tasks is known as",options:["Discipline", "Unity", "Division of work", "Equity"],correct:2},
{q:"With a wider span, there will be _______ hierarchical levels.",options:["More", "Less", "Multiple", "Additional"],correct:1},
];

const COM2_FUNCTIONS_OF_MANAGEMENT = [
{q:"Which is the primary function of management?",options:["Innovating", "Controlling", "Planning", "Decision-making"],correct:2},
{q:"Which of the following is not a main function?",options:["Decision-making", "Planning", "Organising", "Staffing"],correct:0},
{q:"_________ is included in every managerial function.",options:["Co-ordinating", "Controlling", "Staffing", "Organising"],correct:0},
{q:"Which of the following is verification function?",options:["Planning", "Organising", "Staffing", "Controlling"],correct:3},
{q:"The goals are achieved with the help of ____",options:["Motivation", "Controlling", "Planning", "Staffing"],correct:0},
];

const COM3_MBO_MBE = [
{q:"___________ System gives full Scope to the Individual Strength and Responsibility.",options:["MBO", "MBE", "MBM", "MBA"],correct:0},
{q:"Which is the First step in Process of MBO?",options:["Fixing Key Result Area", "Appraisal of Activities", "Matching Resources with Activities", "Defining Organisational Objectives"],correct:3},
{q:"__________ keeps Management Alert to Opportunities and Threats by Identifying Critical Problems.",options:["MBA", "MBE", "MBM", "MBO"],correct:1},
{q:"Delegation of Authority is Easily Done with the Help of __________ .",options:["MBM", "MBE", "MBO", "MBA"],correct:2},
{q:"MBO is popularised in the USA by __________",options:["Prof. Reddin", "George Odiorne", "Henry Fayol", "F.W Taylor"],correct:1},
];

const COM4_INTRODUCTION_TO_FINANCIAL_MARKETS = [
{q:"Financial market facilitates business firms",options:["To rise funds", "To recruit workers", "To make more sales", "To minimize fund requirement"],correct:0},
{q:"Capital market is a market for",options:["Short Term Finance", "Medium Term Finance", "Long Term Finance", "Both Short Term and Medium Term Finance"],correct:2},
{q:"Primary market is also called as",options:["Secondary market", "Money market", "New Issue Market", "Indirect Market"],correct:2},
{q:"Spot Market is a market where the delivery of the financial instrument and payment of cash occurs",options:["Immediately", "In the future", "Uncertain", "After one month"],correct:0},
{q:"How many times a security can be sold in a secondary market?",options:["Only one time", "Two time", "Three times", "Multiple times"],correct:3},
];

const COM5_CAPITAL_MARKET = [
{q:"Capital market do not provide",options:["Short term Funds", "Debenture Funds", "Equity Funds", "Long term Funds"],correct:0},
{q:"When the NSEI was established",options:["1990", "1992", "1998", "1997"],correct:1},
{q:"Primary market is a Market where securities are traded in the",options:["First Time", "Second Time", "Three Time", "Several Times"],correct:0},
{q:"Participants in the Capital Market includes",options:["Individuals", "Corporate", "Financial Institutions", "All of the above"],correct:3},
{q:"The _______ was set up by a premier financial institution to allow the trading of securities across the electronic counters throughout the country.",options:["OTCEI", "Factoring", "Mutual Funds", "Venture Funds Institutions"],correct:0},
];

const COM6_MONEY_MARKET = [
{q:"The money invested in the call money market provides high liquidity with _________________.",options:["Low Profitability", "High Profitability", "Limited Profitability", "Medium Profitability"],correct:0},
{q:"A major player in the money market is the _________________.",options:["Commercial Bank", "Reserve Bank of India", "State Bank of India", "Central Bank."],correct:0},
{q:"Debt Instruments are issued by Corporate Houses are raising short-term financial resources from the money market are called __________.",options:["Treasury Bills", "Commercial Paper", "Certificate of Deposit", "Government Securities"],correct:1},
{q:"The market for buying and selling of Commercial Bills of Exchange is known as a __________.",options:["Commercial Paper Market", "Treasury Bill Market", "Commercial Bill Market", "Capital Market"],correct:2},
{q:"A marketable document of title to a time deposit for a specified period may be referred to as a __________.",options:["Treasury Bill", "Certificate of Deposit", "Commercial Bill", "Government. Securities"],correct:1},
];

const COM7_STOCK_EXCHANGE = [
{q:"_______ is the oldest stock exchange in the world.",options:["London Stock Exchange", "Bombay Stock Exchange", "National Stock Exchange", "Amsterdam Stock Exchange"],correct:3},
{q:"There are _____ stock exchange in the country.",options:["21", "24", "20", "25"],correct:1},
{q:"Jobbers transact in a stock exchange",options:["For their Clients", "For their Own Transactions", "For other Brokers", "For other Members"],correct:1},
{q:"A pessimistic speculator is",options:["Stag", "Bear", "Bull", "Lame Duck"],correct:1},
{q:"An optimistic speculator is",options:["Bull", "Bear", "Stag", "Lame duck"],correct:0},
];

const COM8_SEBI = [
{q:"Securities Exchange Board of India was first established in the year ____",options:["1988", "1992", "1995", "1998"],correct:0},
{q:"The headquarters of SEBI is _______",options:["Calcutta", "Bombay", "Chennai", "Delhi"],correct:1},
{q:"Registering and controlling the functioning of collective investment schemes as _______",options:["Mutual Funds", "Listing", "Rematerialisation", "Dematerialization"],correct:0},
{q:"SEBI is empowered by the Finance ministry to nominate ______ members on the Governing body of every stock exchange.",options:["5", "3", "6", "7"],correct:3},
{q:"Trading is dematerialized shares commenced on the NSE is ________",options:["January 1996", "June 1998", "December 1996", "December 1998"],correct:2},
];

const COM9_FUNDAMENTALS_OF_HUMAN_RESOURCE_MANAGEMENT = [
{q:"Human resource is a _________ asset.",options:["Tangible", "Intangible", "Fixed", "Current"],correct:1},
{q:"Human Resource management is both _________ and _________ .",options:["Science and art", "Theory and practice", "History and Geography", "None of the above"],correct:0},
{q:"Planning is a _________ function.",options:["Selective", "pervasive", "both a and b", "none of the above"],correct:1},
{q:"Human resource management determines the _________ relationship.",options:["Internal, External", "Employer, employee", "Owner, Servant", "Principle, Agent"],correct:1},
{q:"Labour turnover is the rate at which employees _________ the organisation",options:["Enter", "Leave", "Salary", "None of the above"],correct:1},
];

const COM10_RECRUITMENT_METHODS = [
{q:"Recruitment is the process of identifying ______",options:["Right man for right job", "good performer", "Right job", "All of the above"],correct:0},
{q:"Recruitment bridges gap between _____and ________",options:["Job seeker and job provider", "Job seeker and agent", "Job provider and owner", "Owner and servant"],correct:0},
{q:"Advertisement is a ________ source of recruitment",options:["Internal", "External", "Agent", "Outsourcing"],correct:1},
{q:"Transfer is an ________ source of recruitment.",options:["Internal", "External", "Outsourcing", "None of the above"],correct:0},
{q:"E-recruitment is possible only through ________ facility.",options:["Computer", "Internet", "Broadband", "4G"],correct:1},
];

const COM11_EMPLOYEE_SELECTION_PROCESS = [
{q:"The recruitment and Selection Process aimed at right kind of people.",options:["At right people", "At right time", "To do right things", "All of the above"],correct:3},
{q:"Selection is usually considered as a ___________ process",options:["Positive", "Negative", "Natural", "None of these"],correct:1},
{q:"Which of the following test is used to measure the various characteristics of the candidate?",options:["Physical Test", "Psychological Test", "Attitude Test", "Proficiency tests"],correct:1},
{q:"The process of eliminating unsuitable candidate is called",options:["Selection", "Recruitment", "Interview", "Induction"],correct:0},
{q:"Job first man next is one of the principles of ___________.",options:["Test", "Interview", "Training", "placement"],correct:0},
];

const COM12_EMPLOYEE_TRAINING_METHOD = [
{q:"Off the Job training is given",options:["In the class room", "On off days", "Outside the factory", "In the playground"],correct:2},
{q:"Improves Skill Levels of employees to ensure better job performance",options:["Training", "Selection", "Recruitment", "Performance appraisal"],correct:0},
{q:"When trainees are trained by supervisor or by superior at the job is called",options:["Vestibule training", "Refresher training", "Role play", "Apprenticeship training"],correct:3},
{q:"________ is useful to prevent skill obsolescence of employees",options:["Training", "Job analysis", "Selection", "Recruitment"],correct:0},
{q:"Training methods can be classified into ________ and ________ training.",options:["Job rotation and Job enrichment", "On the Job and Off the Job", "Job analysis and Job design", "Physical and mental"],correct:1},
];

const COM13_CONCEPTS_OF_MARKET_AND_MARKETER = [
{q:"One who promotes (or) Exchange of goods or services for money is called as _____________",options:["Seller", "Marketer", "Customer", "Manager"],correct:1},
{q:"The marketer initially wants to know in the marketing is___________",options:["Qualification of the customer", "Quality of the product", "Background of the customers", "Needs of the customers"],correct:3},
{q:"The Spot market is classified on the basis of _________",options:["Commodity", "Transaction", "Regulation", "Time"],correct:1},
{q:"Which one of the market deals in the purchase and sale of shares and debentures?",options:["Stock Exchange Market", "Manufactured Goods Market", "Local Market", "Family Market"],correct:0},
{q:"Stock Exchange Market is also called_____________",options:["Spot Market", "Local Market", "Security Market", "National Market"],correct:2},
];

const COM14_MARKETING_AND_MARKETING_MIX = [
{q:"The initial stage of Marketing system is____________",options:["Monopoly system", "Exchange to Money", "Barter system", "Self producing"],correct:2},
{q:"Who is supreme in the Market?",options:["Customer", "Seller", "Wholesaler", "Retailer"],correct:0},
{q:"In the following variables which one is not the variable of marketing mix?",options:["Place Variable", "Product Variable", "Program Variable", "Price Variable"],correct:2},
{q:"Marketing mix means a marketing program that is offered by a firm to its target ______________ to earn profits through satisfaction of their wants.",options:["Wholesaler", "Retailer", "Consumer", "Seller"],correct:2},
{q:"Which one is the example of Intangible product?",options:["Education", "Mobiles", "Garments", "Vehicles"],correct:0},
];

const COM15_RECENT_TRENDS_IN_MARKETING = [
{q:"Selling goods/ services through internet is",options:["Green marketing", "E- business", "Social marketing", "Meta marketing"],correct:1},
{q:"Which is gateway to internet?",options:["Portal", "CPU", "Modem", "Webnaire"],correct:2},
{q:"Social marketing deals with:",options:["Society", "Social Class", "Social change", "Social evil"],correct:1},
{q:"Effective use of Social media marketing increase conversion rates of ___________.",options:["Customer to buyers", "Retailer to customers", "One buyer to another buyer's", "Direct contact of marketer"],correct:0},
{q:"Pure play retailers are called",options:["Market creators", "Transaction brokers", "Merchants", "Agents"],correct:1},
];

const COM16_CONSUMERISM = [
{q:"The term 'consumerism' came into existence in the year __________.",options:["1960", "1957", "1954", "1958"],correct:0},
{q:"Who is the father of Consumer Movement?",options:["Mahatma Gandhi", "Mr. John F. Kennedy", "Ralph Nader", "Jawaharlal Nehru"],correct:2},
{q:"Sale of Goods Act was passed in the year?",options:["1962", "1972", "1930", "1985"],correct:2},
{q:"The Consumer Protection Act came into force with effect from",options:["1.1.1986", "1.4.1986", "15.4.1987", "15.4.1990"],correct:2},
{q:"_____ of every year is declared as a Consumer Protection Day to educate the public about their rights and responsibilities.",options:["August 15", "April 15", "March 15", "September 15"],correct:2},
];

const COM17_RIGHTS_DUTIES_AND_RESPOSIBILITIES_OF_CONSUMERISM = [
{q:"The final aim of modern marketing is _______",options:["Maximum profit", "Minimum profit", "Consumer satisfaction", "Service to the society"],correct:2},
{q:"_______ is the king of modern marketing.",options:["Consumer", "Wholesaler", "Producer", "Retailer"],correct:0},
{q:"As the consumer is having the rights, they are also having ________.",options:["Measures", "Promotion", "Responsibilities", "Duties"],correct:2},
{q:"Which of the following is not a consumer right summed up by John F. Kennedy",options:["Right to safety", "Right to choose", "Right to consume", "Right to be informed"],correct:2},
{q:"It is the responsibility of a consumer that he must obtain______ as a proof for the purchase of goods.",options:["Cash receipt", "Warranty card", "Invoice", "All of these"],correct:0},
];

const COM18_GRIEVANCE_REDRESSAL_MECHANISM = [
{q:"The Chairman of the National Consumer Disputes Redressal Council is ______",options:["Serving or Retired Judge of the Supreme Court of India.", "Prime Minister", "President of India", "None of the above"],correct:0},
{q:"The Chairman of the State Consumer Protection Council is _____",options:["Judge of a High Court", "Chief Minister", "Finance Minister", "None of the above"],correct:0},
{q:"The Chairman of the District Forum is ________",options:["District Judge", "High Court Judge", "Supreme Court Judge", "None of the above"],correct:0},
{q:"The State Commission can entertain complaints where the value of the goods or services and the compensation, if any claimed exceed",options:["₹2 lakhs but does not exceed ₹5 lakhs", "₹20 lakhs but does not exceed ₹1 crore", "₹3 lakhs but does not exceed ₹5 lakhs", "₹4 lakhs but does not exceed ₹20 lakhs"],correct:1},
{q:"The International Organisation of Consumers Unions (IOCU) was first established in",options:["1960", "1965", "1967", "1987"],correct:0},
];

const COM19_ENVIRONMENTAL_FACTORS = [
{q:"VUCA stands for ____, _____,_____,______.",options:["Volatility, Uncertainty, Complexity and Ambiguity", "Value, Unavoidable, Company and Authority", "Volatility, Uncontrollable, Company and Auction", "All of the above"],correct:0},
{q:"GST stands for ______,______,______.",options:["Goods and Social Tax", "Goods and Service Tax", "Goods and Sales Tax", "Goods and Salary Tax"],correct:1},
{q:"Factors within an organisation constitutes_________ environment.",options:["Internal Thinker", "External Thinker", "Fellow human beings", "All of the above"],correct:0},
{q:"Macro Environment of business is an _________ factor.",options:["Uncontrollable", "Controllable", "Manageable", "Immanageable"],correct:0},
{q:"The two major types of business environment are _______ and ___________.",options:["Positive and Negative", "Internal and External", "Good and Bad", "Allowable and Unallowable"],correct:1},
];

const COM20_LIBERALIZATION_PRIVATIZATION_AND_GLOBALIZATION = [
{q:"__________ is the result of New Industrial Policy which abolished the 'License System'.",options:["Globalisation", "Privatisation", "Liberalisation", "None of these"],correct:2},
{q:"___________ means permitting the private sector to setup industries which were previously reserved for public sector.",options:["Liberalisation", "Privatisation", "Globalisation", "Public Enterprise"],correct:1},
{q:"____________ ownership makes bold management decisions due to their strong foundation in the international level.",options:["Private", "Public", "Corporate", "MNC's"],correct:0},
{q:"__________ results from the removal of barriers between national economies to encourage the flow of goods, services, capital and labour.",options:["Privatisation", "Liberalisation", "Globalisation", "Foreign Trade"],correct:2},
{q:"New Economic Policy was introduced in the year _______.",options:["1980", "1991", "2013", "2015"],correct:1},
];

const COM21_THE_SALE_OF_GOODS_ACT_1930 = [
{q:"Sale of Goods Act was passed in the year",options:["1940", "1997", "1930", "1960"],correct:2},
{q:"Which of the below constitutes the essential element of contract of sale?",options:["Two parties", "Transfer of property", "Price", "All of the above"],correct:3},
{q:"Which of the below is not a good?",options:["Stocks", "Dividend due", "Crops", "Water"],correct:1},
{q:"In case of the sale, the ____ has the right to sell",options:["Buyer", "Seller", "Hirer", "Consignee"],correct:1},
{q:"The property in the goods means the",options:["Possession of goods", "Custody of goods", "Ownership of goods", "Both (a) and (b)"],correct:2},
];

const COM22_NEGOTIABLE_INSTRUMENT_ACT_1881 = [
{q:"Negotiable Instrument Act was passed in the year ______.",options:["1981", "1881", "1994", "1818"],correct:1},
{q:"Number of parties in a bill of exchange are",options:["2", "6", "3", "4"],correct:2},
{q:"Section 6 of Negotiable Instruments Act 1881 deals with",options:["Promissory Note", "Bills of exchange", "Cheque", "None of the above"],correct:2},
{q:"_______ cannot be a bearer instrument.",options:["Cheque", "Promissory Note", "Bills of exchange", "None of the above"],correct:1},
{q:"A cheque will become stale after _____months of its date:",options:["3", "4", "5", "1"],correct:0},
];

const COM23_ELEMENTS_OF_ENTREPRENEURSHIP = [
{q:"Which of the below is a factor of production?",options:["Land", "Labour", "Entrepreneurship", "All of the above"],correct:3},
{q:"Entrepreneur is not classified as",options:["Risk Bearer", "Innovator", "Employee", "Organizer"],correct:2},
{q:"What are the characteristics of an entrepreneur?",options:["Spirit of enterprise", "Flexibility", "Self Confidence", "All of the above"],correct:3},
{q:"Which of the below is not classified into managerial functions?",options:["Planning", "Marketing", "Organizing", "Controlling"],correct:1},
{q:"Which of the below is a commercial function?",options:["Accounting", "Coordination", "Discovery of idea", "Planning"],correct:0},
];

const COM24_TYPES_OF_ENTREPRENEURS = [
{q:"Which of the following is the Activity of a Business Entrepreneur?",options:["Production", "Marketing", "Operation", "All of the above"],correct:3},
{q:"Find the odd one out in context of Trading Entrepreneur.",options:["Selling", "Commission", "Buying", "Manufacturing"],correct:3},
{q:"Corporate Entrepreneur is also called as_____",options:["Intrapreneur", "Promoter", "Manager", "Shareholder"],correct:1},
{q:"Which of these is based on Technology?",options:["Modern", "Professional", "Corporate", "Industrial"],correct:1},
{q:"Which of the below is not a Characteristic of a Fabian Entrepreneur?",options:["Conservative", "Risk averse", "Sceptical", "Adaptive"],correct:3},
];

const COM25_GOVERNMENT_SCHEMES_FOR_ENTREPRENEURIAL_DEVELOPMENT = [
{q:"The ___________ initiative was launched to modernize the Indian economy to make all governments services available electronically.",options:["Standup India", "Startup India", "Digital India", "Make in India"],correct:2},
{q:"________ is designed to transform India to a global design and manufacturing hub.",options:["Digital India", "Make in India", "Startup India", "Design India."],correct:1},
{q:"___________ is the Government of India's endeavour to promote culture of innovation and entrepreneurship.",options:["AIM", "STEP", "SEED", "AIC"],correct:0},
{q:"___________ should cover aspects like sources of finance, technical know-how, source of labour and raw material, market potential and profitability.",options:["Technical Report", "Finance Report", "Project Report", "Progress Report"],correct:2},
{q:"____________has to include the mechanism for managing venture in the project report.",options:["Banker", "Government", "Lending Institutions", "Entrepreneur"],correct:3},
];

const COM26_COMPANIES_ACT_2013 = [
{q:"The Company will have to issue the notice of situation of Registered Office to the Registrar of Companies within _____ days from the date of incorporation.",options:["14 days", "21 days", "30 Days", "60 Days"],correct:2},
{q:"How does a person who envisages the idea to form a company called?",options:["Director", "Company Secretary", "Registrar", "Promoter"],correct:3},
{q:"Which of the following types of shares are issued by a company to raise capital from the existing shareholders?",options:["Equity Shares", "Rights Shares", "Preference Shares", "Bonus Shares"],correct:1},
{q:"The shares which are offered to the existing shareholder at free of cost is known as ___________.",options:["Bonus Share", "Equity Share", "Right Share", "Preference Share"],correct:0},
{q:"The shares which are offered first to the existing shareholder at reduced price is known as _____________.",options:["Bonus Share", "Equity Share", "Right Share", "Preference Share"],correct:2},
];

const COM27_COMPANY_MANAGEMENT = [
{q:"A person shall hold office as a director in ________ companies as per the Companies Act, 2013.",options:["5 companies", "10 companies", "20 companies", "15 companies"],correct:2},
{q:"A Private Company shall have a minimum of ________.",options:["Seven directors", "Five directors", "Three directors", "Two directors"],correct:3},
{q:"A Public Company having a paid up Share Capital of Rs. ___________ or more may have a Director, elected by such small shareholders.",options:["One crore", "Three crores", "Five crores", "Seven crores"],correct:2},
{q:"What is the statue of Directors who regulate money of the company.",options:["Banker", "Holder", "Agent", "Trustees"],correct:3},
{q:"According to Companies Act, the Directors must be appointed by the.",options:["Central Government", "Company Law Tribunal", "Company in General Meeting", "Board of Directors."],correct:2},
];

const COM28_COMPANY_SECRETARY = [
{q:"Mention the status of a Company Secretary in a company.",options:["A member", "A director", "An independent", "An employee"],correct:3},
{q:"Who can become a secretary for a company?",options:["Individual person", "Partnership firm", "Co-operative societies", "Trade unions"],correct:0},
{q:"Which meeting will be held only once in the life time of the company?",options:["Statutory", "Annual General", "Extra - ordinary", "Class General"],correct:0},
{q:"Who is not entitled to speak at the annual general meeting of the company.",options:["Auditor", "Shareholder", "Proxy", "Directors"],correct:2},
{q:"From the date of its incorporation the First Annual General Meeting is to be conducted within __________ months.",options:["Twelve", "Fifteen", "Eighteen", "Twenty one"],correct:2},
];

const CHAPTERS_COMMERCE = [
  {id:701, name:"Principles of Management", icon:"🧭", questions:COM1_PRINCIPLES_OF_MANAGEMENT, additionalQuestions:[]},
  {id:702, name:"Functions of Management", icon:"⚙️", questions:COM2_FUNCTIONS_OF_MANAGEMENT, additionalQuestions:[]},
  {id:703, name:"Management by Objectives (MBO) & Management by Exception (MBE)", icon:"🎯", questions:COM3_MBO_MBE, additionalQuestions:[]},
  {id:704, name:"Introduction To Financial Markets", icon:"💹", questions:COM4_INTRODUCTION_TO_FINANCIAL_MARKETS, additionalQuestions:[]},
  {id:705, name:"Capital Market", icon:"🏦", questions:COM5_CAPITAL_MARKET, additionalQuestions:[]},
  {id:706, name:"Money Market", icon:"💰", questions:COM6_MONEY_MARKET, additionalQuestions:[]},
  {id:707, name:"Stock Exchange", icon:"📈", questions:COM7_STOCK_EXCHANGE, additionalQuestions:[]},
  {id:708, name:"Securities Exchange Board of India (SEBI)", icon:"🛡️", questions:COM8_SEBI, additionalQuestions:[]},
  {id:709, name:"Fundamentals of Human Resource Management", icon:"👥", questions:COM9_FUNDAMENTALS_OF_HUMAN_RESOURCE_MANAGEMENT, additionalQuestions:[]},
  {id:710, name:"Recruitment Methods", icon:"📋", questions:COM10_RECRUITMENT_METHODS, additionalQuestions:[]},
  {id:711, name:"Employee Selection Process", icon:"🧑‍💼", questions:COM11_EMPLOYEE_SELECTION_PROCESS, additionalQuestions:[]},
  {id:712, name:"Employee Training Method", icon:"🎓", questions:COM12_EMPLOYEE_TRAINING_METHOD, additionalQuestions:[]},
  {id:713, name:"Concepts of Market and Marketer", icon:"🛍️", questions:COM13_CONCEPTS_OF_MARKET_AND_MARKETER, additionalQuestions:[]},
  {id:714, name:"Marketing and Marketing Mix", icon:"🧩", questions:COM14_MARKETING_AND_MARKETING_MIX, additionalQuestions:[]},
  {id:715, name:"Recent Trends in Marketing", icon:"📱", questions:COM15_RECENT_TRENDS_IN_MARKETING, additionalQuestions:[]},
  {id:716, name:"Consumerism", icon:"🛒", questions:COM16_CONSUMERISM, additionalQuestions:[]},
  {id:717, name:"Rights, Duties and Resposibilities of Consumerism", icon:"⚖️", questions:COM17_RIGHTS_DUTIES_AND_RESPOSIBILITIES_OF_CONSUMERISM, additionalQuestions:[]},
  {id:718, name:"Grievance Redressal Mechanism", icon:"📜", questions:COM18_GRIEVANCE_REDRESSAL_MECHANISM, additionalQuestions:[]},
  {id:719, name:"Environmental Factors", icon:"🌍", questions:COM19_ENVIRONMENTAL_FACTORS, additionalQuestions:[]},
  {id:720, name:"Liberalization, Privatization and Globalization", icon:"🌐", questions:COM20_LIBERALIZATION_PRIVATIZATION_AND_GLOBALIZATION, additionalQuestions:[]},
  {id:721, name:"The Sale of Goods Act, 1930", icon:"📄", questions:COM21_THE_SALE_OF_GOODS_ACT_1930, additionalQuestions:[]},
  {id:722, name:"Negotiable Instrument Act, 1881", icon:"💵", questions:COM22_NEGOTIABLE_INSTRUMENT_ACT_1881, additionalQuestions:[]},
  {id:723, name:"Elements of Entrepreneurship", icon:"💡", questions:COM23_ELEMENTS_OF_ENTREPRENEURSHIP, additionalQuestions:[]},
  {id:724, name:"Types of Entrepreneurs", icon:"🚀", questions:COM24_TYPES_OF_ENTREPRENEURS, additionalQuestions:[]},
  {id:725, name:"Government Schemes for Entrepreneurial Development", icon:"🏛️", questions:COM25_GOVERNMENT_SCHEMES_FOR_ENTREPRENEURIAL_DEVELOPMENT, additionalQuestions:[]},
  {id:726, name:"Companies Act, 2013", icon:"📘", questions:COM26_COMPANIES_ACT_2013, additionalQuestions:[]},
  {id:727, name:"Company Management", icon:"🏢", questions:COM27_COMPANY_MANAGEMENT, additionalQuestions:[]},
  {id:728, name:"Company Secretary", icon:"🗂️", questions:COM28_COMPANY_SECRETARY, additionalQuestions:[]}
];

const SUBJECT_INFO = {
  cs:      {key:'cs',      name:'Computer Science', icon:'🖥️', short:'CS',   heroLine:'Computer Science — One Mark Practice',  themeColor:'#0EA5E9', tagline:'16 chapters • Python, SQL, Data Structures', chapters:CHAPTERS_CS,      unitLabel:'Ch',   sourceNote:'Source: Book Back 1 Mark Q&A PDF — real questions only'},
  maths:   {key:'maths',   name:'Mathematics',      icon:'📐', short:'Math', heroLine:'Mathematics — One Mark Practice',       themeColor:'#6366F1', tagline:'12 units • Matrices, Calculus, Probability & more', chapters:CHAPTERS_MATHS,   unitLabel:'Unit', sourceNote:'Source: 12th Std Book Back 1 Mark Q&A PDF — real questions only'},
  physics: {key:'physics', name:'Physics',          icon:'⚛️', short:'Phy',  heroLine:'Physics — One Mark Practice',           themeColor:'#8B5CF6', tagline:'11 chapters • Electrostatics, Optics, Modern Physics & more', chapters:CHAPTERS_PHYSICS, unitLabel:'Ch',   sourceNote:'Source: 12th Std Book Back 1 Mark Q&A PDF — real questions only'},
  chemistry: {key:'chemistry', name:'Chemistry',     icon:'⚗️', short:'Chem', heroLine:'Chemistry — One Mark Practice',        themeColor:'#10B981', tagline:'15 units • Metallurgy, Organic Chemistry, Biomolecules & more', chapters:CHAPTERS_CHEMISTRY, unitLabel:'Unit', sourceNote:'Source: 12th Std Book Back 1 Mark Q&A PDF — real questions only'},
  ca:      {key:'ca',      name:'Computer Applications', icon:'💻', short:'CA', heroLine:'Computer Applications — One Mark Practice', themeColor:'#F59E0B', tagline:'16 chapters • Multimedia, PHP, Networking, E-Commerce & more', chapters:CHAPTERS_CA, unitLabel:'Ch', sourceNote:'Source: 12th Std Book Back 1 Mark Q&A PDF — real questions only'},
  biology: {key:'biology', name:'Biology',          icon:'🧬', short:'Bio',  heroLine:'Biology — One Mark Practice',           themeColor:'#EC4899', tagline:'22 chapters • Botany & Zoology, Genetics, Human Health & more', chapters:CHAPTERS_BIOLOGY, unitLabel:'Ch', sourceNote:'Source: 12th Std Book Back 1 Mark Q&A PDF — real questions only'},
  commerce: {key:'commerce', name:'Commerce',       icon:'📊', short:'Com',  heroLine:'Commerce — One Mark Practice',          themeColor:'#F97316', tagline:'28 chapters • Management, Markets, Marketing, Company Law & more', chapters:CHAPTERS_COMMERCE, unitLabel:'Ch', sourceNote:'Source: 12th Std Book Back 1 Mark Q&A PDF — real questions only'}
};
let currentSubject = 'cs';
function activeChapters(){ return SUBJECT_INFO[currentSubject].chapters; }

/* ================= SUBJECT THEME ENGINE =================
   Swaps the whole app's color world + hero/brand text. Pass null/'none'
   to return to the neutral multi-subject hub look (used on the subject
   picker screen). Every other screen keeps whichever theme was last set. */
function applySubjectTheme(key){
  const root = document.documentElement;
  if(!key || !SUBJECT_INFO[key]){
    root.removeAttribute('data-subject');
    const heroTitle = document.getElementById('heroTitle');
    const heroTagline = document.getElementById('heroTagline');
    const brandBadge = document.getElementById('brandBadge');
    const brandTitle = document.getElementById('brandTitle');
    if(heroTitle) heroTitle.textContent = '12th Standard — One Mark Practice';
    if(heroTagline) heroTagline.textContent = 'Practice • Learn • Improve • Score Better';
    if(brandBadge) brandBadge.textContent = 'VM';
    if(brandTitle) brandTitle.textContent = 'Exam Practice Portal';
    setMetaThemeColor(null);
    return;
  }
  const info = SUBJECT_INFO[key];
  root.setAttribute('data-subject', key);
  const heroTitle = document.getElementById('heroTitle');
  const heroTagline = document.getElementById('heroTagline');
  const brandBadge = document.getElementById('brandBadge');
  const brandTitle = document.getElementById('brandTitle');
  if(heroTitle) heroTitle.textContent = `12th ${info.heroLine}`;
  if(heroTagline) heroTagline.textContent = `${info.tagline.replace(/^\d+\s*(chapters?|units?)\s*•\s*/i,'')}`;
  if(brandBadge) brandBadge.textContent = info.icon;
  if(brandTitle) brandTitle.textContent = `${info.name} Practice Portal`;
  setMetaThemeColor(info.themeColor);
}
function setMetaThemeColor(hex){
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', hex || '#4F46E5');
}

let activeChapter = null;
let testQuestions = [];
let currentIndex = 0;
let answers = {};
let bookmarks = {};
let timeLeft = 600;
let timerInterval = null;
let startTime = null;
let currentFilter = 'all';
let lastResultData = null;
let student = {name:'', cls:''};
let soundOn = true;

/* ================= STORAGE (Firestore for signed-in students, localStorage for guests) =================
   CLOUD.data is an in-memory cache. lsGet/lsSet read/write that cache.
   CLOUD.mode determines where writes go: 'cloud' (Firestore, signed-in) or 'guest' (localStorage, this device only). */
const CLOUD = { uid: null, data: {}, saveTimer: null, mode: 'none' };
const GUEST_KEY = 'cs_guest_data';

function lsGet(key, fallback){
  const v = CLOUD.data[key];
  return (v===undefined || v===null) ? fallback : v;
}
function lsSet(key, val){
  CLOUD.data[key] = val;
  scheduleSave();
}
function scheduleSave(){
  if(CLOUD.mode === 'cloud' && CLOUD.uid){
    clearTimeout(CLOUD.saveTimer);
    CLOUD.saveTimer = setTimeout(()=>{
      fbDB.collection('students').doc(CLOUD.uid).set(CLOUD.data, {merge:true})
        .catch(e=>console.warn('Cloud save failed', e));
    }, 800);
  } else if(CLOUD.mode === 'guest'){
    clearTimeout(CLOUD.saveTimer);
    CLOUD.saveTimer = setTimeout(()=>{
      try{ localStorage.setItem(GUEST_KEY, JSON.stringify(CLOUD.data)); }
      catch(e){ console.warn('Guest save failed', e); }
    }, 300);
  }
}
async function loadCloudData(uid){
  CLOUD.mode = 'cloud';
  CLOUD.uid = uid;
  CLOUD.data = {};
  try{
    const doc = await fbDB.collection('students').doc(uid).get();
    if(doc.exists) CLOUD.data = doc.data() || {};
  }catch(e){
    console.warn('Cloud load failed', e);
  }
}
function loadGuestData(){
  CLOUD.mode = 'guest';
  CLOUD.uid = null;
  try{
    const raw = localStorage.getItem(GUEST_KEY);
    CLOUD.data = raw ? JSON.parse(raw) : {};
  }catch(e){
    CLOUD.data = {};
  }
}

let isGuest = false;
function continueAsGuest(){
  isGuest = true;
  loadGuestData();
  document.getElementById('googleStep').classList.add('hidden');

  const saved = lsGet('student', null);
  if(saved && saved.name && saved.cls){
    student = saved;
    applyStudentUI();
    soundOn = lsGet('cs_sound_on', true);
    applyFontSize(lsGet('cs_fontsize', 'normal'));
    currentSubject = lsGet('cs_subject', 'cs');
    document.getElementById('welcomeScreen').style.display = 'none';
    switchScreen('subjectScreen');
  } else {
    document.getElementById('classStep').classList.remove('hidden');
    document.getElementById('studentName').value = '';
  }
}


/* ================= FIREBASE — Google Sign-In ================= */
const firebaseConfig = {
  apiKey: "AIzaSyCFBhAK-9EkG3_Zdcuvdly2wlP1Re5qYbA",
  authDomain: "vmhss-one-marks.firebaseapp.com",
  projectId: "vmhss-one-marks",
  storageBucket: "vmhss-one-marks.firebasestorage.app",
  messagingSenderId: "850933256837",
  appId: "1:850933256837:web:ae07a4b333e8e7b0870fec"
};
firebase.initializeApp(firebaseConfig);
const fbAuth = firebase.auth();
const fbDB = firebase.firestore();
fbAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(e=>console.warn('Persistence setup failed', e));

async function signInWithGoogle(){
  const btn = document.getElementById('googleSignInBtn');
  const label = document.getElementById('googleBtnLabel');
  const err = document.getElementById('googleSignInError');
  err.textContent = '';
  btn.disabled = true;
  const prevLabel = label.textContent;
  label.innerHTML = '';
  const spin = document.createElement('span'); spin.className = 'spinner'; label.appendChild(spin);

  const provider = new firebase.auth.GoogleAuthProvider();
  try{
    await fbAuth.signInWithPopup(provider);
    // onAuthStateChanged (below) takes it from here
  }catch(e){
    console.warn('Google sign-in failed', e);
    err.textContent = 'Google sign-in failed or was cancelled. Please try again.';
  }finally{
    btn.disabled = false;
    label.textContent = prevLabel;
  }
}

let googleUser = null;
fbAuth.onAuthStateChanged(async (user)=>{
  googleUser = user;
  if(!user){
    // signed out — show the Google sign-in step
    document.getElementById('googleStep').classList.remove('hidden');
    document.getElementById('cloudLoading').classList.add('hidden');
    document.getElementById('classStep').classList.add('hidden');
    return;
  }
  // signed in — fetch this student's saved data from Firestore
  document.getElementById('googleStep').classList.add('hidden');
  document.getElementById('cloudLoading').classList.remove('hidden');
  await loadCloudData(user.uid);
  document.getElementById('cloudLoading').classList.add('hidden');

  const saved = lsGet('student', null);
  if(saved && saved.name && saved.cls){
    student = saved;
    applyStudentUI();
    soundOn = lsGet('cs_sound_on', true);
    applyFontSize(lsGet('cs_fontsize', 'normal'));
    currentSubject = lsGet('cs_subject', 'cs');
    document.getElementById('welcomeScreen').style.display = 'none';
    switchScreen('subjectScreen');
    mirrorToClassLeaderboard();
  } else {
    document.getElementById('classStep').classList.remove('hidden');
    document.getElementById('studentName').value = user.displayName || '';
  }
});

const LEVEL_XP = 150;
function getXP(){ return lsGet('cs_xp', 0); }
function addXP(amount){ const total = getXP()+amount; lsSet('cs_xp', total); return total; }
function getLevel(xp){ return Math.floor(xp/LEVEL_XP)+1; }

function getStreak(){ return lsGet('cs_streak', {count:0, last:null}); }
function updateStreak(){
  const today = new Date().toISOString().slice(0,10);
  const s = getStreak();
  if(s.last !== today){
    const y = new Date(); y.setDate(y.getDate()-1);
    const yStr = y.toISOString().slice(0,10);
    s.count = (s.last === yStr) ? s.count+1 : 1;
    s.last = today;
    lsSet('cs_streak', s);
  }
  return s;
}

function getProgress(){ return lsGet('cs_progress', {}); }
function saveAttempt(chapterId, data){
  if(typeof chapterId !== 'number') return; // only track real numbered chapters
  const store = getProgress();
  const pct = Math.round((data.correct/data.total)*100);
  const rec = store[chapterId] || {best:null, attempts:0};
  rec.attempts = (rec.attempts||0)+1;
  if(!rec.best || pct > rec.best.pct || (pct===rec.best.pct && data.elapsed < rec.best.elapsed)){
    rec.best = {correct:data.correct, total:data.total, pct, elapsed:data.elapsed, date:Date.now()};
  }
  store[chapterId] = rec;
  lsSet('cs_progress', store);
}

function getEarnedBadges(){ return lsGet('cs_badges', []); }
const BADGE_DEFS = [
  {id:'chapter_master', icon:'🏅', name:'Chapter Master', desc:'Score 100% on any chapter'},
  {id:'speed_runner', icon:'⚡', name:'Speed Runner', desc:'80%+ score in under half the time'},
  {id:'perfectionist', icon:'💎', name:'Perfectionist', desc:'100% on 3 different chapters'},
  {id:'streak_3', icon:'🔥', name:'On a Roll', desc:'3-day practice streak'},
  {id:'centurion', icon:'⭐', name:'Centurion', desc:'Earn 500+ total XP'}
];
function computeEarnedBadgeIds(){
  const progress = getProgress();
  const bestList = Object.values(progress).map(r=>r.best).filter(Boolean);
  const masterCount = bestList.filter(b=>b.pct===100).length;
  const earned = [];
  if(masterCount>=1) earned.push('chapter_master');
  if(bestList.some(b=>b.pct>=80 && b.elapsed <= (b.total*60)/2)) earned.push('speed_runner');
  if(masterCount>=3) earned.push('perfectionist');
  if(getStreak().count>=3) earned.push('streak_3');
  if(getXP()>=500) earned.push('centurion');
  return earned;
}
function checkAndToastNewBadges(){
  const before = getEarnedBadges();
  const now = computeEarnedBadgeIds();
  const fresh = now.filter(id=>!before.includes(id));
  lsSet('cs_badges', now);
  fresh.forEach(id=>{
    const def = BADGE_DEFS.find(b=>b.id===id);
    if(def) showToast(`🏅 Badge unlocked: ${def.name}!`, 'badge');
  });
  return fresh.length>0;
}

function getWrongPool(){ return lsGet('cs_wrong_pool', {}); }
function updateWrongPool(details, fallbackChapterId, fallbackChapterName){
  const pool = getWrongPool();
  details.forEach(d=>{
    const cid = d.chapterId ?? fallbackChapterId;
    const cname = d.chapterName ?? fallbackChapterName;
    const key = `${cid}::${d.q}`;
    if(d.status==='correct'){
      delete pool[key];
    } else {
      const existing = pool[key];
      pool[key] = {
        q:d.q, options:d.options, correct:d.correct, exp:d.exp,
        chapterId:cid, chapterName:cname,
        timesWrong: (existing?.timesWrong||0)+1, lastWrong: Date.now()
      };
    }
  });
  // cap pool size
  const keys = Object.keys(pool);
  if(keys.length > 120){
    keys.sort((a,b)=>pool[a].lastWrong - pool[b].lastWrong)
        .slice(0, keys.length-120).forEach(k=>delete pool[k]);
  }
  lsSet('cs_wrong_pool', pool);
}
function getWeakPool(){
  const pool = getWrongPool();
  return Object.values(pool).sort((a,b)=>b.timesWrong-a.timesWrong || b.lastWrong-a.lastWrong);
}

function getLeaderboard(){ return lsGet('cs_leaderboard', []); }
function addToLeaderboard(entry){
  const board = getLeaderboard();
  board.push(entry);
  lsSet('cs_leaderboard', board.slice(-300));
}

/* ---- mirror a lightweight summary to a shared 'leaderboard' collection so
   every student's progress is visible class-wide (not just on their own device).
   Guests are skipped — they have no stable identity across visits. */
function mirrorToClassLeaderboard(){
  if(CLOUD.mode !== 'cloud' || !CLOUD.uid) return;
  const payload = {
    name: student.name || 'Student',
    cls: student.cls || '-',
    xp: getXP(),
    level: getLevel(getXP()),
    testsCompleted: getLeaderboard().length,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  fbDB.collection('leaderboard').doc(CLOUD.uid).set(payload, {merge:true})
    .catch(e=>console.warn('Class leaderboard mirror failed', e));
}

/* ================= TEACHER / ADMIN VIEW =================
   ⚠️ This password check runs entirely in the browser — anyone who views the
   page source can read ADMIN_PASSWORD. It only stops casual browsing, it is
   NOT real security. Firestore's 'leaderboard' collection is intentionally
   limited to name/class/XP/level/test-count — nothing sensitive — so this
   is an acceptable trade-off for a free, backend-less school project.
   Change the password below before you publish this. */
const ADMIN_PASSWORD = "vmhss2026";

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function openAdminLogin(){
  document.getElementById('adminLoginError').textContent = '';
  document.getElementById('adminPassword').value = '';
  document.getElementById('adminLoginModal').classList.remove('hidden');
  setTimeout(()=>document.getElementById('adminPassword')?.focus(), 50);
}
function closeAdminLogin(){
  document.getElementById('adminLoginModal').classList.add('hidden');
}
async function adminLogin(){
  const pass = document.getElementById('adminPassword').value;
  if(pass !== ADMIN_PASSWORD){
    document.getElementById('adminLoginError').textContent = 'Incorrect password.';
    return;
  }
  closeAdminLogin();
  await openAdminScreen();
}

let adminData = [];
let adminSort = {key:'xp', dir:'desc'};

async function openAdminScreen(){
  document.getElementById('adminScreen').classList.remove('hidden');
  document.getElementById('adminTableBody').innerHTML = `<tr><td colspan="6">Loading…</td></tr>`;
  try{
    const snap = await fbDB.collection('leaderboard').get();
    adminData = snap.docs.map(doc=>({id:doc.id, ...doc.data()}));
  }catch(e){
    console.warn('Admin fetch failed', e);
    adminData = [];
    document.getElementById('adminTableBody').innerHTML = `<tr><td colspan="6">Couldn't load student data — check the browser console for details.</td></tr>`;
    return;
  }
  renderAdminTable();
}
function closeAdminScreen(){
  document.getElementById('adminScreen').classList.add('hidden');
}
function sortAdminBy(key){
  if(adminSort.key === key){ adminSort.dir = adminSort.dir === 'asc' ? 'desc' : 'asc'; }
  else { adminSort.key = key; adminSort.dir = (key==='name'||key==='cls') ? 'asc' : 'desc'; }
  renderAdminTable();
}
function renderAdminTable(){
  const searchEl = document.getElementById('adminSearch');
  const q = (searchEl && searchEl.value || '').trim().toLowerCase();
  let rows = adminData.filter(d => !q || (d.name||'').toLowerCase().includes(q) || (d.cls||'').toLowerCase().includes(q));
  const {key, dir} = adminSort;
  rows = rows.slice().sort((a,b)=>{
    let av = a[key], bv = b[key];
    if(key === 'updatedAt'){
      av = (av && av.toMillis) ? av.toMillis() : 0;
      bv = (bv && bv.toMillis) ? bv.toMillis() : 0;
    }
    if(typeof av === 'string' || typeof bv === 'string'){
      return dir==='asc' ? String(av||'').localeCompare(String(bv||'')) : String(bv||'').localeCompare(String(av||''));
    }
    return dir==='asc' ? (av||0)-(bv||0) : (bv||0)-(av||0);
  });
  const countEl = document.getElementById('adminCount');
  if(countEl) countEl.textContent = `${rows.length} student${rows.length===1?'':'s'}`;
  document.getElementById('adminTableBody').innerHTML = rows.length ? rows.map(d=>{
    const last = (d.updatedAt && d.updatedAt.toDate) ? d.updatedAt.toDate().toLocaleString() : '—';
    return `<tr><td>${escapeHtml(d.name||'-')}</td><td>${escapeHtml(d.cls||'-')}</td><td>${d.xp||0}</td><td>${d.level||1}</td><td>${d.testsCompleted||0}</td><td>${last}</td></tr>`;
  }).join('') : `<tr><td colspan="6">No students match.</td></tr>`;
}
function exportAdminCSV(){
  if(!adminData.length){ alert('No student data loaded yet.'); return; }
  const header = ['Name','Class','XP','Level','Tests Completed','Last Active'];
  const rows = adminData.map(d=>{
    const last = (d.updatedAt && d.updatedAt.toDate) ? d.updatedAt.toDate().toLocaleString() : '';
    return [d.name||'', d.cls||'', d.xp||0, d.level||1, d.testsCompleted||0, last];
  });
  const csv = [header, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `students-progress-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ================= TOASTS ================= */
function showToast(msg, type){
  const wrap = document.getElementById('toastWrap');
  if(!wrap) return;
  const t = document.createElement('div');
  t.className = 'toast' + (type==='badge' ? ' badge-toast' : type==='level' ? ' level-toast' : '');
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(()=>t.remove(), 3000);
}

/* ================= SOUND (Web Audio API) ================= */
let audioCtx = null;
function getAudioCtx(){
  if(!audioCtx){
    try{ audioCtx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){}
  }
  return audioCtx;
}
function playTone(freq, dur, type, vol){
  if(!soundOn) return;
  try{
    const ctx = getAudioCtx();
    if(!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    gain.gain.value = vol!==undefined ? vol : 0.05;
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (dur||0.12));
    osc.stop(ctx.currentTime + (dur||0.12) + 0.02);
  }catch(e){}
}
function soundSelect(){ playTone(600, 0.07, 'sine', 0.04); }
function soundSuccess(){ playTone(523.25,0.12,'sine',0.05); setTimeout(()=>playTone(659.25,0.12,'sine',0.05),100); setTimeout(()=>playTone(783.99,0.18,'sine',0.05),200); }
function soundLevelUp(){ [523,659,784,1046].forEach((f,i)=>setTimeout(()=>playTone(f,0.15,'triangle',0.05),i*90)); }
function toggleSound(){
  soundOn = !soundOn;
  lsSet('cs_sound_on', soundOn);
  document.getElementById('soundBtn').textContent = soundOn ? '🔊' : '🔇';
  if(soundOn) soundSelect();
}

/* ================= HAPTICS ================= */
function vibrate(ms){
  if(navigator.vibrate){ try{ navigator.vibrate(ms); }catch(e){} }
}

/* ================= FONT SIZE TOGGLE ================= */
const FONT_SIZES = ['normal','medium','large'];
function cycleFontSize(){
  const cur = lsGet('cs_fontsize','normal');
  const next = FONT_SIZES[(FONT_SIZES.indexOf(cur)+1) % FONT_SIZES.length];
  applyFontSize(next);
}
function applyFontSize(size){
  document.documentElement.setAttribute('data-fontsize', size==='normal' ? '' : size);
  lsSet('cs_fontsize', size);
  const btn = document.getElementById('fontBtn');
  if(btn) btn.textContent = size==='large' ? 'Aa+' : size==='medium' ? 'Aa·' : 'Aa';
}


const SCREENS = ['subjectScreen','chapterScreen','sectionScreen','customScreen','startScreen','testScreen','resultScreen','dashboardScreen'];

/* ---------------- Back-button / history handling ----------------
   Every forward call to switchScreen() pushes a history entry so that
   the device/browser back button steps back through the app's own
   screens (e.g. test -> section -> chapter -> home) instead of
   immediately leaving the site. Only when there is no more app
   history left does the back button fall through to normal browser
   behaviour (leaving the page). */
try{ history.replaceState({screen:null}, '', location.pathname+location.search); }catch(e){}

function switchScreen(showId, fromPopState){
  SCREENS.forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    if(id===showId){
      el.classList.remove('hidden');
      el.style.animation='none';
      void el.offsetWidth;
      el.style.animation='';
    } else {
      el.classList.add('hidden');
    }
  });
  applySubjectTheme(showId==='subjectScreen' ? null : currentSubject);
  window.scrollTo({top:0, behavior:'smooth'});
  if(!fromPopState){
    try{ history.pushState({screen:showId}, '', location.pathname+location.search); }catch(e){}
  }
}

window.addEventListener('popstate', function(e){
  const state = e.state;
  if(state && state.screen && SCREENS.includes(state.screen)){
    // If backing out of an in-progress test, stop the running timer
    const testEl = document.getElementById('testScreen');
    if(testEl && !testEl.classList.contains('hidden') && state.screen!=='testScreen'){
      try{ clearInterval(timerInterval); }catch(err){}
    }
    switchScreen(state.screen, true);
  }
  // else: no app screen on the stack — let the browser's default
  // back navigation proceed (leaves the page), which is correct
  // once the user is back at the very first/home screen.
});

/* ---------------- Welcome / onboarding gate ---------------- */
function initials(name){
  return name.trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase() || '?';
}

/* ---------------- animated class chip picker ---------------- */
document.addEventListener('touchstart', function(){}, {passive:true, capture:true}); // enables :active states reliably on iOS

function chipRipple(el, x, y){
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.6;
  const span = document.createElement('span');
  span.className = 'chip-ripple';
  span.style.width = span.style.height = size+'px';
  span.style.left = (x-rect.left-size/2)+'px';
  span.style.top = (y-rect.top-size/2)+'px';
  el.appendChild(span);
  span.addEventListener('animationend', ()=>span.remove());
}

document.querySelectorAll('.class-chip').forEach(chip=>{
  chip.addEventListener('pointerdown', (e)=>{
    chipRipple(chip, e.clientX, e.clientY);
  });
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('.class-chip').forEach(c=>c.classList.remove('selected'));
    chip.classList.add('selected');
    document.getElementById('studentClass').value = chip.dataset.cls;
    document.getElementById('welcomeError').textContent = '';
    document.getElementById('classPicker').classList.remove('shake');
    try{ if(navigator.vibrate) navigator.vibrate(12); }catch(e){}
  });
});

function applyStudentUI(){
  const chip = document.getElementById('studentChip');
  if(student.name){
    chip.classList.add('show');
    document.getElementById('studentAvatar').textContent = initials(student.name);
    document.getElementById('studentChipText').innerHTML = `${student.name.split(' ')[0]} • ${student.cls}${isGuest ? '<span class="guest-tag">GUEST</span>' : ''}`;
  } else {
    chip.classList.remove('show');
  }
}

/* ---------------- edit an already-saved profile ---------------- */
let editingProfile = false;
function editProfile(){
  editingProfile = true;
  document.getElementById('studentName').value = student.name || '';
  document.getElementById('studentClass').value = student.cls || '';
  document.querySelectorAll('.class-chip').forEach(c=>c.classList.toggle('selected', c.dataset.cls === student.cls));
  document.getElementById('welcomeError').textContent = '';
  document.getElementById('editModeBadge')?.classList.remove('hidden');

  const gate = document.getElementById('welcomeScreen');
  gate.style.transition = 'none';
  gate.style.display = 'flex';
  gate.style.opacity = '1';
  gate.style.transform = 'scale(1)';
}

function confirmProfile(){
  const nameEl = document.getElementById('studentName');
  const clsEl = document.getElementById('studentClass');
  const err = document.getElementById('welcomeError');
  const name = nameEl.value.trim();
  const cls = clsEl.value;
  if(!name){ err.textContent = 'Please enter your name to continue.'; nameEl.focus(); return; }
  if(!cls){
    err.textContent = 'Please select your class.';
    const picker = document.getElementById('classPicker');
    picker.classList.remove('shake'); void picker.offsetWidth; picker.classList.add('shake');
    try{ if(navigator.vibrate) navigator.vibrate([15,40,15]); }catch(e){}
    return;
  }
  err.textContent = '';
  student = {name, cls};
  lsSet('student', student); // saved to Firestore automatically, tied to this Google account
  mirrorToClassLeaderboard();

  if(editingProfile){
    editingProfile = false;
    document.getElementById('editModeBadge')?.classList.add('hidden');
    applyStudentUI();
    const gate = document.getElementById('welcomeScreen');
    gate.style.transition = 'opacity .4s ease, transform .4s ease';
    gate.style.opacity = '0';
    gate.style.transform = 'scale(1.02)';
    setTimeout(()=>{
      gate.style.display = 'none';
      gate.style.opacity = '1';
      gate.style.transform = 'scale(1)';
    }, 380);
  } else {
    finishLogin();
  }
}

function finishLogin(){
  applyStudentUI();
  soundOn = lsGet('cs_sound_on', true);
  applyFontSize(lsGet('cs_fontsize', 'normal'));
  currentSubject = lsGet('cs_subject', 'cs');
  launchConfetti();
  const logo = document.querySelector('.welcome-logo');
  if(logo){ logo.style.animation = 'none'; void logo.offsetWidth; logo.style.animation = 'starPop .5s ease'; }
  const gate = document.getElementById('welcomeScreen');
  gate.style.transition = 'opacity .5s ease, transform .5s ease';
  gate.style.opacity = '0';
  gate.style.transform = 'scale(1.03)';
  setTimeout(()=>{
    gate.style.display = 'none';
    switchScreen('subjectScreen');
  }, 480);
}

function confirmLogout(){
  const msg = isGuest
    ? 'Exit guest mode? Your guest progress stays on this device, but you won\'t be signed in anywhere.'
    : 'Log out of your Google account? Your progress is saved and will be here next time you sign in.';
  if(confirm(msg)){
    switchUser();
  }
}

async function switchUser(){
  const wasGuest = isGuest;
  try{ await fbAuth.signOut(); }catch(e){}
  student = {name:'', cls:''};
  isGuest = false;
  CLOUD.uid = null; CLOUD.data = {}; CLOUD.mode = 'none'; // stop writing to the previous student's data
  editingProfile = false;
  applyStudentUI();
  document.getElementById('studentName').value = '';
  document.getElementById('studentClass').value = '';
  document.querySelectorAll('.class-chip').forEach(c=>c.classList.remove('selected'));
  document.getElementById('welcomeError').textContent = '';
  document.getElementById('editModeBadge')?.classList.add('hidden');
  const gate = document.getElementById('welcomeScreen');
  gate.style.transition = 'none';
  gate.style.display = 'flex';
  gate.style.opacity = '1';
  gate.style.transform = 'scale(1)';
  if(wasGuest){
    // guests were never signed into Firebase, so onAuthStateChanged won't fire — show the Google step ourselves
    document.getElementById('classStep').classList.add('hidden');
    document.getElementById('googleStep').classList.remove('hidden');
  }
  // if signed in with Google, onAuthStateChanged fires from signOut() and shows the Google step
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function buildTestSet(pool){
  return shuffle(pool).map(orig=>{
    const optIndices = shuffle([0,1,2,3]);
    const options = optIndices.map(i=>orig.options[i]);
    const correct = optIndices.indexOf(orig.correct);
    return {q:orig.q, options, correct, exp:orig.exp, chapterId:orig.chapterId, chapterName:orig.chapterName};
  });
}

function allQuestionsFlat(){ return activeChapters().flatMap(ch=>ch.questions.map(q=>({...q, chapterId:ch.id, chapterName:ch.name}))); }

function renderChapterGrid(){
  const grid = document.getElementById('chapterGrid');
  grid.innerHTML = '';
  const info = SUBJECT_INFO[currentSubject];
  const chapters = info.chapters;
  const totalQ = chapters.reduce((s,c)=>s+c.questions.length,0);
  const greet = student.name ? `Welcome, ${student.name.split(' ')[0]}! ` : '';
  document.getElementById('chapterSubtitle').textContent = `${greet}${info.name} • ${chapters.length} ${info.unitLabel==='Unit'?'units':'chapters'} • ${totalQ} real questions from the book-back PDF`;
  const noteEl = document.getElementById('chapterSourceNote');
  if(noteEl) noteEl.textContent = info.sourceNote;

  const weakCount = getWeakPool().length;
  const badgeEl = document.getElementById('weakCountBadge');
  if(badgeEl) badgeEl.textContent = `${weakCount} Qs`;

  const progress = getProgress();
  chapters.forEach((ch,i)=>{
    const rec = progress[ch.id];
    const best = rec && rec.best;
    const status = best ? (best.pct===100 ? '✅' : '🔵') : '⚪';
    const card = document.createElement('div');
    card.className = 'chapter-card tilt-card';
    card.style.animationDelay = (i*0.05)+'s';
    card.innerHTML = `
      <span class="chapter-status">${status}</span>
      <div class="chapter-num">${ch.icon}</div>
      <div class="chapter-title">${info.unitLabel} ${i+1}: ${ch.name}</div>
      <div class="chapter-meta">
        <span class="chip">${ch.questions.length} Questions</span>
        <span class="chip">${ch.questions.length} min</span>
        <span class="chip">😊 Easy</span>
      </div>
      ${best ? `<div class="chapter-best">Best: ${best.pct}% (${best.correct}/${best.total})</div>
        <div class="chapter-progress-bar"><div class="chapter-progress-fill" style="width:${best.pct}%"></div></div>` : ''}
      <button class="btn btn-primary">Practice Now</button>
    `;
    card.onclick = ()=>selectChapter(ch.id);
    grid.appendChild(card);
  });
}

function openStartScreenFor(ch){
  const label = SUBJECT_INFO[currentSubject].unitLabel;
  const idx = typeof ch.id==='number' ? activeChapters().findIndex(c=>c.id===ch.id) : -1;
  document.getElementById('startTitle').textContent = `${idx>-1 ? `${label} ${idx+1}: ` : ''}${ch.name} 🚀`;
  document.getElementById('startQCount').textContent = ch.questions.length;
  document.getElementById('startMins').textContent = ch.questions.length;
  switchScreen('startScreen');
}

let pendingChapter = null;

function selectChapter(id){
  pendingChapter = activeChapters().find(c=>c.id===id);
  const idx = activeChapters().findIndex(c=>c.id===id);
  const label = SUBJECT_INFO[currentSubject].unitLabel;
  document.getElementById('sectionTitle').textContent = `${label} ${idx+1}: ${pendingChapter.name}`;
  document.getElementById('sectionBookCount').textContent = `${pendingChapter.questions.length} Questions`;
  const addCount = (pendingChapter.additionalQuestions || []).length;
  document.getElementById('sectionAddCount').textContent = `${addCount} Questions`;
  const addCard = document.getElementById('sectionAddCard');
  addCard.style.opacity = addCount === 0 ? '.45' : '1';
  addCard.style.pointerEvents = addCount === 0 ? 'none' : 'auto';
  switchScreen('sectionScreen');
}

function chooseSection(type){
  const ch = pendingChapter;
  if(type === 'bookback'){
    activeChapter = {id: ch.id, name: `${ch.name} — Book Back`, questions: ch.questions};
  } else {
    activeChapter = {id: ch.id, name: `${ch.name} — Public Additional Questions`, questions: ch.additionalQuestions};
  }
  openStartScreenFor(activeChapter);
}

function goBackFromStart(){
  if(pendingChapter && activeChapter && typeof activeChapter.id === 'number'){
    switchScreen('sectionScreen');
  } else {
    showChapterScreen();
  }
}

function selectMixedTest(){
  const pool = shuffle(allQuestionsFlat()).slice(0,30);
  activeChapter = {id:'mixed', name:'Mixed Test — All Chapters', questions:pool};
  openStartScreenFor(activeChapter);
}

function selectWeakReview(){
  const weak = getWeakPool();
  if(weak.length===0){ showToast('No weak questions yet — keep practicing! 💪'); return; }
  activeChapter = {id:'weak', name:'Weak Question Review', questions:weak.slice(0,20)};
  openStartScreenFor(activeChapter);
}

/* ---------------- Custom Test (pick your own lessons) ---------------- */
function showCustomScreen(){
  clearInterval(timerInterval);
  renderCustomScreen();
  switchScreen('customScreen');
}

function renderCustomScreen(){
  const info = SUBJECT_INFO[currentSubject];
  const chapters = info.chapters;
  const unit = info.unitLabel.toLowerCase();
  document.getElementById('customSubtitle').textContent = `Pick any combination of ${unit}s from ${info.name} to build your own test`;

  const list = document.getElementById('customChapterList');
  list.innerHTML = chapters.map((ch,i)=>`
    <label class="lesson-pick-item">
      <input type="checkbox" class="lesson-pick-checkbox" value="${ch.id}" onchange="updateCustomSummary()">
      <span class="lp-icon">${ch.icon || '📘'}</span>
      <span class="lp-name">${info.unitLabel} ${i+1}: ${ch.name}</span>
      <span class="lp-count">${ch.questions.length} Qs</span>
    </label>
  `).join('');

  const anyAdd = chapters.some(ch=>(ch.additionalQuestions||[]).length>0);
  document.getElementById('customIncludeAddWrap').classList.toggle('hidden', !anyAdd);
  const addBox = document.getElementById('customIncludeAdd');
  if(addBox) addBox.checked = false;

  updateCustomSummary();
}

function toggleAllCustomChapters(select){
  document.querySelectorAll('.lesson-pick-checkbox').forEach(cb=>cb.checked = select);
  updateCustomSummary();
}

function getCustomPool(){
  const chapters = activeChapters();
  const checkedIds = Array.from(document.querySelectorAll('.lesson-pick-checkbox:checked')).map(cb=>cb.value);
  const includeAddEl = document.getElementById('customIncludeAdd');
  const includeAdd = !!(includeAddEl && includeAddEl.checked);
  let pool = [];
  chapters.forEach(ch=>{
    if(!checkedIds.includes(String(ch.id))) return;
    ch.questions.forEach(q=>pool.push({...q, chapterId:ch.id, chapterName:ch.name}));
    if(includeAdd && (ch.additionalQuestions||[]).length){
      ch.additionalQuestions.forEach(q=>pool.push({...q, chapterId:ch.id, chapterName:`${ch.name} (Additional)`}));
    }
  });
  return pool;
}

function updateCustomSummary(){
  const pool = getCustomPool();
  const lessonCount = document.querySelectorAll('.lesson-pick-checkbox:checked').length;
  document.getElementById('customSelectedCount').textContent =
    `${pool.length} question${pool.length===1?'':'s'} from ${lessonCount} lesson${lessonCount===1?'':'s'}`;

  const slider = document.getElementById('customQCount');
  const label = document.getElementById('customQCountLabel');
  const startBtn = document.getElementById('customStartBtn');
  const max = Math.max(pool.length, 1);
  slider.max = max;
  if(pool.length===0){
    slider.value = 1;
    label.textContent = '0';
  } else {
    if(Number(slider.value) > pool.length || Number(slider.value) < 1) slider.value = pool.length;
    label.textContent = slider.value;
  }
  startBtn.disabled = pool.length === 0;
}

function startCustomTest(){
  const pool = getCustomPool();
  if(pool.length===0){ showToast('Pick at least one lesson first! 🧩'); return; }
  const wantCount = Number(document.getElementById('customQCount').value) || pool.length;
  const finalPool = shuffle(pool).slice(0, Math.min(wantCount, pool.length));
  activeChapter = {id:'custom', name:'Custom Test — Selected Lessons', questions:finalPool};
  openStartScreenFor(activeChapter);
}

function showSubjectScreen(){
  clearInterval(timerInterval);
  switchScreen('subjectScreen');
}

function selectSubject(key){
  currentSubject = key;
  lsSet('cs_subject', key);
  showChapterScreen();
}

function showChapterScreen(){
  clearInterval(timerInterval);
  renderChapterGrid();
  switchScreen('chapterScreen');
}

function startTest(){
  let pool;
  if(activeChapter.id==='mixed' || activeChapter.id==='weak' || activeChapter.id==='custom'){
    pool = activeChapter.questions;
  } else {
    pool = activeChapter.questions.map(q=>({...q, chapterId:activeChapter.id, chapterName:activeChapter.name}));
  }
  testQuestions = buildTestSet(pool);
  currentIndex = 0;
  answers = {};
  bookmarks = {};
  timeLeft = testQuestions.length * 60;
  startTime = Date.now();
  switchScreen('testScreen');
  renderQuestion();
  clearInterval(timerInterval);
  timerInterval = setInterval(tickTimer,1000);
}


renderChapterGrid();

function tickTimer(){
  timeLeft--;
  const m = Math.floor(timeLeft/60), s = timeLeft%60;
  const disp = document.getElementById('timerDisplay');
  disp.textContent = `${m}:${s.toString().padStart(2,'0')}`;
  disp.className = 'timer' + (timeLeft<=60?' danger':timeLeft<=300?' warn':'');
  if(timeLeft<=0){
    clearInterval(timerInterval);
    submitTest();
  }
}

function escHtmlQ(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function mathify(str){
  if(str==null) return '';
  let s = escHtmlQ(str);
  function buildGrid(inner, bracketClass){
    const rows = inner.split(';').map(r=>r.split(',').map(c=>c.trim()));
    const maxCols = Math.max(...rows.map(r=>r.length));
    let cells = '';
    rows.forEach(r=>{
      for(let i=0;i<maxCols;i++){
        cells += `<span class="mx-cell">${r[i]!==undefined ? r[i] : ''}</span>`;
      }
    });
    return `<span class="mx-wrap"><span class="mx-bracket ${bracketClass}l"></span><span class="mx-grid" style="grid-template-columns:repeat(${maxCols},auto)">${cells}</span><span class="mx-bracket ${bracketClass}r"></span></span>`;
  }
  // square-bracket matrices: [a,b;c,d]
  s = s.replace(/\[([^\[\]]*;[^\[\]]*)\]/g, (m, inner) => buildGrid(inner, ''));
  // determinant bars: |a,b;c,d|
  s = s.replace(/\|([^|]*;[^|]*)\|/g, (m, inner) => buildGrid(inner, 'det '));
  // chemistry subscripts/superscripts: H_{2}O, SO_{4}^{2-}, Fe^{3+}, 10^{-4}
  s = s.replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>');
  s = s.replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>');
  return s;
}

function renderQuestion(){
  const q = testQuestions[currentIndex];
  document.getElementById('qBadge').textContent = activeChapter.name;
  document.getElementById('qCounter').textContent = `Question ${currentIndex+1} / ${testQuestions.length}`;
  document.getElementById('progressFill').style.width = `${((currentIndex+1)/testQuestions.length)*100}%`;
  document.getElementById('qText').innerHTML = mathify(q.q);
  updateBookmarkBtn();

  // re-trigger card entrance animation (only happens when moving to a new question)
  const card = document.getElementById('qCard');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = 'slideIn .35s cubic-bezier(.34,1.56,.64,1)';

  const wrap = document.getElementById('optionsWrap');
  wrap.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.options.forEach((opt,i)=>{
    const div = document.createElement('div');
    div.className = 'option' + (answers[currentIndex]===i?' selected':'');
    div.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${mathify(opt)}</span>`;
    div.onclick = (e)=> selectOption(i, div, e);
    wrap.appendChild(div);
  });

  document.getElementById('prevBtn').disabled = currentIndex===0;
  document.getElementById('nextBtn').textContent = currentIndex===testQuestions.length-1 ? 'Submit ✓' : 'Next →';
}

function updateBookmarkBtn(){
  const btn = document.getElementById('bookmarkBtn');
  btn.className = 'q-bookmark' + (bookmarks[currentIndex]?' active':'');
  btn.textContent = bookmarks[currentIndex]?'★':'☆';
}

/* Selecting an answer only updates the option elements in place —
   no full re-render, so the card never flashes/blinks. */
function selectOption(i, div, e){
  answers[currentIndex] = i;
  document.querySelectorAll('#optionsWrap .option').forEach(o=>o.classList.remove('selected'));
  div.classList.add('selected');
  spawnSelectSparkles(e.clientX, e.clientY);
  soundSelect();
  vibrate(12);
}

function spawnSelectSparkles(x, y){
  const colors = ['#2563EB','#8B5CF6','#EC4899','#059669','#F59E0B','#3B82F6'];
  const count = 12;
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    const angle = (Math.PI*2*i/count) + (Math.random()*0.5);
    const dist = 34 + Math.random()*36;
    const dx = Math.cos(angle)*dist;
    const dy = Math.sin(angle)*dist;
    const size = 5 + Math.random()*5;
    p.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:${size}px;height:${size}px;border-radius:50%;background:${colors[i%colors.length]};pointer-events:none;z-index:300;opacity:1;box-shadow:0 0 8px ${colors[i%colors.length]};transition:transform .65s cubic-bezier(.22,1,.36,1), opacity .65s ease;`;
    document.body.appendChild(p);
    requestAnimationFrame(()=>{
      p.style.transform = `translate(${dx}px, ${dy}px) scale(.3)`;
      p.style.opacity = '0';
    });
    setTimeout(()=>p.remove(), 700);
  }
}

function toggleBookmark(){
  bookmarks[currentIndex] = !bookmarks[currentIndex];
  updateBookmarkBtn();
  if(bookmarks[currentIndex]){
    const btn = document.getElementById('bookmarkBtn');
    btn.style.animation = 'none'; void btn.offsetWidth; btn.style.animation = 'starPop .4s';
  }
}

function prevQ(){ if(currentIndex>0){currentIndex--; renderQuestion();} }
function nextQ(){
  if(currentIndex<testQuestions.length-1){ currentIndex++; renderQuestion(); }
  else { document.getElementById('submitModal').classList.remove('hidden'); }
}
function closeModal(){ document.getElementById('submitModal').classList.add('hidden'); }

function confirmExitTest(){ document.getElementById('exitTestModal').classList.remove('hidden'); }
function closeExitModal(){ document.getElementById('exitTestModal').classList.add('hidden'); }
function exitTestToHome(){
  closeExitModal();
  clearInterval(timerInterval);
  showChapterScreen();
}

function submitTest(){
  closeModal();
  clearInterval(timerInterval);
  const elapsed = Math.floor((Date.now()-startTime)/1000);
  let correct=0, wrong=0, skipped=0;
  const details = testQuestions.map((q,i)=>{
    const chosen = answers[i];
    let status;
    if(chosen===undefined){ status='skipped'; skipped++; }
    else if(chosen===q.correct){ status='correct'; correct++; }
    else { status='wrong'; wrong++; }
    return {...q, chosen, status, bookmarked: !!bookmarks[i]};
  });
  lastResultData = {details, correct, wrong, skipped, elapsed, total: testQuestions.length};

  // ---- Gamification side-effects ----
  const xpBefore = getXP();
  const levelBefore = getLevel(xpBefore);
  updateWrongPool(details, activeChapter.id, activeChapter.name);
  saveAttempt(activeChapter.id, lastResultData);
  const gained = correct*10 + (Math.round((correct/lastResultData.total)*100)>=90 ? 30 : 0);
  const xpAfter = addXP(gained);
  const levelAfter = getLevel(xpAfter);
  updateStreak();
  addToLeaderboard({
    name: student.name || 'Guest', cls: student.cls || '-',
    chapterName: activeChapter.name, chapterId: activeChapter.id,
    correct, total: lastResultData.total, pct: Math.round((correct/lastResultData.total)*100),
    elapsed, date: Date.now()
  });
  mirrorToClassLeaderboard();
  lastResultData.xpGained = gained;
  lastResultData.leveledUp = levelAfter > levelBefore;
  lastResultData.newLevel = levelAfter;

  renderResult(lastResultData);
}

function renderResult(data){
  switchScreen('resultScreen');
  const pct = Math.round((data.correct/data.total)*100);
  document.getElementById('scoreCircle').style.setProperty('--pct', pct);
  document.getElementById('scoreVal').textContent = `${data.correct}/${data.total}`;
  document.getElementById('statCorrect').textContent = data.correct;
  document.getElementById('statWrong').textContent = data.wrong;
  document.getElementById('statSkipped').textContent = data.skipped;
  const m = Math.floor(data.elapsed/60), s = data.elapsed%60;
  document.getElementById('statTime').textContent = `${m}:${s.toString().padStart(2,'0')}`;
  document.getElementById('statAccuracy').textContent = `${pct}%`;

  let perf, msg;
  if(pct>=90){perf='Excellent';msg='Excellent work! You know this chapter really well 🎉'; launchConfetti(); soundSuccess();}
  else if(pct>=75){perf='Very Good';msg='Almost perfect! Just a little more revision.'; soundSuccess();}
  else if(pct>=50){perf='Good';msg='Keep practicing — you are getting there!';}
  else {perf='Needs Work';msg="Don't give up! Revisit the concepts and try again.";}
  document.getElementById('perfTag').textContent = perf;
  document.getElementById('motivateMsg').textContent = msg;

  if(data.xpGained){ showToast(`⭐ +${data.xpGained} XP earned!`); }
  refreshNavGamificationChips();
  const gotNewBadge = checkAndToastNewBadges();
  if(data.leveledUp){
    setTimeout(()=>{ showToast(`🎉 Level Up! You're now Level ${data.newLevel}!`, 'level'); soundLevelUp(); launchConfetti(); }, gotNewBadge?600:100);
  }

  currentFilter = 'all';
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active', b.dataset.f==='all'));
  renderReview();
}

function setFilter(f){
  currentFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active', b.dataset.f===f));
  renderReview();
}

function renderReview(){
  const wrap = document.getElementById('reviewWrap');
  wrap.innerHTML = '';
  const letters = ['A','B','C','D'];
  let list = lastResultData.details;
  if(currentFilter==='wrong') list = list.filter(d=>d.status==='wrong');
  if(currentFilter==='correct') list = list.filter(d=>d.status==='correct');
  if(currentFilter==='skipped') list = list.filter(d=>d.status==='skipped');
  if(currentFilter==='bookmarked') list = list.filter(d=>d.bookmarked);

  if(list.length===0){
    wrap.innerHTML = `<div style="text-align:center;color:var(--muted);padding:30px 0">No questions in this filter.</div>`;
    return;
  }

  list.forEach((d)=>{
    const card = document.createElement('div');
    card.className = `review-card ${d.status}`;
    let optsHtml = d.options.map((opt,i)=>{
      let cls = 'review-opt';
      if(d.status==='wrong' && i===d.chosen) cls += ' your-wrong';
      if(i===d.correct) cls += ' answer-key';
      return `<div class="${cls}">${letters[i]}. ${mathify(opt)}${i===d.correct?' ✓ (Correct Answer)':''}${d.status==='wrong'&&i===d.chosen?' ✗ (Your Answer)':''}</div>`;
    }).join('');
    const refId = d.chapterId ?? activeChapter.id;
    const refName = d.chapterName ?? activeChapter.name;
    const refLabel = refName;
    card.innerHTML = `
      <div class="review-status ${d.status}">${d.status}${d.bookmarked?' • ★ Bookmarked':''}</div>
      <div style="font-weight:700;margin-bottom:6px">${mathify(d.q)}</div>
      <div class="review-opts">${optsHtml}</div>
      <div class="explain-box">${d.exp ? `<b>Explanation:</b> ${d.exp}<br>` : ''}<b>Reference:</b> ${refLabel}</div>
    `;
    wrap.appendChild(card);
  });
}

function retryWrongOnly(){
  const wrongOrig = lastResultData.details.filter(d=>d.status!=='correct').map(d=>{
    return {q:d.q, options:d.options, correct:d.correct, exp:d.exp, chapterId:d.chapterId, chapterName:d.chapterName};
  });
  if(wrongOrig.length===0){ showToast('No wrong/skipped questions — great job! 🎉'); return; }
  testQuestions = buildTestSet(wrongOrig);
  currentIndex = 0;
  answers = {};
  bookmarks = {};
  timeLeft = testQuestions.length * 60;
  startTime = Date.now();
  switchScreen('testScreen');
  renderQuestion();
  clearInterval(timerInterval);
  timerInterval = setInterval(tickTimer,1000);
}


function launchConfetti(){
  const colors = ['#2563EB','#059669','#F59E0B','#DC2626','#8B5CF6','#EC4899'];
  for(let i=0;i<70;i++){
    const p = document.createElement('div');
    p.style.cssText = `position:fixed;top:-10px;left:${Math.random()*100}vw;width:${6+Math.random()*6}px;height:${10+Math.random()*8}px;border-radius:3px;background:${colors[Math.floor(Math.random()*colors.length)]};opacity:.9;z-index:200;animation:fall ${2+Math.random()*2}s linear forwards;pointer-events:none;`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),4200);
  }
}
const styleTag = document.createElement('style');
styleTag.textContent = `@keyframes fall{to{transform:translateY(105vh) rotate(360deg);opacity:0}}`;
document.head.appendChild(styleTag);

/* Theme toggle */
document.getElementById('themeBtn').onclick = function(){
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme', isDark?'light':'dark');
  this.textContent = isDark? '🌙 Dark':'☀️ Light';
};

/* ================= 3D TILT — subject / chapter / featured cards =================
   Delegated on each .tilt-parent container so it keeps working after
   renderChapterGrid() rebuilds its children. Skipped on touch devices
   and for people who prefer reduced motion. */
(function(){
  const canHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!canHover || reduceMotion) return;

  function resetCard(c){
    c.style.transition = 'transform .5s cubic-bezier(.22,1,.36,1)';
    c.style.transform = '';
  }
  document.querySelectorAll('.tilt-parent').forEach(parent=>{
    parent.addEventListener('mousemove', function(e){
      const active = e.target.closest('.tilt-card');
      parent.querySelectorAll('.tilt-card').forEach(c=>{ if(c!==active) resetCard(c); });
      if(!active) return;
      const r = active.getBoundingClientRect();
      const px = (e.clientX - r.left)/r.width - 0.5;
      const py = (e.clientY - r.top)/r.height - 0.5;
      active.style.transition = 'transform .08s linear';
      active.style.transform = `perspective(700px) rotateX(${(-py*9).toFixed(2)}deg) rotateY(${(px*11).toFixed(2)}deg) translateY(-3px)`;
    });
    parent.addEventListener('mouseleave', function(){
      parent.querySelectorAll('.tilt-card').forEach(resetCard);
    });
  });
})();

/* ================= DASHBOARD ================= */
function refreshNavGamificationChips(){
  const xp = getXP();
  const streak = getStreak();
  const xpChip = document.getElementById('xpChip');
  const streakChip = document.getElementById('streakChip');
  if(xpChip) xpChip.textContent = `⭐ ${xp} XP`;
  if(streakChip) streakChip.textContent = `🔥 ${streak.count}`;
}

function showDashboard(){
  renderDashboard();
  switchScreen('dashboardScreen');
}

function renderDashboard(){
  const progress = getProgress();
  const bestList = Object.values(progress).map(r=>r.best).filter(Boolean);
  const chaptersTried = Object.keys(progress).length;
  const avgPct = bestList.length ? Math.round(bestList.reduce((s,b)=>s+b.pct,0)/bestList.length) : 0;
  const streak = getStreak();
  const xp = getXP();
  const level = getLevel(xp);
  const xpIntoLevel = xp % LEVEL_XP;

  document.getElementById('dashGreeting').textContent = student.name
    ? `Nice work, ${student.name.split(' ')[0]}! Here's how you're doing.`
    : 'Keep going — every attempt makes you sharper.';
  document.getElementById('dashCompleted').textContent = `${chaptersTried}/${activeChapters().length}`;
  document.getElementById('dashAvg').textContent = `${avgPct}%`;
  document.getElementById('dashStreak').textContent = streak.count;
  document.getElementById('dashXP').textContent = xp;
  document.getElementById('levelLabel').textContent = `Level ${level}`;
  document.getElementById('levelXpLabel').textContent = `${xpIntoLevel} / ${LEVEL_XP} XP`;
  document.getElementById('levelBarFill').style.width = `${(xpIntoLevel/LEVEL_XP)*100}%`;

  // Badges
  const earnedIds = computeEarnedBadgeIds();
  lsSet('cs_badges', earnedIds);
  const badgeGrid = document.getElementById('badgeGrid');
  badgeGrid.innerHTML = BADGE_DEFS.map(b=>`
    <div class="badge-card ${earnedIds.includes(b.id)?'unlocked':''}">
      <div class="b-icon">${b.icon}</div>
      <div class="b-name">${b.name}</div>
      <div class="b-desc">${b.desc}</div>
    </div>
  `).join('');

  // Chapter progress list
  const progList = document.getElementById('progressList');
  const rows = activeChapters().map((ch,i)=>{
    const rec = progress[ch.id];
    const pct = rec && rec.best ? rec.best.pct : 0;
    return `<div class="progress-row">
      <div class="p-name">${SUBJECT_INFO[currentSubject].unitLabel} ${i+1}: ${ch.name}</div>
      <div class="p-bar"><div class="p-fill" style="width:${pct}%"></div></div>
      <div class="p-pct">${pct}%</div>
    </div>`;
  }).join('');
  progList.innerHTML = rows || `<div class="dash-empty">No attempts yet. Start a chapter to see your progress here!</div>`;

  // Your best attempts (personal history, this device/account only)
  const board = getLeaderboard();
  const lbEl = document.getElementById('leaderboardTable');
  if(board.length===0){
    lbEl.innerHTML = `<div class="dash-empty">No attempts recorded yet. Complete a test to see your best scores here!</div>`;
  } else {
    const top = board.slice().sort((a,b)=> b.pct - a.pct || a.elapsed - b.elapsed).slice(0,10);
    lbEl.innerHTML = top.map((e,i)=>{
      const rankCls = i===0?'r1':i===1?'r2':i===2?'r3':'';
      const mm = Math.floor(e.elapsed/60), ss = e.elapsed%60;
      return `<div class="lb-row">
        <div class="lb-rank ${rankCls}">${i+1}</div>
        <div class="lb-info">
          <div class="lb-name">${e.name} <span style="color:var(--muted);font-weight:600">(${e.cls})</span></div>
          <div class="lb-meta">${e.chapterName} • ${mm}:${ss.toString().padStart(2,'0')}</div>
        </div>
        <div class="lb-score">${e.pct}%</div>
      </div>`;
    }).join('');
  }

  renderGlobalLeaderboard();
}

/* ---- class-wide leaderboard, read from the shared Firestore 'leaderboard' collection ---- */
async function renderGlobalLeaderboard(){
  const el = document.getElementById('globalLeaderboardTable');
  if(!el) return;
  if(CLOUD.mode !== 'cloud'){
    el.innerHTML = `<div class="dash-empty">Sign in with Google to see the class-wide leaderboard.</div>`;
    return;
  }
  try{
    const snap = await fbDB.collection('leaderboard').orderBy('xp','desc').limit(20).get();
    if(snap.empty){
      el.innerHTML = `<div class="dash-empty">No one has appeared on the class leaderboard yet — be the first!</div>`;
      return;
    }
    let i = 0;
    el.innerHTML = snap.docs.map(doc=>{
      const d = doc.data();
      const rankCls = i===0?'r1':i===1?'r2':i===2?'r3':'';
      const isMe = doc.id === CLOUD.uid;
      i++;
      return `<div class="lb-row" style="${isMe ? 'background:rgba(var(--glow-rgb),.08);border-radius:12px' : ''}">
        <div class="lb-rank ${rankCls}">${i}</div>
        <div class="lb-info">
          <div class="lb-name">${d.name || 'Student'} <span style="color:var(--muted);font-weight:600">(${d.cls || '-'})</span>${isMe ? ' <span style="color:var(--primary);font-weight:700">— you</span>' : ''}</div>
          <div class="lb-meta">Level ${d.level || 1} • ${d.testsCompleted || 0} tests completed</div>
        </div>
        <div class="lb-score">${d.xp || 0} XP</div>
      </div>`;
    }).join('');
  }catch(e){
    console.warn('Global leaderboard load failed', e);
    el.innerHTML = `<div class="dash-empty">Couldn't load the class leaderboard right now.</div>`;
  }
}

/* ================= KEYBOARD NAVIGATION ================= */
document.addEventListener('keydown', (e)=>{
  const testScreenEl = document.getElementById('testScreen');
  if(!testScreenEl || testScreenEl.classList.contains('hidden')) return;
  if(!document.getElementById('submitModal').classList.contains('hidden')) return;
  const key = e.key.toLowerCase();
  const map = {'1':0,'2':1,'3':2,'4':3,'a':0,'b':1,'c':2,'d':3};
  if(map[key]!==undefined){
    const opts = document.querySelectorAll('#optionsWrap .option');
    if(opts[map[key]]){
      const rect = opts[map[key]].getBoundingClientRect();
      opts[map[key]].onclick({clientX: rect.left+rect.width/2, clientY: rect.top+rect.height/2});
    }
  } else if(e.key==='Enter' || e.key==='ArrowRight'){ nextQ(); }
  else if(e.key==='ArrowLeft'){ prevQ(); }
});

/* ================= PWA SERVICE WORKER REGISTRATION ================= */
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{ /* fine if sw.js isn't hosted alongside this file */ });
  });
}

/* ================= INITIAL SETUP ================= */
(function initPreferences(){
  soundOn = lsGet('cs_sound_on', true);
  const soundBtn = document.getElementById('soundBtn');
  if(soundBtn) soundBtn.textContent = soundOn ? '🔊' : '🔇';
  applyFontSize(lsGet('cs_fontsize','normal'));
  refreshNavGamificationChips();
})();
