
// METHOD 2 => USING PROMISES -  preferred

const asyncHandler = (requestHandler) => 
{
    return (req , res , next) => 
    {
        Promise.resolve(requestHandler(req , res , next)) 
         .catch((err)=>next(err))
    }
}

export  { asyncHandler }


















// METHOD 1 => USING TRY CATCH

// const asyncHandler = () => {}
// const asyncHandler = (func) =>{ ()=> {} }   // function ke andar function
// const asyncHandler = (func) => async()=>{}


    // const asyncHandler = (fn) => 
    // {
    //     async( req , res , next)=> 
    //     {
    //         try 
    //         {
    //             await fn(req , res , next);
    //         } 
    //         catch (error) 
    //         {
    //             res.status(error.code || 500).json({message : error.message , success : false});
    //             next(error);
    //         }

    //     }
    // }
