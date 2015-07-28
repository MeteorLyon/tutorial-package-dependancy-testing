Tutorial package dependancy testing
===================================

= Introduction

The aim of the application is to find a solution on how testing packages. It might be simple, but when package depends
on other packages (or on some vars used internally) it became harder to test because stubs and mocks are... rather 
impossible to do.

Use this package to find the best way to do that.

In packages you will find child, parent and tobetested packages. All three have tests.
Child is a standalone package.
Parent depends on Child.
TobeTested depends on Parent.

Each one has one specific collection defined globally and exposed via api.export.
We try to test 

 * PackageParent (object with 2 methods) from parent package
 * PackageParent from tobetested package because this one has added one more method
 
Each time we have one problem : the code depends on the Collections. But because they are exposed throught api.export it 
seems impossible to stubs / mock them. 

= Installation

If you are on windows or linux : 

    edit package.json and set scripts.test to bin/test.sh or bin \\test.bat
    
Copy the package.dist.json into package.json

    cp package.dist.json package.json

= Usage

Test the child package with :

    edit package.json and set config.testpackagename to "child"
    npm test
    open your browser to the required url (localhost:3000) and test should be green

Test the parent package with :

    edit package.json and set config.testpackagename to "parent"
    npm test
    open your browser to the required url (localhost:3000) and 2 tests should be green, and 1 test should be red
    The aim here is to find a way to stubs or mock the variable Parent. The implementation tryed in tests/server.js is
    unsuccessful

Test the tobetested package with :

    edit package.json and set config.testpackagename to "tobetested"
    npm test
    open your browser to the required url (localhost:3000) and 2 tests should be green, and 1 test should be red
    The aim here is to find a way to stubs or mock the variable Parent. The implementation tryed in tests/server.js is
    unsuccessful
