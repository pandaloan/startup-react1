# 9-16-23 - First Notes
Today I learned about GitHub from my first GitHub assignment. I learned that I need to stage, commit, and push when making changes to either a local machine or GitHub. I need to pull changes from either file to get them. Don't alter both files without committing and pushing, but if you do, merge conflicts can be handles in VS Code and probably in GitHub. Keep files in the 'startup' Git Repository.

# 9-22-23 - Terminal
- vi - to enter insert mode, press i. to return to command mode, press esc. to exit from command mode, press q. 
- To save and quit, be in command mode, then type :wq
- place single quotes '' around files and directories that have spaces in their names when entering them into the terminal
- cd .. to go to parent directory


# 9-22-23 - Server
- Stopping a server is NOT the same as terminating it
- Assigning an elastic IP address will change the IP address for your server, but it will not change again until you release the elastic IP address. If you do terminate your server and create a new one, you can again associate the same elastic IP address with your new server.
- Note that your elastic IP address is allocated until your release it, not until you terminate your instance. So make sure you release it when you no longer need it. Otherwise you will get a nasty $3 bill every month.

# 10-14-23 - Deployment
- enter in terminal to deploy to startup: (deploy while in startup directory)
./deployFiles.sh -k ~/[key file directory] -h albinochipmunk.click -s startup
- to deploy to simon: (deploy while in Simon/simon-css or simon-html or simon-whatever)
./deployFiles.sh -k ~/[key file directory] -h albinochipmunk.click -s startup

# 10-14-23 - Comments
- <!----> to comment in html
- /**/ to comment in css

# 10-14-23 - CSS
- use sticky head and footer
- make sure home login button works

