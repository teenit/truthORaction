import React, { useEffect, useState } from "react";

const QuestionsWithTimer = () => {
    const [timer,setTimer] = useState(60);
    const activateTimer = () => {
        setInterval((interval) => {
            setTimer((currentTimer)=>{
                if(currentTimer === 0){
                    clearInterval(interval);
                    return 0;
                }
                    return currentTimer - 1;
            })
        }, 1000);

    }
    useEffect(()=>{
        activateTimer();
    },[])
    return(
        <div className="QuestionsWT">
            <div className="Question">
                <h1>How many times did you have a serious injury?</h1>
            </div>
            <div className="Timer">
                <h1>{timer}</h1>
                
            </div>
        </div>

    )
}

export default QuestionsWithTimer;

// import React, { useEffect, useState } from "react";

// const QuestionsWithTimer = () => {
//     const [timer, setTimer] = useState(60);

//     // This function will be triggered to start the timer countdown
//     const activateTimer = () => {
//         const intervalId = setInterval(() => {
//             setTimer((prevTimer) => {
//                 if (prevTimer === 0) {
//                     clearInterval(intervalId);  // Stop the timer when it reaches 0
//                     return 0;
//                 }
//                 return prevTimer - 1;  // Decrease the timer
//             });
//         }, 1000);
//     };

//     useEffect(() => {
//         activateTimer();  // Start the timer once when the component mounts
//     }, []); // Empty dependency array ensures this runs only once when the component mounts

//     return (
//         <div className="QuestionsWT">
//             <div className="Question">
//                 <h1>How many times did you have a serious injury?</h1>
//             </div>
//             <div className="Timer">
//                 <h1>{timer}</h1>  {/* Display the current timer */}
//             </div>
//         </div>
//     );
// };

// export default QuestionsWithTimer;
