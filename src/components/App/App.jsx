import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import RegisterPage2 from "../RegisterPage/RegisterPage2";
import RegisterPage3 from "../RegisterPage/RegisterPage3";
import RegisterPage4 from "../RegisterPage/RegisterPage4";

import "./App.css";

import Resources from "../Resources/Resources/Resources";
import AddResource from "../Resources/AddResourceDialog/AddResourceDialog";
import AvailableMentors from "../Mentors/AvailableMentors";
import Profile from "../Profile/Profile";
import MentorDetails from "../Mentors/MentorDetails";
import GendersList from "../Admin/Genders/GendersList/GendersList";
import SchoolsList from "../Admin/Schools/SchoolsList/SchoolsList";
import InterestsList from "../Admin/Interests/InterestsList/InterestsList";
import AdminPage from "../Admin/AdminPage/AdminPage";
import MyMentors from "../Mentors/MyMentors";
import HomePage from "../HomePage/HomePage";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const profile = useSelector((store) => store.profileCheck);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          {
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              {profile ? <Redirect to="/profile" /> : <UserPage />}
            </ProtectedRoute>
          }

          <ProtectedRoute exact path="/home">
            <HomePage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/profile">
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/resources">
            <Resources />
          </ProtectedRoute>

          <ProtectedRoute exact path="/admin">
            <AdminPage />
          </ProtectedRoute>
          <ProtectedRoute exact path="/admin/genders">
            <GendersList />
          </ProtectedRoute>
          <ProtectedRoute exact path="/admin/schools">
            <SchoolsList />
          </ProtectedRoute>
          <ProtectedRoute exact path="/admin/interests">
            <InterestsList />
          </ProtectedRoute>

          <ProtectedRoute exact path="/available-mentors">
            <AvailableMentors />
          </ProtectedRoute>

          <ProtectedRoute exact path="/mentor/details/:id">
            <MentorDetails />
          </ProtectedRoute>

          <ProtectedRoute exact path="/my-mentors">
            <MyMentors />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/registration/2">
            {/* {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to='/user' /> */}
            {/* ) : ( */}
            {/* // Otherwise, show the registration page */}
            <RegisterPage2 />
            {/* )} */}
          </Route>

          <Route exact path="/registration/3">
            {/* {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to='/user' />
            ) : ( */}
            {/* // Otherwise, show the registration page */}
            <RegisterPage3 />
            {/* )} */}
          </Route>

          <Route exact path="/registration/4">
            {/* {user.id ? ( */}
            {/* // If the user is already logged in,
              // redirect them to the /user page */}
            {/* <Redirect to='/user' /> */}
            {/* ) : ( */}
            {/* // Otherwise, show the registration page */}
            <RegisterPage4 />
            {/* )} */}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