# 10-14-23 - short javascript program - array assignment
  function testAll(input, tester) { //if tester is true for each value of input, testAll returns true
  const result = input.every(tester) // Your code here
  return result
  }

  const result = testAll(['a', 'b', 'c', 'd'], (theInput) => theInput.length > 3); //if theInput > 3, arrowFunction returns true

  console.log(result);

  # Midterm Study Guide questions and answers
  1. The link HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
     The link tag defines the relationship between the current document and an external resource. The link tag is most often used to link to external style sheets or to add a favicon to your website. The link element is an empty element, it contains attributes only.
  
  2. The div tag defines a division or a section in an HTML document. The div tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript. The div tag is easily styled by using the class or id attribute. Any sort of content can be put inside the div tag! Note: By default, browsers always place a line break before and after the div element.
  
  3. The dot(.) and hash(#) both of them are used as CSS selectors. Both selectors are used to select the content to set the style. CSS selectors select HTML elements according to their id, class, type, attribute, etc.
Id selector(“#”): The id selector selects the id attribute of an HTML element to select a specific element. An id is always unique within the page so it is chosen to select a single, unique element. It is written with the hash character (#), followed by the id of the element. 

    Syntax: 

#element_id_name{
  // CSS properties
}

Class Selector(“.”): The class selector selects HTML elements with a specific class attribute. It is used with a period character “.” (full stop symbol) followed by the class name. 

    Syntax: 

.element_class_name{
  // CSS properties
}

4. CSS box model

Margin and padding are the components of the CSS box model, a design specificity related to any HTML element. These boxes of multi-layered elements are combined to form a single layout of the web page. 

In general, box model usually contains four components:

    Content is the core of the box. It’s around the content the other layers are built. Content can have different visualizations: it can be text, image, icon or something else.
    Padding is the space between content and border, which is the next component of the box.
    Border is a visible or invisible line around the edge of the box. 
    Margin is the outer space around the box.

For better visibility, let’s look at the picture below, which gives a general presentation box model.
https://aheadworks.com/media/Blog/shopify/Translation_6_.png

5. The flex property is a shorthand property for:

flex-grow
flex-shrink
flex-basis
The flex property sets the flexible length on flexible items.

Note: If the element is not a flexible item, the flex property has no effect.

flex-grow	- A number specifying how much the item will grow relative to the rest of the flexible items	
flex-shrink -	A number specifying how much the item will shrink relative to the rest of the flexible items	
flex-basis - The length of the item. Legal values: "auto", "inherit", or a number followed by "%", "px", "em" or any other length unit	
auto - Same as 1 1 auto.	
initial -	Same as 0 1 auto. Read about initial	
none -	Same as 0 0 auto.	
inherit	- Inherits this property from its parent element.

Example
Using flex together with media queries to create a different layout for different screen sizes/devices:

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item-left {
  flex: 50%;
}

.flex-item-right {
  flex: 50%;
}

/* Responsive layout - makes a one column layout (100%) instead of a two-column layout (50%) */
@media (max-width: 800px) {
  .flex-item-right, .flex-item-left {
    flex: 100%;
  }
}

general flex info:
Default value:	0 1 auto
Inherited:	no
Animatable:	yes, see individual properties. Read about animatable
Version:	CSS3
JavaScript syntax:	object.style.flex="1"

6. CSS padding: Padding is used to create space around an element's content, inside of any defined borders.
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

Padding - Individual Sides
CSS has properties for specifying the padding for each side of an element:

padding-top
padding-right
padding-bottom
padding-left
All the padding properties can have the following values:

length - specifies a padding in px, pt, cm, etc.
% - specifies a padding in % of the width of the containing element
inherit - specifies that the padding should be inherited from the parent element
Note: Negative values are not allowed.

7. Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;

Before Arrow:
hello = function() {
  return "Hello World!";
}

With Arrow Function:
hello = () => {
  return "Hello World!";
}

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

Arrow Functions Return Value by Default:
hello = () => "Hello World!";

Note: This works only if the function has only one statement.

If you have parameters, you pass them inside the parentheses:

Arrow Function With Parameters:
hello = (val) => "Hello " + val;

In fact, if you have only one parameter, you can skip the parentheses as well:

Arrow Function Without Parentheses:
hello = val => "Hello " + val;

8. Multiply all the values in an array with 10:

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
More examples below.

Description
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.

See Also:
The Array filter() Method

The Array forEach() Method

Syntax
array.map(function(currentValue, index, arr), thisValue)
Parameters:
Parameter and	Description:
function() -	Required. A function to be run for each array element.
currentValue -	Required. The value of the current element.
index -	Optional. The index of the current element.
arr	 -Optional. The array of the current element.
thisValue	- Optional. Default value undefined.
A value passed to the function to be used as its this value.
Return Value:
Type	and Description:
An array -	The results of a function for each array element.

9. HTML DOM Document getElementById()
Example: Get the element with the specified id: document.getElementById("demo");

The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element. Note: Any id should be unique, but: If two or more elements with the same id exist, getElementById() returns the first.
See Also:
The getElementsByTagName() Method
The getElementsByClassName() Method
The querySelector() Method
The querySelectorAll() Method

JavaScript HTML DOM EventListener:
The addEventListener() method
Example: Add an event listener that fires when a user clicks a button: document.getElementById("myBtn").addEventListener("click", displayDate);
The addEventListener() method attaches an event handler to the specified element.
The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
You can add many event handlers to one element.
You can add many event handlers of the same type to one element, i.e two "click" events.
You can add event listeners to any DOM object not only HTML elements. i.e the window object.
The addEventListener() method makes it easier to control how the event reacts to bubbling.
When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.
You can easily remove an event listener by using the removeEventListener() method.
Syntax:velement.addEventListener(event, function, useCapture);
The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
The second parameter is the function we want to call when the event occurs.
The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".

Add an Event Handler to an Element
Example: Alert "Hello World!" when the user clicks on an element: element.addEventListener("click", function(){ alert("Hello World!"); });
You can also refer to an external "named" function: Example: Alert "Hello World!" when the user clicks on an element: element.addEventListener("click", myFunction);
function myFunction() {
  alert ("Hello World!");
}

10. The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
example:
HTML
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log("#foo\bar"); // "#fooar" (\b is the backspace control character)
  document.querySelector("#foo\bar"); // Does not match anything

  console.log("#foo\\bar"); // "#foo\bar"
  console.log("#foo\\\\bar"); // "#foo\\bar"
  document.querySelector("#foo\\\\bar"); // Match the first div

  document.querySelector("#foo:bar"); // Does not match anything
  document.querySelector("#foo\\:bar"); // Match the second div
</script>

javascript example:
in this example, the first element in the document with the class "myclass" is returned:
JS
const el = document.querySelector(".myclass");

Complex selectors
Selectors can also be really powerful, as demonstrated in the following example. Here, the first <input> element with the name "login" (<input name="login"/>) located inside a <div> whose class is "user-panel main" (<div class="user-panel main">) in the document is returned:

JS
const el = document.querySelector("div.user-panel.main input[name='login']");
Negation
As all CSS selector strings are valid, you can also negate selectors:

JS
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']",
);

