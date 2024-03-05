import MyLearning from "./MyLearning";
import MyTeaching from "./MyTeaching";

const isTeacher = true;
let content;
if(isTeacher){
    content = <MyTeaching/>
} else {
    content = <MyLearning/>
}

function MyCondition(){
    return(
        <div>
            {content}
            {/* short way below with ternary operator */}
            {/* {isTeacher ? <MyTeaching/> : <MyLearning/>} */}
        </div>
    );
}

export default MyCondition;