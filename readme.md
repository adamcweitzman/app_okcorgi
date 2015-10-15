# OkCorgi

**Groups of 2-3**

## Overview

Today we're going to be building a disruptive technology that will make the world a better place - a dating site for dogs. It's called OkCorgi.

## How it Works

OkCorgi functions similarly to Tinder, but with [adorable dog photos](https://www.google.com/search?q=corgi+pictures&espv=2&biw=1260&bih=652&source=lnms&tbm=isch&sa=X&ei=s2iNVYHxJIzooATZ-6qQBA&ved=0CAYQ_AUoAQ#tbm=isch&q=corgnelius+and+stumphrey&imgrc=_) instead of 20-somethings and their questionable motives. 

- When you load up the app, a picture of a dog should show up, along with its name and age (and any other info you think is relevant).
- The user can then "paw left" (to decline) or "paw right" (to like) an individual dog. The "paw left" and "paw right" functions can be implemented clicking on 2 different buttons (meaning the photos don't actually have to be draggable).
- Once the user either "paws left" or "paws right", the next dog's photo and profile info is displayed and you can start over.
- There should be a place on the page to show which dogs a user has already liked. This list should include the dog's name and a small profile picture.

## Technology

OkCorgi is a **web app** powered by a **Node server** and a **Mongo database**. You may choose whether or not you want it to be a **synchronous web app** that relies on page refreshes, or an **asynchronous single page app** that relies on AJAX to get and send data.

## Rules
- You do NOT have to build user auth in if you don't want to - that's part of the bonus. If you choose not to use authentication, this will mean that the site will only work for one user.
    + Subquestion: how will this change your ERD's?
- When someone "paws left" or "paws right", that data should be saved in a Mongo database so the data is persisted.

## Tips
- Think of how you will model your relationships (if you have any) in Mongo. Check out [these articles](http://docs.mongodb.org/manual/applications/data-models-relationships/) and/or [this one](http://blog.markstarkman.com/blog/2011/09/15/mongodb-many-to-many-relationship-data-modeling/) about how to model relationships in Mongo.
- Work on small pieces of functionality at a time, as always. MVP!!
- PSEUDOCODE

## BONUS
- Use AJAX to avoid page reloads as much as possible. Getting data for new dogs, and retrieving lists of "liked" dogs, should happen asynchronously.
- Add authentication using a Node module like [Passport](http://passportjs.org/) or [EveryAuth](https://github.com/bnoguchi/everyauth). If you don't want to store password data yourself, allow users to log in with Twitter or Facebook. Again, think of how this will change your ERDs and how you store data.
- Allow the user to "paginate" their list of "liked" dogs to see 10 at a time every time they click "more dogs". If the user doesn't have 10 more "liked" dogs, than there should be a message saying so.
- Instead of clicking on a button to "paw left" or "paw right", allow the user to drag the dog's photo to left or right of the page to indicate their preference.
