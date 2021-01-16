# Casualist: The fast-casual checklist maker.

Casualist helps you easily and quickly create a dynamic and collaborative checklist. 

Live Version: <https://casualist.vercel.app/>

![Imgur](https://i.imgur.com/tnTWY7f.png)
![Imgur](https://i.imgur.com/7yF0231.png)

## Summary

Casualist helps users easily and quickly create a dynamic and collaborative checklist.  Simply submit a title on the landing page to generate a new list. This list will have a unique URL path that can then be shared with any collaborators. Users can add, delete, and edit items as well as filter the list by status or asssignee. When displaying all items on the list a user can utilize drag and drop to reorganize tasks. No sign-up or login needed. No wasted time.

## API

The API repo for this app is located here: <https://github.com/joedickey/casualist-api>

Available endpoints include:
* /lists
* /lists/:url_path
* /listitems/:list_id
* /items
* /items/:item_id


Supported HTTP methods:
* GET
* POST
* PATCH
* DELETE


## Technology Used

### Front End
* React
* Javascript ES6
* Context API
* react-modal
* react-beautiful-dnd
* JSX
* HTML5
* CSS3

## Testing
* Jest

## Production
* Vercel
