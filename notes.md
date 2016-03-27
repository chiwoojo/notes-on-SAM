"Actions are pure functions which accept a dataset and return a dataset. The purpose of a function is to compute the values we want the model to accept. There is nothing else to it. In Redux for instance, "actions" are closer to intent or event. This is a fundamental difference between Redux and SAM because in Redux the reducer creates an unnecessary and unwanted coupling between the model mutations and the logic that translates intents into model property values."

So, compared to Redux, where you have actions that aren't pure functions, Actions in SAM are pure functions. In Redux, Reducers must be pure functions. 

See example 1.

Also it says that actions handle 'context specific logic', such as setting default values if not passed one. And also it is resposible for API calls (doesn't that mean that it isn't a pure function???, in Redux you are basically doing the same thing in Actions).
 
See example 2.

In Redux, as far as my understanding goes

Actions: a function that returns a object (with type of action and data) that the Reducers consumes.

Reducer: pure functions that manipulate the state depending on the type of action provided.

Model: this is the Redux state. It is just one JS object.

The model in SAM contains all the application logic excepting a method on the model 'present'. See example 3. It is like the Redux model that it stores everything in one Object. 

But when you see the example 3, it is suggested that you make additional integrity enforcing rules, unlike Redux. 

Usually, this seems like a good place to check 'data' value against the 'model' value since the function has access to the model via outer scope.

State in SAM does 2 things:
1. decide how the model properties will translate into the State Representation (the view)

2. Process the next-action predicate (??)

"You should also keep in mind that SAM is a reactive pattern so there is never a response that is expected: The view triggers an action, which presents is dataset to the model, which asks the state to create a state representation (i.e. View). The new state representation is just that, a new view of the current state of the model. It is **not** a response to the original view."

I really thought the last sentence there was pretty striking to me. In my head I imagined different permutations of the model returning different types of views. 

so if I had this model 

{
  isFetching: true,
  hasErroredOut: false,
  hasBeenRequested: true,
}

this would return a different view than let's say a state which is

{
  isFetching: false,
  hasErroredOut: false,
  hasBeenRequested: false,
}

So in this way, there might be more views to build... basically, as a front end developer for this method of building, you are building front end components based on different states of the model. Whereas in Redux, you can still do that to some degree... you can render different components based on props value that comes down from the parent. 

But because you have to have 'if' statements in different places, you have business logic in the View (React components). Thus, it is slightly undesirable. This SAM architecture solves that problem by separating that business logic from the components. 