11. The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.

> document
<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
p {
  color: red;
}

For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

Accessing the DOM

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree.

function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);

You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.

const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}

Modifying the DOM

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');

To delete elements call the removeChild function on the parent element.

function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');

Injecting HTML

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.

const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';

However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

<img src="bogus.png" onerror="console.log('All your base are belong to us')" />

If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.
Event Listeners

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.

const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});

There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.
Event Category 	Description
Clipboard 	Cut, copied, pasted
Focus 	An element gets focus
Keyboard 	Keys are pressed
Mouse 	Click events
Text selection 	When text is selected

You can also add event listeners directly in the HTML. For example, here is a onclick handler that is attached to a button.

<button onclick='alert("clicked")'>click me</button>

12. The span tag is an inline container used to mark up a part of a text, or a part of a document. The span tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute. The span tag is much like the div element, but div is a block-level element and span is an inline element.

13. CSS:
    div {
  background-color: red;
}

14. display an image with a syperlink in HTML:
    Put the anchor tag <a href=””> before the image url, and </a> after. Paste the destination URL you want to add within the quotation marks for <a href=””>. Make sure you put “http://” before the link.
Follow the example below:
<a href=”https://www.google.com“> <img src=”your_image.gif” width=”100″ height=”132″> </a>

15. CSS box model: the ordering of the box layers starting at the inside and working out:
    content, padding, border, margin

16.

17.

18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green? see question 9
    Javascript: getElementById(id)
    
  javascript example:  
  function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
  }
  

19. Understanding the following tables:
Common HTML tags are presented below, organized into four tables based on their purpose. The first table includes tags that control the overall structure of the web page. The second and third tables include tags that mark up the majority of web page content. Container tags (those that contain content) are presented in the second table, and non-container tags (those that stand alone) are presented in the third table. The final table contains tags that are used in markup of HTML tables, which are covered in Module 5 of this unit.

Document Structure
Opening Tag	- Closing Tag	- Description
<html>	</html>	Opens and closes an HTML document
<head>	</head>	The first of two main sections of an HTML document. The <head> section is used to provide information about the document for use primarily by search engines and browsers.
<title>	</title>	The title of document. This element is nested inside the <head> section. In HTML5, this is the only required tag other than the DOCTYPE declaration.
<body>	</body>	The second of two main sections of an HTML document. The <body> section contains all the content of the web page.
Content (Container) Tags
Opening Tag	Closing Tag	Description
<h1> to <h6>	</h1>to</h6>	Headings. H1 is the main heading, H2 is secondary, etc.
<p>	</p>	Paragraph
<div>	</div>	A container for a block of content
<span>	</span>	A container for in-line content, such as content inside a paragraph.
<em>	</em>	Gives the contained text emphasis (usually as italics).
<strong>	</strong>	Makes the contained text bold.
<a href = "document location">	</a>	Link
<ol>	</ol>	Ordered (numbered) list
<ul>	</ul>	Unordered (bulleted) list
<li>	</li>	List item, must be nested inside a list element such as a <ol> or <ul>
<!--	-->	Comment. Anything between these tags is not displayed on the screen. This is useful for making notes to yourself or to others who may view the source code of the web page.
  
