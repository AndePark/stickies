# stickies

## React + Spring + Stripe 
### Sticker generation web app that lets users create custom sticker art or choose a sticker in our default library 
### User can upload an image and/or text that will be used to create custom AI sticker image, the image is then shared with user and if they are happy they can choose size & quantity
### The image gets sent to online sticker maker which returns a quote 
### If user is good to proceed, Stripe does payment and online sticker maker does the printing and shipping 


## Front
### User logs in 
### User can create custom stickers using input where they can upload images and/or text
### User can also choose from default library 
### Custom input requires user to choose style and tone (for now)
### Send custom input to backend 
### User get images, if they like it they choose size & quantity 
### Send image + data to online sticker maker to get an estimated quote 
### User uses Stripe for payment and online sticker maker prints and ships to user 

## Back
### User credentials and users custom library are stored 
### Send user input to OpenAI 
### Return custom image to frontend 