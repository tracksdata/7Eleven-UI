console.log('--- execution context');

/*

 Functions can be created in two  memory levels (stack memory)
 note: all objects goes(store) to heap memory
     all functions inckuding local variables(primitives) store in stack

     Note: Context means a memory block

    1. Context Creation phase
    2. Context Execution Phase

   1. Context Creation phase
   ----------------------------------
      -> all the variable created with 'var' key word will be 
        lifted up to the top of the context with a defult value 'undefined'
*/

// f = undefined
f(); // 1st function
function f(){
    console.log('First function');
    
}
f(); // 2nd function
function f(){
    console.log('Second function');
}

//-------------------------------------

//2. Context Execution Phase