HTML5 Semantic Tags
HTML5 introduced several new tags called semantic tags. These tags were designed to communicate the function of blocks of content that were common on many web pages. Prior to HTML5, developers just used <div> tags for all blocks.
Opening Tag	- Closing Tag	- Description
<header>	</header>	Contains introductory content for a page (e.g., a banner), or a section of a page.
<nav>	</nav>	Contains navigation content, such as a website navigation menu.
<main>	</main>	Contains the main content of the web page.
<aside>	</aside>	Contains content that is tangentially related to the main content of the page (often this is presented in a sidebar).
<footer>	</footer>	Contains the footer of a page, or of a section of a page. Typically the footer contains information about the content, such as the author and a copyright statement.

Empty (Non-Container) Tags
Tag	- Description
<br />	Line break.
<img src ="image location" alt="alternate text" />	Inserts an image into a web page.

Tables
Opening Tag	- Closing Tag -	Sample Attributes -	Description
<table>	</table>	 	Adds a table
<tr>	</tr>	 	Table row (start & end).
<th>	</th>	scope="row"
scope="col"	When creating a table to display data, use this tag to differentiate the first row or column of cells as heading cells for all the other cells in the same column or row. Browsers typically display this element bold and centered within the table cell. The scope attribute defines whether this is a row header or column header.
<td>	</td>	 	Table data cell.
 	 	colspan="number"	Use with <th> or <td> elements. Spans cells across multiple columns.
 	 	rowspan="number"	Use with <th> or <td> elements. Spans cells across multiple rows.

https://www.washington.edu/accesscomputing/webd2/student/unit2/common_tags.html#:~:text=An%20opening%20tag%20begins%20a,the%20element%20with%20a%20%2F).

20. How do you declare the document type to be html?
    When starting a new HTML document, one of the first things to do is write your document type declaration. A doctype declaration tells the browser that the page to be rendered is written in HTML. To declare an HTML5 doctype, `<!DOCTYPE html>` is required in the first line of your HTML document. Doctype declaration for HTML5 is not case sensitive and does not require a closing tag.

21. Javascript syntax:
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}


while (i < 10) {
  text += "The number is " + i;
  i++;
}

     switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
} 

if (x) {let x = y}

JavaScript supports different kinds of loops:
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

22. A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).

const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}

The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.
Object-literals

You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object.

const obj = {
  a: 3,
  b: 'fish',
};

Object functions

Object has several interesting static functions associated with it. Here are some of the commonly used ones.
Function 	Meaning
entries 	Returns an array of key value pairs
keys 	Returns an array of keys
values 	Returns an array of values

const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']

Constructor

Any function that returns an object is considered a constructor and can be invoked with the new operator.

function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}

Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich

This pointer
Notice in the last example the use of the keyword this when we referred to the name property (this.name). The meaning of this depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the this pointer in the instruction on scope.

23. Is is possible to add new properties to javascript objects? yes.
Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.
https://www.w3schools.com/js/js_object_properties.asp#:~:text=Properties%20are%20the%20values%20associated,but%20some%20are%20read%20only.
Accessing JavaScript Properties:
The syntax for accessing the property of an object is:

objectName.property      // person.age
or

objectName["property"]   // person["age"]
or

objectName[expression]   // x = "age"; person[x]
The expression must evaluate to a property name.

24. If you want to include JavaScript on an HTML page, which tag do you use? The <script> Tag
In HTML, JavaScript code is inserted between <script> and </script> tags.

Example:
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

