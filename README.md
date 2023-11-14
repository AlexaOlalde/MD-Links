# MD-Links

## Index

1. Preamble
2. Project Summary
3. Project Development
   3.1 Milestone 1
   3.2 Milestone 2
4. Code
5. Unit Tests
6. Applied Technologies
7. Useful Links

## 1. Preamble

Markdown is a lightweight markup language widely used among developers. It is employed on numerous platforms that handle plain text (GitHub, forums, blogs, etc.), and Markdown files are commonly found in various repositories.

These Markdown files often contain links that are sometimes broken or no longer valid, negatively impacting the value of the shared information.

## 2. Project Summary

**MD-Links** is a project created in **Node.js**. It involves developing a library within this execution environment that reads and analyzes files in Markdown format. The goal is to verify the links contained in these files and report some statistics.

## 3. Project Development

The library creation was divided into **Milestones**—only two were completed for this specific case—each with different learning objectives. The project started with a **[flowchart](https://drive.google.com/file/d/1p7CdKb1bkysDrknYdf-B4cLAfCb3CypI/view)** outlining the steps to follow for Milestones 1 and 2, illustrating the functionality of our library.

<a href="https://ibb.co/V32bnMH"><img src="https://i.ibb.co/jHgq03V/Md-Links-chartflow.png" alt="Md-Links-chartflow" border="0"></a>

To enhance project performance, **GitHub** was used as a time management and planning tool through a _[Project](https://github.com/users/AlexaOlalde/projects/1)_, with two Milestones (one for each milestone) containing various issues.

<a href="https://ibb.co/XWq0zJJ"><img src="https://i.ibb.co/PrdX5CC/projects-github.png" alt="projects-github" border="0"></a>

<a href="https://ibb.co/YtDqyFY"><img src="https://i.ibb.co/mHvMXV1/issues-github.png" alt="issues-github" border="0"></a>

### **3.1 Milestone 1**

In this initial phase, the following tasks were completed:

- Create the `mdLinks` promise.
- Transform the input path to absolute.
- Verify that the path exists in the system.
- Confirm that the file is of type **Markdown**.
- Read the file content using the `readMkdwnFile` function.
- Identify the links within the document using `isMdwnExtension`.
- Extract the links into an array using `extractMarkdownLinks`.
- Create tests for each function in this milestone.

### **3.2 Milestone 2**

The second stage of the project includes a single function and its test:

- Generate the function to validate the links using `validateLinks`.
- Implement tests for the function using mocks for **[Axios](https://axios-http.com/docs/intro)**.

## 4. Code

The project's code is based on the modularization (**CommonJS**) of functions, aiding in organizing and structuring code in separate JS files. There are three main sections defining the functionality of our library:

**lib**: Contains files such as `mdlinks.js`, `readFile.js`, `verifyExtension.js`, `extractfile.js`, and `validatelinks.js`, housing the functions that bring the project to life.

**test**: Here, tests for both milestones are located.

**index.js**: Receives all information from the `mdLinks` function and returns a promise. Upon successful resolution, the information is displayed; otherwise, it is rejected.

It's worth noting the use of the **Axios** JavaScript library, utilized for making **HTTP** requests from **Node.js**, implemented in the validation function of Milestone 2.

### 4.1 Functions

As mentioned earlier, each task in our project is assigned a function. The functions are detailed below:

1. In the **mdlinks.js** file, the `mdLinks` promise is created, serving to perform asynchronous operations in a controlled manner and manage the program's execution flow. Other functions related to file reading, extension verification, Markdown link extraction, and validation are executed here.

2. In `readFile.js`, the `readMkdwnFile` function resides, returning a new promise with the `fs.readfile` method, providing an array with the contents of the Markdown file or an error if no content exists.

3. The `isMdwnExtension` function verifies if a file has an extension corresponding to a Markdown file. It defines an array containing a list of Markdown file extensions, then checks if the extension of the provided path parameter matches these extensions, returning _true_ if it does and _false_ otherwise.

4. `extractMarkdownLinks` uses a regular expression to find matches in the Markdown file, employing a `while` loop to execute the regular expression and extract each found link. After extracting these links, it saves them in an object with keys `text`, `href`, and `file`. Finally, this function returns a new array of objects with corresponding keys and values.

Once the aforementioned array is created, it is passed to Milestone 2, where only one function is needed:

5. `validateLinks` receives an array of objects and validates their status for each link using the **Axios** library, allowing for HTTP requests from JavaScript. This function returns an array of promises to wait for all requests to complete before returning the results. It verifies the status of each HTTP link in an array of objects and updates each link with its respective status information.

In general, these functions provide utilities for working with files, validating links, and obtaining the status of URLs.

## 5. Testing

Our project also includes a set of tests (written by myself) for the functions `readMkdwnFile`, `isMdwnExtension`, `extractMarkdownLinks`, and `validateLinks`.

These tests also helped detect some **Eslint** errors, and as seen in the following image, the coverage reached almost 100% in all aspects.

**_Coverage_**
<a href="https://ibb.co/j8ThwZC"><img src="https://i.ibb.co/fX2MNG3/test-coverage-mdlinks.png" alt="test-coverage-mdlinks" border="0"></a>

## 6. Technologies Used

- **JavaScript:** Implements functionality to analyze entered text and display results.
- **Node.js:** A server-side JavaScript execution environment.
- **CommonJS:** Modules are used to organize and structure code in separate JS files. `module.exports` is used to export functions and variables from the module, and `require('./module')` is used to import the module into another file.
- **fs Module:** Interacts with the file system.
- **path Module:** Works with file and directory paths.
- **Axios:** Library for making HTTP requests.
- **EsLint:** Linting tool for JavaScript.
- **Jest:** Testing framework for JavaScript.

## 7. Useful Links

[Promesas – JavaScript hecho fácil](https://www.youtube.com/watch?v=ZTC0Gfhdzfc&t=156s)

[Arrays, map, forEach, reduce y mucho más!](https://www.youtube.com/watch?v=J9vUZu6edBA)

[Así funcionan las Promesas y async/await en JavaScript](https://www.youtube.com/watch?v=6O8ax3JYboc)

[Node.js v6.17.1 Documentation](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html)

[Node.js v21.2.0 documentation](https://nodejs.org/docs/latest/api/modules.html)

[Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[How to Write a JavaScript Promise](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)

[Tests de código asíncrono](https://jestjs.io/es-ES/docs/asynchronous)

[Introducción al testing desde cero con Jest](https://www.youtube.com/watch?v=_DzBez4qMi0&ab_channel=midudev)

[Aprende cómo aplicar Jest Mock paso a paso fácil y sin dolor](https://developero.io/blog/jest-mock-module-function-class-promises-axios-y-mas)

[Cómo crear pruebas unitarias con JEST](https://4geeks.com/es/lesson/how-to-create-unit-testing-with-Javascript-and-Jest-es)
