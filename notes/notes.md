
Good components

- Have a single responsibility

- Have limited state

- Have limited and clear props


React props can be thought of like an API. Any good API should be clear and easy to understand and should represent the major functionality of the component.


- Decomposing big components causes you to have a lot of smaller components, but who cares? Those smaller components will have much easier unit tests and the larger component will be much more flexible across various contexts. It will also be easier in the future if someone decides that one part of the larger component needs to be changed or removed. The changes are scoped to a smaller section of the larger component. This is similar to breaking your code up into smaller sub-functions (see Clean Code)



- Try to extract logic and functionality out into seperate utility files
- A good view-level (dumb) component should be mostly concerned


- by spreading the rest of props onto an element, you can accomidate things like props you didn't think of (like 'data-automation-hook' for example)
  - be careful when doing this though React will throw warnings if non-standard props get passed to native elements



### Bad Examples
- https://github.com/websdev/domain-ui/blob/master/components/Custom.jsx
- The original package cards (we could use this as an example of decomposition)


### Don'ts

- have too many props (put a max number on this?)
- extract different parts of the rendering tree into different 'render' functions

- hard to optimize arrays/objexts

- props on components are equivalent to function arity