25.

26. which of the following is true about JSON?

    JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON, pronounced like the name Jason, received official standardization in 2013 and 2017 (ECMA-404, RFC 8259).

JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.
Format

A JSON document contains one of the following data types:
Type 	Example
string 	"crockford"
number 	42
boolean 	true
array 	[null,42,"crockford"]
object 	{"a":1,"b":"crockford"}
null 	null

Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

Here is an example of a JSON document.

{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}

JSON is always encoded with UTF-8. This allows for the representation of global data.
Converting to JavaScript

You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}

Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.

27. Console commands:
    
    echo - Output the parameters of the command
    cd - Change directory
    mkdir - Make directory
    rmdir - Remove directory
    rm - Remove file(s)
    mv - Move file(s)
    cp - Copy files
    ls - List files
    curl - Command line client URL browser
    grep - Regular expression search
    find - Find files
    top - View running processes with CPU and memory usage
    df - View disk statistics
    cat - Output the contents of a file
    less - Interactively output the contents of a file
    wc - Count the words in a file
    ps - View the currently running processes
    kill - Kill a currently running process
    sudo - Execute a command as a super user (admin)
    ssh - Create a secure shell on a remote computer
    scp - Securely copy files to a remote computer
    history - Show the history of commands
    ping - Check if a website is up
    tracert - Trace the connections to a website
    dig - Show the DNS information for a domain
    man - Look up a command in the manual

You can also chain the input and output of commands using special characters

    | - Take the output from the command on the left and pipe, or pass, it to the command on the right
    > - Redirect output to a file. Overwrites the file if it exists
    >> - Redirect output to a file. Appends if the file exists

For example, you can list the files in a directory, pipe it into grep to search for files created in Nov, and then pipe that into wc to count the number of files found with a date of Nov.

ls -l | grep ' Nov ' | wc -l

There are also keystrokes that have special meaning in the console.

    CTRL-R - Use type ahead to find previous commands
    CTRL-C - Kill the currently running command


The chmod (short for change mode) command is used to manage file system access permissions on Unix and Unix-like systems. There are three basic file system permissions, or modes, to files and directories:
    read (r)
    write (w)
    execute (x)
Each mode can be applied to these classes:
    user (u)
    group (g)
    other (o)
The user is the account that owns the file. The group that owns the file may have other accounts on the system as members. The remaining class, other (sometimes referred to as world), means all other accounts on the system. You can view the modes on files and directories by executing this command: ls -l

One of the primary purposes of a console application is to view the files on the computer. The files on a computer are organized into a tree structure of nodes called directories. At any given point in time your console is located at one of the directories in the file system. You can see which directory you are in with the pwd (present working directory) command.

➜  pwd

/Users/student/byu//webprogramming260

Vim stuff:
To use VI, open your console and change directory to one that holds some code you want to work on. For example, if you wanted to edit index.html you would type: vi index.html
The following short list of commands should allow you to do most of what you will ever want to do in VIM.
keystroke 	meaning
:h 	help
i 	enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.
u 	undo
CTRL-r 	redo
gg 	go to beginning of file
G 	go to end of file
/ 	search for text that you type after /
n 	next search match
N 	previous search match
v 	visually select text
y 	yank or copy selected text to clipboard
p 	paste clipboard
CTRL-wv 	Split window vertically
CTRL-ww 	Toggle windows
CTRL-wq 	Close current window
:e 	Open a file. Type ahead available. If you open a directory you can navigate it in the window
:w 	write file (save)
:q 	quit. Use :q! to exit without saving

The great thing about learning these commands is that you will find that they work with a lot of the POSIX console programs. For example, with the file viewing utility less you can use G and gg to jump to the top and bottom of a file. Here is a cheat sheet if you want to see all the commands.
how to close vim: press esc to enter normal mode, then press ":q!"

wget - Downloading files with wget is easy. Type wget followed by the file URL you wish to download to your command prompt app, and the download should begin after you press enter.

