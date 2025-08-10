## Performance Observations

### Loops
- while > for > for of > foreach/map > reduce
- using Array.length in loop evaluates the length every time, which is slower than storing it in a variable

### Data Structures
- Maps are faster than Objects for key-value pairs