#Tutorial package dependancy testing

##Introduction

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

I have explore 2 solutions. You will find them in feature/namespaceGlobals and feature/useTestCollections. 

The first one use a main object to store Collections like this :

    var OneCollection = new Meteor.Collections('oncollection');
    MyApp.Collections.set('oneCollection', OneCollection);
    --- in another file, retreive your collection with : --
    var OneCollection = MyApp.Collections.get('oneCollection');
    
Main disadvantages are :

* you have to do `var oneCollection = MyApp.Collections.get('oneCollection');` in every function/methods you used onCollection
* you lose auto completion from your favorite IDE

The second one use persitency with MongoDb. So in a setup.js file you can clean all your database and create insert only
what you need for the tests. It's possible if you can change the mongo collection name dynamically, or in other case it 
will erase all your datas... In my project i always use NPM to start or test my apps, so it allows me to declare a 
standard settings file and a test settings file. Then my Collections are declared like this :

    new OneCollection = new Meteor.Collections(Meteor.settings.config.collections.prefix + '-onecollection');
    
Main disadvantages are :

* you still use global variable for your collections

##Installation

If you are on windows or linux : 

    edit package.json and set scripts.test to bin/test.sh or bin \\test.bat
    
Copy the package.dist.json into package.json

    cp package.dist.json package.json

##Usage

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