nano: Opening and Creating Files
To open an existing file or to create a new file, type nano followed by the file name: nano filename
close nano: ctrl + x

28. console command creates a remote shell session? ssh? rsh?
    To shell into production environment server: ssh -i ~/Documents/'CS 260'/'First Key Pair.pem' ubuntu@52.206.31.215

29. console command ls -la: You can list all of the files in the directory with ls (list files). Most command line applications take parameters that are specified after you type the application name. For example, ls can list all files (even hidden ones) in a long format if you provide the parameter -la.
total 16
-rw-r--r--  1 lee  staff   1.0K Nov 19 08:47 LICENSE
-rw-r--r--  1 lee  staff    82B Nov 19 08:47 README.md
drwxr-xr-x  4 lee  staff   128B Nov 19 08:48 profile
drwxr-xr-x  4 lee  staff   128B Nov 19 08:47 react

30. top level domain: .com, .click
    [subdomain.]*secondary.top
    root = secondary.top
    there can be an unlimited amount of subdomains, or at least more than one, as far as I understand.

31. Is a web certificate is necessary to use HTTPS? To use HTTPS with your domain name, you need a SSL or TLS certificate installed on your website. Your web host (Web Hosting Provider) may offer HTTPS security or you can request a SSL/TLS certificate from Certificate Authorities and install it yourself. SSL/TLS certificates may need to be renewed periodically.
    so, yes, i think you need a web certificate to use https


32. A DNS A record is the most fundamental type of DNS record. The A stands for “Address,” and it’s used to point a domain name to an IP address or host. You can only use an A record when you want to point to an IPv4 address. An AAAA record is required if you wish to direct your domain to an IPv6 address. 

The DNS A record points a domain name like google.com to the IP address of itsDNS hosting server, in this case, “74.125.224.147.” While most sites have a single A DNS record, it’s possible to have multiple records. 

Another vital aspect of a DNS A record is that you can use it (often with a CNAME record) to create a subdomain that also points to the same IP address, for instance, blog.example.com.

33. HTTPS is secure and is on port 443, while HTTP is unsecured and available on port 80. Information that travels on the port 443 is encrypted using Secure Sockets Layer (SSL) or its new version, Transport Layer Security (TLS) and hence safer. The TLS 1.2 is the latest version which has fixed several recent vulnerabilities.

Using HTTPS also helps minimize a Ransomware attack by identifying open ports and then blocking access with a firewall. It is highly advisable to access and transact on sites with HTTPS to protect yourself from malicious elements as it prevents your personal information, passwords, customer data, and business-critical data from being intercepted and stolen.

port 22 is for ssh (secure shell protocol)

34. javascript promises:
    Promises

📖 Deeper dive reading:

    MDN Using Promises
    MDN Promise

JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript Promise. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

    pending - Currently running asynchronously
    fulfilled - Completed successfully
    rejected - Failed to complete

You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2

Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.

console.log(coinToss);
// OUTPUT: Promise {<pending>}

If you then wait ten seconds and the log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.

console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}

Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either heads or tails.

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});

We then chain the then, catch and finally functions to the coinToss object in order to handle each of the possible results.

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed

The observer pattern
Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The Observer pattern, popularized by web programming frameworks such as Angular, use a model called Observer. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

Example pizza promise:
function pickupPizza() {
  const order = createOrder();

  // Promise
  placeOrder(order)
    .then((order) => makePizza(order))
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });
}

function createOrder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] &#128523; <i>Waiting</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

function placeOrder(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
  });
}

function makePizza(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `pizza eaten by raccoon`);
  });
}

function doWork(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.85) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function serveOrder(order) {
  order.element.innerHTML = `<span>[${order.id}] &#127829; <b>Served</b>!</span>`;
}

function orderFailure(order) {
  order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
}

original pizza:
/ Promise
  placeOrder(order)
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });


