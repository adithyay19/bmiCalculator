import { useEffect, useState } from "react";
import { classifications } from "../Data";

function Output({ bmi } : {bmi : number;}) {

    const [classification, setClassification] = useState("");
  
    useEffect(() => {
        classifications.forEach(c => {
            if(c.lowerLimit >= bmi && c.upperLimit < bmi) {
                setClassification(c.classification);
            }
        });
    }, [bmi]);

    return(
        <div className="output-section">
            <h4>{bmi} kg/m2</h4>
            <h5>{classification}</h5>
        </div>
    );
}

export default Output;