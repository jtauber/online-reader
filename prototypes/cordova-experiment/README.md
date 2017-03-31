```
npm install -g cordova
cordova create hello com.example.hello HelloWorld
cd hello/
cordova platform add ios --save
cordova platform add osx --save
cordova requirements
```

You'll need to install Xcode. If you only had CommandLineTools before, you'll probably get

```
xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
```

and the solution is to do `sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer` after you've installed and run Xcode.

Then you can do `npm install -g ios-deploy`.

I finally (according to output of `cordova requirements`) had to install CocoaPods (which I did with `sudo gem install cocoapods` but check what `cordova requirements` and the CocoaPods site tell you to do).

Finally make sure `cordova requirements` is now happy.

And run:

```
cordova build
```
