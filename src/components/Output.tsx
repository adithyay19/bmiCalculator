import { useEffect, useState } from "react";
import { classifications } from "../assets/Data";

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
            {bmi > 0 ? 
                (
                    <span>
                        <h4>BMI: {bmi.toFixed(2)} kg/m2</h4> 
                        <h5>({classification})</h5>
                    </span> 
                ) : 
                (
                    null
                )
            }                       
        </div>
    );
}

export default Output;