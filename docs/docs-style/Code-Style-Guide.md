# Bad Reads Style Guide Draft

## General Thoughts
---
- **Software is craftmanship**
- **Clean code should be elegant**
    - Should be pleasing not frustrating to read
- **Clean code should be focused**
    - Every Function, every Class and every Module has a single task
    - It should be undistracted and unpolutted by other details
    - Ex: Unix philosophy of software development: Modular design
- **Clean code should be "taken care of"**
    - Simple and orderly
    - Concise and thoughtfully structured
    - Maintainable and sustainable
- **Tested**
    - Each Milestone should have tests written for it.
    - All the written tests have to continue to pass as new features are added.
- **Keep it DRY (Don't Repeat Yourself)**

## Naming Preferences
---

### Class Names
    - Written in TitleCase
        - Upper case first letter & singular
            - Ex: Dog, Cat, DogSitter, CatWrangler
    - Should be nouns
        - Ex: Dog, Cat, WikiPage, Account
    - Should not be verbs
        - They are not actions

### Method/Function Names
    - Written in camelCase
        - Ex: cookieParser(), toString()
    - Should be verbs
        - They are acting on something
    - Zoom In Naming Specificity
        - Should increment in length and specificity as scope is narrowed
        - Global Functions are general
            -  Ex: const gatherIngredients()
        - Helper Functions are longer and more specific
            - Ex: const spreadMustardOnBread()
    - A function should not take in more than three arguments
        - If more than 3 are needed, it is best to create a Class that has method calls
    - Functions with similar purposes should follow a pattern with based upon their action.     Stick to it:
        - Ex: getCatImage(), getTacos(), getALife()
          vs. fetchCatImage(), fetchTacos(), fetchALife(), fetchWillHappen()

### Variable Names
    - Written in camelCase
    - Zoom Out Naming Specificity
        - Should increment in length and specificity as scope is broadened
            - Global Variables are more specific
            - Variables nested within a function become more generally named even though their application is more specific

### Variable Name Example
    - Top Level Variable: userNameList
        - specific collection of a kind of name
    - Mid Level Variable: name
        - a generic name
    - Low Level Variable: letter
        - a generic character

### File Names
    - Lower case hyphen separated
        - Ex: this-is-the-style-guide.js

## Code Structure 
---

- All Requirements should be written at the top of the file.
- If possible use only const as a declaration to reduce the likelyhood of unexpected behavior.
- All global variables should be written directly underneath the require statements.
- All function declarations should go underneath the global variables.
- All acting functions, the functions that are directly called, should be at the bottom of the file, after the function declarations.