async/await pizza:
/*function pickupPizza() {
  const order = createOrder();

  // Promise
  placeOrder(order)
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });
}*/

//async/await version of pickupPizza)()
async function pickupPizza() {
  const order = createOrder();
  try {
    await placeOrder(order);
    //await makePizza(order)
    serveOrder(order);
  } catch (order) {
    orderfailure(order);
  }
}

function createOrder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] &#128523; <i>Waiting</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

function placeOrder(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
  });
}

function doWork(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.85) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function serveOrder(order) {
  order.element.innerHTML = `<span>[${order.id}] &#127829; <b>Served</b>!</span>`;
}

function orderFailure(order) {
  order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
}

async/await original pizza:

function pickupPizza() {
  const order = createOrder();

  // Promise
  placeOrder(order)
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });
}

function createOrder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] &#128523; <i>Waiting</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

function placeOrder(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
  });
}

function doWork(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.85) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function serveOrder(order) {
  order.element.innerHTML = `<span>[${order.id}] &#127829; <b>Served</b>!</span>`;
}

function orderFailure(order) {
  order.element.innerHTML = `<span> [${order.id}] &#128544; <b class='failure'>Failure</b>! ${order.error}</span>`;
}

# Final
# 11-4-23
- URL: <scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
Part 	- Example 	- Meaning
Scheme - 	https 	- The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
Domain - name 	- byu.edu 	The domain name that owns the resource represented by the URL.
Port 	- 3000 	- The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
Path 	- /school/byu/user/8014 	- The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
Parameters 	- filter=names&highlight=intro,summary 	The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
Anchor 	- summary 	- The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.

Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.
URL, URN, and URI
You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

- Ports:
Port 	Protocol
20 	File Transfer Protocol (FTP) for data transfer
22 	Secure Shell (SSH) for connecting to remote devices
25 	Simple Mail Transfer Protocol (SMTP) for sending email
53 	Domain Name System (DNS) for looking up IP addresses
80 	Hypertext Transfer Protocol (HTTP) for web requests
110 	Post Office Protocol (POP3) for retrieving email
123 	Network Time Protocol (NTP) for managing time
161 	Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194 	Internet Relay Chat (IRC) for chatting
443 	HTTP Secure (HTTPS) for secure web requests

Use port 4000 for your startup service. Simon uses port 3000 for its service, and they can't use the same port.

- HTTP:
There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.
Verb 	Meaning
GET 	Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
POST 	Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT 	Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
DELETE 	Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS 	Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.

Status codes

It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

    1xx - Informational.
    2xx - Success.
    3xx - Redirect to some other location, or that the previously cached resource is still valid.
    4xx - Client errors. The request is invalid.
    5xx - Server errors. The request cannot be satisfied due to an error on the server.

Within those ranges here are some of the more common codes. See the MDN documentation for a full description of status codes.
Code 	Text 	Meaning
100 	Continue 	The service is working on the request
200 	Success 	The requested resource was found and returned as appropriate.
201 	Created 	The request was successful and a new resource was created.
204 	No Content 	The request was successful but no resource is returned.
304 	Not Modified 	The cached version of the resource is still valid.
307 	Permanent redirect 	The resource is no longer at the requested location. The new location is specified in the response location header.
308 	Temporary redirect 	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400 	Bad request 	The request was malformed or invalid.
401 	Unauthorized 	The request did not provide a valid authentication token.
403 	Forbidden 	The provided authentication token is not authorized for the resource.
404 	Not found 	An unknown resource was requested.
408 	Request timeout 	The request takes too long.
409 	Conflict 	The provided resource represents an out of date version of the resource.
418 	I'm a teapot 	The service refuses to brew coffee in a teapot.
429 	Too many requests 	The client is making too many requests in too short of a time period.
500 	Internal server error 	The server failed to properly process the request.
503 	Service unavailable 	The server is temporarily down. The client should try again with an exponential back off.



