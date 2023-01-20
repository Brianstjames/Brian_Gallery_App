import { useNavigate } from 'react-router-dom';

export default function Auth(props) {

    const isLoggedIn = true;
    const navigate = useNavigate();
    
    if(!isLoggedIn){
        alert ('Login error, Please try again!')
        navigate('/');
    }

    return props.children
}

// The Auth component is a Higher Order Component (HOC) that checks if the user is logged in and, 
// if not, redirects them to the root path. The useNavigate hook is a part of the react-router-dom library, 
// and it provides a way for your component to navigate to a different route programmatically. In this case, 
// if the user is not logged in, the navigate function is called with the root path '/' as an argument, 
//  which will cause the router to navigate to the root path. The props.children is being returned inside the Auth component, 
//  which means that any components that are rendered inside of Auth will be rendered as children of Auth. 
//  This is a common pattern in HOCs, where the HOC wraps the child components and adds additional functionality.
// For example, if you have a component called Profile that is rendered inside of Auth, it would look something like this: 

// <Auth>
//   <Profile />
// </Auth>
  