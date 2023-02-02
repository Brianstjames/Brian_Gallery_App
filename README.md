# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Brian's Gallery App

## Available Scripts
This application is designed to allow users to search for different images of kites. The user will sign-in/sign-up then be routed to the images page where they can choose their favorite image out of a set. The image chosen will then be considered their favorite and can be found on the user's favorites page.

In the project directory, you can run:

### `npm start`
## Tech Stack
React 
Redux
CSS
Bootstrap
shutterstock-api

## Stretch Goals
Get image page to display sets of kites with one click of button
Get favorites page to done

##Author
Brian Ayiteyfio

##Github link
https://github.com/Brianstjames/Brian_Gallery_App.git

## Code Examples
This is the reudcer which sets up the state because the action.type that was chosen is the increment count. Then we want to use a spread operator (...) to be able to change the state. We are taking the initial count(which is 0 and we set it to that on line 5) and adding to it whatever number we pass into our incrementCount function.

const reducer = (state,action) => {
     if(state === undefined){
        state = {
            count: 0
        }
    }

    switch(action.type){
        case "INCREMENT":
            return{
                ...state,           
                count: state.count + action.data    
            }
        case "DECREMENT":
            return{
                ...state,
                count: state.count - action.data 
            }
        default:
            return state
    }
}

export default reducer





Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
