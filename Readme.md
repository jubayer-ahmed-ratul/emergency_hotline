Ans 1 :
getElementById: Selects a particular element by its id name
getElementsByClassName: Selects all elements with same class nama 
querySelector: it Selects the first element of a selector we called
querySelectorAll: it Selects all elements that match a CSS selector


Ans 2:

I will create the element using document.createElement().

Then set its content or attributes (like:  innerText, innerHtml ext)

I will Insert it into the DOM using methods like appendChild()


Ans 3:

I think of Event Bubbling like this: when something happens on a child element, the event kinda “bubbles up” to its parents in the DOM. For example, if I click a button inside a div, that click first happens on the button itself, then it goes to the div, then the body, and so on, all the way up to the html element — unless I stop it.

How I see it work:

I do something on an element, like click it — the event triggers on that element first.

Then it travels upward to its parent, then grandparent, and keeps going until the top.

If I don’t want it to bubble, I can stop it with event.stopPropagation().

Most events bubble by default. I find it really useful when I want to use event delegation, where a parent element handles events for many children.


Ans 4:

I think of Event Delegation like this: instead of adding event listeners to every single child element, I just add one listener to their parent. Then, when an event happens, I check which child triggered it.

It works because of event bubbling — events bubble up from children to parents. So I can catch clicks, changes, or other events at the parent level and handle them for all children.

I find it useful because:

I don’t have to attach tons of listeners — it’s way more efficient.

It helps me handle dynamically added elements that weren’t on the page when I first loaded it.

My code stays cleaner and easier to manage.

Basically, I just set a listener on the parent, and it handles everything that happens inside it. It’s like standing at the door and watching everyone come in, instead of chasing each person individually.


ans: 5

preventDefault() – I use this when I want to stop the browser’s default action for an event. For example, if I click a link, the browser normally navigates to a new page. If I call preventDefault(), I stop that navigation but the event still bubbles up.

stopPropagation() – I use this when I want to stop the event from bubbling (or capturing) up or down the DOM. It doesn’t stop the default action; it just prevents parent elements from hearing about the event.