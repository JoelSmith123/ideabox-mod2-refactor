1. (DONE)--------------------each idea card will have an id, title, body text, quality, quality buttons, delete button

2. id should be unique, title and body should be free-form strings (data types -- done in Javascript)

3. quality should be: "genius","plausible","swill" (data types -- done in Javascript)

4. quality should default to "swill" (default quality -- done in Javascript)

5. (DONE)--------------------user should see a list of all idea cards, including title, body, quality for each

6. ideas should appear in chronological order (card order -- probably Javascript)

7. (DONE)--------------------user should see two text boxes, one for title, one for idea, and a save button

8. when a user clicks save (event listener needs to be added for "save" button)

9. #8 -> a new idea card should appear (generate new card using Javascript)

10. #8 -> the text fields should be cleared (clear input field values using Javascript)

11. #8 -> the page should not reload (cancel default event or use a generic button instead of a submit button)

12. #8 -> the idea card should persist on reload (Don't know how to do this yet)

13. when user clicks delete (add event listener for delete buttons on cards -- Javascript -- event.target)

14. #13 -> idea card should be removed (remove using js)

15. #13 -> the page should not reload (not sure why this applies here, but probably cancel default event)

16. #13 -> the idea should be removed from local storage, not appear on reload (Don't know how to do this yet)

17. when user clicks on upvote button, user quality should go up one notch, stopping at "genius" (event listener and for loop -- Javascript)

18. when user clicks on downvote button, user quality should go down one notch, stopping at "swill" (event listener and for loop -- Javascript)

19. when user clicks on title or body of an idea, that text should become editable text field, value set at existing content (event listener and toggle content editable -- Javascript)

20. when user clicks outside that text field, the changes should be saved (event listener and set input value as content value and toggle content editable -- Javascript)

21. when user presses enter, the changes should be saved (event listener and set input value as content value and toggle content editable -- Javascript)

22. if the user reloads the page, the changes should persist. (Don't know how to do this yet.)

23. (DONE)--------------------there should be a search field at the top of the idea list

24. when user types in search box, cards should be hidden unless the title or body contains matching text (the page should not reload) (event listener for typing in search box, find matching text in title or body (not sure how to do), toggle hide for cards that don't match -- Javascript)

25. clearing the search box should restore all ideas to the list (event listener, toggle to unhide any hidden cards -- Javascript)

26. (DONE)--------------------link in text types (html and css)

27. (DONE)--------------------set header background to #E5F3F2

28. (DONE)--------------------set "ideabox" heading colors to #00A79D and #6D6E71, and font to Roboto

29. set input placeholder text to Open Sans

30. (DONE)--------------------set save button background to #00A79D and text color to #FFFFFF

31. (DONE)--------------------set save button hover state background to #045E55 and text color to #FFFFFF

32. set card title text to Roboto Slab Bold 700 and #6D6E71

33. set card body text to Open Sans and #939598

34. set "quality" to Roboto, set quality type value to Open Sans, and color to #6D6E71

35. set card border-bottom to appropriate size and #D1D3D4

36. set hover state for delete buttons

37. set hover state for upvote buttons

38. set hover state for downvote buttons

Start stretch goals later.....
